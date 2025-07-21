import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiConfig } from './ApiConfig';
import Error from 'next/error';

/**
 * Http client interface
 */
export interface IHttpClient {
  get<T>(endpoint: string): Promise<T>;
  post<T>(endpoint: string, data: any): Promise<T>;
  put<T>(endpoint: string, data: any): Promise<T>;
  delete<T>(endpoint: string): Promise<T>;
}

export class AxiosHttpClient implements IHttpClient {
  private client: AxiosInstance;
  constructor(private config: ApiConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
      headers: config.defaultHeaders,
    });
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        Promise.reject(error);
      }
    );
    this.client.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        throw this.mapAxiosError(error);
      }
    );
  }

  //important: change type Error to globalThis.Error to fix type Error of nextjs
  /**
   * Map Axios error to a global error
   */

  private mapAxiosError(error: AxiosError): globalThis.Error {
    if (error.response) {
      const { status, data } = error.response;
      return new globalThis.Error(
        `HTTP ${status}: ${data as any}?.error?.message || error.message`
      );
    } else if (error.request) {
      return new globalThis.Error('No response received from the server');
    } else {
      return new globalThis.Error(`Request error: ${error.message}`);
    }
  }
  /**
   * Get request
   */
  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await this.client.get<T>(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Get request failed: ${endpoint}`, error);
      throw error;
    }
  }

  /**
   * Post request
   */
  async post<T>(endpoint: string, data?: any): Promise<T> {
    try {
      const response = await this.client.post<T>(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`Post request failed: ${endpoint}`, error);
      throw error;
    }
  }

  /**
   * Put request
   */
  async put<T>(endpoint: string, data?: any): Promise<T> {
    try {
      const response = await this.client.put<T>(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`Put request failed: ${endpoint}`, error);
      throw error;
    }
  }

  /**
   * Delete request
   */
  async delete<T>(endpoint: string): Promise<T> {
    try {
      const response = await this.client.delete<T>(endpoint);
      return response.data;
    } catch (error) {
      console.error(`Delete request failed: ${endpoint}`, error);
      throw error;
    }
  }
}

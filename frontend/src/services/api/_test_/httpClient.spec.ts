// src/services/api/_test_/httpClient.spec.ts
import { AxiosHttpClient } from '../httpClient';
import { ApiConfig } from '../apiConfig';
import { AxiosError } from 'axios';

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    interceptors: { request: { use: jest.fn() }, response: { use: jest.fn() } },
  })),
}));

describe('AxiosHttpClient', () => {
  let client: AxiosHttpClient;

  beforeEach(() => {
    client = new AxiosHttpClient(new ApiConfig());
  });

  it('should perform GET requests', async () => {
    const mockData = { data: { id: 1, name: 'Test' } };
    (client as any).client.get.mockResolvedValue(mockData);

    const result = await client.get('/test');
    expect(result).toEqual(mockData.data);
  });

  it('should throw mapped error on failure', async () => {
    const axiosError = {
      isAxiosError: true,
      message: 'Error',
      response: { status: 500, data: { error: { message: 'Internal Error' } } },
    } as AxiosError;

    (client as any).client.get.mockRejectedValue(axiosError);

    await expect(client.get('/fail')).rejects.toThrow('HTTP 500: Internal Error');
  });
});

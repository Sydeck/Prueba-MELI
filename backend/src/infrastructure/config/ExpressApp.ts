import express from 'express';
import cors from 'cors';
import { ProductController } from '../adapters/inbound/http/ProductController';
import { ErrorHandler } from '../middleware/ErrorHandler';
import { GetProductDetailsUseCase } from '@application/use-cases/GetProductDetailsUseCase';
import { InMemoryProductRepository } from '../adapters/outbound/persistence/InMemoryProductRepository';

/**
 * Express application configuration and dependency injection
 */

export class ExpressApp {
  private readonly app: express.Application;
  private readonly productController: ProductController;

  constructor() {
    this.app = express();

    const products = new InMemoryProductRepository();
    const getProductDetailsUseCase = new GetProductDetailsUseCase(products);
    this.productController = new ProductController(getProductDetailsUseCase);

    this.setUpMiddleware();
    this.setUpRoutes();
    this.setUpErrorHandler();
  }

  private setUpMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }
  private setUpRoutes(): void {
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'Mercado Libre challenge',
      });
    });

    this.app.get('/api/v1/products/:id', this.productController.getProductDetails);
  }
  private setUpErrorHandler() {
    this.app.use(ErrorHandler.handle);
  }

  public getApp() {
    return this.app;
  }
}

import express, { Application } from 'express';
import cors from 'cors';
import { ProductController } from '../adapters/inbound/http/ProductController';
import { ErrorHandler } from '../middleware/ErrorHandler';
import { GetProductDetailsUseCase } from '@application/use-cases/GetProductDetailsUseCase';
import { InMemoryProductRepository } from '../adapters/outbound/persistence/InMemoryProductRepository';

export class ExpressApp {
  public readonly app: Application; // <- Ahora pública
  private readonly productController: ProductController;

  constructor(useCase?: GetProductDetailsUseCase) {
    this.app = express();

    // Inyección opcional para testing
    const getProductDetailsUseCase =
      useCase ?? new GetProductDetailsUseCase(new InMemoryProductRepository());

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

  private setUpErrorHandler(): void {
    this.app.use(ErrorHandler.handle);
  }

  listen(port: number): void {
    this.app.listen(port, () => console.log(`Server running on port ${port}`));
  }

  public getApp() {
    return this.app;
  }
}

import { Request, Response, NextFunction } from 'express';
import { GetProductDetailsUseCase } from '@application/use-cases/GetProductDetailsUseCase';
import { GetProductDetailsRequest } from '@application/dto/ProductDetailsDto';

/**
 * GET /api/v1/products/:id
 */

export class ProductController {
  constructor(private readonly getProductDetailsUseCase: GetProductDetailsUseCase) {}

  /**
   * Get product details
   */
  getProductDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      /**
       * Validate product id fall-fast
       */
      if (!id || id.trim().length === 0) {
        res.status(400).json({
          error: {
            code: 'MISSING_PRODUCT_ID',
            message: 'Product ID is required',
            timestamp: new Date().toISOString(),
          },
        });
        return;
      }
      /**
       * Create request object
       */
      const request: GetProductDetailsRequest = { productId: id };

      /**
       * Execute use case
       */
      const response = await this.getProductDetailsUseCase.execute(request);

      /**
       * Response with product details
       */
      res.status(200).json({
        data: response,
        meta: {
          timestamp: new Date().toISOString(),
          version: '1.0.0',
        },
      });
    } catch (error) {
      next(error);
    }
  };
}

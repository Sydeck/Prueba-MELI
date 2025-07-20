import { ProductRepository } from '@application/ports/outbound/ProductRepository';
import { GetProductDetailsPort } from '@application/ports/inbound/GetProductDetailsPort';
import {
  ProductDetailsDto,
  GetProductDetailsRequest,
  GetProductDetailsResponse,
} from '@application/dto/ProductDetailsDto';
import { Product } from '@domain/entities/Product';
import { ProductId } from '@domain/value-objects/ProductId';
import { ValidationException } from '@domain/exceptions';

/**
 * Use case for getting product details
 * Business logic: Get product details from repository
 */

export class GetProductDetailsUseCase implements GetProductDetailsPort {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(request: GetProductDetailsRequest): Promise<GetProductDetailsResponse> {
    try {
      /**
       * Validate product id
       */
      const productId = new ProductId(request.productId);
      /**
       * Get product from repository
       */
      const product = await this.productRepository.findById(productId);
      if (!product) {
        throw new ValidationException('Product not found', 'PRODUCT_NOT_FOUND', 404);
      }
      /**
       * Map product to DTO
       */
      return {
        success: true,
        data: this.mapToDto(product),
      };
    } catch (error) {
      if (error instanceof ValidationException) {
        throw error;
      }
      throw new ValidationException('Internal server error', 'INTERNAL_SERVER_ERROR', 500);
    }
  }

  private mapToDto(product: Product): ProductDetailsDto {
    return {
      id: product.id.value,
      title: product.title.value,
      description: product.description.value,
      price: {
        amount: product.price.amount,
        currency: product.price.currency,
        discount: product.price.discount,
        formatted: product.price.formatForDisplay(),
      },
      images: product.images.map(image => image.url),
      seller: {
        id: product.seller.id.value,
        name: product.seller.name.value,
        status: product.seller.status.value,
        reputation: product.seller.reputation.score,
        metrics: {
          totalProducts: product.seller.metrics.totalProducts,
          totalSales: product.seller.metrics.totalSales,
        },
      },
      shipping: {
        cost: product.shipping.cost.amount,
        isFree: product.shipping.isFree,
        estimatedDeliveryDays: product.shipping.estimatedDeliveryDays,
      },
      availability: {
        stock: product.availability.stock,
        available: product.availability.isAvailable,
      },
    };
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InMemoryProductRepository_1 = require("@infrastructure/adapters/outbound/persistence/InMemoryProductRepository");
const Product_1 = require("@domain/entities/Product");
const ProductId_1 = require("@domain/value-objects/ProductId");
const ProductTitle_1 = require("@domain/value-objects/ProductTitle");
const ProductDescription_1 = require("@domain/value-objects/ProductDescription");
const ProductImage_1 = require("@domain/value-objects/ProductImage");
const Money_1 = require("@domain/value-objects/Money");
const Seller_1 = require("@domain/entities/Seller");
const SellerId_1 = require("@domain/value-objects/SellerId");
const SellerStatus_1 = require("@domain/value-objects/SellerStatus");
const SellerName_1 = require("@domain/value-objects/SellerName");
const SellerMetrics_1 = require("@domain/value-objects/SellerMetrics");
const SellerReputation_1 = require("@domain/value-objects/SellerReputation");
const ShippingInfo_1 = require("@domain/value-objects/ShippingInfo");
const Availability_1 = require("@domain/value-objects/Availability");
const ProductCondition_1 = require("@domain/value-objects/ProductCondition");
const ProductRating_1 = require("@domain/value-objects/ProductRating");
const ProductSpecs_1 = require("@domain/value-objects/ProductSpecs");
const ProductVariant_1 = require("@domain/value-objects/ProductVariant");
describe('InMemoryProductRepository', () => {
    let repository;
    beforeEach(() => {
        repository = new InMemoryProductRepository_1.InMemoryProductRepository();
    });
    it('should return a product when it exists', async () => {
        const productId = new ProductId_1.ProductId('MLA123456789');
        const product = await repository.findById(productId);
        expect(product).not.toBeNull();
        expect(product?.id.value).toBe('MLA123456789');
    });
    it('should return null when the product does not exist', async () => {
        const productId = new ProductId_1.ProductId('MLA000000000');
        const product = await repository.findById(productId);
        expect(product).toBeNull();
    });
    it('should save a new product and retrieve it', async () => {
        const newProduct = new Product_1.Product(new ProductId_1.ProductId('MLA111111111'), new ProductTitle_1.ProductTitle('Test Product'), new ProductDescription_1.ProductDescription('Description for Test Product'), new Money_1.Money(199.99, 'USD', 0), [new ProductImage_1.ProductImage('https://example.com/test.jpg')], new Seller_1.Seller(new SellerId_1.SellerId('55555'), new SellerName_1.SellerName('Test Seller'), new SellerStatus_1.SellerStatus('BASICO'), new SellerMetrics_1.SellerMetrics(10, 50), new SellerReputation_1.SellerReputation(4.2), 'https://example.com/logo.jpg'), new ShippingInfo_1.ShippingInfo(new Money_1.Money(10, 'USD', 0), false, '5 días'), new Availability_1.Availability(10, true), new ProductCondition_1.ProductCondition('Nuevo'), new ProductRating_1.ProductRating(4.3), 10, ['Fact 1', 'Fact 2'], [new ProductSpecs_1.ProductSpecs({ label: 'Spec', value: 'Value' })], [
            new ProductVariant_1.ProductVariant({
                id: 'VAR500',
                color: 'Rojo',
                storage: '128GB',
                price: 199.99,
                images: [new ProductImage_1.ProductImage('https://example.com/test.jpg')],
                stock: 5,
            }),
        ]);
        await repository.save(newProduct);
        const fetchedProduct = await repository.findById(newProduct.id);
        expect(fetchedProduct).not.toBeNull();
        expect(fetchedProduct?.title.value).toBe('Test Product');
    });
});
//# sourceMappingURL=InMemoryProductRepository.spec.js.map
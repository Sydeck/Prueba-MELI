"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("@domain/entities/Product");
const ProductId_1 = require("@domain/value-objects/ProductId");
const ProductTitle_1 = require("@domain/value-objects/ProductTitle");
const ProductDescription_1 = require("@domain/value-objects/ProductDescription");
const Money_1 = require("@domain/value-objects/Money");
const ProductImage_1 = require("@domain/value-objects/ProductImage");
const Seller_1 = require("@domain/entities/Seller");
const SellerId_1 = require("@domain/value-objects/SellerId");
const SellerName_1 = require("@domain/value-objects/SellerName");
const SellerStatus_1 = require("@domain/value-objects/SellerStatus");
const SellerMetrics_1 = require("@domain/value-objects/SellerMetrics");
const SellerReputation_1 = require("@domain/value-objects/SellerReputation");
const ShippingInfo_1 = require("@domain/value-objects/ShippingInfo");
const Availability_1 = require("@domain/value-objects/Availability");
const ProductCondition_1 = require("@domain/value-objects/ProductCondition");
const ProductRating_1 = require("@domain/value-objects/ProductRating");
const ProductSpecs_1 = require("@domain/value-objects/ProductSpecs");
const ProductVariant_1 = require("@domain/value-objects/ProductVariant");
const ValidationException_1 = require("@domain/exceptions/ValidationException");
describe('Product entity', () => {
    const id = new ProductId_1.ProductId('MLA123456789');
    const title = new ProductTitle_1.ProductTitle('Test Product');
    const description = new ProductDescription_1.ProductDescription('This is a test product description.');
    const price = new Money_1.Money(100, 'USD', 0);
    const images = [new ProductImage_1.ProductImage('https://example.com/image.webp')];
    const seller = new Seller_1.Seller(new SellerId_1.SellerId('123'), new SellerName_1.SellerName('Official Store'), new SellerStatus_1.SellerStatus('TIENDA_OFICIAL'), new SellerMetrics_1.SellerMetrics(100, 5000), new SellerReputation_1.SellerReputation(4.8), 'https://example.com/logo.png');
    const shipping = new ShippingInfo_1.ShippingInfo(new Money_1.Money(10, 'USD', 0), false, '2-4 days');
    const availability = new Availability_1.Availability(10, true);
    const condition = new ProductCondition_1.ProductCondition('Nuevo');
    const rating = new ProductRating_1.ProductRating(4.5);
    const facts = ['Fact 1', 'Fact 2'];
    const specs = [new ProductSpecs_1.ProductSpecs({ label: 'RAM', value: '8 GB' })];
    const variants = [
        new ProductVariant_1.ProductVariant({
            id: 'VAR1',
            color: 'Black',
            storage: '256GB',
            price: 100,
            images,
            stock: 10,
        }),
    ];
    it('should create a valid product', () => {
        const product = new Product_1.Product(id, title, description, price, images, seller, shipping, availability, condition, rating, 100, facts, specs, variants);
        expect(product.title.value).toBe('Test Product');
        expect(product.description.value).toContain('test product');
        expect(product.price.amount).toBe(100);
        expect(product.images.length).toBe(1);
        expect(product.seller.name.value).toBe('Official Store');
    });
    it('should calculate total cost including shipping', () => {
        const product = new Product_1.Product(id, title, description, price, images, seller, shipping, availability, condition, rating, 100, facts, specs, variants);
        const total = product.calculateTotalCost(1);
        expect(total.amount).toBe(110);
    });
    it('should throw if not enough stock', () => {
        const lowStock = new Availability_1.Availability(1, true);
        const product = new Product_1.Product(id, title, description, price, images, seller, shipping, lowStock, condition, rating, 100, facts, specs, variants);
        expect(() => product.calculateTotalCost(2)).toThrow(ValidationException_1.ValidationException);
    });
});
//# sourceMappingURL=Product.spec.js.map
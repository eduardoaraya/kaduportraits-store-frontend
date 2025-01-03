import { ICatalogProduct } from "@kaduportraits-store/components/features/catalog/catalog-product/catalog-product";

export const products: ICatalogProduct[] = Array
    .from({length: 7}).map((_, index) => ({
        actions: [],
        coverImages: [],
        productAlt: `Product ${index}`,
        productDescription: `Product ${index}`,
        productId: (Math.random() * 100)?.toFixed(0),
        productDiscountPorcet: 0,
        productNumberRating: 0,
        productPrice: 100,
        productShortDescription: `Product ${index}`,
        productTitle: `Product ${index}`
}));
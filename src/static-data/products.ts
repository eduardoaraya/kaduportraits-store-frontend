import { ICatalogProduct } from "@kaduportraits-store/components/features/catalog/catalog-product/catalog-product";

export const products: ICatalogProduct[] = Array
    .from({length: 4}).map((_, index) => ({
        actions: [],
        coverImages: [
            {
                src: "/images/product-img.jpg",
                height: 100,
                width: 100
            }
        ],
        productAlt: `Perfume Masculino Piazza ${index}`,
        productDescription: `Product ${index}`,
        productId: (Math.random() * 100)?.toFixed(0),
        productDiscountPorcet: 0,
        productNumberRating: 0,
        productPrice: (Math.random() * 100)?.toFixed(2),
        productShortDescription: `Ref. Azzaro Most Wanted Parfum - Azzaro (Nº39) ${index}`,
        productTitle: `Perfume Masculino Piazza ${index}`
}));
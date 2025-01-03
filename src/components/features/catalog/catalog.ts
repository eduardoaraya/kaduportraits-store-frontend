import { ICatalogProduct } from "./catalog-product/catalog-product";

export interface ICatalog {
    products: ICatalogProduct[]
    type: string;
}
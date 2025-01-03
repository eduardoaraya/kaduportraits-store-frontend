export interface ICatalogProduct {
    productId: string;
    productTitle: string;
    productNumberRating: number;
    productPrice: number;
    productDiscountPorcet: number;
    productShortDescription: string;
    productAlt: string;
    productDescription: string;
    coverImages: {
        width: number;
        height: number;
        src: string;
    }[];
    actions: {
        actionType: string;
        actionClassToken: string;
        actionHtmlElement: string;
        actionTrigger: {
            type: string;
            url: string;
            target: string;
        }
    }[],
}
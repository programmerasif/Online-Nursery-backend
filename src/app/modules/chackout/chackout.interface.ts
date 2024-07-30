export interface IChackout {
    id?:string,
    productID:string;
    availableQuantity:string,
    image: string; 
    title:string;
    price: string; 
    category:string;
    description:string,
    quantity:string,
    rating:string,
    isDeleted:boolean
}
export interface IIncrementCart {
    id?:string,
    status:string
}
export type TproductArr ={
  card:string,
  quantity:string
}

export interface UserInfo {
    name: string;
    phone: string;
    address: string;
    payType: string;
    email: string;
    isDeleted:boolean,
    buyingData:TproductArr[]
  }
  
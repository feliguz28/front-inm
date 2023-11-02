export interface Address {
    id: number;
    identificationHome: number;
    letterBlock: string;
    letterVia: string;
    numberBlock: number;
    numberVia: number;
    numberHome: number;
    prefix: string;
    suffix: string;
    viaId: number;
  }
  
  export interface Detail {
    id: number;
    bathRoom: number;
    measures: number;
    parking: number;
    room: number;
    stratum: number;
  }

  export interface Image {
    id: string;
    homeId: string;
    url: string;
    principal: boolean;
    file: File | null;
  }
  
  export interface Home {
    id: string;
    categoryId: number;
    description: string;
    discount: number;
    homeStateId: number;
    homeTypeId: number;
    name:  string;
    price: number;
    status: boolean;
    zoneId: number;
    address: Address;
    detail: Detail;
    favorite: boolean;
    images: Image[];
    district:string;
    zone:string;
  }

  export interface AddressCreate {
    identificationHome: string;
    letterBlock: string;
    letterVia: string;
    numberBlock: number;
    numberHome: number;
    numberVia: number;
    prefix: string;
    suffix: string;
    viaId: number;
  }
  
  export interface DetailCreate {
    bathRoom: number;
    measures: number;
    parking: number;
    room: number;
    stratum: number;
  }

  export interface ImageCreate {
    homeID: string;
    principalImage: string;
    images: File[];
  }
  
  export interface HomeCreate {
    categoryId: number;
    description: string;
    discount: number;
    homeStateId: number;
    homeTypeId: number;
    name: string;
    price: number;
    status: boolean;
    zoneId: number;
    address: AddressCreate;
    detail: DetailCreate;
    favorite: boolean;
  }

  export interface Adviser {
    Id : string;
    Name: string;
    Surnames:string;
    CellPhone:string;
    PathPhoto:string;
    Email:string;
  }

  export interface PaginateHome{
    items: Home[];
    totalCount: number;
  }
  
  export interface ApiResponse {
    message: string;
  }

export interface Address {
    id: number;
    homeTypeAddressId: string;
    identificationHome: number;
    letterBlock: string;
    letterVia: string;
    numberBlock: number;
    numberVia: number;
    prefix: string;
    suffix: string;
    viaId: number;
  }
  
  export interface Details {
    id: number;
    bathRoom: number;
    measures: number;
    parking: number;
    room: number;
    stratum: number;
  }
  
  export interface Home {
    id: number;
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
    details: Details;
  }

  export interface AddressCreate {
    homeTypeAddressId: string;
    identificationHome: number;
    letterBlock: string;
    letterVia: string;
    numberBlock: number;
    numberVia: number;
    prefix: string;
    suffix: string;
    viaId: number;
  }
  
  export interface DetailsCreate {
    bathRoom: number;
    measures: number;
    parking: number;
    room: number;
    stratum: number;
  }
  
  export interface HomeCreate {
    categoryId: number;
    description: string;
    discount: number;
    homeStateId: number;
    homeTypeId: number;
    price: number;
    status: boolean;
    zoneId: number;
    address: AddressCreate;
    details: DetailsCreate;
  }

  export interface PaginateHome {
    items: Home[];
    totalCount: number;
  }
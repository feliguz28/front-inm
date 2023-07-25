export class PagerRequestFilter{
pageNumber?:number;
registerPage?:number;
filter?:string | null = null;
ZoneIdString?:string | null;
HomeTypeIdString?:string | null = null;
HomeStateIdString?:string | null = null;
HomeCategoryIdString?:string | null = null; 
FromPrice?:number | null = null;
ToPrice?:number| null = null;
MinRoom?:number | null = null;
MinBathRoom?:number | null = null;
MinParking?:number | null = null;
FromMeasure?:number | null = null;
ToMeasure?:number | null = null;
Stratum?:number | null = null;
}
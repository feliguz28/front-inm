import { Home } from "./home.interface";

export interface PagerRequest{
    pageNumber: number,
    registerPage: number,
    filter: string
}
export interface PaginateHome{
	items: Home[];
	totalCount: number;
}
export interface PaginatedData<T> {
    count: number;
    current_page: number;
    offset:number
    next: string | null;
    previous: string | null;
    results: T[];


}
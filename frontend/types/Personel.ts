import {PersonelRow} from "./PersonelRow";

export type Personel = {
    id?: number,
    name: string,
    surname: string,
    email: string,
    phone:string,
    address: string,
    department: string,
    position: string,
    salary: number,
    start_date: string,
    end_date: string,
    image: string,
    rows: PersonelRow[],
}
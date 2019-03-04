import { Params } from "./params";

export interface JSONQLBody {
    method: string;
    params?: Params[] | any;
    fields: string[];
}
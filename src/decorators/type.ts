import "reflect-metadata";
import { typeStore } from "../store";


export function Type(target: Function) {
    typeStore.setJsonQLType(target.name);
}

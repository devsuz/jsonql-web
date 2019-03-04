import "reflect-metadata";

import { FieldInnerConfig } from "../types/field-inner-config";
import { typeStore } from "../store";

const Store = require('data-store');

export function Field(options?: Object): PropertyDecorator {
    return (targetInstance: Object, fieldName: string) => {
        const finalConfig: FieldInnerConfig = {
            property: fieldName,
            type: Reflect.getMetadata("design:type", targetInstance, fieldName).name,
            ...options,
        };

        typeStore.setField(finalConfig, targetInstance.constructor.name);
    };
}
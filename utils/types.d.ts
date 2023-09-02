import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "products";
    readonly columns: readonly [
      {
        readonly name: "name";
        readonly type: "string";
      },
      {
        readonly name: "description";
        readonly type: "text";
      },
      {
        readonly name: "price";
        readonly type: "float";
      },
      {
        readonly name: "stock";
        readonly type: "int";
      },
      {
        readonly name: "thumbnail";
        readonly type: "string";
      },
      {
        readonly name: "media";
        readonly type: "multiple";
      }
    ];
  }
];
export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;
export type Products = InferredTypes["products"];
export type ProductsRecord = Products & XataRecord;
export type DatabaseSchema = {
  products: ProductsRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};

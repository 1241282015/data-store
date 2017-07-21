export declare function init(dbUrl: string): void;
export declare function data_store(schema?: any, properties?: any, sql?: any): Promise<void>;
export declare function data_compare(dbCompare?: any, dbBase?: any, compareSql?: any): Promise<void>;

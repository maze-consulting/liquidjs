export declare function isString(value: any): boolean;
export declare function isFunction(value: any): boolean;
export declare function promisify(fn: any): (...args: any[]) => Promise<{}>;
export declare function stringify(value: any): string;
export declare function create<T1 extends object, T2 extends T1 = T1>(proto: T1): T2;
export declare function isNil(value: any): boolean;
export declare function isArray(value: any): boolean;
export declare function isError(value: any): boolean;
export declare function forOwn(object: any, iteratee: ((val: any, key: string, obj: object) => boolean | void)): any;
export declare function assign(obj: object, ...srcs: object[]): object;
export declare function last(arr: any[]): any;
export declare function uniq(arr: any[]): any[];
export declare function isObject(value: any): boolean;
export declare function range(start: number, stop?: number, step?: number): any[];
export declare function padStart(str: any, length: number, ch?: string): any;

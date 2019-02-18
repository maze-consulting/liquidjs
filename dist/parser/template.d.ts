export declare const fs: {
    stat: (filepath: string) => Promise<object>;
    readFile: (filepath: string, encoding: string) => Promise<string>;
};
export declare function resolve(filepath: any, root: any, options: any): Promise<any>;
export declare function read(filepath: any): Promise<string>;

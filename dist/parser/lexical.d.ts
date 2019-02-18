export declare const quoted: RegExp;
export declare const quoteBalanced: RegExp;
export declare const integer: RegExp;
export declare const number: RegExp;
export declare const bool: RegExp;
export declare const identifier: RegExp;
export declare const subscript: RegExp;
export declare const literal: RegExp;
export declare const variable: RegExp;
export declare const rangeLimit: RegExp;
export declare const range: RegExp;
export declare const rangeCapture: RegExp;
export declare const value: RegExp;
export declare const hash: RegExp;
export declare const hashCapture: RegExp;
export declare const tagLine: RegExp;
export declare const literalLine: RegExp;
export declare const variableLine: RegExp;
export declare const numberLine: RegExp;
export declare const boolLine: RegExp;
export declare const quotedLine: RegExp;
export declare const rangeLine: RegExp;
export declare const integerLine: RegExp;
export declare const valueDeclaration: RegExp;
export declare const valueList: RegExp;
export declare const filter: RegExp;
export declare const filterCapture: RegExp;
export declare const filterLine: RegExp;
export declare const operators: RegExp[];
export declare function isInteger(str: any): boolean;
export declare function isLiteral(str: any): boolean;
export declare function isRange(str: any): boolean;
export declare function isVariable(str: any): boolean;
export declare function matchValue(str: any): RegExpExecArray;
export declare function parseLiteral(str: any): any;

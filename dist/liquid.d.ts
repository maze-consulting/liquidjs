import Scope from './scope/scope';
import * as Types from './types';
import ITemplate from './template/itemplate';
import ITagImplOptions from './template/tag/itag-impl-options';
import { isTruthy, isFalsy, evalExp, evalValue } from './render/syntax';
import { LiquidOptions } from './liquid-options';
export default class Liquid {
    options: LiquidOptions;
    private cache;
    private parser;
    private renderer;
    private tokenizer;
    constructor(options?: LiquidOptions);
    parse(html: string, filepath?: string): any[];
    render(tpl: Array<ITemplate>, ctx?: object, opts?: LiquidOptions): Promise<string>;
    parseAndRender(html: string, ctx?: object, opts?: LiquidOptions): Promise<string>;
    getTemplate(file: any, root: any): Promise<any>;
    renderFile(file: any, ctx?: object, opts?: LiquidOptions): Promise<string>;
    respectCache(key: any, getter: any): Promise<any>;
    evalValue(str: string, scope: Scope): any;
    registerFilter(name: any, filter: any): void;
    registerTag(name: string, tag: ITagImplOptions): void;
    plugin(plugin: any): any;
    express(opts?: LiquidOptions): (filePath: any, ctx: any, cb: any) => void;
    static default: typeof Liquid;
    static isTruthy: typeof isTruthy;
    static isFalsy: typeof isFalsy;
    static evalExp: typeof evalExp;
    static evalValue: typeof evalValue;
    static Types: typeof Types;
}

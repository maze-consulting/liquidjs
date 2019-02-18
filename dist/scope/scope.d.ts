import { LiquidOptions } from '../liquid-options';
import BlockMode from './block-mode';
export default class Scope {
    opts: LiquidOptions;
    contexts: Array<object>;
    blocks: object;
    blockMode: BlockMode;
    constructor(ctx?: object, opts?: LiquidOptions);
    getAll(): object;
    get(path: string): any;
    set(path: string, v: any): void;
    unshift(ctx: object): any;
    push(ctx: object): any;
    pop(ctx?: object): object;
    findContextFor(key: string, filter?: ((conttext: object) => boolean)): object;
    readProperty(obj: any, key: any): any;
    propertyAccessSeq(str: any): any[];
}

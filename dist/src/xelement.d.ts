import { ElementCompact } from 'xml-js';
/** 提供以 Xml 概念操作 JSON 結構。 */
export declare class XElement implements Iterable<XElement> {
    static parse(xml: string): XElement;
    /** 原始資料。 */
    readonly data: ElementCompact | ElementCompact[] | any;
    /**
     * 建立物件從 xml 字串或是 ElementCompact。
     */
    constructor(content?: string | ElementCompact | ElementCompact[]);
    /**
     * 讀取或設定文字內容。
     */
    get text(): string;
    set text(val: string);
    /** 讀取或寫入 CDATASection 資料。 */
    get cdata(): string | undefined;
    set cdata(val: string | undefined);
    /**
     * 取得屬性文字內容。
     */
    getAttr(name: string): string;
    /** 設定屬性文字內容。 */
    setAttr(name: string, val: string): this;
    /** 取得子節點物件。 */
    child(...name: string[]): XElement;
    /**
     * 取得子節點陣列。
     *
     * @param {string} name 子節點陣列名稱。
     * @param {boolean} [autoConvert=false] 是否自動轉換為陣列，如果不是會自動轉換為陣列。
     * 當值是 false 時，子節點非陣列會 Throw Error，預設為 true。
     * @returns 子節點陣列。
     * @memberof Jsonx
     */
    children(name: string, autoConvert?: boolean): XElement;
    /** 移除子節點，包含陣列結構。 */
    remove(name: string): void;
    /**
     * 提供寫入未處理的內容。
     *
     * @param {string} name 子節點名稱。
     * @param {(string | XElement | any)} content Xml 字串、Jsonx 物件、一般物件。
     * @memberof Jsonx
     */
    raw(name: string, content: string | XElement | any): void;
    [Symbol.iterator](): Iterator<XElement>;
    /** 在目前的陣列上建立一個新元素。 */
    new(): XElement;
    exists(...name: string[]): boolean;
    /** 轉換成 Xml 字串格式。 */
    toXmlString(rootName?: string): string;
    /** 轉換成簡單 JSON 格式，無法處理數字型別，所有的值都會是字串。*/
    toCompactJson(): string;
    private checkIsArray;
    private checkNotArray;
    private getChild;
}
/** ================== */

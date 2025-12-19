import type { ElementCompact } from "xml-js";
import { toJson, toXml } from "./converter";

/** 提供以 Xml 概念操作 JSON 結構。 */
export class XElement implements Iterable<XElement> {

    public static parse(xml: string) {
        const root = `<__root>${xml}</__root>`
        return new XElement(toJson(root)['__root']);
    }

    /** 原始資料。 */
    public readonly data: ElementCompact | ElementCompact[] | any;

    /**
     * 建立物件從 xml 字串或是 ElementCompact。
     */
    constructor(content: string | ElementCompact | ElementCompact[] = {}) {
        if (typeof(content) === 'string') {
            const root = `<__root>${content}</__root>`
            this.data =  toJson(root)['__root'];
        } else {
            this.data = content;
        }
    }

    /**
     * 讀取或設定文字內容。
     */
    public get text() {
        this.checkNotArray();
        const val = (this.data as ElementCompact)._text;

        return (val ?? null) as any;
    }

    public set text(val: string) {
        this.checkNotArray();
        (this.data as ElementCompact)._text = val;
    }

    /** 讀取或寫入 CDATASection 資料。 */
    public get cdata() {
        this.checkNotArray();
        return (this.data as ElementCompact)._cdata;
    }

    public set cdata(val: string | undefined) {
        this.checkNotArray();
        (this.data as ElementCompact)._cdata = val;
    }

    /**
     * 取得屬性文字內容。
     */
    public getAttr(name: string) {
        this.checkNotArray();

        const { _attributes = {} } = this.data as ElementCompact;
        return _attributes[name] + '';
    }

    /** 設定屬性文字內容。 */
    public setAttr(name: string, val: string) {
        this.checkNotArray();

        const data = this.data as ElementCompact
        let { _attributes } = data;
        if (!_attributes) {
            _attributes = data._attributes = {};
        }
        _attributes[name] = val;
        return this;
    }

    /** 取得子節點物件。 */
    public child(...name: string[]) {
        let parent: ElementCompact = this.data;
        let child: XElement;

        for (const n of name) {
            child = this.getChild(n, parent);
            parent = child.data;
        }

        return child!;
    }

    /**
     * 取得子節點陣列。
     *
     * @param {string} name 子節點陣列名稱。
     * @param {boolean} [autoConvert=false] 是否自動轉換為陣列，如果不是會自動轉換為陣列。
     * 當值是 false 時，子節點非陣列會 Throw Error，預設為 true。
     * @returns 子節點陣列。
     * @memberof Jsonx
     */
    public children(name: string, autoConvert: boolean = true) {
        let children = this.data[name];

        if(children) {
            if (autoConvert) {
                if(!Array.isArray(children)) {
                    children = this.data[name] = [children];
                }
            }

            this.checkIsArray(children);
            return new XElement(children);
        } else {
            this.data[name] = [];
            return new XElement(this.data[name]);
        }
    }

    /** 移除子節點，包含陣列結構。 */
    public remove(name: string) {
        if (!this.exists(name)) { return; }

        delete this.data[name];
    }

    /**
     * 提供寫入未處理的內容。
     *
     * @param {string} name 子節點名稱。
     * @param {(string | XElement | any)} content Xml 字串、Jsonx 物件、一般物件。
     * @memberof Jsonx
     */
    public raw(name: string, content: string | XElement | any) {

        if(typeof(content) === 'string') {
            const r = XElement.parse(content);

            this.data[name] = r.data;
        } else if (content instanceof XElement) {
            this.data[name] = content.data;
        } else {
            this.data[name] = content;
        }
    }

    // 如果不是陣列的話，會包裝成只有一個元素的 Iterator。
    [Symbol.iterator](): Iterator<XElement> {
        if(Array.isArray(this.data)) {
            return Array.from(this.data)
            .map(v => new XElement(v))
            .values()
        } else {
            return [].concat(this.data)
            .map(v => new XElement(v))
            .values();
        }
    }

    /** 在目前的陣列上建立一個新元素。 */
    public new() {
        this.checkIsArray(this.data);

        const newnode = {};
        this.data.push(newnode);
        return new XElement(newnode);
    }

    public exists(...name: string[]) {

        if (!!!this.data) { return false; }

        let parent: ElementCompact = this.data;
        let child: ElementCompact;

        for (const n of name) {
            child = parent[n];

            if (!!!child) { return false; }

            parent = child;
        }

        return !!child!;
    }

    /** 轉換成 Xml 字串格式。 */
    public toXmlString(rootName?: string) {
        return toXml(this.data, rootName);
    }

    // 是否為陣列，不是的話就 Throw Error，沒有傳參數代表判斷物件自身。
    private checkIsArray(elm: any = this.data) {
        if (!Array.isArray(elm)) {
            throw new Error(`只有陣列節點才以進行此操作。`);
        }
    }

    // 必需不是陣列，是的話就 Throw Error，沒有傳參數代表判斷物件自身。
    private checkNotArray(elm: any = this.data) {
        if (Array.isArray(elm)) {
            throw new Error(`陣列不可進行此操作。`);
        }
    }

    private getChild(childName: string, parent: ElementCompact) {
        const child = parent[childName];
        if (child) {
            this.checkNotArray();
            return new XElement(child);
        } else {
            parent[childName] = {};
            return new XElement(parent[childName]);
        }
    }
}

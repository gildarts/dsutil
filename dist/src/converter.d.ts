import type { ElementCompact } from 'xml-js';
export declare function toJson(xmlString: string): ElementCompact;
export declare function toXml(jsonObj: ElementCompact, rootName?: string): string;

import { ElementCompact, js2xml, xml2js } from 'xml-js';

export function toJson(xmlString: string): ElementCompact {
  return xml2js(xmlString, { compact: true });
}

export function toXml(jsonObj: ElementCompact, rootName?: string) {
  if (rootName) {
    const root: any = {};
    root[rootName] = jsonObj;
    return js2xml(root, { compact: true, spaces: 4 });
  } else {
    return js2xml(jsonObj, { compact: true, spaces: 4 });
  }
}

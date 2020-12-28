import { HttpClient } from "./http_client";

const localMap = new Map<string, string>();

export const DSNS = 'https://dsns.ischool.com.tw';

/** 註冊本地端 DSNS */
export function registerLocal(dsns: string, url: string) {
    localMap.set(dsns, url);
}

export async function resolveDSNS(dsns: string) {

    // 如果本地端有註冊就直接回傳。
    if (localMap.has(dsns)) { return localMap.get(dsns); }

    const options = {followRedirect: false};
    const rsp = await HttpClient.get(`${DSNS}/${dsns}`, options);

    if(!!!rsp.header.location) {
        throw new Error(`DSNS Not Found(${dsns}).`);
    }

    return rsp.header.location;
}

// resolveDSNS('dev.sh_d').then(v => {
//     console.log(v);
// });

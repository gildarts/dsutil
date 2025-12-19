export class DSAHttpClient {

  public static async post(url: string, xmlString?: string, timeoutMs: number = 5000) {
    try {
      // 使用 Promise.race 強制 timeout（因為 Bun 的 AbortSignal 在連線失敗時不會生效）
      const fetchPromise = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml'
        },
        body: xmlString
      }).then(r => r.text());

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT')), timeoutMs)
      );

      const xmlStrRsp = await Promise.race([fetchPromise, timeoutPromise]);
      return { body: xmlStrRsp };
    } catch (error: any) {
      if (error.message === 'TIMEOUT') {
        throw new Error(`Request timeout after ${timeoutMs}ms`);
      }
      console.log('fetch 炸了！fetch 炸了！fetch 炸了！fetch 炸了！fetch 炸了！fetch 炸了！fetch 炸了！')
      console.error(error);
      throw error;
    }
  }

  public static async get(url: string, timeoutMs: number = 5000) {
    try {
      // 使用 Promise.race 強制 timeout
      const fetchPromise = fetch(url).then(r => r.text());
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT')), timeoutMs)
      );

      const rsp = await Promise.race([fetchPromise, timeoutPromise]);
      return { body: rsp };
    } catch (error: any) {
      if (error.message === 'TIMEOUT') {
        throw new Error(`Request timeout after ${timeoutMs}ms`);
      }
      throw error;
    }
  }
}

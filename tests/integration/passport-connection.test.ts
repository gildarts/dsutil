import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { AccessPoint, Connection, PassportSecurityToken, BasicSecurityToken } from '../../src';

/**
 * Passport 連線整合測試
 *
 * 測試目標：
 * - 驗證能使用 PassportSecurityToken 連線到 SystemMaintenance contract
 * - 確認 Passport 認證流程正確
 * - 測試 Passport 載入與錯誤處理
 */

/**
 * 載入 DSA Passport 認證檔案
 * @param filePath 可選的檔案路徑，不提供則使用專案根目錄的 passport.xml
 * @returns Passport XML 字串
 */
function loadPassport(filePath?: string): string {
  const passportPath = filePath || join(process.cwd(), 'passport.xml');

  if (!existsSync(passportPath)) {
    throw new Error(
      '找不到 passport.xml 檔案！\n' +
      '請確保 passport.xml 存在並填入正確的認證資料。'
    );
  }

  return readFileSync(passportPath, 'utf-8').trim();
}

describe('Passport - 載入', () => {

  it('應該能讀取 passport.xml', () => {
    const passportXml = loadPassport();
    expect(passportXml).toBeTruthy();
    expect(passportXml).toContain('<DSAPassport');
    expect(passportXml).toContain('</DSAPassport>');
  });

  it('應該包含必要的 Passport 資訊', () => {
    const passportXml = loadPassport();
    expect(passportXml).toContain('<PassportID>');
    expect(passportXml).toContain('<Subject>');
    expect(passportXml).toContain('<ds:Signature');
  });

  it('找不到 passport.xml 應拋出錯誤', () => {
    expect(() => loadPassport('/non/existent/path.xml'))
      .toThrow('找不到 passport.xml');
  });

});

describe('PassportSecurityToken', () => {

  it('應該能從 passport.xml 建立', () => {
    const passportXml = loadPassport();
    const token = new PassportSecurityToken(passportXml);

    expect(token).toBeDefined();
    expect(token.type).toBe('Passport');
  });

  it('應該包含完整的 Passport 資料結構', () => {
    const passportXml = loadPassport();
    const token = new PassportSecurityToken(passportXml);

    // 驗證 XElement 結構
    expect(token.data.exists('DSAPassport')).toBe(true);
    expect(token.data.child('DSAPassport').exists('Content')).toBe(true);
  });

});

describe('Passport Connection', () => {

  it('應該能使用 Passport 連線到 SystemMaintenance', async () => {
    const dsns = process.env.TEST_DSNS!;
    const contract = 'SystemMaintenance';

    // 載入 Passport
    const passportXml = loadPassport();
    const securityToken = new PassportSecurityToken(passportXml);

    // 建立連線
    const accessPoint = await AccessPoint.resolve(dsns, contract);
    const conn = new Connection(accessPoint, securityToken);
    conn.timeout = 5000;

    // 執行連線
    await conn.connect();

    // 驗證
    expect(conn.getSession()).toBeDefined();
    expect(conn.getVersion()).toBeTruthy();
    console.log(`✅ Passport 連線成功，DSA 版本: ${conn.getVersion()}`);
  }, 10000);

  it('應該能使用 Passport 呼叫服務', async () => {
    const dsns = process.env.TEST_DSNS!;
    const contract = 'SystemMaintenance';

    const passportXml = loadPassport();
    const securityToken = new PassportSecurityToken(passportXml);

    const accessPoint = await AccessPoint.resolve(dsns, contract);
    const conn = new Connection(accessPoint, securityToken);
    await conn.connect();

    // 呼叫測試服務
    const response = await conn.send('DS.Base.Connect', '<Request/>');
    expect(response).toBeDefined();

    console.log(`✅ Passport 服務呼叫成功`);
  }, 10000);

});

describe('Passport vs Basic - 對比', () => {

  it('Passport 和 Basic 都應該能連線', async () => {
    const dsns = process.env.TEST_DSNS!;
    const username = process.env.TEST_USER!;
    const password = process.env.TEST_PASSWORD!;

    // Basic 連線 (admin contract)
    const basicToken = new BasicSecurityToken({
      UserName: username,
      Password: password
    });
    const accessPoint1 = await AccessPoint.resolve(dsns, 'admin');
    const conn1 = new Connection(accessPoint1, basicToken);
    await conn1.connect();

    // Passport 連線 (SystemMaintenance contract)
    const passportXml = loadPassport();
    const passportToken = new PassportSecurityToken(passportXml);
    const accessPoint2 = await AccessPoint.resolve(dsns, 'SystemMaintenance');
    const conn2 = new Connection(accessPoint2, passportToken);
    await conn2.connect();

    // 兩者都應該成功
    expect(conn1.getVersion()).toBeTruthy();
    expect(conn2.getVersion()).toBeTruthy();

    console.log(`✅ Basic 連線版本: ${conn1.getVersion()}`);
    console.log(`✅ Passport 連線版本: ${conn2.getVersion()}`);
  }, 15000);

});

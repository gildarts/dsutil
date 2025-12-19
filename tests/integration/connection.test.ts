import { describe, it, expect } from 'vitest';
import { AccessPoint, Connection, BasicSecurityToken } from '../../src';

/**
 * DSA 連線整合測試
 *
 * 測試目標：
 * - 驗證能正常連線到真實 DSA
 * - 確認版本資訊正確取得
 * - 測試基本認證流程
 */
describe('DSA Connection Integration Test', () => {

  it('應該能成功連線到測試 DSA', async () => {
    // 從環境變數取得測試設定
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
    const contract = process.env.TEST_CONTRACT || 'admin';
    const username = process.env.TEST_USER || 'admin';
    const password = process.env.TEST_PASSWORD || '1campus12#$';

    // 解析 AccessPoint
    const accessPoint = await AccessPoint.resolve(dsns, contract);

    // 驗證 AccessPoint 解析成功
    expect(accessPoint).toBeDefined();
    expect(accessPoint.applicationUrl).toBeTruthy();
    expect(accessPoint.contract).toBe(contract);

    console.log(`📍 Application URL: ${accessPoint.applicationUrl}`);

    // 建立連線
    const securityToken = new BasicSecurityToken({
      UserName: username,
      Password: password
    });

    const conn = new Connection(accessPoint, securityToken);
    conn.timeout = 5000; // 5 秒超時

    // 執行連線
    await conn.connect();

    // 驗證連線成功
    expect(conn.getVersion()).toBeTruthy();
    console.log(`✅ DSA 版本: ${conn.getVersion()}`);

  }, 10000); // 測試超時 10 秒

  it('應該能取得連線 Session', async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
    const contract = process.env.TEST_CONTRACT || 'admin';
    const username = process.env.TEST_USER || 'admin';
    const password = process.env.TEST_PASSWORD || '1campus12#$';

    const accessPoint = await AccessPoint.resolve(dsns, contract);
    const securityToken = new BasicSecurityToken({
      UserName: username,
      Password: password
    });

    const conn = new Connection(accessPoint, securityToken);
    await conn.connect();

    // 驗證 Session 建立成功
    const session = conn.getSession();
    expect(session).toBeDefined();
    console.log(`✅ Session 建立成功`);

  }, 10000);

  it('應該正確處理錯誤的認證', async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
    const contract = process.env.TEST_CONTRACT || 'admin';

    const accessPoint = await AccessPoint.resolve(dsns, contract);
    const securityToken = new BasicSecurityToken({
      UserName: 'wrong_user',
      Password: 'wrong_password'
    });

    const conn = new Connection(accessPoint, securityToken);

    // 驗證錯誤處理
    await expect(conn.connect()).rejects.toThrow();

  }, 10000);

});

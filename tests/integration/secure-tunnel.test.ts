import { describe, it, expect } from 'vitest';
import { AccessPoint, Connection, BasicSecurityToken } from '../../src';
import { SecureTunnelService } from '../../src/secure_tunnel';

/**
 * SecureTunnel 加密通道整合測試
 *
 * 測試目標：
 * - 驗證 SecureTunnelService 初始化
 * - 測試加密通道的連線功能
 * - 對比加密/未加密連線
 */

describe('SecureTunnel - 基本功能', () => {

  it('應該能初始化 SecureTunnelService', async () => {
    const dsns = process.env.TEST_DSNS!;
    const contract = process.env.TEST_CONTRACT!;
    const accessPoint = await AccessPoint.resolve(dsns, contract);

    const service = new SecureTunnelService();
    await service.init(accessPoint.applicationUrl, contract, 5000);

    expect(service).toBeDefined();
    console.log(`✅ SecureTunnelService 初始化成功`);
  }, 10000);

  it('應該能建立新的 Tunnel', async () => {
    const dsns = process.env.TEST_DSNS!;
    const contract = process.env.TEST_CONTRACT!;
    const accessPoint = await AccessPoint.resolve(dsns, contract);

    const service = new SecureTunnelService();
    await service.init(accessPoint.applicationUrl, contract, 5000);

    const tunnel = service.newTunnel();
    expect(tunnel).toBeDefined();
    console.log(`✅ SecureTunnel 建立成功`);
  }, 10000);

});

describe('SecureTunnel - 加密連線', () => {

  it('應該能使用 SecureTunnel 建立加密連線', async () => {
    const dsns = process.env.TEST_DSNS!;
    const contract = process.env.TEST_CONTRACT!;
    const username = process.env.TEST_USER!;
    const password = process.env.TEST_PASSWORD!;

    const accessPoint = await AccessPoint.resolve(dsns, contract);
    const securityToken = new BasicSecurityToken({
      UserName: username,
      Password: password
    });

    const conn = new Connection(accessPoint, securityToken);
    conn.enableSecureTunnel = true;  // 啟用加密

    await conn.connect();

    expect(conn.getSession()).toBeDefined();
    expect(conn.getVersion()).toBeTruthy();
    console.log(`✅ 使用加密通道連線成功，版本: ${conn.getVersion()}`);
  }, 10000);

  it('應該能在加密連線下呼叫服務', async () => {
    const dsns = process.env.TEST_DSNS!;
    const contract = process.env.TEST_CONTRACT!;
    const username = process.env.TEST_USER!;
    const password = process.env.TEST_PASSWORD!;

    const accessPoint = await AccessPoint.resolve(dsns, contract);
    const securityToken = new BasicSecurityToken({
      UserName: username,
      Password: password
    });

    const conn = new Connection(accessPoint, securityToken);
    conn.enableSecureTunnel = true;
    await conn.connect();

    // 呼叫服務測試加密通道
    const response = await conn.send('DS.Base.Connect', '<Request/>');
    expect(response).toBeDefined();

    console.log(`✅ 加密通道服務呼叫成功`);
  }, 10000);

});

describe('SecureTunnel - 對比測試', () => {

  it('加密和未加密連線應該都能正常運作', async () => {
    const dsns = process.env.TEST_DSNS!;
    const contract = process.env.TEST_CONTRACT!;
    const username = process.env.TEST_USER!;
    const password = process.env.TEST_PASSWORD!;

    const accessPoint = await AccessPoint.resolve(dsns, contract);

    // 未加密連線
    const securityToken1 = new BasicSecurityToken({
      UserName: username,
      Password: password
    });
    const conn1 = new Connection(accessPoint, securityToken1);
    conn1.enableSecureTunnel = false;
    await conn1.connect();

    // 加密連線
    const securityToken2 = new BasicSecurityToken({
      UserName: username,
      Password: password
    });
    const conn2 = new Connection(accessPoint, securityToken2);
    conn2.enableSecureTunnel = true;
    await conn2.connect();

    // 兩者都應該成功
    expect(conn1.getVersion()).toBeTruthy();
    expect(conn2.getVersion()).toBeTruthy();

    console.log(`✅ 未加密版本: ${conn1.getVersion()}`);
    console.log(`✅ 加密版本: ${conn2.getVersion()}`);
  }, 15000);

  it('加密和未加密呼叫服務都應該成功', async () => {
    const dsns = process.env.TEST_DSNS!;
    const contract = process.env.TEST_CONTRACT!;
    const username = process.env.TEST_USER!;
    const password = process.env.TEST_PASSWORD!;

    const accessPoint = await AccessPoint.resolve(dsns, contract);
    const securityToken1 = new BasicSecurityToken({
      UserName: username,
      Password: password
    });
    const securityToken2 = new BasicSecurityToken({
      UserName: username,
      Password: password
    });

    // 未加密連線並呼叫服務
    const conn1 = new Connection(accessPoint, securityToken1);
    conn1.enableSecureTunnel = false;
    await conn1.connect();
    const response1 = await conn1.send('DS.Base.Connect', '<Request/>');
    expect(response1).toBeDefined();

    // 加密連線並呼叫服務
    const conn2 = new Connection(accessPoint, securityToken2);
    conn2.enableSecureTunnel = true;
    await conn2.connect();
    const response2 = await conn2.send('DS.Base.Connect', '<Request/>');
    expect(response2).toBeDefined();

    console.log(`✅ 未加密和加密服務呼叫都成功`);
  }, 15000);

});

describe('SecureTunnel - 效能測試', () => {

  it('應該比較加密和未加密的連線時間', async () => {
    const dsns = process.env.TEST_DSNS!;
    const contract = process.env.TEST_CONTRACT!;
    const username = process.env.TEST_USER!;
    const password = process.env.TEST_PASSWORD!;

    const accessPoint = await AccessPoint.resolve(dsns, contract);

    // 測試未加密連線時間
    const securityToken1 = new BasicSecurityToken({
      UserName: username,
      Password: password
    });
    const conn1 = new Connection(accessPoint, securityToken1);
    conn1.enableSecureTunnel = false;

    const start1 = Date.now();
    await conn1.connect();
    const time1 = Date.now() - start1;

    // 測試加密連線時間
    const securityToken2 = new BasicSecurityToken({
      UserName: username,
      Password: password
    });
    const conn2 = new Connection(accessPoint, securityToken2);
    conn2.enableSecureTunnel = true;

    const start2 = Date.now();
    await conn2.connect();
    const time2 = Date.now() - start2;

    console.log(`⏱️  未加密連線時間: ${time1}ms`);
    console.log(`⏱️  加密連線時間: ${time2}ms`);
    console.log(`📊 時間差: ${time2 - time1}ms`);

    // 兩者都應該成功
    expect(conn1.getVersion()).toBeTruthy();
    expect(conn2.getVersion()).toBeTruthy();
  }, 15000);

});

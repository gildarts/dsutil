# dsutil 測試規劃

> **版本**: 0.2.0
> **建立日期**: 2025-12-19
> **目標**: 完整覆蓋 dsutil 核心功能與新增的 SecureTunnel 特性

---

## 📊 測試覆蓋範圍總覽

| 分類 | 測試檔案 | 類型 | 優先級 | 狀態 |
|------|---------|------|--------|------|
| XElement | `unit/xelement.test.ts` | 單元 | ⭐⭐⭐⭐⭐ | ⏳ 待完成 |
| Envelope & SecurityToken | `unit/envelope.test.ts` | 單元 | ⭐⭐⭐⭐ | ⏳ 待完成 |
| Database Operations | `integration/database.test.ts` | 整合 | ⭐⭐⭐⭐ | ⏳ 待完成 |
| Connection (進階) | `integration/connection.test.ts` | 整合 | ⭐⭐⭐ | 🟡 部分完成 |
| Passport Connection | `integration/passport-connection.test.ts` | 整合 | ⭐⭐⭐ | ⏳ 待完成 |
| SecureTunnel | `integration/secure-tunnel.test.ts` | 整合 | ⭐⭐⭐ | ⏳ 待完成 |
| AccessPoint | `unit/access-point.test.ts` | 單元 | ⭐⭐ | ⏳ 待完成 |
| Errors | `unit/errors.test.ts` | 單元 | ⭐⭐ | ⏳ 待完成 |

---

## 🎯 1. XElement 核心功能測試

**檔案**: `tests/unit/xelement.test.ts`
**類型**: 單元測試
**優先級**: ⭐⭐⭐⭐⭐

### 測試目標
XElement 是整個 dsutil 的 XML/JSON 轉換核心，負責：
- XML 字串與 JSON 物件的雙向轉換
- 提供類似 XPath 的節點操作 API
- 支援屬性、文字、CDATA 的讀寫

### 測試案例

#### 1.1 建立與初始化
```typescript
describe('XElement - 建立與初始化', () => {
  it('應該能從 XML 字串建立', () => {
    const xml = '<User><Name>Test</Name></User>';
    const element = new XElement(xml);
    expect(element).toBeDefined();
  });

  it('應該能從 JSON 物件建立', () => {
    const json = { User: { Name: { _text: 'Test' } } };
    const element = new XElement(json);
    expect(element).toBeDefined();
  });

  it('應該能使用 XElement.parse() 解析 XML 片段', () => {
    const xml = '<Name>Test</Name><Age>25</Age>';
    const element = XElement.parse(xml);
    expect(element.exists('Name')).toBe(true);
    expect(element.exists('Age')).toBe(true);
  });
});
```

#### 1.2 文字內容操作
```typescript
describe('XElement - 文字內容', () => {
  it('應該能讀取 text 屬性', () => {
    const element = new XElement('<User>John</User>');
    expect(element.child('User').text).toBe('John');
  });

  it('應該能寫入 text 屬性', () => {
    const element = new XElement('<User></User>');
    element.child('User').text = 'Jane';
    expect(element.child('User').text).toBe('Jane');
  });

  it('讀取不存在的 text 應回傳 null', () => {
    const element = new XElement('<User></User>');
    expect(element.child('User').text).toBeNull();
  });
});
```

#### 1.3 CDATA 操作
```typescript
describe('XElement - CDATA', () => {
  it('應該能讀取 cdata', () => {
    const element = new XElement('<User><![CDATA[Some data]]></User>');
    expect(element.child('User').cdata).toBe('Some data');
  });

  it('應該能寫入 cdata', () => {
    const element = new XElement('<User></User>');
    element.child('User').cdata = 'Test CDATA';
    expect(element.child('User').cdata).toBe('Test CDATA');
  });
});
```

#### 1.4 屬性操作
```typescript
describe('XElement - 屬性', () => {
  it('應該能讀取屬性', () => {
    const element = new XElement('<User ID="123"></User>');
    expect(element.child('User').getAttr('ID')).toBe('123');
  });

  it('應該能寫入屬性', () => {
    const element = new XElement('<User></User>');
    element.child('User').setAttr('ID', '456');
    expect(element.child('User').getAttr('ID')).toBe('456');
  });

  it('應該支援鏈式呼叫', () => {
    const element = new XElement('<User></User>');
    element.child('User')
      .setAttr('ID', '789')
      .setAttr('Name', 'Test');
    expect(element.child('User').getAttr('ID')).toBe('789');
    expect(element.child('User').getAttr('Name')).toBe('Test');
  });
});
```

#### 1.5 子節點操作
```typescript
describe('XElement - 子節點', () => {
  it('應該能使用 child() 取得子節點', () => {
    const element = new XElement('<User><Name>John</Name></User>');
    const name = element.child('User').child('Name');
    expect(name.text).toBe('John');
  });

  it('應該支援多層 child() 呼叫', () => {
    const xml = '<Root><User><Name>John</Name></User></Root>';
    const element = new XElement(xml);
    const name = element.child('Root', 'User', 'Name');
    expect(name.text).toBe('John');
  });

  it('不存在的節點應自動建立', () => {
    const element = new XElement('<User></User>');
    element.child('User').child('NewNode').text = 'Created';
    expect(element.child('User').child('NewNode').text).toBe('Created');
  });
});
```

#### 1.6 子節點陣列操作
```typescript
describe('XElement - 子節點陣列', () => {
  it('應該能取得子節點陣列', () => {
    const xml = '<Users><User>A</User><User>B</User></Users>';
    const element = new XElement(xml);
    const users = element.child('Users').children('User');

    let count = 0;
    for (const user of users) {
      count++;
    }
    expect(count).toBe(2);
  });

  it('應該能自動轉換單一節點為陣列', () => {
    const xml = '<Users><User>A</User></Users>';
    const element = new XElement(xml);
    const users = element.child('Users').children('User', true);

    let count = 0;
    for (const user of users) {
      count++;
    }
    expect(count).toBe(1);
  });

  it('應該能在陣列上建立新元素', () => {
    const element = new XElement('<Users></Users>');
    const users = element.child('Users').children('User');
    users.new().text = 'New User';

    let count = 0;
    for (const user of users) {
      count++;
    }
    expect(count).toBe(1);
  });
});
```

#### 1.7 exists() 檢查
```typescript
describe('XElement - exists()', () => {
  it('應該正確判斷節點存在', () => {
    const element = new XElement('<User><Name>John</Name></User>');
    expect(element.exists('User')).toBe(true);
    expect(element.child('User').exists('Name')).toBe(true);
  });

  it('應該正確判斷節點不存在', () => {
    const element = new XElement('<User></User>');
    expect(element.child('User').exists('NotExist')).toBe(false);
  });

  it('應該支援多層路徑檢查', () => {
    const xml = '<Root><User><Name>John</Name></User></Root>';
    const element = new XElement(xml);
    expect(element.child('Root').exists('User', 'Name')).toBe(true);
    expect(element.child('Root').exists('User', 'Age')).toBe(false);
  });
});
```

#### 1.8 remove() 移除節點
```typescript
describe('XElement - remove()', () => {
  it('應該能移除子節點', () => {
    const element = new XElement('<User><Name>John</Name><Age>25</Age></User>');
    element.child('User').remove('Age');
    expect(element.child('User').exists('Age')).toBe(false);
    expect(element.child('User').exists('Name')).toBe(true);
  });

  it('移除不存在的節點不應報錯', () => {
    const element = new XElement('<User></User>');
    expect(() => element.child('User').remove('NotExist')).not.toThrow();
  });
});
```

#### 1.9 raw() 插入原始內容
```typescript
describe('XElement - raw()', () => {
  it('應該能插入 XML 字串', () => {
    const element = new XElement('<Root></Root>');
    element.child('Root').raw('User', '<Name>John</Name><Age>25</Age>');
    expect(element.child('Root').exists('User', 'Name')).toBe(true);
  });

  it('應該能插入 XElement 物件', () => {
    const element = new XElement('<Root></Root>');
    const userElement = new XElement('<Name>John</Name>');
    element.child('Root').raw('User', userElement);
    expect(element.child('Root').exists('User', 'Name')).toBe(true);
  });

  it('應該能插入 JSON 物件', () => {
    const element = new XElement('<Root></Root>');
    element.child('Root').raw('User', { Name: { _text: 'John' } });
    expect(element.child('Root').child('User', 'Name').text).toBe('John');
  });
});
```

#### 1.10 toXmlString() 轉換
```typescript
describe('XElement - toXmlString()', () => {
  it('應該能轉換回 XML 字串', () => {
    const element = new XElement('<User><Name>John</Name></User>');
    const xml = element.child('User').toXmlString('User');
    expect(xml).toContain('<User>');
    expect(xml).toContain('<Name>John</Name>');
    expect(xml).toContain('</User>');
  });

  it('應該包含屬性', () => {
    const element = new XElement('<User ID="123"></User>');
    const xml = element.child('User').toXmlString('User');
    expect(xml).toContain('ID="123"');
  });
});
```

#### 1.11 Iterator 支援
```typescript
describe('XElement - Iterator', () => {
  it('應該支援 for...of 遍歷陣列', () => {
    const xml = '<Users><User>A</User><User>B</User><User>C</User></Users>';
    const element = new XElement(xml);
    const users = element.child('Users').children('User');

    const names: string[] = [];
    for (const user of users) {
      names.push(user.text);
    }
    expect(names).toEqual(['A', 'B', 'C']);
  });

  it('非陣列節點也應支援 for...of（單一元素）', () => {
    const element = new XElement('<User>John</User>');
    const user = element.child('User');

    let count = 0;
    for (const _ of user) {
      count++;
    }
    expect(count).toBe(1);
  });
});
```

#### 1.12 錯誤處理
```typescript
describe('XElement - 錯誤處理', () => {
  it('陣列節點不應允許 text 操作', () => {
    const xml = '<Users><User>A</User><User>B</User></Users>';
    const element = new XElement(xml);
    const users = element.child('Users').children('User');
    expect(() => users.text).toThrow('陣列不可進行此操作');
  });

  it('非陣列節點不應允許 new() 操作', () => {
    const element = new XElement('<User>John</User>');
    const user = element.child('User');
    expect(() => user.new()).toThrow('只有陣列節點才以進行此操作');
  });
});
```

---

## 🔐 2. Envelope & SecurityToken 測試

**檔案**: `tests/unit/envelope.test.ts`
**類型**: 單元測試
**優先級**: ⭐⭐⭐⭐

### 測試目標
Envelope 是 DSA 通訊協定的封裝，負責：
- 封裝 Header（TargetContract, TargetService, Status, SecurityToken）
- 封裝 Body（請求/回應內容）
- 序列化成 XML 字串

### 測試案例

#### 2.1 PublicSecurityToken
```typescript
describe('PublicSecurityToken', () => {
  it('應該正確建立', () => {
    const token = new PublicSecurityToken();
    expect(token.type).toBe('Public');
  });
});
```

#### 2.2 BasicSecurityToken
```typescript
describe('BasicSecurityToken', () => {
  it('應該正確建立並包含帳密', () => {
    const token = new BasicSecurityToken({
      UserName: 'admin',
      Password: 'password123'
    });
    expect(token.type).toBe('Basic');
    expect(token.userName).toBe('admin');
    expect(token.password).toBe('password123');
  });

  it('應該能修改帳密', () => {
    const token = new BasicSecurityToken({
      UserName: 'admin',
      Password: 'old'
    });
    token.userName = 'newadmin';
    token.password = 'new';
    expect(token.userName).toBe('newadmin');
    expect(token.password).toBe('new');
  });
});
```

#### 2.3 SessionSecurityToken
```typescript
describe('SessionSecurityToken', () => {
  it('應該正確建立並包含 SessionID', () => {
    const token = new SessionSecurityToken({
      SessionID: 'abc123'
    });
    expect(token.type).toBe('Session');
    expect(token.sessionId).toBe('abc123');
  });

  it('應該能修改 SessionID', () => {
    const token = new SessionSecurityToken({
      SessionID: 'old'
    });
    token.sessionId = 'new';
    expect(token.sessionId).toBe('new');
  });
});
```

#### 2.4 PassportSecurityToken
```typescript
describe('PassportSecurityToken', () => {
  it('應該能從 XML 建立', () => {
    const passportXml = '<Passport><UserID>123</UserID></Passport>';
    const token = new PassportSecurityToken(passportXml);
    expect(token.type).toBe('Passport');
  });
});
```

#### 2.5 PassportAccessToken
```typescript
describe('PassportAccessToken', () => {
  it('應該正確建立並包含 AccessToken', () => {
    const token = new PassportAccessToken({
      AccessToken: 'token123'
    });
    expect(token.type).toBe('PassportAccessToken');
    expect(token.accessToken).toBe('token123');
  });

  it('應該能修改 AccessToken', () => {
    const token = new PassportAccessToken({
      AccessToken: 'old'
    });
    token.accessToken = 'new';
    expect(token.accessToken).toBe('new');
  });
});
```

#### 2.6 Envelope 基本操作
```typescript
describe('Envelope - 基本操作', () => {
  it('應該能建立空 Envelope', () => {
    const envelope = new Envelope();
    expect(envelope).toBeDefined();
  });

  it('應該能從 XML 建立 Envelope', () => {
    const xml = `
      <Envelope>
        <Header>
          <TargetContract>admin</TargetContract>
          <TargetService>DS.Base.Connect</TargetService>
        </Header>
        <Body></Body>
      </Envelope>
    `;
    const envelope = new Envelope(xml);
    expect(envelope.targetContract).toBe('admin');
    expect(envelope.targetService).toBe('DS.Base.Connect');
  });

  it('應該能設定 TargetContract', () => {
    const envelope = new Envelope();
    envelope.targetContract = 'admin';
    expect(envelope.targetContract).toBe('admin');
  });

  it('應該能設定 TargetService', () => {
    const envelope = new Envelope();
    envelope.targetService = 'DS.Base.Connect';
    expect(envelope.targetService).toBe('DS.Base.Connect');
  });
});
```

#### 2.7 Envelope Body 操作
```typescript
describe('Envelope - Body 操作', () => {
  it('應該能設定 Body 為字串', () => {
    const envelope = new Envelope();
    envelope.setBody('<Request><Test>Value</Test></Request>');
    const body = envelope.getBody();
    expect(body.exists('Request', 'Test')).toBe(true);
  });

  it('應該能設定 Body 為 XElement', () => {
    const envelope = new Envelope();
    const element = new XElement('<Request><Test>Value</Test></Request>');
    envelope.setBody(element);
    const body = envelope.getBody();
    expect(body.exists('Request', 'Test')).toBe(true);
  });

  it('應該能取得 Body', () => {
    const envelope = new Envelope();
    envelope.setBody('<Request></Request>');
    const body = envelope.getBody();
    expect(body).toBeDefined();
  });
});
```

#### 2.8 Envelope Status 處理
```typescript
describe('Envelope - Status', () => {
  it('應該能讀取 Status Code', () => {
    const xml = `
      <Envelope>
        <Header>
          <Status>
            <Code>0</Code>
            <Message>Success</Message>
          </Status>
        </Header>
        <Body></Body>
      </Envelope>
    `;
    const envelope = new Envelope(xml);
    expect(envelope.code).toBe('0');
  });

  it('應該能讀取 Status Message', () => {
    const xml = `
      <Envelope>
        <Header>
          <Status>
            <Code>500</Code>
            <Message>Error occurred</Message>
          </Status>
        </Header>
        <Body></Body>
      </Envelope>
    `;
    const envelope = new Envelope(xml);
    expect(envelope.message).toBe('Error occurred');
  });

  it('無 Status 時應回傳空字串', () => {
    const envelope = new Envelope();
    expect(envelope.code).toBe('');
    expect(envelope.message).toBe('');
  });
});
```

#### 2.9 Envelope SecurityToken 整合
```typescript
describe('Envelope - SecurityToken', () => {
  it('應該能設定 SecurityToken', () => {
    const envelope = new Envelope();
    const token = new BasicSecurityToken({
      UserName: 'admin',
      Password: 'password'
    });
    envelope.credential = token;
    expect(envelope.credential).toBe(token);
  });

  it('toString() 應該包含 SecurityToken', () => {
    const envelope = new Envelope();
    envelope.targetContract = 'admin';
    envelope.targetService = 'DS.Base.Connect';
    envelope.credential = new BasicSecurityToken({
      UserName: 'admin',
      Password: 'password'
    });
    envelope.setBody('<Request></Request>');

    const xml = envelope.toString();
    expect(xml).toContain('SecurityToken');
    expect(xml).toContain('Type="Basic"');
    expect(xml).toContain('<UserName>admin</UserName>');
  });
});
```

#### 2.10 Envelope toString() 完整性
```typescript
describe('Envelope - toString()', () => {
  it('應該產生完整的 Envelope XML', () => {
    const envelope = new Envelope();
    envelope.targetContract = 'admin';
    envelope.targetService = 'DS.Base.Connect';
    envelope.setBody('<RequestSessionID />');

    const xml = envelope.toString();
    expect(xml).toContain('<Envelope>');
    expect(xml).toContain('<Header>');
    expect(xml).toContain('<TargetContract>admin</TargetContract>');
    expect(xml).toContain('<TargetService>DS.Base.Connect</TargetService>');
    expect(xml).toContain('<Body>');
    expect(xml).toContain('<RequestSessionID');
    expect(xml).toContain('</Body>');
    expect(xml).toContain('</Header>');
    expect(xml).toContain('</Envelope>');
  });
});
```

---

## 🗄️ 3. Database Operations 測試

**檔案**: `tests/integration/database.test.ts`
**類型**: 整合測試
**優先級**: ⭐⭐⭐⭐

### 測試目標
測試 DSA 的資料庫操作功能，參考 `server_task.ts` 的實作：
- Database.Query（SELECT，有回傳值）
- Database.Command（DDL/DML，無回傳值）
- SQL 參數處理（escapeXml）

### 前置需求
- 需要測試環境的 DSA 連線
- 需要有權限的資料庫帳號（從 test.config.json 取得）

### 測試案例

#### 3.1 Database.Query 執行 SELECT
```typescript
describe('Database.Query', () => {
  let conn: Connection;

  beforeAll(async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
    const contract = process.env.TEST_CONTRACT || 'admin';
    const username = process.env.TEST_USER || 'admin';
    const password = process.env.TEST_PASSWORD || '1campus12#$';

    const accessPoint = await AccessPoint.resolve(dsns, contract);
    const securityToken = new BasicSecurityToken({
      UserName: username,
      Password: password
    });

    conn = new Connection(accessPoint, securityToken);
    await conn.connect();
  });

  it('應該能執行 SELECT 查詢', async () => {
    const sql = 'SELECT 1 AS test_value';

    // 參考 server_task.ts:146-152
    const response = await conn.send('Database.Query', `
      <Request>
        <Command>${escapeXml(sql)}</Command>
      </Request>
    `);

    expect(response).toBeDefined();
    // 應該有回傳資料
    expect(response.exists('Response')).toBe(true);
  });

  it('應該能查詢系統資料表', async () => {
    const sql = `
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      LIMIT 5
    `;

    const response = await conn.send('Database.Query', `
      <Request>
        <Command>${escapeXml(sql)}</Command>
      </Request>
    `);

    expect(response).toBeDefined();
  });
});
```

#### 3.2 escapeXml 處理
```typescript
describe('SQL escapeXml', () => {
  it('應該正確跳脫 XML 特殊字元', () => {
    const testCases = [
      { input: 'SELECT * FROM "test"', expected: 'SELECT * FROM &quot;test&quot;' },
      { input: "SELECT * FROM 'test'", expected: 'SELECT * FROM &apos;test&apos;' },
      { input: 'SELECT 1 < 2', expected: 'SELECT 1 &lt; 2' },
      { input: 'SELECT 1 > 2', expected: 'SELECT 1 &gt; 2' },
      { input: 'SELECT "a&b"', expected: 'SELECT &quot;a&amp;b&quot;' },
    ];

    testCases.forEach(({ input, expected }) => {
      expect(escapeXml(input)).toBe(expected);
    });
  });
});

// Helper function (參考 server_task.ts:68-75)
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
```

#### 3.3 Database.Command 執行 DDL/DML
```typescript
describe('Database.Command', () => {
  let conn: Connection;

  beforeAll(async () => {
    // ... 同 3.1 的連線設定
  });

  it('應該能執行 CREATE TABLE', async () => {
    const sql = `
      CREATE TEMP TABLE test_table_${Date.now()} (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100)
      )
    `;

    // 參考 server_task.ts:158-183
    const response = await conn.send('Database.Command', `
      <Request>
        <Command>${escapeXml(sql)}</Command>
      </Request>
    `);

    // Command 應該回傳 Succeed 標記
    expect(response.data?.Succeed).toBeDefined();
  });

  it('錯誤的 SQL 應該拋出錯誤', async () => {
    const sql = 'INVALID SQL SYNTAX';

    await expect(
      conn.send('Database.Command', `
        <Request>
          <Command>${escapeXml(sql)}</Command>
        </Request>
      `)
    ).rejects.toThrow();
  });
});
```

#### 3.4 查詢結果解析（需要 XmlTable）
```typescript
describe('查詢結果解析', () => {
  it('應該能解析查詢結果為 JSON', async () => {
    // 此測試需要先實作 XmlTable.parseRecords()
    // 參考 server_task.ts:152

    const conn = await createTestConnection();
    const sql = 'SELECT 1 AS id, \'test\' AS name';

    const response = await conn.send('Database.Query', `
      <Request>
        <Command>${escapeXml(sql)}</Command>
      </Request>
    `);

    // 使用 XmlTable.parseRecords 解析
    // const records = XmlTable.parseRecords(response.child('Response'));
    // expect(records).toHaveLength(1);
    // expect(records[0].id).toBe('1');
    // expect(records[0].name).toBe('test');
  });
});
```

---

## 🔌 4. Connection 進階測試

**檔案**: `tests/integration/connection.test.ts`（擴充現有檔案）
**類型**: 整合測試
**優先級**: ⭐⭐⭐

### 測試目標
擴充現有的連線測試，加入更多情境：

### 新增測試案例

#### 4.1 使用 SessionSecurityToken 連線
```typescript
it('應該能使用 SessionSecurityToken 直接連線', async () => {
  // 先用 Basic 取得 Session
  const dsns = process.env.TEST_DSNS || 'dev.sh_d';
  const contract = process.env.TEST_CONTRACT || 'admin';
  const username = process.env.TEST_USER || 'admin';
  const password = process.env.TEST_PASSWORD || '1campus12#$';

  const accessPoint = await AccessPoint.resolve(dsns, contract);
  const basicToken = new BasicSecurityToken({
    UserName: username,
    Password: password
  });

  const conn1 = new Connection(accessPoint, basicToken);
  await conn1.connect();
  const session = conn1.getSession() as SessionSecurityToken;

  // 用 Session 建立新連線
  const conn2 = new Connection(accessPoint, session);
  await conn2.connect();

  expect(conn2.getSession()).toBeDefined();
}, 10000);
```

#### 4.2 send() 方法測試
```typescript
it('應該能使用 send() 呼叫服務', async () => {
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

  // 呼叫一個簡單的服務
  const response = await conn.send('DS.Base.Connect', '<Request/>');
  expect(response).toBeDefined();
}, 10000);
```

#### 4.3 不使用 Session 的連線
```typescript
it('應該支援不使用 Session 的連線', async () => {
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
  conn.useSession = false;  // 停用 Session

  await conn.connect();

  // useSession = false 時，connect() 應該直接回傳
  expect(conn.getSession()).toBeUndefined();
}, 10000);
```

#### 4.4 Timeout 處理
```typescript
it('應該正確處理 Timeout', async () => {
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
  conn.timeout = 1;  // 設定 1ms 超時，必定失敗

  await expect(conn.connect()).rejects.toThrow();
}, 10000);
```

#### 4.5 DSAError 錯誤處理
```typescript
it('應該正確處理 DSAError', async () => {
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

  // 呼叫不存在的服務
  try {
    await conn.send('NonExistent.Service', '<Request/>');
    fail('應該拋出 DSAError');
  } catch (error) {
    expect(error).toBeInstanceOf(DSAError);
    expect((error as DSAError).code).toBeTruthy();
    expect((error as DSAError).message).toBeTruthy();
  }
}, 10000);
```

---

## 🔑 5. Passport Connection 測試

**檔案**: `tests/integration/passport-connection.test.ts`
**類型**: 整合測試
**優先級**: ⭐⭐⭐

### 測試目標
測試使用 PassportSecurityToken 進行系統級連線：
- 載入 passport.xml 檔案
- 使用 Passport 認證連線到 SystemMaintenance contract
- 驗證 Passport 認證流程

### 前置需求
- 專案根目錄需要有 `passport.xml` 檔案
- Passport 需在有效期限內
- 測試目標為 SystemMaintenance contract

### 測試案例

#### 5.1 載入 Passport
```typescript
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
});

// Helper function (參考 dsa_cli/src/core/passport.ts)
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
```

#### 5.2 PassportSecurityToken 建立
```typescript
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
```

#### 5.3 Passport 連線測試
```typescript
describe('Passport Connection', () => {
  it('應該能使用 Passport 連線到 SystemMaintenance', async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
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
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
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
```

#### 5.4 Passport 錯誤處理
```typescript
describe('Passport - 錯誤處理', () => {
  it('找不到 passport.xml 應拋出錯誤', () => {
    expect(() => loadPassport('/non/existent/path.xml')).toThrow('找不到 passport.xml');
  });

  it('無效的 Passport XML 應拋出錯誤', () => {
    const invalidXml = '<Invalid>XML</Invalid>';

    expect(() => {
      new PassportSecurityToken(invalidXml);
    }).toThrow();
  });

  it('過期的 Passport 應該連線失敗', async () => {
    // 此測試需要一個過期的 Passport
    // 可選的測試，取決於是否有過期的測試 Passport
  });
});
```

#### 5.5 Passport vs Basic 對比測試
```typescript
describe('Passport vs Basic - 對比', () => {
  it('Passport 和 Basic 都應該能連線', async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';

    // Basic 連線 (admin contract)
    const basicToken = new BasicSecurityToken({
      UserName: process.env.TEST_USER || 'admin',
      Password: process.env.TEST_PASSWORD || '1campus12#$'
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
```

---

## 🔒 6. SecureTunnel 測試

**檔案**: `tests/integration/secure-tunnel.test.ts`
**類型**: 整合測試
**優先級**: ⭐⭐⭐

### 測試目標
測試 SecureTunnel 加密通道功能（0.2.0 新特性）：
- SecureTunnelService 初始化
- protect() 加密請求
- unprotect() 解密回應
- 完整的加密通訊流程

### 測試案例

#### 6.1 SecureTunnel 基本功能
```typescript
describe('SecureTunnel', () => {
  it('應該能初始化 SecureTunnelService', async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
    const contract = process.env.TEST_CONTRACT || 'admin';
    const accessPoint = await AccessPoint.resolve(dsns, contract);

    const service = new SecureTunnelService();
    await service.init(accessPoint.applicationUrl, contract, 5000);

    expect(service).toBeDefined();
  }, 10000);

  it('應該能建立新的 Tunnel', async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
    const contract = process.env.TEST_CONTRACT || 'admin';
    const accessPoint = await AccessPoint.resolve(dsns, contract);

    const service = new SecureTunnelService();
    await service.init(accessPoint.applicationUrl, contract, 5000);

    const tunnel = service.newTunnel();
    expect(tunnel).toBeDefined();
  }, 10000);
});
```

#### 6.2 加密/解密測試
```typescript
describe('SecureTunnel - 加密/解密', () => {
  it('應該能加密和解密資料', async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
    const contract = process.env.TEST_CONTRACT || 'admin';
    const accessPoint = await AccessPoint.resolve(dsns, contract);

    const service = new SecureTunnelService();
    await service.init(accessPoint.applicationUrl, contract, 5000);

    const tunnel = service.newTunnel();

    const originalData = '<Envelope><Header></Header><Body>Test</Body></Envelope>';

    // 加密
    const encrypted = tunnel.protect(originalData, contract);
    expect(encrypted).toBeDefined();
    expect(encrypted).not.toBe(originalData);

    // 解密（需要伺服器回應才能測試）
    // const decrypted = tunnel.unprotect(serverResponse);
    // expect(decrypted).toContain('Test');
  }, 10000);
});
```

#### 6.3 完整加密連線測試
```typescript
describe('Connection with SecureTunnel', () => {
  it('應該能使用 SecureTunnel 建立加密連線', async () => {
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
    conn.enableSecureTunnel = true;  // 啟用加密

    await conn.connect();

    expect(conn.getSession()).toBeDefined();
    expect(conn.getVersion()).toBeTruthy();
    console.log(`✅ 使用加密通道連線成功，版本: ${conn.getVersion()}`);
  }, 10000);

  it('應該能在加密連線下呼叫服務', async () => {
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
    conn.enableSecureTunnel = true;
    await conn.connect();

    // 呼叫服務測試加密通道
    const response = await conn.send('DS.Base.Connect', '<Request/>');
    expect(response).toBeDefined();
  }, 10000);
});
```

#### 6.4 對比測試（加密 vs 未加密）
```typescript
describe('SecureTunnel - 對比測試', () => {
  it('加密和未加密連線應該都能正常運作', async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
    const contract = process.env.TEST_CONTRACT || 'admin';
    const username = process.env.TEST_USER || 'admin';
    const password = process.env.TEST_PASSWORD || '1campus12#$';

    const accessPoint = await AccessPoint.resolve(dsns, contract);
    const securityToken1 = new BasicSecurityToken({
      UserName: username,
      Password: password
    });
    const securityToken2 = new BasicSecurityToken({
      UserName: username,
      Password: password
    });

    // 未加密連線
    const conn1 = new Connection(accessPoint, securityToken1);
    conn1.enableSecureTunnel = false;
    await conn1.connect();

    // 加密連線
    const conn2 = new Connection(accessPoint, securityToken2);
    conn2.enableSecureTunnel = true;
    await conn2.connect();

    // 兩者都應該成功
    expect(conn1.getVersion()).toBeTruthy();
    expect(conn2.getVersion()).toBeTruthy();

    console.log(`✅ 未加密版本: ${conn1.getVersion()}`);
    console.log(`✅ 加密版本: ${conn2.getVersion()}`);
  }, 15000);
});
```

---

## 🌐 7. AccessPoint 測試

**檔案**: `tests/unit/access-point.test.ts`
**類型**: 單元測試
**優先級**: ⭐⭐

### 測試案例

#### 7.1 從 HTTP URL 建立
```typescript
describe('AccessPoint - HTTP URL', () => {
  it('應該能從 HTTP URL 建立', async () => {
    const url = 'https://dsa.example.com';
    const contract = 'admin';

    const ap = await AccessPoint.resolve(url, contract);

    expect(ap.applicationUrl).toBe(url);
    expect(ap.contract).toBe(contract);
  });

  it('應該能從 HTTPS URL 建立', async () => {
    const url = 'https://secure.example.com';
    const contract = 'test';

    const ap = await AccessPoint.resolve(url, contract);

    expect(ap.applicationUrl).toBe(url);
    expect(ap.contract).toBe(contract);
  });
});
```

#### 7.2 從 DSNS 解析
```typescript
describe('AccessPoint - DSNS', () => {
  it('應該能從 DSNS 解析 AccessPoint', async () => {
    const dsns = process.env.TEST_DSNS || 'dev.sh_d';
    const contract = 'admin';

    const ap = await AccessPoint.resolve(dsns, contract, 5000);

    expect(ap.applicationUrl).toBeTruthy();
    expect(ap.contract).toBe(contract);
    expect(ap.dsns).toBe(dsns);

    console.log(`✅ DSNS ${dsns} 解析為: ${ap.applicationUrl}`);
  }, 10000);

  it('錯誤的 DSNS 應該拋出錯誤', async () => {
    const dsns = 'invalid.dsns.not.exist';
    const contract = 'admin';

    await expect(
      AccessPoint.resolve(dsns, contract, 2000)
    ).rejects.toThrow();
  }, 5000);
});
```

#### 7.3 parse() 方法
```typescript
describe('AccessPoint - parse()', () => {
  it('應該能解析完整 URL', () => {
    const url = 'https://dsa.example.com/admin';
    const ap = AccessPoint.parse(url);

    expect(ap.applicationUrl).toBe('https://dsa.example.com');
    expect(ap.contract).toBe('admin');
  });

  it('應該能處理尾部斜線', () => {
    const url = 'https://dsa.example.com/admin/';
    const ap = AccessPoint.parse(url);

    expect(ap.applicationUrl).toBe('https://dsa.example.com');
    expect(ap.contract).toBe('admin');
  });

  it('應該能處理多層路徑', () => {
    const url = 'https://dsa.example.com/path/to/admin';
    const ap = AccessPoint.parse(url);

    expect(ap.applicationUrl).toBe('https://dsa.example.com/path/to');
    expect(ap.contract).toBe('admin');
  });
});
```

#### 7.4 toString() 方法
```typescript
describe('AccessPoint - toString()', () => {
  it('應該組合完整 URL（無尾部斜線）', () => {
    const ap = new AccessPoint('https://dsa.example.com', 'admin');
    expect(ap.toString()).toBe('https://dsa.example.com/admin');
  });

  it('應該組合完整 URL（有尾部斜線）', () => {
    const ap = new AccessPoint('https://dsa.example.com/', 'admin');
    expect(ap.toString()).toBe('https://dsa.example.com/admin');
  });
});
```

---

## ⚠️ 8. Errors 測試

**檔案**: `tests/unit/errors.test.ts`
**類型**: 單元測試
**優先級**: ⭐⭐

### 測試案例

```typescript
describe('DSAError', () => {
  it('應該正確建立 DSAError', () => {
    const error = new DSAError('Test error', '500');

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(DSAError);
    expect(error.message).toBe('Test error');
    expect(error.code).toBe('500');
    expect(error.name).toBe('DSAError');
  });

  it('應該能包含 detail', () => {
    const detail = { additionalInfo: 'Some details' };
    const error = new DSAError('Test error', '500', detail);

    expect(error.detail).toBe(detail);
  });

  it('應該能包含 XML detail', () => {
    const xmlDetail = '<Error><Message>Detailed error</Message></Error>';
    const error = new DSAError('Test error', '500', xmlDetail);

    expect(error.detail).toBe(xmlDetail);
  });

  it('應該正確顯示錯誤訊息', () => {
    const error = new DSAError('Service not found', '404');

    expect(error.toString()).toContain('Service not found');
  });
});
```

---

## 📊 執行與監控

### 執行指令

```bash
# 執行所有測試
pnpm test

# 執行單元測試
pnpm test tests/unit

# 執行整合測試
pnpm test tests/integration

# 監看模式
pnpm test:watch

# 執行特定測試檔案
pnpm test tests/unit/xelement.test.ts

# 產生覆蓋率報告
pnpm test --coverage
```

### 測試覆蓋率目標

| 模組 | 目標覆蓋率 |
|------|-----------|
| XElement | 95% |
| Envelope | 90% |
| Connection | 85% |
| SecurityToken | 90% |
| AccessPoint | 85% |
| SecureTunnel | 80% |
| Errors | 95% |

---

## 📝 備註

### 整合測試注意事項
- 整合測試需要真實 DSA 環境
- 測試憑證存放在 `tests/setup/test.config.json`（已加入 .gitignore）
- 測試前確認 DSA 服務可連線

### XmlTable 實作待確認
- `server_task.ts` 中使用的 `XmlTable.parseRecords()` 需要進一步研究
- 可能需要新增 XmlTable 相關測試

### SecureTunnel 測試限制
- 完整的加密/解密測試需要 DSA 伺服器配合
- 部分測試可能只能驗證加密流程，無法完整驗證解密

---

**最後更新**: 2025-12-19
**規劃者**: Citlali 🌟

/**
 * Vitest 全域 Setup
 *
 * 此檔案在所有測試執行前載入
 * 用途：載入測試環境變數（test.config.json）
 */

import { readFileSync } from 'fs';
import { join } from 'path';

try {
  // 讀取測試配置檔案
  const configPath = join(process.cwd(), 'tests/setup/test.config.json');
  const config = JSON.parse(readFileSync(configPath, 'utf-8'));

  // 載入環境變數到 process.env
  if (config.env) {
    Object.assign(process.env, config.env);
    console.log('✅ 測試環境變數載入完成（從 test.config.json）');
  }
} catch (error) {
  console.warn('⚠️ 未找到測試配置檔案，請建立 tests/setup/test.config.json');
}

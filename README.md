# local-monorepo-app

基于uni-app构建统一的应用技术架构，可以通过一套代码来标准化地支持构建ios/android/各类小程序/h5

## 项目特点

- 技术栈：uni-app + vite + vue3 + TypeScript
- 项目管理模式：pnpm + monorepo
- 跨平台：一套代码，多端运行（iOS、Android、微信小程序、支付宝小程序、抖音小程序、H5等）

## 目录结构

```
- app                    # 符合uni-app应用规范的的主体package
- packages               # 各平台特定的功能模块
  - ios                  # iOS平台特定功能、工具方法等
  - android              # Android平台特定功能、工具方法等
  - weapp                # 微信小程序特定功能、工具方法等
  - aliapp               # 支付宝小程序特定功能、工具方法等
  - dyapp                # 抖音小程序特定功能、工具方法等
- utils                  # 全局共享的公共功能、函数等
```

## 开发指南

### 环境要求

- Node.js 16+
- pnpm 7+

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# H5
pnpm dev:h5

# 微信小程序
pnpm dev:mp-weixin

# 支付宝小程序
pnpm dev:mp-alipay

# App开发（iOS/Android）
pnpm dev:app
```

### 构建应用

```bash
# 构建H5版本
pnpm build:h5

# 构建微信小程序版本
pnpm build:mp-weixin

# 构建支付宝小程序版本
pnpm build:mp-alipay

# 构建App版本（iOS/Android）
pnpm build:app
```

## 软链接依赖

本项目采用pnpm的workspace模式，通过软链接的方式管理依赖包。各个packages目录下的包都被app主包引用，使用 `workspace:*` 方式引用。

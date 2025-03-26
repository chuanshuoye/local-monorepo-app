# local-monorepo-app

# 创建应用工程
基于uni-app构建统一的应用技术架构，可以通过一套代码来标准化地支持构建ios/android/各类小程序/h5


# 基础架构
- 技术栈：uni-app+vite+vue
- 项目管理模式：pnpm+monorepo

# 目录结构
- 
    - app // 符合uni-app应用规范的的主体package
    - packages
        - ios // 构建ios原生应用下的差异化功能、工具方法等
        - android // 构建android原生应用下的差异化功能、工具方法等
        - weapp // 构建微信小程序应用下的差异化功能、工具方法等
        - aliapp //
        - dyapp
    - utils // 全局共享的公共功能、函数等

# app接入packages的依赖包的统一引用方式
- pnpm的workspace的软链





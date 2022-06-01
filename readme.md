# 类喜马拉雅app使用React Native+TypeScript跨平台项目
---
### (一) 环境配置 
1. [遵循React Native官网配置](https://www.react-native.cn/docs/environment-setup)
2. node版本: v18.2.0
3. yarn版本: 1.22.18
4. 虚拟机版本: ios：15.3, Android:11.0
5. 依赖版本: react 17.0.2, react-native 0.68.2
### (二) 模块设计
1. 首页模块
2. 分类模块
3. 频道模块
4. 频道详情模块
5. 播放模块
6. 收听历史模块
7. 发现模块
8. 我的模块
### (三) 技术分析
### (四) 额外包
1. 多环境：为了可以快速调整测试环境和发布环境，使用react-native-config解决
2. 绝对路径：使用babel-plugin-module-resolver
3. 导航器 react navigation 6.x
4. 状态管理器 dva
5. 接口接收 axios

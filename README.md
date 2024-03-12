# 0. 安装PNPM
npm i -g pnpm
npm init

# 1. 初始化
1. 创建 .gitignore 
2. 创建 .npmrc (pnpm相关配置)
3. 创建 pnpm-workspace.yaml (定义了 工作空间 的根目录，并能够使您从工作空间中包含 / 排除目录 。 默认情况下，包含所有子目录。)

# 2. 安装并配置全局依赖
pnpm add -D typescript ts-node -w

# 3. 安装play项目
pnpm create vite


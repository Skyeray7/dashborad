# Showroom Dashboard

一个用 `Vite + React + TypeScript` 搭起来的展示型 dashboard 底座，目标是先把工程结构、内容分区和 GitHub Pages 自动部署跑通，再持续往里填真实内容。

## 本地开发

```bash
npm install
npm run dev
```

常用命令：

```bash
npm run build
npm run lint
npm run check
```

## 目录说明

```text
src/
  components/        可复用展示组件
  data/dashboard.ts  当前页面的集中内容数据
  types/             内容模型类型定义
```

后面如果你要继续扩展：

- 改展示文案、图片、模块内容：优先从 `src/data/dashboard.ts` 下手
- 拆更多栏目：从 `src/components/` 里继续拆分
- 接外部数据：先保留页面结构，再把本地数据替换成 API / CMS / JSON 源

## GitHub Pages 部署

仓库里已经准备好 GitHub Actions workflow，推送到 `main` 分支后会自动构建并部署到 GitHub Pages。

建议在 GitHub 仓库里确认两件事：

1. `Settings -> Pages` 中把 Source 设为 `GitHub Actions`
2. 默认分支使用 `main`

`vite.config.ts` 会在 GitHub Actions 环境下自动读取仓库名并生成正确的 Pages `base` 路径，所以仓库名和页面子路径可以保持一致。

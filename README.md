# 何璐婷 · SaaS Sales Portfolio

个人作品集网站，展示SaaS销售领域的项目分析与能力体系。

## 在线预览

部署完成后可通过以下地址访问：
https://你的用户名.github.io/maifushi-portfolio/

## 部署到 GitHub Pages 步骤

### 第一步：创建 GitHub 仓库

1. 打开 https://github.com 并登录（没有账号先注册）
2. 点击右上角 `+` → `New repository`
3. 仓库名填写 `maifushi-portfolio`，设为 Public
4. 点击 `Create repository`

### 第二步：推送本地代码

在终端中执行以下命令（按顺序逐条执行）：

```bash
# 1. 进入项目文件夹
cd C:\Users\admin\Documents\迈富时互联网销售\maifushi-portfolio

# 2. 添加所有文件到 git
git add .

# 3. 提交
git commit -m "初始化作品集"

# 4. 关联远程仓库（改成你自己的 GitHub 用户名）
git remote add origin https://github.com/你的用户名/maifushi-portfolio.git

# 5. 推送代码
git push -u origin main
```

> 如果提示输入用户名密码，需要输入你的 GitHub 账号和 Personal Access Token。
> 如何生成 Token：GitHub 头像 → Settings → Developer settings → Personal access tokens → Generate new token

### 第三步：部署

代码推送后，GitHub Actions 会自动开始构建和部署：

1. 在浏览器打开你的仓库页面
2. 点击顶部 `Actions` 标签
3. 会看到一个正在运行的 workflow，等它变成绿色 ✔
4. 进入仓库 `Settings` → `Pages`
5. 在 `Build and deployment` 的 `Source` 中选择 `GitHub Actions`
6. 等待几分钟，访问 `https://你的用户名.github.io/maifushi-portfolio/` 即可看到

### 后续更新

修改代码后，只需要重复以下命令即可自动重新部署：

```bash
git add .
git commit -m "更新说明"
git push
```

## 本地预览

```bash
cd maifushi-portfolio
npm install
npm run dev
```

浏览器打开 http://localhost:5173

## 文件说明

| 文件 | 说明 |
|------|------|
| `preview.html` | 完整作品集（可直接双击打开） |
| `portfolio-共享版.html` | 照片内嵌的单文件版（可直接发送给别人） |
| `src/` | React + Vite 源码 |
| `.github/workflows/deploy.yml` | GitHub Actions 自动部署配置 |

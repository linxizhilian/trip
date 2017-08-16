# mms

### 安装 
1. node - 官网下载安装稳定版。
    - 测试安装成功：分别执行命令行： 
      - cmd：node -v
      - cmd：npm -v 
2. npm 远程仓库切换 - 淘宝镜像
    - cmd：npm config set registry https://registry.npm.taobao.org
    查看配置结果
    - cmd：npm config get registry
3. gulp 全局安装
    - cmd：npm install gulp -g
4. 依赖包安装
    - cmd: npm install
5. 启动项目（开发环境）
    - cmd: gulp dev
6. 访问：
    - localhost 
 
### 页面结构
1. 模板页面： `/index_template.html`

2. 页面样式：
   - `app`目录
   - 页面 body 添加id 
   - main.less 文件业务样式：  格式： #id {} 

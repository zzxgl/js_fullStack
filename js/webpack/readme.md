-  npm init -y 
    node 并且初始化
-  npm install -g yarn 
    安装 yarn
    yarn --version 
    yarn add babel-core
    yarn add babel-core babel-cli
    yarn add babel-core babel-cli babel-preset-env
    npm run 运行脚本的命令 
    yarn add babel-plugin-proposal-object-reset-spread
    yarn add babel-plugin-transform-object-rest-spread
    yarn add eslint    
    yarn add webpack
     yarn add webpack-cli webpack-dev-server 编译+live-server
     "build": "webpack --mode development" 默认参数 开发类型
     yarn global add webpack webpack-cli
-  生产线 Webpack 代码生产工艺 工作流 Work Flow 
-  html + css + js = development  开发阶段
    html template{{}} 模板
    css  stylus
    js   es6,7,8,9 =>es5
   最后代码运行的env(环境)
 
- js 
    babel 
    可以使用最新的技术开发, babel 编译成 es5 所有平台都能运行

- babel-core 核心的转译库 
    const -> var
    npm run build "babel ...."
    babel-cli 执行脚本
    babel-preset-env  .babelrc 配置文件
    {
        "persets":["env"]  预处理 原文件编译
    }
    build 
    dev
- .开头的文件是隐藏文件 不会提交

- preset 预处理
   plugins env搞不定 去安装插件 plugins
- eslint 代码风格确定

- webpack 是一切工作流的主宰
    webpack --mode development
    /src 开发目录
    /dist 上线

- 开发时 develpoment 代码的可读性  dev 存在本地  localhost
- 上线时 production  代码要压缩,混淆代码  build  服务器上 域名
- 测试 test 将代码提交至测试服务器  局域网
















ps:src 目录就是开发目录
# 在node中搭建TS开发环境

# 安装TypeScript
yarn global add typescript
npm i -g typescript

默认情况下，TS会做出下面几种默认配置：

1. 默认当前的执行环境是dom
2. 如果代码中没有使用模块话语句（import、export），便认为该代码是全局执行
3. 编译的目标代码是ES3

有两种方式更改

1. 使用tsc命令行的时候，加上选项参数
2. 使用ts配置文件，更改编译选项

# TS的配置文件

使用了配置文件后，使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件

@types/node

@types是一个ts官方的类型库，其中包含了很多对js代码的类型描述。

> Jquery：用js写的，没有类型检查
> 安装@types/jquery，为jquery库添加类型定义

# 使用第三方库简化流程

ts-node：将ts代码在内存中完成编译并允许

nodemon
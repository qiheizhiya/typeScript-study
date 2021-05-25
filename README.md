# 声明文件

## 概述

1. 什么是声明文件？

以```d.ts```结尾的问题

2. 声明文件有什么用？

为JS代码提供类型声明

3. 声明文件的位置

- 放置到tsconfig.json配置中包含的目录中
- 放置到node_modules/@types文件夹中
- 手动配置
- 与JS代码所在目录相同，并且文件名也相同的问题。用ts代码书写的工程发布之后的格式。

## 编写

- 手动编写 自动生成

- 自动生成

工程是TS开发的，发布(编译之后)，是js文件，发布的是js文件

如果发布的文件，需要给其他开发者使用，可以使用声明文件，来描述发布结果中的类型

配置```tsconfig.json```中的```declaration: true```即可

- 手动编写

1. 对已有库，它是使用js书写而成，并且更改该库的代码为ts成本较高，可以手动编写声明文件

2. 对一些第三方库，他们使用js书写而成，并且这些第三方库没有提供声明文件

**全局声明**

声明一些全局的对象、属性、变量

> namespace: 表示命名空间，可以将其认为是一个对象，命名空间中的内容，必须通过```命令.成员名```访问

**模块声明**

**三斜线指令**

在一个声明文件中，包含另一个声明文件
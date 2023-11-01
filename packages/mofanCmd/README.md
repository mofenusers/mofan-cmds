# mofan-cmds

## install

```
yarn add mofancmds -g
mofancmds -v
```

or

```
npm install mofancmds -g
mofancmds -v
```

<br/>

## batchmerge

### 介绍

批量合并（merge）source 分支到目标分支，当你的项目没有 devops 时的轻量方案，可以缩短你 deploy 的操作路径。

### 示例

```javascript
mofancmds batchmerge -s source

mofancmds batchmerge -s source -t [...args]
```

### 建议

- 只需一个命令，即可将特性分支 merge 同时 push 至环境分支(dev/test/uat), 执行成功后即可直接发布,
  ```
  mofancmds batchmerge -s feature/xxxxxx
  ```
- 尽量不要处理生产分支（prod/master/main/prodduction 等），建议把 prod 保护好，任何人都不可以直接 push。
- 定期清理本地分支，本地分支过多时建议直接传入目标分支参数。
- 当 merge 存在冲突时执行会失败，且存在冲突的分支会处于 merge 中的状态，此时需要手动去处理冲突，请特别注意，避免将冲突代码合并了。

### 内部命令集

```
git checkout source
git pull
git checkout target
git pull
git merge source
git push
```

<br/>

## acommit

### 按照 Angular commit message 规范交互式提交 commit，并交互式询问是否批量合并至指定分支

### 示例

```javascript
mofancmds acommit
```

### 建议

- 命令集中没有执行 eslint 和 format，如果需要可以配置 precommit 等钩子，命令集中的 commit 命令会触发
- Angular commit message 规范 [https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit](https://)

  <br/>

### 内部命令集

```
git add .
git commit -m "type: desc"
git checkout target
git pull
mofancmds batchmerge -s source
git push
```

<br/>

## batchcommand

### 介绍

批量对当前目录下的所有内部具有 package.json 文件的文件夹执行指令，只显示子目录，不显示孙目录

### 示例

```javascript
mofancmds batchcommand -m command

```

### 注意

- 执行删除、撤销（rm/git checkout <file>）等危险操作时，最好先使用 git status 等命令确认一下目标文件夹的状态
- 操作完以后，一定要去对应的文件夹确认一下。

## todo

### batchcommand 增加二次确认

### 评估频繁执行 shell 命令切换子进程是否会引起性能问题

### acommit 增加交互式触发 jekins 部署

### 载入内部配置

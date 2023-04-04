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

批量合并（merge）source 分支到目标分支，当你的项目没有 devops 时的轻量方案，可以缩短你的操作路径。

### 示例

```javascript
mofancmds batchmerge -s source

mofancmds batchmerge -s source -t [...args]
```

### 建议

1、只需一个命令，即可将特性分支 merge 同时 push 至环境分支（dev/test/uat, 执行成功后即可直接发布,mofancmds batchmerge -s feature/xxxxxx
2、尽量不要处理生产分支（prod/master/main/prodduction 等），建议把 prod 保护好，任何人都不可以直接 push。
3、定期清理本地分支，本地分支过多时建议直接传入目标分支参数。
4、当 merge 存在冲突时执行会失败，且存在冲突的分支会处于 merge 中的状态，此时需要手动去处理冲突，请特别注意，避免将冲突代码合并了。

#### 内部命令集

```
git checkout source
git pull
git checkout target
git pull
git merge source
git push
```

## acommit

### 按照 Angular commit message 规范交互式提交 commit，并交互式询问是否批量合并至指定分支

### 示例

```javascript
mofancmds acommit
```

### 建议

1、命令集中没有执行 eslint 和 format，如果需要可以配置 precommit 钩子，命令集中的 commit 命令会触发

#### 内部命令集

```
git add .
git commit -m "type: desc"
git checkout target
git pull
git push
mofancmds batchmerge -s source
```

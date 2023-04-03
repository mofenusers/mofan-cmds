# mofan-cmds

<br/>

## batchmerge

### 批量合并（merge）source 分支到目标分支

### 示例

```javascript
mofancmds batchmerge -s source

mofancmds batchmerge -s source -t [...args]
```

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

#### 内部命令集

```
git add .
git commit -m "type: desc"
git checkout target
git pull
git push
mofancmds batchmerge -s source
```

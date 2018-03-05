# Scout
可能是东半球最灵活的 URL 监控系统

![demo](https://i.imgur.com/xblcsIS.png)

### 特色

#### 功能
- 自定义请求方法、请求头、请求体
- HTTP 状态码、响应时间、返回主体检测
- **用 JavaScript 代码写检测条件！详情请见使用指南**
- 自定义检测时间间隔
- 支持活跃时间段，活跃时间外不检测
- 支持异常容忍次数，连续异常次数在此之下的不告警
- 可配置从异常状态中恢复时是否通知到接受组
- 告警通过 HTTP 传输数据，可自由配置接受告警的 URL
- 支持 Apdex

#### 用户界面（就是好看又好用）

- 写测试用例时，即时查看代码运行结果，并且 JSON 与 JavaScript 语法高亮
- 编辑活跃时间段时，有直观的图表显示
- 可按标签、按源，或者手动多选监控条目，然后批量修改
- 可查看告警记录，记录了每条告警的发送状态
- 对于每个监控条目，有对应的详情页

#### [**使用指南**](https://github.com/HandsomeOne/Scout/wiki)

### 截图

![](https://i.imgur.com/W0U9uPQ.png)

![](https://i.imgur.com/hOmr2KQ.png)

![](https://i.imgur.com/SAERuF8.png)

### 环境需求
```
Node.js v6+
MongoDB v3+
```
（应用处于开发阶段，低级版本未经测试）

### 安装与启动
```sh
git clone https://github.com/HandsomeOne/Scout.git

cd Scout/client
yarn
yarn build

cd ../server
yarn
yarn build

npm install -g pm2
pm2 start ./server/build mongodb://username:password@host/database
# MongoDB URI 格式参见 (https://docs.mongodb.com/manual/reference/connection-string/)
# 若不传，默认为 `mongodb://localhost/scout`
```
然后访问 http://localhost:3001/ 。

### Docker启动
```sh
git clone https://github.com/HandsomeOne/Scout.git

cd Scout/

docker-compose up -d
```

### 升级
```sh
cd Scout
git pull --force
cd client
yarn
yarn build

cd ../server
yarn
yarn build
```

欢迎 issues 和 PRs。

### 待实现
- [ ] 监控可启动、暂停
- [ ] 高级选项的默认值可以配置
- [x] 使用 Redux 重构前端数据层（感谢 @retanoj）
- [ ] 详情页补全与优化
    - [ ] Apdex
    - [ ] 响应时间
    - [ ] 状态码
    - [ ] 状态信息用饼状图实现
- [ ] 表单验证
- [ ] 分布式

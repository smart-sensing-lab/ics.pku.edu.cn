# ics.pku.edu.cn

Official Website for Intelligent Computing and Sensing Laboratory, Peking University.

## Install

`ics.pku.edu.cn` is built on Node.js and powered by [Brick.JS][brick.js].
`redis-server` and `mongodb` are need:

Redis-Server:

<http://redis.io/>

MongoDB:

<https://www.mongodb.com/download-center#community>

## Build and Run

Clone and build:

```bash
git clone git@github.com:smart-sensing-lab/ics.pku.edu.cn.git
cd ics.pku.edu.cn && npm install brick-asset all
```

Create `config.json`, and do your configuration:

```bash
cp config.example.json config.json
vim config.json   # make configurations
```

Run ics with mongoDB and Redis:

```bash
mongod &
redis-server &
npm start
```

## Development

Install [gulp][gulp]:

```bash
npm install gulp
```

Build and Serve:

```bash
gulp
```

Build assets only:

```bash
gulp build
```

## Deployment

1. Change `config.env` (within `config.json`) to `"production"`.

2. Build:

  ```bash
  gulp dist
  ```

3. Run MongoDB and Redis-Server

4. `npm start`

[gulp]: http://gulpjs.com/
[brick.js]: https://github.com/brick-js/brick.js

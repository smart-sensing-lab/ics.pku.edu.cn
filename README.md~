# ics.pku.edu.cn

Official Website for Intelligent Computing and Sensing Laboratory, Peking University.

## Install

`ics.pku.edu.cn` is built on Node.js and powered by [Brick.JS][brick.js].
`redis-server`, `mongodb`, and `gulp` are need:

Download and install Redis-Server:

<http://redis.io/>

Download and install MongoDB:

<https://www.mongodb.com/download-center#community>

Install [gulp][gulp]:

```bash
npm install gulp -g
```

## Build and Run

Clone and build:

```bash
git clone git@github.com:smart-sensing-lab/ics.pku.edu.cn.git
cd ics.pku.edu.cn && npm install
gulp build
```

Create `config.json`, and do your configuration:

```bash
cp config.example.json config.json
vim config.json   # make configurations as needed
```

Run ics with mongoDB and Redis:

```bash
mongod &
redis-server &
npm start
```

## Development

Build and Serve:

```bash
gulp
```

## Deployment

1. Change `config.env` (within `config.json`) to `"production"`, update `config.deploy` accordingly.

2. Build:

  ```bash
  gulp dist
  ```

3. Run MongoDB and Redis-Server

4. `npm start`

## Admin Users

Update admin users:

1. Update `config.admin` (make sure `config.mongodb` is valid)
2. Run MongoDB
3. `node ./bin/update-admin.js`

[gulp]: http://gulpjs.com/
[brick.js]: https://github.com/brick-js/brick.js

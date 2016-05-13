# ics.pku.edu.cn

Official Website for Intelligent Computing and Sensing Laboratory, Peking University.

## Install

This repo is built on Node.js, and powered by [Brick.JS][brick.js].
Install requirements:

```bash
npm install -g brick-asset
```

## Build and Run

Clone and build:

```bash
git clone git@github.com:smart-sensing-lab/www.git
cd www && npm install
brick-asset all
```

Create `config.json`, and do your configuration:

```bash
cp config.example.json config.json
vim config.json   # make configurations
npm start
```

## Development

Install [gulp][gulp]:

```bash
npm install gulp
```

Build for Development:

```bash
gulp
```

Build assets only:

```bash
gulp asset
```

[grulp]: http://gulpjs.com/
[brick.js]: https://github.com/brick-js/brick.js

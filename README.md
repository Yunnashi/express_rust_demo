# Express RUST DEMO my sample

## 今回の RUST の内容

GET /comments - コメント一覧を取得

POST /comments - 新しいコメントを作成

GET /comments/:id - 特定のコメントを一つ取得

PATCH /comments/:id - 特定のコメントを更新

DELETE /comments/:id - 特定のコメントを削除

## 実行方法

クローン後

```
npm i
```

node の実行

```
nodemon index.js
```

## 構築手順メモ

### 事前準備（今回は DEMO のため PC に Node をインストールして実施）

・Node.js のインストール
https://nodejs.org/en/download

・nodemon のインストール
https://www.npmjs.com/package/nodemon

・PATCH と DELETE は html の Form が標準でサポートしていないため、method-override というパッケージを利用
https://www.npmjs.com/package/method-override

・フロント側の構築に ejs というパッケージを利用
https://ejs.co/

```
$ npm install ejs
```

views ディレクトリの作成

```
mkdir views
```

この中に ejs ファイルを作成する必要がある

### Express の構築

空の package.json を作成

```
npm init
```

→ 全部 Enter

Express をインストール

```
npm i express
```

index.js を作成

```
touch index.js
```

index.js 内に以下を記入

```
const express = require("express");
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`リクエストをポート${PORT}で待機中...`);
});
```

Express の初期設定完了


# Express RUST DEMO my sample

## 今回のRUSTの内容
GET /comments - コメント一覧を取得

POST /comments - 新しいコメントを作成

GET /comments/:id - 特定のコメントを一つ取得

PATCH /comments/:id - 特定のコメントを更新

DELETE /comments/:id - 特定のコメントを削除

## 実行方法
```
nodemon index.js
```

## 構築手順メモ

### 事前準備（今回はDEMOのためPCにNodeをインストールして実施）
・Node.jsのインストール
https://nodejs.org/en/download

・nodemonのインストール
https://www.npmjs.com/package/nodemon

・フロント側の構築にejsというパッケージを利用
https://ejs.co/
```
$ npm install ejs
```

viewsディレクトリの作成
```
mkdir views
```
この中にejsファイルを作成する必要がある


### Expressの構築
空のpackage.jsonを作成
```
npm init
```
→全部Enter

Expressをインストール
```
npm i express
```

index.jsを作成
```
touch index.js
```

index.js内に以下を記入
```
const express = require("express");
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`リクエストをポート${PORT}で待機中...`);
});
```

Expressの初期設定完了













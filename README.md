# sakiyama authenticator
2FAの際、google authenticatorを携帯でみるのがいやな人むけです。
セキュアなPCじゃないとおすすめしません。

![console](/console.png)

## 必要なもの
nodejs LTSがよかです。

https://nodejs.org/en/

## インストール
cloneかzipダウンロードして
```
npm install --production
```

## 設定
QRコードの画像かシークレットを書いたtextファイルを自分で分かりやすい名前を付けて
secretフォルダに入れてください。
sampleが２個あるので参考にしてください。

## 開始
```
npm start
```
windowsなら start.batに書いてます。start.batダブルクリックで起動します。

## 見方
左がGoogle authenticatorと同じ乱数　
右がファイル名です。

MIT
使用は自己責任でお願いします。
サポートはありません。

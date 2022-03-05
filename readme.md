# Patchouli
discord.jsを用いた東方Projectのキャラクターであるパチュリーのbotです。

## 動機（重要）
botを作りたくなりました。複雑な事情によりTypeScriptを使っています。（使いたかっただけです）
自分が認識していた以上にJavaScriptと違うところもあって、使わないとこういうのわからないかなあって感じたのが大きいですね...

# 注意点
dotenvを使っています。`.env` ファイルを`build/` に作って、`TOKEN="ocjajcoijcjajaecjoi"` のようにDiscordのbotのトークンを入力しておいてください。
また、node.jsのバージョンは16以上が必要です。（discord.jsのv.13を利用していますが、それにこのバージョンが要求されています。）

## 開発環境
Ubuntu20.04, node.js v16.14.0(with npm 6.14.15)
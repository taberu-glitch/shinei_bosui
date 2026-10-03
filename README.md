# 有限会社新栄サービス Webサイト

## ページ一覧
| ファイル | ページ |
|---|---|
| index.html | トップ |
| service.html | 事業案内 |
| waterproofing.html / roofing.html / repair.html | 防水工事 / 屋根工事 / 雨漏り調査・補修 |
| works.html | 施工実績（種類で絞り込み可） |
| company.html | 会社情報（会社概要・アクセス・地図） |
| recruit.html | 採用情報 |
| news.html | お知らせ |
| contact.html | お問い合わせフォーム |
| privacy.html | 個人情報保護方針 |

色・フォントは `assets/css/style.css` 冒頭の `:root` で一括変更できます。

## 仮原稿について
仮原稿の箇所には class="-draft" が付いています（画面上の黄色い囲みは非表示にしました）。
再び表示したいときは、各HTMLの `<body>` の class に `is-draft-mode` を足してください。

主な要確認項目：代表者名・設立・資本金・建設業許可番号・営業時間/定休日・募集要項・施工実績（サンプル）・お知らせ（サンプル）・キャッチコピー・個人情報保護方針の制定日

## 画像の差し替え（同じファイル名で上書き）
| ファイル | 使用箇所 |
|---|---|
| common/logo.svg | ロゴ（正式版。ヘッダーでは社名の文字と並べて表示） |
| common/cta.jpg | 各ページ下部のお問い合わせ欄 |
| common/ogp.jpg | SNSシェア画像（1200×630） |
| top/hero.jpg | トップのメイン画像（横長） |
| top/message.jpg | トップ「ごあいさつ」 |
| service/service.jpg | 事業案内ページ上部（横長） |
| service/waterproofing.jpg / roofing.jpg / repair.jpg | 各工事の写真 |
| works/works_01〜06.jpg | 施工実績 |
| company/company.jpg | 代表あいさつ |
| recruit/recruit.jpg / work_01.jpg / work_02.jpg | 採用情報 |

比率が多少違っても枠に合わせて自動でトリミングされます。

## お問い合わせフォーム
現在は送信先が未設定です（送信すると「準備中」と表示）。
contact.html の form に送信先URL（action）を設定し、`data-endpoint="ready"` にすると送信できるようになります。
採用情報の「応募フォーム」からは種別「採用」が自動で選ばれます。

## 公開前に
- Google アナリティクス等の計測タグを各ページの `<head>` に追加
- og:image を絶対URLに変更

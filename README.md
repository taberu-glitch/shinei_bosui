# 有限会社新栄サービス Webサイト

## ページ一覧
| ファイル | ページ |
|---|---|
| index.html | トップ |
| service.html | 事業案内 |
| waterproofing.html / painting.html / repair.html | 防水工事 / 外壁塗装 / 雨漏り調査・補修 |
| roofing.html | 旧「屋根工事」ページ。painting.html へ自動で移動します（削除しても可） |
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

主な要確認項目：設立・資本金・建設業許可番号・営業時間/定休日・外壁塗装ページの本文・代表あいさつ2段落目・お知らせ（サンプル）・キャッチコピー・個人情報保護方針の制定日
（2026-10-09 ヒアリングシートの回答を反映済み）

## 画像の差し替え（同じファイル名で上書き）
| ファイル | 使用箇所 |
|---|---|
| common/logo.svg | ロゴ（正式版。ヘッダーでは社名の文字と並べて表示） |
| common/ogp.jpg | SNSシェア画像（1200×630） |
| top/hero.jpg | トップのメイン画像（横長） |
| top/message.jpg | トップ「ごあいさつ」 |
| service/waterproofing.jpg / painting.jpg / repair.jpg | 各工事の写真 |
| works/〇〇_before.jpg / 〇〇_after.jpg | 施工実績（施工前／施工後。左右スライダーで比較表示） |
| company/company.jpg | 代表あいさつ |

比率が多少違っても枠に合わせて自動でトリミングされます。

## お問い合わせフォーム
現在は送信先が未設定です（送信すると「準備中」と表示）。
contact.html の form に送信先URL（action）を設定し、`data-endpoint="ready"` にすると送信できるようになります。
採用情報の「応募フォーム」からは種別「採用」が自動で選ばれます。

## 公開前に
- Google アナリティクス等の計測タグを各ページの `<head>` に追加
- og:image を絶対URLに変更

## 施工実績の追加方法
1. `assets/img/works/` に `名前_before.jpg`（施工前）と `名前_after.jpg`（施工後）を入れる（横長4:3推奨。表札・看板・ナンバーはぼかす）
2. works.html の `<ul class="c-works-grid">` 内の `<li class="c-works-card">…</li>` を1つコピーし、画像名・タイトル・タグを書き換える
3. `data-cat` は waterproofing（防水工事）／painting（外壁塗装）／repair（雨漏り補修）のいずれか

## SEO対策（2026-10-19 追加）
- 本番ドメイン `https://shinei1991.jp/` を前提に、全ページへ canonical・og:url・絶対URLの og:image・favicon を設定
- 構造化データ（JSON-LD）：トップ＝事業者情報（住所・電話・営業時間・対応エリア）/ 各下層＝パンくず / 防水・塗装・雨漏り＝サービス / 採用＝求人情報（Googleしごと検索用）
- `sitemap.xml` と `robots.txt` をルートに追加
- 対応エリア（構造化データ内）：所沢市・狭山市・入間市・川越市・新座市・三芳町・東村山市・清瀬市・東大和市（**要確認**）
- 求人情報の掲載期限（validThrough）は 2027-03-31。募集を続ける場合は更新すること
- ドメインを変える場合は各HTMLの `shinei1991.jp` と sitemap.xml / robots.txt を一括置換

## 表示速度の改善（2026-10-25）
- 写真をWebP形式に変換し、スマホ用の小さいサイズ（-800 / -1200）を自動で出し分け（srcset）
- ファーストビュー以外の画像は遅延読み込み（loading="lazy"）、ヒーロー画像は優先読み込み（preload / fetchpriority）
- Googleフォントを表示をブロックしない読み込み方に変更
- ローディング演出は「全画像の読み込み完了」ではなく「ヒーロー画像の準備完了」で終了（最長3秒）
- 元のJPGは残しています（OGP画像 common/ogp.jpg は引き続き使用）。画像を差し替えるときはWebPも作り直すこと

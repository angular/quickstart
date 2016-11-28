ニュース仕様
===

ニュースAPIの仕様についてまとめる。

ニュース一覧取得API
---

### API仕様

* ログイン後のみコールされる。ログイン前はコールされない。よって、AccessToken認可のみ考慮する。

### シーケンス

![list-after-login.png](data/out/news-after-login.png)

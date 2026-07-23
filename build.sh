#!/usr/bin/env bash
# =============================================================
# TRIDENT COMPANY — 配信用ディレクトリ dist/ を作る
#   Cloudflare Workers (Static Assets) の Build command から呼ばれる。
#   公開するファイルだけを dist/ にコピーする
#   （.git や、サイトから参照していない元画像PNGは配信対象に含めない）
# =============================================================
set -euo pipefail

cd "$(dirname "$0")"
rm -rf dist
mkdir -p dist

# --- ルート直下の配信ファイル ---
cp index.html 404.html robots.txt sitemap.xml favicon.ico _headers _redirects dist/

# --- 各ページ（ディレクトリごと） ---
for page in towing custom maintenance bodywork sales company contact privacy; do
  cp -R "$page" dist/
done

# --- 共通アセット（css / js / data / 画像） ---
mkdir -p dist/assets
cp -R assets/css assets/js assets/data dist/assets/

# 画像は「サイトから参照しているもの」だけを配信する。
# 元画像の *.png（hero-wide.png 等）は OGP画像の生成元でありサイトからは未参照のため除外。
mkdir -p dist/assets/img
cp -R assets/img/ig dist/assets/img/
cp assets/img/*.svg dist/assets/img/
cp assets/img/logo.png \
   assets/img/hero-car-toon.png \
   assets/img/hero-wheel-f.png \
   assets/img/hero-wheel-r.png \
   assets/img/ogp.jpg \
   assets/img/favicon-32.png \
   assets/img/favicon-192.png \
   assets/img/apple-touch-icon.png \
   dist/assets/img/

echo "build 完了: $(find dist -type f | wc -l | tr -d ' ') ファイル / $(du -sh dist | cut -f1)"

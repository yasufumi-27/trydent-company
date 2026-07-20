/* =============================================================
   TRIDENT COMPANY — Instagram 投稿リスト
   「施工・入庫の様子」に表示する投稿をここで管理する。
   ここに登録した投稿の中からランダムに 6 件が表示される。

   追加・更新の手順：
     1. Instagram の投稿を開き「リンクをコピー」で permalink を取得
        （例: https://www.instagram.com/p/XXXXXXXXXXX/）
     2. 投稿画像を assets/img/ig/ に保存（正方形推奨）
     3. 下の配列に { url, image, alt } を 1 件追加

   ※ 現在の url / image はダミー。本番反映時に実投稿へ差し替えること。
   ============================================================= */
window.IG_POSTS = [
  { url: 'https://www.instagram.com/car_20555/', image: 'assets/img/custom-2.svg',      alt: 'カスタム施工の様子' },
  { url: 'https://www.instagram.com/car_20555/', image: 'assets/img/sales-2.svg',       alt: '販売車両の入庫' },
  { url: 'https://www.instagram.com/car_20555/', image: 'assets/img/hero-portrait.svg', alt: '入庫車両の様子' },
  { url: 'https://www.instagram.com/car_20555/', image: 'assets/img/maintenance.svg',   alt: '整備・点検の様子' },
  { url: 'https://www.instagram.com/car_20555/', image: 'assets/img/bodywork.svg',      alt: '板金・塗装の施工' },
  { url: 'https://www.instagram.com/car_20555/', image: 'assets/img/towing.svg',        alt: 'レッカー入庫の様子' },
  { url: 'https://www.instagram.com/car_20555/', image: 'assets/img/custom.svg',        alt: 'カスタム施工の様子' },
  { url: 'https://www.instagram.com/car_20555/', image: 'assets/img/sales.svg',         alt: '販売車両の入庫' }
];

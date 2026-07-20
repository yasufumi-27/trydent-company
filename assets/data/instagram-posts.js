/* =============================================================
   TRIDENT COMPANY — Instagram 投稿リスト
   「施工・入庫の様子」に表示する投稿をここで管理する。
   ここに登録した投稿の中からランダムに 6 件が表示される。

   追加の手順：
     1. Instagram の投稿を開き「リンクをコピー」で permalink を取得
     2. サムネイルを assets/img/ig/<ショートコード>.jpg で保存
     3. 下の配列に { url, image, alt } を 1 件追加
   ============================================================= */
window.IG_POSTS = [
  { url: 'https://www.instagram.com/car_20555/p/DHYOEVEyByz/', image: 'assets/img/ig/DHYOEVEyByz.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/DGPBVTJzS4d/', image: 'assets/img/ig/DGPBVTJzS4d.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/DFrOWS2ydJn/', image: 'assets/img/ig/DFrOWS2ydJn.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/DFrNxedy4ZI/', image: 'assets/img/ig/DFrNxedy4ZI.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/DFrNhfMSa7k/', image: 'assets/img/ig/DFrNhfMSa7k.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/DCA43_5S76t/', image: 'assets/img/ig/DCA43_5S76t.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/C1Jl_TtpTNo/', image: 'assets/img/ig/C1Jl_TtpTNo.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/C1JldctpPnM/', image: 'assets/img/ig/C1JldctpPnM.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CzTGPRIpuDG/', image: 'assets/img/ig/CzTGPRIpuDG.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CzTEbwopAq9/', image: 'assets/img/ig/CzTEbwopAq9.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CzS_NjCJ684/', image: 'assets/img/ig/CzS_NjCJ684.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CxcBe62JaPs/', image: 'assets/img/ig/CxcBe62JaPs.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CxcBQimJE1i/', image: 'assets/img/ig/CxcBQimJE1i.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/Cwq5mxZybZ6/', image: 'assets/img/ig/Cwq5mxZybZ6.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/Cviub2wySyR/', image: 'assets/img/ig/Cviub2wySyR.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CviuNQGSeVd/', image: 'assets/img/ig/CviuNQGSeVd.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CvLvVFwJXlB/', image: 'assets/img/ig/CvLvVFwJXlB.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CuIsSM7SFoz/', image: 'assets/img/ig/CuIsSM7SFoz.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/Cty8LlXJba8/', image: 'assets/img/ig/Cty8LlXJba8.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/Cty7RC9pf-t/', image: 'assets/img/ig/Cty7RC9pf-t.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CtXlZ7QSsmr/', image: 'assets/img/ig/CtXlZ7QSsmr.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CsuYFprS6iR/', image: 'assets/img/ig/CsuYFprS6iR.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CsKXklhSo8M/', image: 'assets/img/ig/CsKXklhSo8M.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CrrfIVTS3Fv/', image: 'assets/img/ig/CrrfIVTS3Fv.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CrmwZz8JXQ1/', image: 'assets/img/ig/CrmwZz8JXQ1.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CrfgtdoJGkC/', image: 'assets/img/ig/CrfgtdoJGkC.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CiYpd7kBz8h/', image: 'assets/img/ig/CiYpd7kBz8h.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/Ch97Krcp15B/', image: 'assets/img/ig/Ch97Krcp15B.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/Ch96lRVJEUw/', image: 'assets/img/ig/Ch96lRVJEUw.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/Cfv0AvrpZaV/', image: 'assets/img/ig/Cfv0AvrpZaV.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CflwJdnJ4LL/', image: 'assets/img/ig/CflwJdnJ4LL.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
  { url: 'https://www.instagram.com/car_20555/p/CfkdaffPZDk/', image: 'assets/img/ig/CfkdaffPZDk.jpg', alt: '施工・入庫の様子（Instagram投稿）' },
];

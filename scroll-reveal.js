// スクロール時にアニメーションを発動
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observerの設定
    const observerOptions = {
        root: null, // ビューポートを基準にする
        rootMargin: '0px',
        threshold: 0.1 // 要素が10%見えたら発動
    };

    // Intersection Observerのコールバック
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面内に入ったらアニメーションクラスを追加
                entry.target.classList.add('slide-up-reveal--active');
                // 一度発動したら監視を停止
                observer.unobserve(entry.target);
            }
        });
    };

    // Observerのインスタンスを作成
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // .slide-up-revealクラスを持つ全ての要素を監視対象に
    const elements = document.querySelectorAll('.slide-up-reveal');
    
    elements.forEach(element => {
        // 初期状態ではアニメーションを無効化
        element.classList.remove('slide-up-reveal--active');
        observer.observe(element);
    });
});

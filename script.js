document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const drawer = document.querySelector(".drawer-menu");

    // ハンバーガーの開閉
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        hamburger.classList.toggle("active");
        drawer.classList.toggle("open");
    });

    // ドロワーメニューの中をクリックしても閉じない
    drawer.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // ドロワーメニュー以外をクリックした時は閉じる
    document.addEventListener("click", () => {
        if (drawer.classList.contains("open")) {
            drawer.classList.remove("open");
            hamburger.classList.remove("active");
        }
    });

    // 開いているページをハイライト
    const path = location.pathname;
    const currentPath = path.endsWith("/")
        ? "index.html"
        : path.split("/").pop();
    const menulinks = document.querySelectorAll(".drawer-menu a");

    menulinks.forEach(link => {
        const linkPath = link.getAttribute("href");

        if (linkPath === currentPath) {
            link.classList.add("active-page");
        }
    });

    // スクロールのアニメーション
    const fadeElements = document.querySelectorAll('.fadein');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2   // 画面の20%が見えたら発動
    });

    fadeElements.forEach(el => observer.observe(el));

    // スライドショーの設定
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    if (slidesContainer && slides.length > 0) {
        setInterval(() => {
            currentIndex++;

            // 最後まで行ったら最初に戻る
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }

            slidesContainer.style.transform =
            `translateX(-${currentIndex * 100}%)`;
        }, 3000);
    }
}); // DOMContentLoaded end


// Textillate.js アニメーション
$(function() {
    $('.tlt').textillate({
        in: {
            effect: 'fadeInUp',
            delay: 50
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const mouseCircle = document.querySelector(".mouse-circle");
    const mouseDot = document.querySelector(".mouse-dot");

    // Mouse dairelerinin konumunu güncelleyen fonksiyon
    const mouseCircleFn = (x, y) => {
        mouseCircle.style.cssText = `top:${y}px; left:${x}px;`;
        mouseDot.style.cssText = `top:${y}px; left:${x}px;`;
    };

    // Fare hareket ettikçe şekilleri güncelle
    document.body.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        mouseCircleFn(x, y);
    });

    // Fare sayfadan çıkınca şekilleri gizle
    document.body.addEventListener('mouseleave', () => {
        mouseCircle.style.opacity = "0";
        mouseDot.style.opacity = "0";
    });

    // Fare sayfaya geri döndüğünde şekilleri tekrar göster
    document.body.addEventListener('mouseenter', () => {
        mouseCircle.style.opacity = "1";
        mouseDot.style.opacity = "1";
    });
});

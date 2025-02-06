document.addEventListener("DOMContentLoaded", () => {
    const mouseCircle = document.querySelector(".mouse-circle");
    const mouseDot = document.querySelector(".mouse-dot");

    // Mouse dairelerinin konumunu güncelleyen fonksiyon
    const mouseCircleFn = (x, y) => {
        mouseCircle.style.cssText = `top:${y}px; left:${x}px; opacity:1`;
        mouseDot.style.cssText = `top:${y}px; left:${x}px; opacity:1`;
    };

    const circles = document.querySelectorAll(".circle");
    const mainImg = document.querySelector(".main-circle img");

    let mX = 0; 
    let mY = 0;
    const z =100;

    const animateCircles = (e, x, y) => {
        if (x < mX) {
            circles.forEach((circle) => {  // Hata düzeltildi
                circle.style.left = `${z}px`;
            });
            mainImg.style.left=`${z}px`;
        }else if(x > mX){
            circles.forEach((circle) => {  // Hata düzeltildi
                circle.style.left = `-${z}px`;
            });
            mainImg.style.left=`-${z}px`;
        }
        if (y < mY) {
            circles.forEach((circle) => {  // Hata düzeltildi
                circle.style.top = `${z}px`;
            });
            mainImg.style.top=`${z}px`;
        }else if(y>mY){
            circles.forEach((circle) => {  // Hata düzeltildi
                circle.style.top = `-${z}px`;
            });
            mainImg.style.top=`-${z}px`;
        }

        mX = e.clientX;
        mY = e.clientY;
    };

    // Fare hareket ettikçe şekilleri güncelle
    document.body.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        mouseCircleFn(x, y);
        animateCircles(e, x, y);
    });

    // Fare sayfadan çıkınca şekilleri gizle
    document.body.addEventListener("mouseleave", () => {
        mouseCircle.style.opacity = "0";
        mouseDot.style.opacity = "0";
    });

    // Fare sayfaya geri döndüğünde şekilleri tekrar göster
    document.body.addEventListener("mouseenter", () => {
        mouseCircle.style.opacity = "1";
        mouseDot.style.opacity = "1";
    });
});
const mainBtn = document.querySelector('.main-btn');
let ripple;

mainBtn.addEventListener('mouseenter', e => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top; // Hata düzeltildi

    ripple = document.createElement('div');
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    mainBtn.prepend(ripple);
});

mainBtn.addEventListener('mouseleave',() => {
    mainBtn.removeChild(ripple);
})

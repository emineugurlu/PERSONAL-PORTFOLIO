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
    const z = 100;

    const animateCircles = (e, x, y) => {
        if (x < mX) {
            circles.forEach((circle) => {
                circle.style.left = `${z}px`;
            });
            mainImg.style.left = `${z}px`;
        } else if (x > mX) {
            circles.forEach((circle) => {
                circle.style.left = `-${z}px`;
            });
            mainImg.style.left = `-${z}px`;
        }
        if (y < mY) {
            circles.forEach((circle) => {
                circle.style.top = `${z}px`;
            });
            mainImg.style.top = `${z}px`;
        } else if (y > mY) {
            circles.forEach((circle) => {
                circle.style.top = `-${z}px`;
            });
            mainImg.style.top = `-${z}px`;
        }

        mX = e.clientX;
        mY = e.clientY;
    };

    document.body.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        mouseCircleFn(x, y);
        animateCircles(e, x, y);
    });

    document.body.addEventListener("mouseleave", () => {
        mouseCircle.style.opacity = "0";
        mouseDot.style.opacity = "0";
    });

    document.body.addEventListener("mouseenter", () => {
        mouseCircle.style.opacity = "1";
        mouseDot.style.opacity = "1";
    });
});

const mainBtns = document.querySelectorAll('.main-btn'); // querySelectorAll kullanıldı

mainBtns.forEach(btn => {
    btn.addEventListener('mouseenter', e => {
        let ripple = document.createElement('div');  // ripple her btn için ayrı tanımlandı
        const left = e.clientX - e.target.getBoundingClientRect().left;
        const top = e.clientY - e.target.getBoundingClientRect().top;

        ripple.classList.add("ripple");
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        btn.prepend(ripple);
    });

    btn.addEventListener('mouseleave', () => {
        btn.querySelector('.ripple')?.remove(); // ripple öğesini güvenli bir şekilde silme
    });
});

const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent = "I am a web designer, creating websites with the best user experience. I don’t talk much just contact me! ";

Array.from(aboutMeTextContent).forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    aboutMeText.appendChild(span);

    span.addEventListener('mouseenter', (e) => {
        // Animasyon süresi 10 saniye olarak ayarlandı
        e.target.style.animation = "aboutMeTextAnim 10s infinite"; 
    });
});

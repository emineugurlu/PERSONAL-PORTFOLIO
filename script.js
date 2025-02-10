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

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const projects = document.querySelectorAll(".project");
    
    const projectHidenBtn = document.querySelector(".project-hiden-btn");

    projects.forEach(project=> {
        const img = project.querySelector("img"); // Resmi alıyoruz.

        if (!img) return; // Eğer resim yoksa, işlem yapma.

       
      


        project.addEventListener('click', () => {
            // Büyük video wrapper'ını oluştur
            const bigImgWrapper = document.createElement("div");
            bigImgWrapper.className = "project-img-wrapper";

            // Kapatma butonunu ekle
            const closeButton = document.createElement("span");
            closeButton.innerText = "X";
            closeButton.className = "close-btn";
            bigImgWrapper.appendChild(closeButton);

            // Resim kaynağını al ve yeni video oluştur
           // Resim kaynağını al ve yeni video oluştur
const imgPath = project.querySelector("img").getAttribute("src").split(".")[0];
const video = document.createElement("video");
video.className = "project-video";
video.setAttribute("src", `${imgPath}-big.mp4`);
video.setAttribute("controls", "true");
video.setAttribute("muted", "true");  // Tarayıcı engellememesi için ses kapalı
video.setAttribute("loop", "true");   // Videonun tekrar başlaması için

// Videoyu oluşturduktan sonra, ilk başta oynatmaya çalış
video.play().catch(error => {
    console.log("Otomatik oynatma engellendi:", error);
    
    // Eğer otomatik oynatma engellenirse, kullanıcı etkileşimi ile başlatmayı sağla
    const playButton = document.createElement("button");
    playButton.textContent = "Play Video";
    bigImgWrapper.appendChild(playButton);

    // Play butonuna tıklanabilir hale getir
    playButton.addEventListener("click", () => {
        video.play().catch(playError => console.log("Video oynatılırken hata:", playError));
        playButton.style.display = "none";  // Butonu gizle
    });
});

// Videoyu wrapper'a ekle
bigImgWrapper.appendChild(video);
document.body.appendChild(bigImgWrapper);


            // Sayfanın kaydırmasını engelle
            document.body.style.overflowY = "hidden";
            projectHidenBtn.classList.add("change");

            // Kapatma işlemi
            closeButton.addEventListener('click', () => {
                bigImgWrapper.remove();
                document.body.style.overflowY = "scroll"; // Kaydırmayı aç
            });

            // Wrapper'a tıklanınca kapatma
            bigImgWrapper.addEventListener('click', (event) => {
                if (event.target === bigImgWrapper) {
                    bigImgWrapper.remove();
                    document.body.style.overflowY = "scroll";
                }
            });

            // Project hide butonuna tıklama işlevi
            projectHidenBtn.onclick = () => {
                projectHidenBtn.classList.remove("change");
                bigImgWrapper.remove();
                document.body.style.overflowY = "scroll";
            };
        });

        
    });
});


//Section 4
document.querySelectorAll(".service-btn").forEach(service => {
    service.addEventListener('click', e => {
        e.preventDefault();

        const serviceText = service.nextElementSibling;
        serviceText.classList.toggle("change");
    });
});

//End Of Section 4




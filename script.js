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

//Progess Bar
document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".progess-bar");
    const halfCircles = document.querySelectorAll(".half-circle");
    const halfCirclesTop = document.querySelectorAll(".half-circle-top");
    const progressBarCircle = document.querySelector(".progess-bar-circle");

    if (!progressBarCircle) {
        console.error("HATA: .progress-bar-circle elementi bulunamadı! HTML içinde doğru olduğundan emin olun.");
        return; // Eğer öğe yoksa fonksiyonu çalıştırma.
    }

    let lastScrollY = window.scrollY; // Önceki scroll konumu

    const progressBarFn = () => {
        const pageViewportHeight = window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        const scrolledPortion = window.scrollY;

        // Sayfanın ne kadar kaydırıldığını hesapla (0 ile 360 derece arasında)
        const scrolledPortionDegree = (scrolledPortion / (pageHeight - pageViewportHeight)) * 360;

        // Yarım daireleri döndür
        halfCircles.forEach(el => {
            el.style.transform = `rotate(${scrolledPortionDegree}deg)`;
        });

        // Eğer 180 dereceyi geçtiyse ilk elemanı sabitle
        if (scrolledPortionDegree >= 180) {
            halfCircles[0].style.transform = "rotate(180deg)";
            
            // .half-circle-top elemanlarını gizle
            halfCirclesTop.forEach(el => el.style.opacity = "0");
        } else {
            // .half-circle-top elemanlarını tekrar görünür yap
            halfCirclesTop.forEach(el => el.style.opacity = "1");
        }
        const isAtBottom = scrolledPortion + pageViewportHeight >= pageHeight - 5;
        
        if (isAtBottom) {
            // Sayfanın en altına gelindiğinde ok simgesini aşağıya döndür
            progressBarCircle.style.transform = "rotate(180deg)";
        } else if (scrolledPortion > lastScrollY) {
            // Aşağı kaydırıyor -> Ok aşağıya döner
            progressBarCircle.style.transform = "rotate(180deg)";
        } else if (scrolledPortion < lastScrollY) {
            // Yukarı kaydırıyor -> Ok yukarıya döner
            progressBarCircle.style.transform = "rotate(0deg)";
        }
        lastScrollY = scrolledPortion; // Scroll konumunu güncelle
    };

    // Scroll olayını dinle
    window.addEventListener("scroll", progressBarFn);
});





//End Of Progess Bar

// Navigation
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) { 
    document.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            menuIcon.classList.add('show-menu-icon');
            navbar.classList.add('hide-navbar');
        } else {
            menuIcon.classList.remove('show-menu-icon');
            navbar.classList.remove('hide-navbar');
        }
    });

    // İlk çalıştırma (sayfa yüklenirken)
    
} else {
    console.error("menu-icon veya navbar bulunamadı!");
}

// Menü ikonuna tıklayınca navbar'ı tekrar göster
if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.remove('show-menu-icon');
        navbar.classList.remove('hide-navbar');
    });
}





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

        const rightPosition = serviceText.classList.contains('change') 
         ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})`
         : 0;

        service.firstElementChild.style.right = rightPosition;
    });
});

//End Of Section 4


//Section 5
//Form
const formHeading = document.querySelector('.form-heading');
const formInputs = document.querySelectorAll('.contact-form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = `Your ${input.placeholder}`;
            formHeading.style.opacity = "1";
        }, 300); // Focus sırasında gecikme
    });

    input.addEventListener('blur', () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = `Let's Talk`;
            formHeading.style.opacity = "1";
        }, 300); // Blur sırasında gecikme
    });
});

//End Of Form
//Slideshow

const slideshow = document.querySelector('.slideshow');

setInterval(() => {
    const firstIcon = slideshow.firstElementChild;
    if (firstIcon) {
        firstIcon.classList.add('faded-out'); // İlk öğeyi sönük hale getir

        setTimeout(() => {
            slideshow.removeChild(firstIcon);
            slideshow.appendChild(firstIcon);
            firstIcon.classList.remove('faded-out'); // Kaydırdıktan sonra eski haline getir
        }, 500);
    }

    // **Tüm öğelerden 'light' sınıfını kaldır**  
    Array.from(slideshow.children).forEach(child => child.classList.remove('light'));

    // **Ortadaki öğeye 'light' ekle**
    const middleIndex = Math.floor(slideshow.children.length / 2);
    const middleIcon = slideshow.children[middleIndex];
    if (middleIcon) {
        middleIcon.classList.add('light'); // Ortaya gelen her öğe parlayacak!
    }
}, 3000);



//End Of Slideshow


//Form Validation
const form = document.querySelector('.contact-form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const error = (input, message) => {
    input.nextElementSibling.classList.add("error");
    input.nextElementSibling.textContent = message;
};

const success = (input) => {
    input.nextElementSibling.classList.remove("error");
};

// Hatalı inputları kontrol et
const checkRequiredFields = (inputArr) => {
    inputArr.forEach(input => {
        if (input.value.trim() === "") {
            error(input, `${input.id} is required`);
        }
    });
};

// Karakter uzunluğunu kontrol et
const checkLength = (input, min) => {
    if (input.value.trim().length < min) {
        error(input, `${input.id} must be at least ${min} characters`);
    } else {
        success(input);
    }
};

// Email geçerliliğini kontrol et
const checkEmail = (input) => {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regEx.test(input.value.trim())) {
        success(input);
    } else {
        error(input, "Email is not valid");
    }
};

form.addEventListener("submit", e => {
    e.preventDefault();

    // Alanları kontrol et
    checkLength(username, 2);
    checkLength(subject, 2);
    checkLength(message, 10);
    checkEmail(email);
    checkRequiredFields([username, email, subject, message]);
});

//End Of Validation










//End Of Section 5


document.addEventListener("DOMContentLoaded", () => {
    const mouseCircle = document.querySelector(".mouse-circle");
    const mouseDot = document.querySelector(".mouse-dot");

    const mouseCircleFn = (x, y) => {
        mouseCircle.style.cssText = `top:${y}px; left:${x}px;`;
        mouseDot.style.cssText = `top:${y}px; left:${x}px;`;
    };

    document.body.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        mouseCircleFn(x, y);
    });
});

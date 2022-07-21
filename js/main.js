const img = document.querySelector('#hero')

window.addEventListener("keydown", (e) => {
    let x=0;

    if (e.key === 'ArrowLeft' && img.offsetLeft>20) {
        x = img.offsetLeft - 10;
        img.style.left = `${x}px`;          
    }

    if (e.key === 'ArrowRight' && img.offsetLeft<780) {
        let x = img.offsetLeft + 10;
        img.style.left = `${x}px`;
    }
});
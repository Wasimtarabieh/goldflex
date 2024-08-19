document.querySelectorAll('.category img').forEach(img => {
    img.addEventListener('click', () => {
        const newImage = prompt("أدخل رابط الصورة الجديدة:");
        if (newImage) {
            img.src = newImage;
        }
    });
});

function changeLogo() {
    const newLogo = prompt("أدخل رابط الشعار الجديد:");
    if (newLogo) {
        document.querySelector('.logo img').src = newLogo;
    }
}

const targetElement = document.querySelectorAll(".animationTarget");

console.log("画面の高さ", window.innerHeight)

document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top
        + targetElement[i].clientHeight * 0.2;
        // if (i === 1) {
        //     console.log(getElementDistance);
        // }
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }

        
    }
})

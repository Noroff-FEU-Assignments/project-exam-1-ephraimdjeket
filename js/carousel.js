const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false;
let startX, scrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "left") {
            // Scroll to the left
            carousel.scrollLeft -= firstCardWidth;
        } else {
            // Scroll to the right
            carousel.scrollLeft += firstCardWidth;
        }
    });
});

carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;

    // Add the "dragging" class to change the cursor
    carousel.classList.add("dragging");
});

carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
    carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("dragging");
});

carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.classList.remove("dragging");
});



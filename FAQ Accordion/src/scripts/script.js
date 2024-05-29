const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        this.classList.toggle("active");

        const accordionContent = this.nextElementSibling;

        const plusIcon = this.querySelector(".plus-icon");
        const minusIcon = this.querySelector(".minus-icon");

        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            plusIcon.style.display = "block";
            minusIcon.style.display = "none";
        } else {
            accordionContent.style.maxHeight =
                accordionContent.scrollHeight + "px";
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
        }
    });
});

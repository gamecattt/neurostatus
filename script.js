// document.querySelector(".faq__heading").addEventListener("click", function () {
//     document.querySelector(".faq__item").classList.add("active");
// });

// document.querySelectorAll(".faq__heading").forEach(function (el) {
//     el.addEventListener("click", function () {
//         document.querySelector(".faq__item").classList.add("active");
//     });
// });

document.querySelectorAll(".faq__item").forEach(function (faq__item) {
    faq__item.querySelector(".faq__heading").addEventListener("click", function () {
        if (faq__item.classList.contains("active")) {
            faq__item.classList.remove("active");
        } else {
            faq__item.classList.add("active");
        }
    });
});

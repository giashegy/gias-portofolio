document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typing", {
        speed: 200,
        deleteSpeed: 100,
        loop: true,
        strings: ["Gias Hegy Tamara"],
    }).go();
});

function toggleDetail(e) {
    const target = $(e.target)

    if ($(target).hasClass("detail-active")) {
        $(target).html("More Info").removeClass("detail-active")
    } else {
        $(target).html("Less Info").addClass("detail-active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle();
}

function onFormSubmit(e) {
    e.preventDefault();
    const email = $("#InputEmail")
    const subject = $("#InputSubject")
    const message = $("#InputMessage")

    if(!$(email).val()) {
        alert("Email is required")
    } else if(!$(subject).val()) {
        alert("Subject is required")
    } else if(!$(message).val()) {
        alert("Message is required")
    } else {
        $(email).val("")
        $(subject).val("")
        $(message).val("")
        alert("Form Submitted Successfully")
    }
}
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#typing", {
        speed: 200,
        deleteSpeed: 100,
        loop: true,
        strings: ["Gias Hegy Tamara"],
    }).go();
});
document.addEventListener("DOMContentLoaded", function() {

    // Adds the header to each html
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            marginAdjust();
        });

    // Adjust the margin i
    window.addEventListener("resize", marginAdjust)

    // Adjusts the size of the margin based on how large the navbar is
    function marginAdjust()
    {
        const header = document.querySelector(".navbar");
        const main = document.querySelector(".main");
        const headerHeight = header.offsetHeight;
        const marginHeight = headerHeight;
        main.style.marginTop = `${marginHeight}px`;
    }

    const backgroundImage = document.querySelector(".services-photos");
    const buttons = document.querySelectorAll(".services-btn");

    for (const button of buttons) {
        button.addEventListener("click", () => {
            const imagePath = button.getAttribute("data-image");
            backgroundImage.setAttribute("src", imagePath);
            for (const btn of buttons) {
                btn.setAttribute("class", "btn services-btn");
            }
            button.setAttribute("class", "btn services-btn active");
        });
    }

    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
});


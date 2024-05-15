document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll(".content h1");

    headings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            this.style.color = getRandomColor(); 
        });
    });

   
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

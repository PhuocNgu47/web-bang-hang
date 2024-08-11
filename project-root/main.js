/**web.html................... */
<script>
    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
    const dotItem = document.querySelectorAll(".dot");
    const imgContainer = document.querySelector('.aspect-ratio-169');
    let index = 0;
    let imgNumber = imgPosition.length;

    imgPosition.forEach(function(image, index) {
        image.style.left = index * 100 + "%";
        dotItem[index].addEventListener("click", function() {
            slider(index);
        });
    });

    function imgSlide() {
        index++;
        if (index >= imgNumber) {
            index = 0;
        }
        slider(index);
    }

    function slider(index) {
        imgContainer.style.left = "-" + index * 100 + "%";
        document.querySelector(".dot.active")?.classList.remove("active");
        dotItem[index].classList.add("active");
    }

    setInterval(imgSlide, 5000);
</script>
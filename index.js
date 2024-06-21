document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    let totalSlides = document.querySelectorAll('.carousel-item');
    let currentSlideElement = document.getElementById('indicator');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slidesContainer_slide = document.querySelector('.carousel-item')

    const checkWidth = () => {
        if (document.documentElement.clientWidth >= 769) {
            totalSlides = totalSlides.length -=2;
        } else {
            totalSlides = totalSlides.length;
        }
    };

    function parseToInt(value) {
        return parseInt(value, 10);
    }

    function showSlide(index) {
        const slidesContainer = document.querySelector('.carousel-inner');
        const translateValue = -(index - 1) * (slidesContainer_slide.clientWidth + parseToInt(getComputedStyle(slidesContainer).gap)) + 'px';
        slidesContainer.style.transform = 'translateX(' + translateValue + ')';
        if (document.documentElement.clientWidth >= 769) {
            currentSlideElement.innerHTML = `${index + 2}<span class="indicator-disabled">/</span><span class="indicator-disabled">${totalSlides + 2}</span>`;
        } else {
            currentSlideElement.innerHTML = `${index + 1}<span class="indicator-disabled">/</span><span class="indicator-disabled">${totalSlides + 2}</span>`;
        }

        prevButton.style.pointerEvents = index === 1 ? 'none' : 'auto';
        prevButton.style.cursor = index === 1 ? 'unset' : 'pointer';
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides || totalSlides;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = currentSlide % totalSlides + 1;
        showSlide(currentSlide);
    }
    checkWidth();
    
    prevButton.addEventListener('click', () =>{
        prevSlide()
    })
    nextButton.addEventListener('click', () =>{
        nextSlide()
    })


    setInterval(nextSlide, 4000);


    let time = 30 * 60;
    
    let countDown = setInterval(function() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        document.getElementById('timer').innerHTML = "<p class='timer-before'>До конца акции осталось:</p>" + minutes + ":" + seconds;
        
        time--;

        if (time < 0) {
            clearInterval(countDown);
            document.getElementById('timer').textContent = "Time's up!";
        }
    }, 1000);
})

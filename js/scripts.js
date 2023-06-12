window.addEventListener('DOMContentLoaded', () => {
    // Header Scripts
    let header = document.querySelector('header.header');
    window.addEventListener('scroll', function(){
        if(window.scrollY > 0){
            header.classList.add('page-scrolled');
        } else {
            header.classList.remove('page-scrolled');
        }
    });

    // Slider Scripts
    if (window.innerWidth <= 768) {

        let slider = document.querySelector('.posts'); // Отримуємо Слайдер
        let sliderInner = slider.querySelector('.posts-wrap');
        let slides = sliderInner.querySelectorAll('article.post');
        let dots = slider.querySelectorAll('.posts_dots span');
    
        let slidersWidth = slider.clientWidth + 'px'; // Отримуємо значення ширини слайдера
    
        let slidersWidthInPX;
        slidersWidth.replace(/\w*[0-9]/g, function(str, letter) {
            slidersWidthInPX = str;
        });
        
        sliderInner.style.transform = 'translateX(0px)';
        slides.forEach((slide, idx)=>{
            if(idx === 0){
                slide.classList.add('active');
            }
        });
    
        const sliderMover = (val) => {
            let transformValue = sliderInner.style.transform; // Отримуємо значення transform блоку
            
            let transformValueInPX;
            transformValue = transformValue.replace(/-*\w*[0-9]/g, function(str, letter) {
                transformValueInPX = str;
            });

            switch (typeof val){
                case 'string':
                    if(val === 'next'){
                        sliderInner.style.transform = `translateX(${Number(transformValueInPX) + Number(-1) * Number(slidersWidthInPX) - Number(20)}px)`;
                    } else if(val === 'first') {
                        sliderInner.style.transform = `translateX(0px)`;
                    }
                case 'number':
                    sliderInner.style.transform = `translateX(${Number(-1) * Number(val) * Number(slidersWidthInPX) - Number(20) * Number(val)}px)`;
            }

            const activeElements = (oldActiveElement, elements) => {
                let newActiveElement;
                elements.forEach((elem, idx) => { // Отримуємо індекс активого елемента та видаляємо клас
                    if(elem.classList.contains('active')) {
                        oldActiveElement = idx;
                        elem.classList.remove('active');
                    }
                });
                switch (typeof val){
                    case 'string':
                        if(val === 'next'){
                            newActiveElement = Number(oldActiveElement) + Number(1);
                        } else if(val === 'first') {
                            newActiveElement = 0;
                        }
                        break;
                    case 'number':
                        newActiveElement = val;
                        break;
                }
                elements.forEach((elem, idx) => { // Додаємо клас активному елементу
                    if(idx === newActiveElement) {
                        elem.classList.add('active');
                    }
                });
            }

            let oldActiveSlideIDX;
            activeElements(oldActiveSlideIDX, slides);

            let oldActiveDotsIDX;
            activeElements(oldActiveDotsIDX, dots);
        }
    
        setInterval(()=>{
            let oldActiveSlideIDX;
            slides.forEach((slide, idx) => { // Отримуємо індекс активого слайда та видаляємо клас
                if(slide.classList.contains('active')) {
                    oldActiveSlideIDX = idx;
                }
            });
            if(oldActiveSlideIDX === slides.length-1){
                sliderMover('first');
            }else{
                sliderMover('next');
            }
        },5000)
    
        dots.forEach((dot, dotIdx) => { // Функція перегортання слайдів по натисканню на крапки
            dot.addEventListener('click', () => {
                sliderMover(dotIdx);
                // let transformValue = sliderInner.style.transform; // Отримуємо значення transform блоку
            
                // let transformValueInPX;
                // transformValue = transformValue.replace(/-*\w*[0-9]/g, function(str, letter) {
                //     transformValueInPX = str;
                // });
    
                // sliderInner.style.transform = `translateX(${Number(-1) * Number(dotIdx) * Number(slidersWidthInPX) - Number(20)}px)`;
    
                // let oldActiveSlideIDX;
                // slides.forEach((slide, idx) => { // Отримуємо індекс активого слайда та видаляємо клас
                //     if(slide.classList.contains('active')) {
                //         oldActiveSlideIDX = idx;
                //         slide.classList.remove('active');
                //     }
                // });
                // slides.forEach((slide, idx) => { // Додаємо клас активному слайду
                //     if(idx === Number(dotIdx)) {
                //         slide.classList.add('active');
                //     }
                // });
    
                // let oldActiveDotsIDX;
                // dots.forEach((dot, idx) => { // Отримуємо індекс активої крапки та видаляємо клас
                //     if(dot.classList.contains('active')) {
                //         oldActiveDotsIDX = idx;
                //         dot.classList.remove('active');
                //     }
                // });
                // dot.classList.add('active');
            });
        });
    }
});
let sliders = document.querySelectorAll('.project-container');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = slider.querySelectorAll('.slide');
  
  // Вместо document.query... Получается список всех class="slide"
  // которые находятся где-то внутри текущего элемента slider.
  
  let next = slider.querySelector('.next-arrow');
  // Кнопка next внутри этого slider.
  let back = slider.querySelector('.back-arrow');
  // Кнопка next внутри этого slider.
  
  let i = 0;
  // Номер текущего "открытого" слайда.
  
  let page = slider.getElementsByClassName('page');
  let pageValue = 0; 
  page[pageValue].innerHTML = `1 - ${slide.length}`;

  next.addEventListener('click', function() {
    page[pageValue].innerHTML = `${(i + 2) <= slide.length ? `${i + 2}` : '1'} - ${slide.length}`;
    
    slide[i].classList.remove('block');
    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    slide[i].classList.add('block');
    // slide[i] - следующий слайд. Показываем.

    
  });  
  back.addEventListener('click', function() {
    
    page[pageValue].innerHTML = `${((i + (slide.length - 1)) % slide.length) + 1} - ${slide.length}`;
    
    

    slide[i].classList.remove('block');
    // slide[i] - открытый слайд. Скрываем.
    
    

    i = (i + (slide.length - 1)) % slide.length; // (*1) 
    //обратный счет 
    
    slide[i].classList.add('block');
    // slide[i] - следующий слайд. Показываем.

    
  });  
}



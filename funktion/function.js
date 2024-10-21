// Создать длинный текст, в конце поставить кнопку читать далее
// При нажатии на эту кнопку - добавьте еще текста для продолжения чтения
// Основные методы обработки событий
// 1. addEventListener(event, callback); // добавляет обработчик событья
// 2. removeEventListener(event, callback); // удаляет ранее добавленный обработчик

// Пример:
// const myButton = document.getElementById('btn');

// myButton.addEventListener('click', handleClickOnBtn);

// myButton.addEventListener('mouseenter', function(){
//   console.log("Навел мышкой");
// });

// function handleClickOnBtn() {
//     alert("URAAA");
// }


// const readMore = document.getElementById('readMore');

// readMore.addEventListener('click', handleReadMore);

// const longText2 = document.getElementById("longText2");

// function handleReadMore(){
//    longText2.style.display = 'flex';
//}


// myButton.addEventListener('click', function(event) {
//    console.log("ВЫ НАЖАЛИ НА КНОПКУ!!!");
//    console.log("EVENT type:::", event.type);
//    console.log("EVENT target:::", event.target); // тот елемент на котором произошло событие
//    event.target.innerHTML = "Новое название";
//    event.preventDefault(); // функция, отменяющая любые стандарнтые действия
//});


// События клавиатуры
// document.addEventListener('keydown', function(event){
//    console.log('Наюали на клавиатуру:::', event);
// });

// Aufgabe: 
// Код, где по нажатию на кнопку вниз текста становится больше (как в readmore)

// A по нажатию на кнопку вверх - текста становится меньше


document.addEventListener('keydown', function (event) {
    console.log('Tastendruck:', event);
    if (event.key === 'ArrowDown') {
        readMore.style.display = "block";
    } else if (event.key === 'ArrowUp') {
        readMore.style.display = "none";
    }
});

const el = document.getElementById('result-box');
const loader = document.getElementById('loader');

setTimeout(() => {
  createText();
  el.style.visibility = 'visible';
  loader.remove();
}, getTime(7000, 17000));


function getTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function createText() {
  let tag = document.createElement("h3");
  let text = document.createTextNode(getResult());
  tag.appendChild(text);
  let element = document.getElementById('result-box');
  element.appendChild(tag);
}

function getResult() {
  let arr = ["Судя по всему, вы здоровы",
    "Найдена высокая вероятность заболевания COVID-19. Рекомендуется обратиться к врачу, а также пройти тестирование",
    "Возможно у вас заболевание, не связанное с COVID-19. Рекомендуется обратиться к врачу",
    "Exception: tf.keras.error(arr[0], null)"];
  return arr[getTime(0,3)];
}

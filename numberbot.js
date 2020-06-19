function getRandomInt(max,min) {
  return Math.floor(Math.random() * (max - min) + min);
};

var responseToQuestion = function () {
  var numberRad = getRandomInt(1000,1);
console.log(numberRad)
var count = 10;
  while(true)  {
    var numberBot = prompt('Угадайте число в диапозоне от 1 до 1000  за 10 попыток ', '' );
    if (count == 0) {
       return alert(' закончились попытки ')
     }
  if (numberBot === null) {
    alert('не хотите не играйте ');
    return false
    }
    else  if (numberBot > numberRad) {
    alert('Число больше заданного !');
  }

  else if (numberBot < numberRad ) {
    alert('Число меньше заданного !');

  }
  else if(numberBot == numberRad) {
        alert('Поздравляю вы угадали');
         alert('Сыграем еще ? обнови страницу');
         break
  }
    else if (numberBot != '') {
      alert('Введите число');
    }
    count--;
  }

}



responseToQuestion();

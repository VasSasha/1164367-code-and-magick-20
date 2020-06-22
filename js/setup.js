'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var getRandomElement = function (arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};
var createPlayer = function () {
  var player = {
    name: getRandomElement(NAMES) + '  ' + getRandomElement(SECOND_NAMES),
    eyesColor: getRandomElement(EYES_COLORS),
    coatColor: getRandomElement(COATS_COLORS)
  };
  return player;
};
var players = [];
for (var i = 0; i < 4; i++) {
  players.push(createPlayer());
}
var renderPlayers = function () {
  var fragment = document.createDocumentFragment();
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarListElement = document.querySelector('.setup-similar-list');
  for (i = 0; i < 4; i++) {
    var newPlayer = similarWizardTemplate.cloneNode(true);
    newPlayer.querySelector('.setup-similar-label').textContent = players[i].name;
    newPlayer.querySelector('.wizard-coat').style.fill = players[i].coatColor;
    newPlayer.querySelector('.wizard-eyes').style.fill = players[i].eyesColor;
    fragment.appendChild(newPlayer);
  }
  similarListElement.appendChild(fragment);
};
renderPlayers();
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
var setupOpen = setup.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userIcon = document.querySelector('.setup-open-icon');
var form = setup.querySelector('.setup-wizard-form');
var blockForCoat = document.querySelector('.setup-wizard');
var fireBallColorValue = document.querySelector('fireball-color-input');
var coatsColorValue = document.querySelector('coats-color-input');
var eyesColorValue = document.querySelector('eyes-color-input');
var setupPlayer = document.querySelector('setup-player');
// открывает и закрывает диалоговое окно
var openPopUp = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopUpPress());
  document.addEventListener('click', onPopUpPress());
};
var closePopUp = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', 'click', onPopUpPress());
};
var onPopUpPress = function (evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    closePopUp();
  } else if (evt.key === 'Enter') {
    openPopUp();
  }
};
setupOpen.addEventListener('click', function () {
  openPopUp();
});
setupClose.addEventListener('click', function () {
  closePopUp();
});
setupOpen.addEventListener('keydown', function () {
  if (evt.key === 'Enter') {
    openPopUp();
  }
});
setupClose.addEventListener('keydown', function () {
  if (evt.key === 'Escape') {
    closePopUp();
  }
});
userIcon.addEventListener('click', function () {
  openPopUp();
});
// var onPopUpPressEnter = function (evt) {
// evt.preventDefault();
// if (evt.key === 'Enter') {
// openPopUp();
// }
// };
// отправляет форму
// var FormSending = function (evt) {
// if (evt.key === 'Enter') || (btnSend.addEventListener('click')) {
// form.submit();
// }
// }
var formSending = function (evt) {
  if (evt.key === 'Enter') {
    form.submit();
  }
};
formSending();
// возвращает рандомный элемент массива
var getRandomColor = function (arr) {
  var coatColor = Math.floor(Math.random() * arr.length);
  return coatColor;
};
// заполнение цветом элементов
var fillEyesWithColor = function () {
  var color = getRandomColor(EYES_COLORS);
  setupPlayer.querySelector('.wizard-eyes').style.fill = color;
  eyesColorValue.value = color;
};
var fillCoatWithColor = function () {
  var color = getRandomColor(EYES_COLORS);
  blockForCoat.querySelector('.wizard-coat').style.fill = color;
  coatsColorValue.value = color;

};
var fillFireBallWithColor = function () {
  var color = getRandomColor(FIREBALL_COLORS);
  setupPlayer.querySelector('.setup-fireball').style.fill = color;
  fireBallColorValue.value = color;
};
fillFireBallWithColor();
fillEyesWithColor();
fillCoatWithColor();

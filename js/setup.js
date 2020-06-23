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
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userIcon = document.querySelector('.setup-open-icon');
var form = setup.querySelector('.setup-wizard-form');
var fireBallColorValue = document.querySelector('.fireball-color-input');
var coatsColorValue = document.querySelector('.coats-color-input');
var eyesColorValue = document.querySelector('.eyes-color-input');
var btnSubmit = document.querySelector('.setup-submit');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireBall = document.querySelector('.setup-fireball-wrap');
var userName = document.querySelector('.setup-user-name');
var onPopUpPress = function (evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    closePopUp();
  } else if (evt.key === 'Enter') {
    openPopUp();
  }
};
// открывает и закрывает диалоговое окно
var openPopUp = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopUpPress);
  document.addEventListener('click', onPopUpPress);
  wizardCoat.addEventListener('click', fillCoatWithColor);
  wizardEyes.addEventListener('click', fillEyesWithColor);
  fireBall.addEventListener('click', fillFireBallWithColor);
  btnSubmit.addEventListener('click', function () {
    form.submit();
  });
};
var closePopUp = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopUpPress);
  document.removeEventListener('click', onPopUpPress);
  wizardCoat.removeEventListener('click', fillCoatWithColor);
  wizardEyes.removeEventListener('click', fillEyesWithColor);
  fireBall.removeEventListener('click', fillFireBallWithColor);
  btnSubmit.removeEventListener('click', function () {
    form.submit();
  });
};
setupOpen.addEventListener('click', function () {
  openPopUp();
});
setupClose.addEventListener('click', function () {
  closePopUp();
});
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopUp();
  }
});
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopUp();
  }
});
userIcon.addEventListener('click', function () {
  openPopUp();
});
// возвращает рандомный элемент массива
var getRandomColor = function (arr) {
  var color = Math.floor(Math.random() * arr.length);
  return arr[color];
};
// заполнение цветом элементов
var fillEyesWithColor = function () {
  var color = getRandomColor(EYES_COLORS);
  document.querySelector('.wizard-eyes').style.fill = color;
  eyesColorValue.value = color;
};
var fillCoatWithColor = function () {
  var color = getRandomColor(COATS_COLORS);
  document.querySelector('.wizard-coat').style.fill = color;
  coatsColorValue.value = color;

};
var fillFireBallWithColor = function () {
  var color = getRandomColor(FIREBALL_COLORS);
  document.querySelector('.setup-fireball-wrap').style.background = color;
  fireBallColorValue.value = color;
};
userName.addEventListener('invalid', function (evt) {
  if (userName.validity.tooShort) {
    userName.setCustonValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userName.validity.tooLong) {
    userName.setCustonValidity('Имя должно состоять максимум из 25 символов');
  } else if (userName.validity.valueMissing) {
    userName.setCustonValidity('Обязательное поле');
  } else {
    userName.setCustonValidity('');
  }
});

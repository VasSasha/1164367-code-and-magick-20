'use strict';
var similiarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var renderPlayer = function() {
    players.querySelector('.setup-similar-label').textContent = playersCharacteristics[i].name + playersCharacteristics[i].secondName;
    players.querySelector('.wizard-coat').style.fill = playersCharacteristics[i].coatColor;
    players.querySelector('.wizard-eyes').style.fill = playersCharacteristics[i].eyesColor;
};
for( var i = 0; i < playersCharacteristics.length; i++) {
	renderPlayer(Math.random() * playersCharacteristics.name.length);
	renderPlayer(Math.random() * playersCharacteristics.secondName.length);
	renderPlayer(Math.random() * playersCharacteristics.eyesColor.length);
	renderPlayer(Math.random() * playersCharacteristics.coatColor.length);
};
var setupSimiliar = document.querySelector('.setup-similar');
setupSimiliar.classList.remove('hidden');
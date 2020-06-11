'use strict';
var similiarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var getRandomIndex = function(arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
};
var renderPlayer = function() {
    var player = new Object {
        name: getRandomIndex(NAMES) + getRandomIndex(SECOND_NAMES),
        eyesColor: getRandomIndex(EYES_COLOR),
        coatColor: getRandomIndex(COAT_COLOR)
    };
};

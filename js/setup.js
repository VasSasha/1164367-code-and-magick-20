'use strict';
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var getRandomElement = function (arr) {
    var index = Math.floor(Math.random () * arr.length);
    return arr[index];
};
var createPlayer = function() {
    var player = {
        name: getRandomElement(NAMES) + getRandomElement(SECOND_NAMES), 
        eyesColor: getRandomElement(EYES_COLORS),
        coatColor: getRandomElement(COATS_COLORS)
    };
    return player;
};
var players = []
for (var i = 0; i < 4; i++) {
    players.push(createPlayer());
}
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = document.querySelector('.setup-similar-list');
var renderPlayers = function () {
    var fragment = document.createDocumentFragment ()
    for (var i = 0; i < 4 ; i++) {
        var newPlayer = similarWizardTemplate.cloneNode(true);
        newPlayer.querySelector('.setup-similar-label').textContent = NAMES[i] + SECOND_NAMES[i];
        newPlayer.querySelector('.wizard-coat').style.fill = COATS_COLORS[i];
        newPlayer.querySelector('.wizard-eyes').style.fill = EYES_COLORS[i];
        fragment.appendChild(newPlayer);
   }
 similarListElement.appendChild(fragment);
}


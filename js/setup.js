'use strict';
var similiarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var playersCharacteristics = [
    name {
    	playerName[i]: 'Иван';
    	playerName[i]: 'Хуан Себастьян';
		playerName[i]: 'Мария';
		playerName[i]: 'Кристоф';
		playerName[i]: 'Виктор';
		playerName[i]: 'Юлия';
		playerName[i]: 'Люпита';
		playerName[i]: 'Вашингтон';
    },
    secondName {
    	secondName[i]: 'да Марья';
    	secondName[i]: 'Верон';
		secondName[i]: 'Мирабелла';
		secondName[i]: 'Онопко';
		secondName[i]: 'Топольницкая';
		secondName[i]: 'Нионго';
		secondName[i]: 'Вальц';
		secondName[i]: 'Ирвинг';
    },
    coatColor {
    	coatColor[i]:rgb(101, 137, 164);
    	coatColor[i]:rgb(241, 43, 107);
    	coatColor[i]:rgb(146, 100, 161);
    	coatColor[i]:rgb(56, 159, 117);
    	coatColor[i]:rgb(215, 210, 55);
    	coatColor[i]:rgb(0, 0, 0);
    },
    eyesColour {
    	eyesColor:'red';
    	eyesColor:'blue';
    	eyesColor:'black';
    	eyesColor:'yellow';
    	eyesColor:'green';
    }
];
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
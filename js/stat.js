 
var canvas = document.getElementById('canvas');
var ctx= canvas.getContext('2d');
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT =270;
var CLOUD_X =100;
var CLOUD_Y =10;
var GAP = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 50;
var TEXT_HEIGHT = 20;
var barHeight = CLOUD_HEIGHT -GAP - TEXT_HEIGHT - GAP;
var renderCloud = function(ctx,x,y,color){
	ctx.fillStyle = color;
	ctx.fillRect(x,y,CLOUD_WIDTH, CLOUD_HEIGHT);
}
window.renderStatistics = function(ctx){
	renderCloud(ctx,CLOUD_X + GAP, CLOUD_Y + GAP,'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
	ctx.fillStyle = '#000';
	ctx.fillText('Ура вы победили!',CLOUD_X + GAP,CLOUD_Y*5);
	ctx.fillText('Список результатов:',CLOUD_X + GAP,CLOUD_Y*7);
	var players =['you', 'me', 'third'];
	for(var i = 0; i< players.length; i++){
		ctx.fillStyle = '#000';
		ctx.fillRect(CLOUD_X + GAP +(GAP+ TEXT_WIDTH)* i, CLOUD_Y + GAP +TEXT_HEIGHT, BAR_WIDTH,barHeight);
		ctx.fillText(players[i],CLOUD_X + GAP +(GAP+ TEXT_WIDTH)* i, CLOUD_Y *20);
	}
}
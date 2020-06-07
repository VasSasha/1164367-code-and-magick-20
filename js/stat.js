var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT =270;
var CLOUD_X =100;
var CLOUD_Y =10;
var GAP = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var maxBarHeight = 150;
var renderCloud = function(ctx,x,y,color){
	ctx.fillStyle = color;
	ctx.fillRect(x,y,CLOUD_WIDTH, CLOUD_HEIGHT);
}
var getMaxElement = function(arr){
		var maxElement = arr[0];
		for(var i=0; i< arr.length; i++){
		if(arr[i]> maxElement){
			maxElement = arr[i];
		}
	} return maxElement;
}
window.renderStatistics = function(ctx,players,times){
	renderCloud(ctx,CLOUD_X + 10, CLOUD_Y + 10,'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
	ctx.textBaseline='hanging';
	ctx.font='16px "PT Mono"';
	ctx.fillStyle = '#000';
	ctx.fillText('Ура вы победили!',CLOUD_X + 35,CLOUD_Y+ 12);
	ctx.fillText('Список результатов:',CLOUD_X + 35,CLOUD_Y + 12 + FONT_GAP);
	var maxTime = getMaxElement(times);
	for(var i = 0; i< players.length; i++){
		if(players[i] === 'Вы'){
		ctx.fillStyle = 'rgba(255, 0, 0, 1)';
	}else{
		var X = Math.random()*100;
		ctx.fillStyle = 'hsl(240,'+X+'%, 50%)';
	}
		ctx.fillRect(CLOUD_X + BAR_GAP +(BAR_GAP+ TEXT_WIDTH)* i,CLOUD_Y +FONT_GAP*2 + 30+ maxBarHeight- (maxBarHeight*times[i])/maxTime, BAR_WIDTH,(maxBarHeight*times[i])/maxTime);
		ctx.fillStyle = '#000';
		ctx.fillText(players[i],CLOUD_X + BAR_GAP +(BAR_GAP+ TEXT_WIDTH)* i, CLOUD_HEIGHT-10- FONT_GAP);
	}
}
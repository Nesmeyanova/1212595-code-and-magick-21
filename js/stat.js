'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var LITTLE_GAP = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
    ctx,
    CLOUD_X + LITTLE_GAP,
    CLOUD_Y + LITTLE_GAP,
    'rgba(0, 0, 0, 0.7)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText(
    'Ура вы победили!',
    CLOUD_X + GAP / 2,
    CLOUD_Y + GAP / 2
  );
  ctx.fillText(
    'Список результатов:',
    CLOUD_X + GAP / 2,
    CLOUD_Y + GAP / 2 + LITTLE_GAP + FONT_GAP
  );


  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP / 2 - FONT_GAP - barHeight - LITTLE_GAP * 2
    );
    ctx.fillRect(
      CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP / 2 - FONT_GAP - barHeight - LITTLE_GAP,
      BAR_WIDTH,
      (barHeight * times[i]) / maxTime
    );
    ctx.fillText(
      players[i],
      CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP / 2
    );
  };
}

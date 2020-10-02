'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 50;
const LITTLE_GAP = 10;
const FONT_GAP = 16;
const TEXT_WIDTH = 50;
const BAR_WIDTH = 40;
const barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  const maxElement = arr[0];

  for (const i = 1; i < arr.length; i++) {
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

  const getRandomInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const maxTime = getMaxElement(times);

  for (const i = 0; i < players.length; i++) {
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP - barHeight - FONT_GAP
    );
    ctx.fillRect(
      CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP,
      BAR_WIDTH,
      (-barHeight * times[i]) / maxTime
    );
    ctx.fillText(
      players[i],
      CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
      CLOUD_Y + CLOUD_HEIGHT - GAP / 2
    );
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = `hsl(240, ${saturation}%, 20%)`;
    }
    const saturation = getRandomInRange(1, 100);
  };
};

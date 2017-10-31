
export const GAME_START_TIME = 300;
export const FAST_ANSWER_TIME = 20;

const initialState = {
  mistakes: 0,
  level: 0,
  time: GAME_START_TIME,
  playerAnswers: [],
  question: null
};

export const tick = (game) => {
  game = Object.assign({}, game);
  game.time--;
  return game;
};

export const reset = (game) => {
  game = Object.assign({}, game);
  game.time = GAME_START_TIME;
  game.mistakes = 0;
  game.level = 0;
  game.playerAnswers = [];
  return game;
};

export const nextLevel = (game) => {
  game = Object.assign({}, game);
  game.level++;
  return game;
};

export const addMistake = (game) => {
  game = Object.assign({}, game);
  game.mistakes++;
  return game;
};

export const addAnswer = (game, answer) => {
  game = Object.assign({}, game);
  game.playerAnswers.push(answer);
  return game;
};

const answersStack = {
  _answers: new Set(),
  get answers() {
    return this._answers;
  },
  get size() {
    return this._answers.size;
  },
  clear() {
    this._answers.clear();
  },
  add(data) {
    this._answers.add(data);
  },
  delete(data) {
    this._answers.delete(data);
  }
};

const resultScreenData = {
  win: {
    title: `Вы настоящий меломан!`,
    statistics: ``,
    comparison: ``,
    replayTitle: `Сыграть ещё раз`
  },
  timeUp: {
    title: `Увы и ах!`,
    statistics: `Время вышло!<br/>
    Вы не успели отгадать все мелодии`,
    replayTitle: `Попробовать ещё раз`
  },
  noTries: {
    title: `Какая жалость!`,
    statistics: `У вас закончились все попытки.<br/>
    Ничего, повезёт в следующий раз!`,
    replayTitle: `Попробовать ещё раз`
  }
};

export {initialState, answersStack, resultScreenData};

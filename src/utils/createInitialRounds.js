import { GAME_NAME } from '../config';

const initialRound = {
  SpeakITLevel: '1',
  SpeakITPage: '1',
  EnglishPuzzleLevel: '1',
  EnglishPuzzlePage: '1',
  SavannahLevel: '1',
  SavannahPage: '1',
  AudioCallLevel: '1',
  AudioCallPage: '1',
  SprintLevel: '1',
  SprintPage: '1',
  MakeSentenceLevel: '1',
  MakeSentencePage: '1',
};

const createInitialRounds = (Statistic) => {
  Object.values(GAME_NAME).forEach((el) => {
    if (el === GAME_NAME.learnWords) return;
    const lastRound = Statistic[`${el}LastRound`];
    if (lastRound === '0') return;
    const level = lastRound.split('_')[2];
    const page = lastRound.split('_')[3];
    initialRound[`${el}Level`] = level;
    initialRound[`${el}Page`] = page;
  });
  return initialRound;
};

export default createInitialRounds;

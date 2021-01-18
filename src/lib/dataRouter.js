import { uiData } from './constants/uiData';

export function dataRouter(page) {
  switch (page) {
    case 'locationIncentives':
      return uiData['locationIncentives'];
    default:
  }
}

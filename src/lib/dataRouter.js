import { uiData } from './constants/uiData';

export function dataRouter(page) {
  switch (page) {
    case 'locationIncentives':
      return uiData['locationIncentives'];
    case 'general-knowledge/:activeTab?':
      return uiData['generalKnowledge'];
    default:
  }
}

import { GYEONGBOKGUNG, GYEONGBOKGUNG02, GYEONGBOKGUNG03 } from '../../assets';

const uiData_summaryInKorea = {
  uiType: 'summary',
  parent: 'produce-in-korea',
  title: 'Produce-In-Korea',
  text: `South Korea is a country that delights both first-time travelers and those who keep returning. From its diverse and ever-innovating food scene, to its convenient transportation system, fast and omnipresent WiFi, and plethora of cultural sites - the country of K-drama and K-pop rarely disappoints.`,
  titleImage: GYEONGBOKGUNG02,
  flexBoxes: [
    {
      id: 1,
      image: GYEONGBOKGUNG,
      desc: 'Gyeongbok Palace Image',
      text: `Cafes and apartment rooftops in Seoul, scenic mountain tops, countryside rice paddies and Joseon Dynasty-era royal palaces are some of the iconic sites from Korean movies and TV series fans travel to for a memento photograph and a moment of immersion into a different world. 
  `,
      order: 'image-first',
    },
    {
      id: 2,
      image: GYEONGBOKGUNG03,
      desc: 'Gyeongbok Palace Image',
      text: `These memorable backdrops for a scene in a movie or TV series, although sometimes remote, still translate to a pleasant shooting experience. Seoul and major cities in Korea are well-connected, fast internet is ubiquitous (even in the countryside and on the subway) and you can find delicious food practically everywhere, whether in restaurants, at food stalls or delivered to wherever you are. Many eateries are also open 24/7 and convenience stores provide essentials at any time of the day or night.  
  `,
      order: 'text-first',
    },
  ],
};

export { uiData_summaryInKorea };

import {
  GYEONGBOKGUNG,
  GYEONGBOKGUNG02,
  GYEONGBOKGUNG03,
  STAFF01,
  STAFF02,
  STAFF03,
  KOREA02,
} from '../../assets';

const uiData = {
  summaryInKorea: {
    uiType: 'summary',
    parent: 'produce-in-korea',
    title: 'Produce-In-Korea',
    text: `South Korea is a country that delights both first-time travelers and those who keep returning. From its diverse and ever-innovating food scene, to its convenient transportation system, fast and omnipresent WiFi, and plethora of cultural sites - the country of K-drama and K-pop rarely disappoints.
    `,
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
        image: KOREA02,
        desc: 'Seoul Street At Night Image',
        text: `These memorable backdrops for a scene in a movie or TV series, although sometimes remote, still translate to a pleasant shooting experience. Seoul and major cities in Korea are well-connected, fast internet is ubiquitous (even in the countryside and on the subway) and you can find delicious food practically everywhere, whether in restaurants, at food stalls or delivered to wherever you are. Many eateries are also open 24/7 and convenience stores provide essentials at any time of the day or night. 
    `,
        order: 'text-first',
      },
    ],
  },
  summaryOManual: {
    uiType: 'summary',
    parent: 'produce-o-manual',
    title: 'Produce-O-Manual',
    text: `<p>South Korea today welcomes filmmakers and TV producers from overseas more than ever before. Encouraged by the current success of K-pop and K-drama, South Korea is now attracting foreign productions of all budgets and sizes from high profiled Hollywood studio films and TV series to YouTube virals and documentaries. In addition, South Korea has emerged as one of World’s safest shooting locations since the country’s success against COVID-19.When it comes to production, South Korea has a lot more to offer than just the multifarious images of the vibrant country such as a vast pool of well-trained production laborers, advanced technologies and infrastructures and a large amount of location incentives that are hard to ignore. </p>What we repeatedly hear from our partners and clients overseas is that shooting in Korea is a lot cheaper and cost effective than filing in many other places in Asia. What really matters in the end is the quality of the production for the money spent on it and in that sense, South Korea can be a smart choice to shoot your film in Asia. Here we’d like to share with you our expertises and knowledge about some of the most crucial parts of production in South Korea based on our extensive experiences of production and service production.
    `,
    // titleImage: GYEONGBOKGUNG02,
    // flexBoxes: [
    //   {
    //     id: 1,
    //     image: GYEONGBOKGUNG,
    //     desc: 'Gyeongbok Palace Image',
    //     text: `Cafes and apartment rooftops in Seoul, scenic mountain tops, countryside rice paddies and Joseon Dynasty-era royal palaces are some of the iconic sites from Korean movies and TV series fans travel to for a memento photograph and a moment of immersion into a different world.
    // `,
    //     order: 'image-first',
    //   },
    //   {
    //     id: 2,
    //     image: GYEONGBOKGUNG03,
    //     desc: 'Gyeongbok Palace Image',
    //     text: `These memorable backdrops for a scene in a movie or TV series, although sometimes remote, still translate to a pleasant shooting experience. Seoul and major cities in Korea are well-connected, fast internet is ubiquitous (even in the countryside and on the subway) and you can find delicious food practically everywhere, whether in restaurants, at food stalls or delivered to wherever you are. Many eateries are also open 24/7 and convenience stores provide essentials at any time of the day or night.
    // `,
    //     order: 'text-first',
    //   },
    // ],
  },
  summaryOMatic: {
    uiType: 'summary',
    parent: 'produce-o-matic',
    title: 'PRODUCE-O-MATIC™',
    text: `Produce-o-matic™ is an integrated ICT solution to help filmmakers and producers achieve the highest level of efficiency with the least amount of time and contact by solving various problems that emerge in all and every phase of production.<br /><br />
    Produce-o-matic™ consists of a number of web and app based softwares designed to dramatically increase efficiency in production such as Budget-O-matic™, Produce-o-matic™ and Account-O-matic™.  <br /><br />
    Budget-O-matic™ is a solution that helps filmmakers and producers create an ‘optimal budget’ that is one of the major tasks in and final results of ‘pre production’ among different phases of production. With advanced web crawling technology we developed it collects and compares data from multiple sources based on frequency and accuracy and shows optimal budget estimates for your intended production. It is designed to give foreign producers an idea of how much it would cost to produce a film in different places of the world. <br /><br /><p><a href='/produce-o-matic/budget-o-matic'>Try Budget-O-matic™ now and get an idea of production cost in South Korea.</a></p>
    Produce-O-matic™ is an all-in-one utility app by which one can generate call sheets, navigate to filming locations, order foods for catering and communicate with members from other production units like a walkie-talkie and a messenger app merged together in one. Account-O-matic™ helps producers to account expenses made in foreign country productions without keeping receipts or books using advanced Financial Technology. Account-O-matic™ will greatly save producers office time by increasing efficiency and accuracy of accounting expenses in foreign country production.
    Both Produce-O-matic™ and Account-O-matic™ are currently in production.`,
    titleImage: GYEONGBOKGUNG02,
    // flexBoxes: [
    //   {
    //     id: 1,
    //     image: GYEONGBOKGUNG,
    //     desc: 'Gyeongbok Palace Image',
    //     text: `Cafes and apartment rooftops in Seoul, scenic mountain tops, countryside rice paddies and Joseon Dynasty-era royal palaces are some of the iconic sites from Korean movies and TV series fans travel to for a memento photograph and a moment of immersion into a different world.
    // `,
    //     order: 'image-first',
    //   },
    //   {
    //     id: 2,
    //     image: GYEONGBOKGUNG03,
    //     desc: 'Gyeongbok Palace Image',
    //     text: `These memorable backdrops for a scene in a movie or TV series, although sometimes remote, still translate to a pleasant shooting experience. Seoul and major cities in Korea are well-connected, fast internet is ubiquitous (even in the countryside and on the subway) and you can find delicious food practically everywhere, whether in restaurants, at food stalls or delivered to wherever you are. Many eateries are also open 24/7 and convenience stores provide essentials at any time of the day or night.
    // `,
    //     order: 'text-first',
    //   },
    // ],
  },
  summaryOPeople: {
    uiType: 'summary',
    parent: 'produce-o-people',
    title: 'Produce-O-People',
    text: `We are a team of passionate local production experts with years of experience in all fields of production and working with people from diverse cultural and ethnic backgrounds. We are seasoned producers who know (pretty much) everything about production in the country from location scouting and staffing to production incentives. We are eclectic filmmakers whose specialities cover all areas of filmmaking from cinematography and lighting to sound mixing. We are a bunch of motivated local fixers who are open minded, patient and love finding creative solutions to all kinds of local issues in production.`,
    titleImage: GYEONGBOKGUNG02,
    flexBoxes: [
      {
        id: 1,
        image: STAFF01,
        desc: 'STAFF01 Image',
        text: `
        Minchul Kim is a filmmaker/ producer with over a decade long experience in the audio-visual industry from film and TV to music video and commercial. As an independent producer based in Seoul, he pioneered Korea’s co-production with several countries in Europe such as the Netherlands, Belgium, Denmark and Finland since 2009. Among his works, a Sundance funded documentary Planet of Snail (2011) won a dozen awards and was screened at over a hundred festivals worldwide while 9 Muses of Star Empire (2012) was sold to Netflix and BBC among others. 
    `,
        order: 'text-first',
      },
      {
        id: 2,
        image: STAFF02,
        desc: 'STAFF02 Image',
        text: `Hyo Jin An is an international filmmaker based in New York and Seoul. His extensive knowledge and experience in filmmaking led him as a director / producer / photographer and sound mixer. He has been working in diverse international film projects in the U.S., Korea, Germany, Latvia, Morocco, Peru, Malaysia, the Bahamas and more. Some of his representative works are "Ryuichi Sakamoto: CODA" (2017), "200 Miles" (2017) and "16 BARS" (2018) and “Lucky Day” (2018).
    `,
        order: 'image-first',
      },
      {
        id: 3,
        image: STAFF03,
        desc: 'STAFF03 Image',
        text: `Daewon Choi is a producer/ fixer who started his career uniquely as a sound engineer first in London and later in NYC. Having been involved in numerous international projects from the U.S.,UK, Belgium, Finland, Malaysia and Japan, his recent production works include several Youtube and Netflix original series. For a US documentary about North Korean defectors that he is involved in, he followed the entire journey of the defectors crossing borders of several SE Asian jungles.
    `,
        order: 'text-first',
      },
    ],
  },
};

export { uiData };

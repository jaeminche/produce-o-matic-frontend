import {
  GYEONGBOKGUNG03,
  GRAPH01_LOCATIONINCENTIVES,
  GRAPH02_LOCATIONINCENTIVES,
  GYEONGBOKGUNG,
} from '../../assets';

const uiData = {
  locationIncentives: {
    uiType: 'normal',
    parent: 'produce-in-korea',
    title: 'Location Incentive',
    titleImage: GYEONGBOKGUNG03,
    subImages: [GYEONGBOKGUNG],
    text: [
      ` Apart from the uniquely beautiful locations that will make your film look different, there are many more reasons why you must consider South Korea as your next filming destination. One of the reasons is the economic one. You can save a lot by filming in South Korea and this is partly why you see South Korea more often in movies like Avengers: Age of Ultron (2015) and Black Panther (2018).  
      The KOFIC Location Incentive program, launched in 2011 by Korean Film Council (KOFIC), covers a part of the expenses of "foreign feature films, television series and documentaries" shot in South Korea. KOFIC grants up to 30% cash rebate on “foreign audio-visual works production expenditure incurred for goods and services in Korea”. The grant amount is subject to change depending on the numbers of days taken to shoot the film and the remaining grant program budget as of the date of application. (from Korea Film Council)
      `,
      ` Besides commercial feature films with high budget, documentary and indie feature films can also enjoy South Korea’s location incentive program because the required amount of local spending is a lot less than existing incentive programs of neighboring countries in Asia such as Japan, Taiwan, the Philippines and Thailand. Compared to Japan’s pilot incentive program (1.8M), Thailand (1.4M), Taiwan (1M) or the Philippines (157K), KOFIC’s location incentive requires only USD 44K and it makes South Korea pretty much the only country that support non commercial feature films of small medium sizes with location incentive. There are a few requirements you must meet in order to access the program. You must have minimum shooting days of 3 days and spend 50 million KRW (approx. USD 44K) or more locally in South Korea. You also need to have a registered local producer partner on board to be able to apply for it. 

      Besides KOFIC’s location incentive program, there are regional supports from most provinces and several major cities of Korea available to foreign projects shot in South Korea and some of the support programs can be extremely beneficial to the projects in development or in pre-production. SFC (Seoul Film Commission) for example, provides up to 30%, or up to USD 265K, for production costs for film projects to be shot in Seoul. For projects with an extraordinarily high marketing value, the cap can be lifted. The City also provides the cost of location scouting and script development to selected foreign producers, directors, writers and principal staff. The location scouting support includes round-trip air tickets for two people, accommodations, a domestic location coordinator and a rental car whereas script development support includes round trip air tickets and a screenplay writing space.
      
      Find out if your project is eligible and get tailored advice on accessing South Korea’s national and regional incentives and cash rebates by using BUDGET-O-MATIC.`,
    ],
    flexBox: [
      {
        id: 1,
        type: 'image',
        image: GRAPH01_LOCATIONINCENTIVES,
        desc: 'graph01',
      },
      {
        id: 2,
        type: 'image',
        image: GRAPH02_LOCATIONINCENTIVES,
        desc: 'graph02',
      },
    ],
  },
};

export { uiData };

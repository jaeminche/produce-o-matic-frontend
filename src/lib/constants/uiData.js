import {
  GYEONGBOKGUNG03,
  GRAPH01_LOCATIONINCENTIVES,
  GRAPH02_LOCATIONINCENTIVES,
  GYEONGBOKGUNG,
  TIME_KOREA,
  TIME_YOUR,
  WEATHER,
} from '../../assets';

const uiData = {
  locationIncentives: {
    id: 1,
    uiType: 'default',
    parent: 'produce-in-korea',
    rows: [
      { id: 1, type: 'title', text: 'Location Incentive' },
      {
        id: 2,
        type: 'image',
        path: GYEONGBOKGUNG03,
        desc: 'Gyeuongokgung palace',
      },
      {
        id: 3,
        type: 'text',
        text: ` Apart from the uniquely beautiful locations that will make your film look different, there are many more reasons why you must consider South Korea as your next filming destination. One of the reasons is the economic one. You can save a lot by filming in South Korea and this is partly why you see South Korea more often in movies like Avengers: Age of Ultron (2015) and Black Panther (2018).  
    The KOFIC Location Incentive program, launched in 2011 by Korean Film Council (KOFIC), covers a part of the expenses of "foreign feature films, television series and documentaries" shot in South Korea. KOFIC grants up to 30% cash rebate on “foreign audio-visual works production expenditure incurred for goods and services in Korea”. The grant amount is subject to change depending on the numbers of days taken to shoot the film and the remaining grant program budget as of the date of application. (from Korea Film Council)
    `,
      },
      {
        id: 4,
        type: 'flexContainerResponsive',
        items: [
          {
            id: 1,
            type: 'image',
            path: GRAPH01_LOCATIONINCENTIVES,
            desc: 'graph01',
          },
          {
            id: 2,
            type: 'image',
            path: GRAPH02_LOCATIONINCENTIVES,
            desc: 'graph02',
          },
        ],
      },
      {
        id: 5,
        type: 'text',
        text: ` Besides commercial feature films with high budget, documentary and indie feature films can also enjoy South Korea’s location incentive program because the required amount of local spending is a lot less than existing incentive programs of neighboring countries in Asia such as Japan, Taiwan, the Philippines and Thailand. Compared to Japan’s pilot incentive program (1.8M), Thailand (1.4M), Taiwan (1M) or the Philippines (157K), KOFIC’s location incentive requires only USD 44K and it makes South Korea pretty much the only country that support non commercial feature films of small medium sizes with location incentive. There are a few requirements you must meet in order to access the program. You must have minimum shooting days of 3 days and spend 50 million KRW (approx. USD 44K) or more locally in South Korea. You also need to have a registered local producer partner on board to be able to apply for it. 

        Besides KOFIC’s location incentive program, there are regional supports from most provinces and several major cities of Korea available to foreign projects shot in South Korea and some of the support programs can be extremely beneficial to the projects in development or in pre-production. SFC (Seoul Film Commission) for example, provides up to 30%, or up to USD 265K, for production costs for film projects to be shot in Seoul. For projects with an extraordinarily high marketing value, the cap can be lifted. The City also provides the cost of location scouting and script development to selected foreign producers, directors, writers and principal staff. The location scouting support includes round-trip air tickets for two people, accommodations, a domestic location coordinator and a rental car whereas script development support includes round trip air tickets and a screenplay writing space.
        
        Find out if your project is eligible and get tailored advice on accessing South Korea’s national and regional incentives and cash rebates by using BUDGET-O-MATIC.`,
      },
      { id: 6, type: 'image', path: GYEONGBOKGUNG },
    ],
  },
  generalKnowledge: {
    id: 2,
    uiType: 'withTabs',
    parent: 'produce-in-korea',
    rows: [
      { id: 1, type: 'title', text: 'General Knowledge' },
      {
        id: 2,
        type: 'tabs',
        tabs: [
          {
            id: 1,
            name: 'Korea',
            path: '/produce-in-korea/general-knowledge/korea',
            tabRowsKeys: ['Timezone', 'Weather', 'Language'],
          },
          {
            id: 2,
            name: 'Security & Health',
            path: '/produce-in-korea/general-knowledge/security-health',
            tabRowsKeys: ['Visa', 'Health', 'Security', 'Emergency Numbers'],
          },
          {
            id: 3,
            name: 'Money',
            path: '/produce-in-korea/general-knowledge/money',
            tabRowsKeys: ['Currency & Money Exchange', 'Banking & Payment'],
          },
          {
            id: 4,
            name: 'Transportation',
            path: '/produce-in-korea/general-knowledge/transportation',
            tabRowsKeys: [
              'Maps',
              'T-Money Card',
              'Subway & Bus Fares',
              'Kakao T',
              'KTX',
              'Quick-service',
            ],
          },
          {
            id: 5,
            name: 'Food',
            path: '/produce-in-korea/general-knowledge/food',
            tabRowsKeys: [
              'default',
              'Vegetarian, Vegan and Halal Food',
              'Delivery Apps',
            ],
          },
          {
            id: 6,
            name: 'Telecommunication',
            path: '/produce-in-korea/general-knowledge/telecommunication',
            tabRowsKeys: [
              'SIM Card',
              'WiFi Egg',
              'Mobile Rental',
              'WiFi Access',
            ],
          },
        ],
      },
    ],
    tabRows: {
      korea: [
        {
          id: 1,
          type: 'sectionTitle',
          text: 'Time Zone',
        },
        {
          id: 2,
          type: 'text',
          text:
            'Korean Standard Time (ST) is General Meridian Time +9 (GMT+9). It does not switch to daylight saving time (DST) during the summer.',
        },
        {
          id: 3,
          type: 'flexContainer',
          items: [
            {
              id: 1,
              type: 'image',
              path: TIME_KOREA,
              desc: 'Korea Time',
              text: 'Korea Time',
            },
            {
              id: 2,
              type: 'image',
              path: TIME_YOUR,
              desc: 'Your Time',
              text: 'Your time',
            },
          ],
        },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'Weather',
        },
        {
          id: 5,
          type: 'text',
          text:
            'S.Korea has four distinct seasons. Of these, spring and autumn are considered more comfortable. Summers are hot and humid, with temperatures of between 25 and 35 degrees Celsius. The rainy season is usually between July and August. The winter season’s average temperature varies from between 0 to -10 degrees Celsius.',
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 7,
          type: 'sectionTitle',
          text: 'Language',
        },
        {
          id: 8,
          type: 'text',
          text: `The Korean language uses the Hangeul writing system, an alphabet created by King Sejong the Great in 1443. But the Seoul subway, street signs and product descriptions in major department stores also use English in Romanized letters.

            For more efficient communication on film sets, it is highly recommended to hire key crew who have a good command of English. They can help with communication between other crew members whose English skills may be lacking.`,
        },
        { id: 9, type: 'image', path: WEATHER, desc: 'weather' },
      ],
      'security-health': [
        {
          id: 1,
          type: 'sectionTitle',
          text: 'Visa',
        },
        {
          id: 2,
          type: 'text',
          text: `A valid passport is required to enter the Republic of Korea (ROK). Nationals of non-visa waiver countries need to apply for visas at a Korean embassy or consulate before entering South Korea. A visa is not required for nationals of visa waiver or visa-free countries who wish to enter the country for tourism purposes only. You can find more detailed information on the government website.
            `,
        },
        { id: 3, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'Weather',
        },
        {
          id: 5,
          type: 'text',
          text:
            'S.Korea has four distinct seasons. Of these, spring and autumn are considered more comfortable. Summers are hot and humid, with temperatures of between 25 and 35 degrees Celsius. The rainy season is usually between July and August. The winter season’s average temperature varies from between 0 to -10 degrees Celsius.',
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 7,
          type: 'sectionTitle',
          text: 'Language',
        },
        {
          id: 8,
          type: 'text',
          text: `The Korean language uses the Hangeul writing system, an alphabet created by King Sejong the Great in 1443. But the Seoul subway, street signs and product descriptions in major department stores also use English in Romanized letters.

            For more efficient communication on film sets, it is highly recommended to hire key crew who have a good command of English. They can help with communication between other crew members whose English skills may be lacking.`,
        },
        { id: 9, type: 'image', path: WEATHER, desc: 'weather' },
      ],
      money: [
        {
          id: 1,
          type: 'sectionTitle',
          text: 'Time Zone',
        },
        {
          id: 2,
          type: 'text',
          text:
            'Korean Standard Time (ST) is General Meridian Time +9 (GMT+9). It does not switch to daylight saving time (DST) during the summer.',
        },
        {
          id: 3,
          type: 'flexContainer',
          items: [
            {
              id: 1,
              type: 'image',
              path: TIME_KOREA,
              desc: 'Korea Time',
              text: 'Korea Time',
            },
            {
              id: 2,
              type: 'image',
              path: TIME_YOUR,
              desc: 'Your Time',
              text: 'Your time',
            },
          ],
        },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'Weather',
        },
        {
          id: 5,
          type: 'text',
          text:
            'S.Korea has four distinct seasons. Of these, spring and autumn are considered more comfortable. Summers are hot and humid, with temperatures of between 25 and 35 degrees Celsius. The rainy season is usually between July and August. The winter season’s average temperature varies from between 0 to -10 degrees Celsius.',
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 7,
          type: 'sectionTitle',
          text: 'Language',
        },
        {
          id: 8,
          type: 'text',
          text: `The Korean language uses the Hangeul writing system, an alphabet created by King Sejong the Great in 1443. But the Seoul subway, street signs and product descriptions in major department stores also use English in Romanized letters.

            For more efficient communication on film sets, it is highly recommended to hire key crew who have a good command of English. They can help with communication between other crew members whose English skills may be lacking.`,
        },
        { id: 9, type: 'image', path: WEATHER, desc: 'weather' },
      ],
      transportation: [
        {
          id: 1,
          type: 'sectionTitle',
          text: 'Time Zone',
        },
        {
          id: 2,
          type: 'text',
          text:
            'Korean Standard Time (ST) is General Meridian Time +9 (GMT+9). It does not switch to daylight saving time (DST) during the summer.',
        },
        {
          id: 3,
          type: 'flexContainer',
          items: [
            {
              id: 1,
              type: 'image',
              path: TIME_KOREA,
              desc: 'Korea Time',
              text: 'Korea Time',
            },
            {
              id: 2,
              type: 'image',
              path: TIME_YOUR,
              desc: 'Your Time',
              text: 'Your time',
            },
          ],
        },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'Weather',
        },
        {
          id: 5,
          type: 'text',
          text:
            'S.Korea has four distinct seasons. Of these, spring and autumn are considered more comfortable. Summers are hot and humid, with temperatures of between 25 and 35 degrees Celsius. The rainy season is usually between July and August. The winter season’s average temperature varies from between 0 to -10 degrees Celsius.',
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 7,
          type: 'sectionTitle',
          text: 'Language',
        },
        {
          id: 8,
          type: 'text',
          text: `The Korean language uses the Hangeul writing system, an alphabet created by King Sejong the Great in 1443. But the Seoul subway, street signs and product descriptions in major department stores also use English in Romanized letters.

            For more efficient communication on film sets, it is highly recommended to hire key crew who have a good command of English. They can help with communication between other crew members whose English skills may be lacking.`,
        },
        { id: 9, type: 'image', path: WEATHER, desc: 'weather' },
      ],
      food: [
        {
          id: 1,
          type: 'sectionTitle',
          text: 'Time Zone',
        },
        {
          id: 2,
          type: 'text',
          text:
            'Korean Standard Time (ST) is General Meridian Time +9 (GMT+9). It does not switch to daylight saving time (DST) during the summer.',
        },
        {
          id: 3,
          type: 'flexContainer',
          items: [
            {
              id: 1,
              type: 'image',
              path: TIME_KOREA,
              desc: 'Korea Time',
              text: 'Korea Time',
            },
            {
              id: 2,
              type: 'image',
              path: TIME_YOUR,
              desc: 'Your Time',
              text: 'Your time',
            },
          ],
        },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'Weather',
        },
        {
          id: 5,
          type: 'text',
          text:
            'S.Korea has four distinct seasons. Of these, spring and autumn are considered more comfortable. Summers are hot and humid, with temperatures of between 25 and 35 degrees Celsius. The rainy season is usually between July and August. The winter season’s average temperature varies from between 0 to -10 degrees Celsius.',
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 7,
          type: 'sectionTitle',
          text: 'Language',
        },
        {
          id: 8,
          type: 'text',
          text: `The Korean language uses the Hangeul writing system, an alphabet created by King Sejong the Great in 1443. But the Seoul subway, street signs and product descriptions in major department stores also use English in Romanized letters.

            For more efficient communication on film sets, it is highly recommended to hire key crew who have a good command of English. They can help with communication between other crew members whose English skills may be lacking.`,
        },
        { id: 9, type: 'image', path: WEATHER, desc: 'weather' },
      ],
      telecommunication: [
        {
          id: 1,
          type: 'sectionTitle',
          text: 'Time Zone',
        },
        {
          id: 2,
          type: 'text',
          text:
            'Korean Standard Time (ST) is General Meridian Time +9 (GMT+9). It does not switch to daylight saving time (DST) during the summer.',
        },
        {
          id: 3,
          type: 'flexContainer',
          items: [
            {
              id: 1,
              type: 'image',
              path: TIME_KOREA,
              desc: 'Korea Time',
              text: 'Korea Time',
            },
            {
              id: 2,
              type: 'image',
              path: TIME_YOUR,
              desc: 'Your Time',
              text: 'Your time',
            },
          ],
        },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'Weather',
        },
        {
          id: 5,
          type: 'text',
          text:
            'S.Korea has four distinct seasons. Of these, spring and autumn are considered more comfortable. Summers are hot and humid, with temperatures of between 25 and 35 degrees Celsius. The rainy season is usually between July and August. The winter season’s average temperature varies from between 0 to -10 degrees Celsius.',
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 7,
          type: 'sectionTitle',
          text: 'Language',
        },
        {
          id: 8,
          type: 'text',
          text: `The Korean language uses the Hangeul writing system, an alphabet created by King Sejong the Great in 1443. But the Seoul subway, street signs and product descriptions in major department stores also use English in Romanized letters.

            For more efficient communication on film sets, it is highly recommended to hire key crew who have a good command of English. They can help with communication between other crew members whose English skills may be lacking.`,
        },
        { id: 9, type: 'image', path: WEATHER, desc: 'weather' },
      ],
    },
  },
};

export { uiData };

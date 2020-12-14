import {
  GYEONGBOKGUNG03,
  GRAPH01_LOCATIONINCENTIVES,
  GRAPH02_LOCATIONINCENTIVES,
  GYEONGBOKGUNG,
  TIME_KOREA,
  TIME_YOUR,
  WEATHER,
  MAP_KTX,
  MAP_DRONE,
  DRONE01,
  RENTALIMAGE1,
  RENTALIMAGE2,
  RENTALCAR1,
  RENTALCAR2,
  RENTALCAR3,
  TEMPTABLEINRENTAL,
} from '../../assets';

const uiData = {
  locationIncentives: {
    id: 1,
    uiType: 'default', // 'default' or 'withTabs'(as in general knowledge page)
    parent: 'produce-in-korea',
    rows: [
      { id: 1, type: 'title', text: 'Location Incentive' },
      // TODO: 영상 게시 예정
      // {
      //   id: 2,
      //   type: 'image',
      //   path: GYEONGBOKGUNG03,
      //   desc: 'Gyeuongokgung palace',
      // },
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
        
        Find out if your project is eligible and get tailored advice on accessing South Korea’s national and regional incentives and cash rebates by using <a href='/produce-o-matic/budget-o-matic'>BUDGET-O-MATIC</a>.`,
      },
      // { id: 6, type: 'image', path: GYEONGBOKGUNG },
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
          type: 'flexContainerResponsive',
          items: [
            {
              id: 1,
              type: 'imageWithTextInside',
              path: TIME_KOREA,
              desc: 'Korea Time',
              text: 'Korea Time',
              // ? specify customcss for it is a particular case for clocks UI
              customCssForImage: 'time-backgroundimage',
              customCssForText: 'time-title',
            },
            {
              id: 2,
              type: 'imageWithTextInside',
              path: TIME_YOUR,
              desc: 'Your Time',
              text: 'Your Time',
              // ? specify customcss for it is a particular case for clocks UI
              customCssForImage: 'time-backgroundimage',
              customCssForText: 'time-title',
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
          text: `A valid passport is required to enter the Republic of Korea (ROK). Nationals of non-visa waiver countries need to apply for visas at a Korean embassy or consulate before entering South Korea. A visa is not required for nationals of visa waiver or visa-free countries who wish to enter the country for tourism purposes only. You can find more detailed information on the <a href='https://www.visa.go.kr/'>government website</a>.
            `,
        },
        { id: 3, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'Health',
        },
        {
          id: 5,
          type: 'text',
          text: `The CDC (Centers for Disease Control and Prevention) and WHO (World Health Organization) recommend the following vaccinations for travellers to South Korea:
            Hepatitis A
            Hepatitis B
            Japanese Encephalitis
            Rabies
            
            Currently the COVID-19 situation is well managed and under control. South Korea introduced what is considered one of the best-organised epidemic control programs in the world. It is for this reason that the country’s daily virus cases remain in the mere dozens. As Netflix has pointed out, Korea is one of the few countries worldwide that is able to safely produce movies and TV series right now.
            `,
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 7,
          type: 'sectionTitle',
          text: 'Security',
        },
        {
          id: 8,
          type: 'text',
          text: `South Korea is considered one of the safest countries in the world when it comes to crimes, including pickpocketing. It’s better to be safe than sorry, but it may reassure you to know that in cafes and restaurants many individuals leave their bags, notebooks and even cellphones to reserve a seat or when they use the restroom, because theft is so rare. Guns and drugs are illegal in Korea and it is a rarity to see any kind of violence from the public or the police.

          Although the relations between North and South Korea is often a hotly contested topic in the media, South Koreans themselves rarely worry about an actual attack. In the 70 years since the North and South were divided as a consequence of the Korean War, there has never been a major attack or conflict between the two.
          `,
        },
        { id: 9, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 10,
          type: 'sectionTitle',
          text: 'Emergency numbers',
        },
        {
          id: 11,
          type: 'text',
          text: `To call an ambulance or the fire department, dial 119. For the police, it’s 112. In case of a medical emergency, calling 1339 will connect to Seoul’s medical information centre aimed specifically at foreigners.

          111 is the number to call for the National Intelligence Service, 1330 for the Tourism and Translation Service, and 122 for the coast guard.
           
          Another useful number to be aware of is 120, <a href='https://www.120dasan.or.kr/static/lang/lang1.html'>Dasan Call Center</a>. It is a helpline offering general information on living and tourism in Seoul.
          
          `,
        },
        { id: 12, type: 'image', path: WEATHER, desc: 'weather' },
      ],
      money: [
        {
          id: 1,
          type: 'sectionTitle',
          text: 'Currency & Money Exchange',
        },
        {
          id: 2,
          type: 'text',
          text: `The Korean currency is called Won. Coins range from 10 to 500 KRW, while bills range from 1,000 to 50,000 KRW.
 
            As of 24th Aug 2020, 1 KRW = 0.00084 USD or 1 USD = 1187,47 KRW.
            
            South Korea’s major banks offer currency exchange: Kookmin, Woori, Shinhan, etc. Currency exchange offices with good exchange rates can also be found in Seoul districts Itaewon and Myeongdong.`,
        },
        { id: 3, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'Banking & Payment',
        },
        {
          id: 5,
          type: 'text',
          text: `Banks are open in Seoul from 9:00am to 4:00pm, Monday to Friday. At Incheon International Airport they are open daily from 6:00am to 9:00pm. Don’t be surprised if you’re unable to draw money from an ATM between 11:30pm and midnight on a Sunday - for many ATMs this half-hour time slot is their maintenance time. 
            
            In South Korea it is very common to pay by credit card and many individuals also use Samsung Pay and Zero Pay. Micropayments can be made in convenience stores, taxis and at subway stations.
            `,
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
      ],
      transportation: [
        {
          id: 1,
          type: 'sectionTitle',
          text: 'Maps',
        },
        {
          id: 2,
          type: 'text',
          text: `To get around in the capital and elsewhere, a well-functioning map is essential. Since Google Maps hasn’t legally been allowed to map South Korea in many years, it’s not a viable option. Instead, make sure to download the app Naver Map (iOS or Android) for accurate directions and locations.
            
            Popular places of interest can easily be found on Naver Map when typing in English, but often there won’t be any English results for restaurants or cafes. If the spot is listed on Google, the roundabout way is to copy the Korean name from there and paste it into Naver Map in order to find the location.
            
            You can download the most up-to-date subway map on the Seoul Metro website. It’s available in Korean, English, Chinese and Japanese.
            `,
        },
        { id: 3, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'T-Money Card',
        },
        {
          id: 5,
          type: 'text',
          text: `It’s most cost-effective to use a T-Money card when using public transportation such as the subway, bus or taxi. It is contactless and reloadable and can also be used for purchases at convenience stores, cafes and fast food outlets such as McDonald’s.
          
          T-Money can be purchased at convenience stores or subway stations (price: KRW 2,500), but all reloads must be paid for with cash. T-Money can be shared between two people on Seoul public buses, but not on the subway.
          `,
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 7,
          type: 'sectionTitle',
          text: 'Subway & Bus Fares',
        },
        {
          id: 8,
          type: 'text',
          text: `Adults pay 1,250 won per subway ride within a radius of 10km. An additional 100 won is charged for every 5km. A bus ride with a Blue Bus (mainline bus) or Green Bus (branch bus) will cost 1,200 won or 1,300 won per adult.
          
          You can find more detailed information regarding public transportation in Seoul on the <a href='http://english.seoul.go.kr/life-information/transportation-information/public-transportation/2-subway/'>Seoul Metropolitan Government website</a> and the <a href='https://english.visitkorea.or.kr/enu/TRP/TRP_MAIN.jsp'>Korea Tourism Organization website</a>.`,
        },
        { id: 9, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 10,
          type: 'sectionTitle',
          text: 'Kakao T',
        },
        {
          id: 11,
          type: 'text',
          text: `Kakao T (<a href='https://apps.apple.com/us/app/kakao-t/id981110422'>iOS</a> and <a href='https://play.google.com/store/apps/details?id=com.kakao.taxi&hl=en_US'>Android</a>) is the Korean equivalent of UBER or LYFT and is widely used to call a taxi, especially during night time. `,
        },
        { id: 12, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 13,
          type: 'sectionTitle',
          text: 'KTX',
        },
        {
          id: 14,
          type: 'text',
          text: `The Korail Train eXpress travels at a speed of 305km per hour and connects South Korea’s major cities. In Seoul, there are four KTX train stations: Seoul Station, Yongsan Station, Cheongnyangni Station, and Yeongdeungpo Station.
          `,
        },
        {
          id: 15,
          type: 'flexContainerResponsive',
          items: [
            {
              id: 1,
              type: 'image',
              path: MAP_KTX,
              desc: 'KTX map',
            },
            {
              id: 2,
              type: 'text',
              text: `Reservations can be made online, at the ticket counters in stations, via travel agents, or through automatic ticketing machines. 

              The passenger’s reservation number and passport are required to pick up tickets at a Korail ticketing counter before departure. For more information and to book your ticket, visit the <a href='https://www.ktxtrains.com/'>KTX website</a>.`,
            },
          ],
        },
        {
          id: 16,
          type: 'sectionTitle',
          text: 'Quick-service',
        },
        {
          id: 17,
          type: 'text',
          text: `Quick-service is a quick delivery system available in Korea’s urban areas that can be very useful for a film production crew. Anything from documents to packages to food can be delivered via motorcycle at lightning speed from point A to point B for around 20-40 US dollars. You’ll often hear crew members say “let’s use Quick” to get things delivered.
          `,
        },
        { id: 18, type: 'image', path: WEATHER, desc: 'weather' },
      ],
      food: [
        {
          id: 1,
          type: 'text',
          text: `Korean food culture is diverse and marked by innovation. Many cafes will serve the latest drink that everyone is talking about, while restaurants serve their own specialties that quickly become trendy spots, attracting Seoul’s novelty food seekers.

            In contrast to this, there are everyday affordable eateries such as Kimbab Cheonguk or Bonjuk and Bibimbap Cafe, as well as more traditional restaurants with a range of different banchan (side dishes). Some restaurants even specialise in Buddhist temple food, a great place to find vegan food.
            
            Tap water is drinkable, but for convenience it’s the norm to use filter machines. You’ll find filtered water available for free in most restaurants, cafes, libraries, etc. Restrooms are safe and free to use everywhere and most importantly, they’re ubiquitous. They can be found in restaurants, cafes, public buildings and at every subway station.`,
        },
        {
          id: 2,
          type: 'sectionTitle',
          text: 'Vegetarian, vegan and halal food',
        },
        {
          id: 3,
          type: 'text',
          text: `Many Korean dishes and meals are centred around vegetables, but sometimes it can be hard to find dishes that are 100% vegetarian or vegan (meat or seafood may be used as soup stock and in some vegetable side dishes). 

            A great source for vegan- and vegetarian-friendly dining options in Seoul is <a href='https://www.happycow.net/asia/south_korea/seoul/'>Happycow</a>. Be sure to check it out.
            
            Halal-certified restaurants and eateries with halal menus are increasing steadily in number, with more than 250 already offering halal food in South Korea. These are certified under four categories:
            Officially certified as halal by the Korean Muslim Federation (KMF), which is recognized by Jabatan Kemajuan Islam Malaysia (JAKIM)
            Self-certified as halal
            Muslim-friendly restaurants with a halal menu
            Pork-free
            
            The so-called Muslim street in Seoul’s Itaewon district is the best spot to visit for a range of halal food choices in close proximity. Itaewon is also the go-to place for many other international foods, from Mexican and Italian to Thai food.`,
        },
        { id: 4, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 5,
          type: 'sectionTitle',
          text: 'Delivery apps',
        },
        {
          id: 6,
          type: 'text',
          text: `Korea is one of the most advanced countries when it comes to restaurant food deliveries. It doesn’t matter whether you are in a park, at the river or in an office building - the food will be delivered to wherever you are. This is particularly convenient for production crews, as there is no need to rely solely on catering services.
          
          Baedal Minjok/Baemin (<a href='https://apps.apple.com/us/app/%EB%B0%B0%EB%8B%AC%EC%9D%98%EB%AF%BC%EC%A1%B1/id378084485'>iOS</a> and <a href='https://play.google.com/store/apps/details?id=com.sampleapp&hl=en_US'>Android</a>) and Yogiyo (<a href='https://apps.apple.com/us/app/id543831532'>iOS</a> and <a href='https://play.google.com/store/apps/details?id=com.fineapp.yogiyo&hl=en_US'>Android</a>) are the two biggest and most popular food delivery apps. Both operate 24/7, with each store having its own business hours. Daily changing coupons, an ETA, and a real-time food tracking system make these delivery apps very convenient to use.`,
        },
        { id: 7, type: 'image', path: WEATHER, desc: 'weather' },
      ],
      telecommunication: [
        {
          id: 1,
          type: 'sectionTitle',
          text: 'SIM card',
        },
        {
          id: 2,
          type: 'text',
          text: `4G LTE is available in almost every part of the country.

          Prior to arrival in South Korea, it’s important to check:
          Your phone is unlocked 
          Your device supports GSM network frequencies
           
          It’s easy and convenient to buy a SIM card online before arriving in Korea, but they can also be purchased at Incheon Airport, at major convenience stores such as GS25, CU and Seven Eleven, and at outlets run by Korean mobile service providers KT, SKT, and LG U+.
          
          Purchasing a universal type USIM Card will ensure it’s compatible with all types of phones. There are many payment plans available, from unlimited data for a certain amount of days, without the option to make or receive calls, to all-inclusive monthly plans. Travel shop <a href='https://blog.trazy.com/survival-tip-all-about-sim-card-prepaid-sim-card-for-foreigners/'>Trazy</a> provides more information.
          `,
        },
        { id: 3, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 4,
          type: 'sectionTitle',
          text: 'WiFi egg',
        },
        {
          id: 5,
          type: 'text',
          text: `An alternative to getting a SIM card is renting a WiFi egg or WiFi router. If all you need is access to the internet without making phone calls or sending text messages, then a WiFi egg is a hassle-free option. It also means that other crew members can connect to the WiFi with their phones, iPads and laptops, without incurring an additional charge.
          `,
        },
        { id: 6, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 7,
          type: 'sectionTitle',
          text: 'Mobile rental',
        },
        {
          id: 8,
          type: 'text',
          text: `If you prefer to rent a mobile phone, this service is offered by major telecom companies such as LG, SK, and KT in the arrivals lobby at Incheon and Gimpo International Airports. Your passport and a credit card are required upon pick-up and the rental phone must be returned to the same counter from which it was rented.`,
        },
        { id: 9, type: 'image', path: WEATHER, desc: 'weather' },
        {
          id: 10,
          type: 'sectionTitle',
          text: 'WiFi access',
        },
        {
          id: 11,
          type: 'text',
          text: `Internet access is nearly omnipresent in Seoul. There are almost 10,000 free WiFi hotspots in the capital alone. You’ll find these at many restaurants and cafes, at airports, hotels and tourist information centres, at public facilities such as subway and railway stations, and on the high-speed KTX trains as well. Libraries, hospitals, universities, tourists spots, and even taxis offer complimentary WiFi access. Sometimes you’ll have to ask for the password (bimil beonho 비밀 번호) or log in to their system.
          `,
        },
        { id: 12, type: 'image', path: WEATHER, desc: 'weather' },
      ],
    },
  },
  permit: {
    id: 3,
    uiType: 'default',
    parent: 'produce-o-manual',
    rows: [
      { id: 1, type: 'title', text: 'Permit' },
      {
        id: 2,
        type: 'text',
        text: `South Korea is world renowned for its swiftness and efficiency when it comes to working with government organizations and agencies and getting a filming permit is not an exception. Getting a filming permit is quick and easy in South Korea as long as you know how to communicate with them. 
        The local authorities are extremely cooperative because they are well aware of the power of culture and the media and the local governments in the areas with popular tourist attractions are competing with each other for more films and TV shows to be produced in their governing regions. What makes it not always easy is the language barrier and you are advised to have a local producer partner to fill in the application forms. 
        Once an application is submitted, it takes no more than a couple of days to maximum a couple of weeks to get permission to shoot in most public locations and it is also not hard to get permits from privately owned properties as long as they are commercially managed. Prices and conditions for the permit in most public locations are straightforward and clearly stated upfront most of the time so no room for bullshit.
        Below is the list of some of the most popular and frequently requested filming locations and necessary information on requesting filming permission.`,
      },
      { id: 3, type: 'image', path: GYEONGBOKGUNG },
      {
        id: 4,
        type: 'flexContainerResponsive',
        items: [
          {
            id: 1,
            type: 'image',
            path: DRONE01,
            desc: '..',
          },
          {
            id: 2,
            type: 'text',
            text: `Getting permits for flying a drone can be tricky due to the strict national security laws but it is possible to fly drones in many areas of the country 
            and the possibilities for exceptions are always there as long as you approach the authority with proper knowledge and motivations. 
            `,
          },
        ],
      },
      {
        id: 5,
        type: 'sectionTitle',
        text: 'Drone permit',
      },
      {
        id: 6,
        type: 'text',
        text: `General Drone Rules in Korea 
        - (Source:  <a href='http://jasonteale.com/blog/2019/03/flying-a-drone-in-south-korea'>http://jasonteale.com/blog/2019/03/flying-a-drone-in-south-korea/</a>) 
            Source: UAV Systems International. *edited to add more clarity for Korea.

            You cannot fly higher than 150 meters (492 feet). You can set the limit in your DJI Go4 app.
You cannot fly within 5.5km of airfields or in areas where aircraft are operating. These will be regulated
 in the app but also keep an eye out for hospital helipads (there are more here than you may realize).
You must fly during daylight hours and only fly in good weather conditions. Use UAV Forecast to let you know the conditions.
Avoid flying over crowds and respect the privacy of others. This goes double for places like Haeundae beach and other areas. There are police that will patrol these areas due to a higher rate of people taking pictures of sunbathers without permission.
You cannot fly near Seoul Plaza, military installations, government facilities, power plants, or areas of facilities related to national security
You cannot fly when there is low visibility or yellow dust. This is a particular issue this year and will continue to be a problem. Fly with caution.
Do not fly your drone beyond line of sight. This can be an issue for smaller drones but keep it in mind when flying.`,
      },
      {
        id: 7,
        type: 'sectionTitle',
        text: 'Drone Zone Maps (Seoul)',
      },
      { id: 8, type: 'image', path: MAP_DRONE },
    ],
  },
  contract: {
    id: 4,
    uiType: 'default',
    parent: 'produce-o-manual',
    rows: [
      { id: 1, type: 'title', text: 'Contract' },
      { id: 2, type: 'image', path: GYEONGBOKGUNG },
      {
        id: 3,
        type: 'text',
        text: `Long before Bong Joonho’s Parasite winning the Oscars, South Korea’s film industry has long been known outside the world for its unique community culture, work ethics and high quality but also for the notorious excessive overtime on the other hand. Korean film crews are generally motivated and hard working people with a sense of pride. Since the introduction of the Labor Standard Act in 2012 that states weekly work hours and overtime regulations, the industry players have worked hard together to settle it down and now most employers in the industry commonly practice it. The hourly minimum wage of 2020 is confirmed at 8,590 KRW (USD 7.10) and the work hours are limited to 52 hours per week. Global movement of #Metoo campaign had a great influence on Korea’s film industry and made critical changes in the culture as well as in the system. It is now a compulsory condition to take an education session on sexual harassment for any project that receives grants or supports from Korea Film Council and other regional film funds including KOFIC’s location incentive program.

        Download sample contracts here:

        Local producer / fixer
        Drone operator
        Sound mixer`,
      },
    ],
  },
  insurance: {
    id: 5,
    uiType: 'default',
    parent: 'produce-o-manual',
    rows: [
      { id: 1, type: 'title', text: 'Insurance' },
      { id: 2, type: 'image', path: GYEONGBOKGUNG },
      {
        id: 3,
        type: 'text',
        text: `Production insurance is one of the most crucial yet easily omitted items when filming in foreign countries. South Korea’s insurance industry is well developed and therefore it’s easy and quick to get your precious film crews and partners covered in the country. The fee for insurance varies depending on which service provider you’re getting insurance from and also conditions of the insured such as the age but getting insurance for regular film production is a straight forward job so no reason not to get one in South Korea. Most popular type of accident insurance costs around 1 dollar per person daily and the price for equipment insurance against fire and theft is approximately 0.18% of the equipment's’ value for a period of a week.

        You need to contract and pay usually 48 hours before the insurance becomes effective and provide the following information.
        
<ul><strong>For accident insurance</strong></ul>
<li>Full name in passport</li>
<li>Date of birth</li>
<li>Passport No. (or social ID No for Koreans)</li>

<ul><strong>For equipment insurance</strong></ul>
<li>Serial No.</li>
<li>Value</li>

<ul><strong>Here is the list of some of the most popular insurance service providers.</strong></ul>
<li>Hyundai Marine and Fire Insurance Co., Ltd.
<a href='https://www.hi.co.kr'>https://www.hi.co.kr/</a></li>
<li>DB Insurance Co., Ltd.
<a href='https://www.idbins.com/'>https://www.idbins.com/</a></li>
`,
      },
    ],
  },
  rental: {
    id: 6,
    uiType: 'default',
    parent: 'produce-o-manual',
    rows: [
      { id: 1, type: 'title', text: 'Rental' },
      { id: 2, type: 'image', path: RENTALIMAGE1 },
      {
        id: 3,
        type: 'sectionTitle',
        text: 'For accident insurance',
      },
      {
        id: 4,
        type: 'text',
        text: `Korea’s most production equipment rental stores are found in two different districts of Seoul: Gangnam and Hongdae. Gangnam that covers Sinsa and Apgujeong has long been a home to film and video production houses whereas an increasing number of rental stores were opened in Hongdae and Hapjeong district more recently since DMC (Digital Media City) was built and became Korea’s media industry hub. It is highly recommended for a producer with serious productions to search around Seoul as renting high end equipment can be a challenging task in other cities than Seoul.

        Along with the current popularity of YouTube, lighter and affordable production gears are largely popular in Korea and an increasing number of rental stores provide DSLR and mirrorless camera based gears to satisfy the needs from the customers. Whereas these stores are popular with choices of affordable gimbals, action cams and camera drones available, there usually is a long cue so it may not be an ideal place to rent equipment for those who work with a tight schedule. Among aged professional rental stores in Seoul are open 24 hours and are located near the highway entrance which comes in handy if shooting involves a long distance travel. Equipment is rented by 12 hours or 24 hours and renting for a longer period could be discounted at most stores and student discounts are available at some stores. 
        `,
      },
      { id: 5, type: 'image', path: TEMPTABLEINRENTAL }, // TODO: change to table / text for mobile
      {
        id: 5,
        type: 'text', // TODO: change to table / text for mobile
        text: ``,
      },
      { id: 6, type: 'image', path: RENTALIMAGE2 },
      {
        id: 7,
        type: 'text',
        text: `Budget-O-Matic™ is a web software that helps filmmakers and producers to get estimated costs for filming based on local price data collected on a daily basis and it shows the average rental price of some of the most frequently rented equipment in South Korea today. Try it now. 
        `,
      },
      {
        id: 8,
        type: 'sectionTitle',
        text: 'Renting Vehicles',
      },
      {
        id: 9,
        type: 'text',
        text: `Hyundai Grand Starex (H-1) and Kia Grand Carnival are among the most popular production vehicles in South Korea and they are compatible with Mercedes Benz’s Sprinter or Toyota’s HiAce. Other popular models are 15 seater mini van H-350, 45 seater coach Universe, and box truck Bongo III. These production vehicles are commonly rented from local car rental agencies with an owner driver attached and they are popular among local producers as they often have more competitive offers than international car rental companies such as AVIS or Hertz which specialize more in passenger vehicles for tourists. The rates differ by model, season or distance and the price is a subject for negotiation of course. Below is the list of some useful tips for renting a car in South Korea.

        - Quotes usually include the daily price of a rented vehicle and driver but without fuel, gas, toll, parking 
          and foods and accomodations.
        
        - Overtime charge may apply after 8 hours of driving daily.
        
        - While many rented production vehicles come without the last row of seats to secure more space for
           loads, it is illegal and can be fined when uncovered.
        `,
      },
      {
        id: 10,
        type: 'flexContainerResponsive',
        items: [
          {
            id: 1,
            type: 'image',
            path: RENTALCAR1,
            desc: 'Hyundai Grand Starex (H-1)',
          },
          {
            id: 2,
            type: 'image',
            path: RENTALCAR2,
            desc: 'Hyundai H-350',
          },
          {
            id: 3,
            type: 'image',
            path: RENTALCAR3,
            desc: 'Kia Bongo III',
          },
        ],
      },
      {
        id: 11,
        type: 'text',
        text: `Budget-O-Matic™ is a web software that helps filmmakers and producers to get estimated costs for filming based on local price data collected on a daily basis and it shows the average rental price of
        some of the most frequently rented production vehicles in South Korea today. Try it now.
        
        We offer an inclusive production service that includes premium production vehicle rentals with a highly selective team of drivers with years of experience of working with filmmakers among many of them who speak fluent English and understand the work environment. For more information about our production vehicle or booking one, please contact us  `,
      },
    ],
  },
  produce_o_matic: {
    id: 7,
    uiType: 'default',
    parent: 'produce-o-matic',
    rows: [
      { id: 1, type: 'title', text: 'Produce-O-Matic' },
      { id: 2, type: 'image', path: GYEONGBOKGUNG },
      {
        id: 3,
        type: 'text',
        text: `We are developing a new app. It's coming in 2021! Feel free to contact us at <a href="mailto:produceomatic@gmail.com">produceomatic@gmail.com</a> for more information`,
      },
    ],
  },
  contact_us: {
    id: 7,
    uiType: 'default',
    parent: 'produce-o-people',
    rows: [
      { id: 1, type: 'title', text: 'Contact Us' },
      { id: 2, type: 'image', path: GYEONGBOKGUNG },
      {
        id: 3,
        type: 'text',
        text: `Contact us at <a href="mailto:produceomatic@gmail.com">produceomatic@gmail.com</a>`,
      },
    ],
  },
  our_vision: {
    id: 8,
    uiType: 'default',
    parent: 'produce-o-people',
    rows: [
      { id: 1, type: 'title', text: 'Our Vision' },
      { id: 2, type: 'image', path: GYEONGBOKGUNG },
      {
        id: 3,
        type: 'text',
        text: `Contact us at <a href="mailto:produceomatic@gmail.com">produceomatic@gmail.com</a>`,
      },
    ],
  },
};

export { uiData };

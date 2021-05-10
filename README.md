# [<img src="https://user-images.githubusercontent.com/26568425/117560702-fed22780-b0ca-11eb-9f76-705e4321eb5a.png" />](https://www.produceomatic.com)

> This web app will help you automatize planning and budgeting your film production in South Korea!

![https://img.shields.io/badge/version-1.0.38-blue.svg?cacheSeconds=2592000](https://img.shields.io/badge/version-1.0.38-blue.svg?cacheSeconds=2592000)

[<img src="https://user-images.githubusercontent.com/26568425/117561286-663ea600-b0d0-11eb-8e79-77caed47aa8e.gif " />](https://www.produceomatic.com)

## 🚩 Table of Contents

- [Built With...](#-built-with)
- [Why Produce-O-Matic?](#-why-produce-o-matic)
- [Features](#-features)
- [Browser Support](#-browser-support)
- [Setting Up the Project](#-setting-up-the-project)
- [Developed by Jae M. Choi](#-developed-by-jae-m-choi)
- [License](#-license)

## 🔨 Built With...

- [React](https://reactjs.org/) v16.13.1
- [Redux](https://redux.js.org/) v4.0.5
- Redux-saga v1.1.3
- styled-components v5.2.0
- axios v0.21.1
- facepaint v1.2.1
- react-html-table-to-excel 2.0.0
- react-dropzone v11.3.1
- react-select v4.1.0
- react-slick v0.27.12
- react-table v7.6.2
- react-toastify v6.2.0
- react-open-weather v1.1.1
- (additional note on the Backend : RESTful APIs built with [Node.js](https://nodejs.org) v14.15.4)

## 🤖 Why Produce-O-Matic?

Produce-O-Matic is a (single-page / responsive) web application for film makers looking for filming locations in South Korea. The website, for users, is curated with useful information about filming in Korea, and provides ‘Budget-O-Matic’, an easy and fast budget calculator for your film/video production in Korea. For the app owner, it provides an admin page that lets you manage customers’ submission history and control every single content in the site.

> Developer's Note:
> _This front-end app, living in **AWS S3** and **Cloudfronts**, is operated by communicating through **RestfulAPIs** served by a Linux server on **AWS EC2**. I not only configured the AWS settings, but built the backend with **Node.js** and **MongoDB**. The source code for the backend is not open-sourced here, yet we are open to any collaboration for any future variation for this site for any other countries._

### 1. Budget-O-Matic, a fast and easy budget calculator with customizable templates made by our local producing expert.

[<img src="https://user-images.githubusercontent.com/26568425/117536683-7191c300-b037-11eb-8cf6-a5060f855319.gif " />](https://www.produceomatic.com/produce-o-matic/budget-o-matic)

Following features are supported:

- **Do It Yourself**
- **Auto-detect user's location** to set the default currency
- **Auto save** in user's local storage
- **Download** budget calculation result in Excel format
- **Get subtotals as you go**
- Get real-time averaged rental rates through **web-scraping** local rental shops' websites (I'm working on it.)

### 2. Data-Driven Programming does the VIEW for you

- **Simply make an array set of of data as follows:**

```
const uiRowsData = [
          {
            id: 'i1061',
            type: 'image',
            path: GENERALK_WEATHER,
            desc: 'weather',
          },
          {
            id: 'i1062',
            type: 'text',
            text:
              'S.Korea has four distinct seasons. Of these...',
            classNames: 'text',
          },
]
```

- **then,** they will turn into a horizontally-flexed row with image and text boxes as below :

[<img src="https://user-images.githubusercontent.com/26568425/117577966-1939ee80-b127-11eb-805c-84055ec21619.png" />](https://www.produceomatic.com/produce-in-korea/korea-in-a-nutshell)

- through the component under the hood below:

```
const DrawRowComponent = (props) => {
  const { row, keyvalue, isMobile } = props;
  const { type, path, text, desc, items, classNames, style, customComponent } = row;
const ui = {
    image: (
      <img
        src={path}
        className={classNames || 'margin-tb'}
        style={style}
        alt={desc}
        key={keyvalue}
      />
    ),
    text: (
      <div key={keyvalue} className={classNames || 'text'} style={style}>
        {ReactHtmlParser(text)}
      </div>
    ),
    sectionTitle: (
      <h3
        className={classNames || 'section-title'}
        style={style}
        key={keyvalue}
      >
        {text}
      </h3>
    ),
    title: (
      <PageTitle
        text={text}
        keyvalue={keyvalue}
        isMobile={isMobile}
        className={classNames}
        style={style}
      />
    )
  };
  return ui[type];
};
```

```
{uiRowsData.map((row, index) => (
          <DrawRowComponent
            row={row}
            key={row.id}
            keyvalue={row.id}
            isMobile={isMobile}
          />
        ))}
```

- Data-Driven Programming through grouping components sharing the same styling structure results in shorter code length. **D**on't **R**epeat **Y**ourself still applies on styles as well!
- UI data not only can live in the front-end, but also can be retrieved through API calls while being able to be controlled in admin page.

### 3. Admin Page manages every content for the web app

![admin](https://user-images.githubusercontent.com/26568425/117579449-d29bc280-b12d-11eb-94d7-7e4e708dfe84.gif)

Contents being managed are :

- List of Budget-O-Matic results that users submitted.
- Budget-O-Matic Templates to be displayed on its page.
- Images and youtube urls and their toggle buttons for display on the Main page.

## 🎨 Features

(Front-end)

- Authentication (signup & login)
- File uploads
- User inputs
- Async API calls including third party APIs

(Backend - to be opensourced)

- RESTful APIs
- Web-scraping modules that returns averaged value for local rental rates
- AWS configuration (ec2, s3, cloudfront, ELB)

## 🌏 Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                               Yes                                                                                |                                                                               Partly Yes                                                                                |                                                                             Yes                                                                              |                                                                               Yes                                                                                |                                                                                Yes                                                                                 |

## 🔧 Setting Up the Project

### Install

Fork `main` branch into your personal repository. Clone it to local computer. Install node modules. Before starting development, you should check to see if there are any errors.

```
yarn install
```

### Usage

```
yarn start
```

## 👤 Developed by Jae M. Choi

- Github: [@jaeminche](https://github.com/jaeminche)
- LinkedIn: [@jaemchoi](https://linkedin.com/in/jaemchoi)
- jaeminche@gmail.com

## 📜 License

This software is licensed under the MIT © Minch&film.

## Show your support

Give a ⭐️ if this project helped you!

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReactWeather, { useOpenWeather } from 'react-open-weather'; //Optional include of the default css styles
const { REACT_APP_WEATHER_APIKEY } = process.env;

const MyReactWeather = (props) => {
  const { usersLatAndLong, locationLabel } = props;
  // console.log('===777', usersLatAndLong);
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: REACT_APP_WEATHER_APIKEY,
    lat: usersLatAndLong[0],
    lon: usersLatAndLong[1],
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel={locationLabel}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};

const WeatherWidget = (props) => {
  const { locationLabel } = props;
  const [usersLatAndLong, setUsersLatAndLong] = useState(null);
  const coordinates = {
    Seoul: ['37.5665', '126.9780'],
    Busan: ['35.166668', '129.066666'],
  };
  function getLocation() {
    if (navigator.geolocation) {
      // console.log('==882', navigator, navigator.geolocation);
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      return 'Geolocation is not supported by this browser.';
    }
  }

  function showPosition(position) {
    // console.log('===883', position);
    setUsersLatAndLong([
      JSON.stringify(position.coords.latitude),
      JSON.stringify(position.coords.longitude),
    ]);
  }

  useEffect(() => {
    locationLabel === 'Seoul'
      ? setUsersLatAndLong(coordinates[locationLabel])
      : getLocation();
  }, []);

  return usersLatAndLong ? (
    <MyReactWeather usersLatAndLong={usersLatAndLong} {...props} />
  ) : (
    <></>
  );
};

// Map Redux state to React component props
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});
// Connect Redux to ReactMyReactWeather
export default connect(mapStateToProps)(WeatherWidget);

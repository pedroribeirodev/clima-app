import React, { useEffect, useState } from 'react';

import CardWeather from '../../components/CardWeather';
import ButtonRefreshPage from '../../components/ButtonRefreshPage';

import { Container } from './styles';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState();
  const API_KEY = 'aaa93afc7f9f005102ad5043a11e6cc8';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric&lang=pt_br`)
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    });
  }, []);

  return (
    <Container>
      {weatherData ? (
        <>
          <CardWeather data={weatherData} />
          <ButtonRefreshPage data-testid="buttonRefreshPage">Atualizar os dados</ButtonRefreshPage>
        </>
      ) : (
        <span>Carregando os dados...</span>
      )}

    </Container>
  );
};

export default Home;

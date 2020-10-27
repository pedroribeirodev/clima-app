import React, { useEffect, useState } from 'react';

import CardWeather from '../../components/CardWeather';
import ButtonRefreshPage from '../../components/ButtonRefreshPage';

import { getWeatherLocalUser } from '../../services/weatherServices';

import { Container } from './styles';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherLocalUser(position.coords.latitude, position.coords.longitude)
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((err) => console.warn(err))
        .finally(() => setIsLoading(false));
    });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <span>Carregando os dados da sua localização...</span>
      ) : (
        <>
          <CardWeather data={weatherData} />
          <ButtonRefreshPage data-testid="buttonRefreshPage">Atualizar os dados</ButtonRefreshPage>
        </>
      )}
    </Container>

  );
};

export default Home;

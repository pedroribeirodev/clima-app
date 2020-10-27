import React from 'react';

import {
  Container, MainInfo, Temp, TempDescription,
} from './styles';

export interface PropsResponseWeather {
  data: {
    coord: {
      [key: string]: number
    };
    weather: [
      {
        [key: string]: string | number
      }
    ];
    main: {
      [key: string]: number
    };
    wind: {
      [key: string]: number
    };
    name: string;
  } | undefined;
}

const URL_IMAGE_WEATHER = 'http://openweathermap.org/img/wn/';
const EXTENSION_IMAGE = '.png';

const CardWeather: React.FC<PropsResponseWeather> = ({
  data,
}: PropsResponseWeather) => (
  <Container>
    <h1>Tempo agora em:</h1>
    <h3>{data?.name}</h3>
    <MainInfo>
      <img src={`${URL_IMAGE_WEATHER}${data?.weather[0].icon}${EXTENSION_IMAGE}`} alt="Icone do clima" />
      <div>
        <Temp>
          {data?.main.temp}
          °C
        </Temp>
        <TempDescription>{data?.weather[0].description}</TempDescription>
      </div>
    </MainInfo>
    <ul>
      <li>
        <span>Sensação térmica</span>
        <span>{data?.main.feels_like}</span>
      </li>
      <li>
        <span>Umidade</span>
        <span>
          {data?.main.humidity}
          %
        </span>
      </li>
      <li>
        <span>Pressão</span>
        <span>{data?.main.pressure}</span>
      </li>
      <li>
        <span>Vento</span>
        <span>{data?.wind.speed}</span>
      </li>
    </ul>
  </Container>
);

export default CardWeather;

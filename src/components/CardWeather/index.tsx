import React from 'react';

import {
  Container, MainInfo, Temp, TempDescription,
} from './styles';

interface Props {
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
    dt: Date;
    name: string;
  } | undefined;
}

const CardWeather: React.FC<Props> = ({
  data,
}: Props) => (
  <Container>
    <h1>Tempo agora em:</h1>
    <h3>{data?.name}</h3>
    <MainInfo>
      <img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`} alt="Icone do clima" />
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

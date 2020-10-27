const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = 'aaa93afc7f9f005102ad5043a11e6cc8';

export async function getWeatherLocalUser(latitude: number, longitude: number) {
  const response = await fetch(`
  ${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`);

  return response;
}

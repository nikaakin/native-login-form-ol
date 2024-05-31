import axios from 'axios';

export const domain = 'https://mci.dev.ol.ge/mci-back/resources/front/';

export const loginService = (username: string, password: string) =>
  axios.post<{accessToken: string; refreshToken: string}>(domain + '/auth', {
    password,
    username,
  });

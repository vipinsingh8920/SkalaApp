import axios from 'react-native-axios'

const url = 'https://kreativeprimates.com/sakala/api/';

export const getData = async (api) => {
  const resutlData = await axios.get(url + api, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
       'System-Key':"$2y$10$DFUdMWpi7kYs50jT8M51yOyWBy6l/KrMv73nCIDhiWaEnewiHw/3W"
    },
  });
  return resutlData.data;
};

export const postData = async (api, body) => {
  try {
    const res = await axios.post(url + api, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
       'System-Key':"$2y$10$DFUdMWpi7kYs50jT8M51yOyWBy6l/KrMv73nCIDhiWaEnewiHw/3W",
      },
    });
   
    return res.data;
  } catch (error) {
    return error;
  }
};


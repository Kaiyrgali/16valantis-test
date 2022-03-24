const _apiBase = 'https://www.cbr-xml-daily.ru/daily_json.js';

export default class RatesStoreService {


  getDailyRates = async () => {
    const res = await fetch(_apiBase);
    console.log(res);
    if (!res.ok) {
      throw new Error(`Could not fetch Rates recieved ${res.status}`);
    };
    // const parseData = await res.json();
    
    // const data = Object.values(parseData.Valute);
    // console.log(data);
    // return data;
    const data = await res.json();
    console.log(data); 
    return data;
   }

   getArchiveRates = async () => {
    // console.log(this.Daytoday);
    getDailyRates();
    for (let i = 0; i < 9; i++) {
      const element = array[i];
      
    }
    console.log(res);
    if (!res.ok) {
      throw new Error(`Could not fetch Rates recieved ${res.status}`);
    };
    const parseData = await res.json();
    
    const data = Object.values(parseData.Valute);
    console.log(data);
    return data;
   }



};  
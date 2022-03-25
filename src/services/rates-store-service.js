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

   getArchiveRates = async (data) => {
    // console.log(this.Daytoday);
    const firstDay = data.Date;
    const previousDayURL = data.PreviousURL;
    console.log(firstDay, previousDayURL);
//     Date: "2022-03-24T11:30:00+03:00"
// PreviousDate: "2022-03-23T11:30:00+03:00"
// PreviousURL: "//www.cbr-xml-daily.ru/archive/2022/03/23/daily_json.js";
    for (let i = 0; i < 9; i++) {
      
      
    }
    // console.log(res);
    // if (!res.ok) {
    //   throw new Error(`Could not fetch Rates recieved ${res.status}`);
    // };
    // const parseData = await res.json();
    
    // const data = Object.values(parseData.Valute);
    // console.log(data);
    // return data;
   }



};  
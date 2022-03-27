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

   getArchiveRates = async (data, valuteId) => {
    // console.log(this.Daytoday);
    const archiveData = Object.values(data.Valute);
    let previousDayURL = data.PreviousURL;
    // console.log('archiveData', archiveData);
    const archiveListData = new Array(archiveData.filter(id=> id.ID.includes(valuteId)));
    // const archiveListData2 = archiveListData[0].Data=today;
    // console.log('archiveListData2', archiveListData2);
//     Date: "2022-03-24T11:30:00+03:00"
// PreviousDate: "2022-03-23T11:30:00+03:00"
// PreviousURL: "//www.cbr-xml-daily.ru/archive/2022/03/23/daily_json.js";
    for (let i = 0; i < 9; i++) {
      const res = await fetch(previousDayURL);
      const parseArchive= await res.json();
      const parseValute = Object.values(parseArchive.Valute)
      archiveListData.push(parseValute.filter(id=> id.ID.includes(valuteId)))
      previousDayURL = parseArchive.PreviousURL;

    }
    console.log(archiveListData);
    // console.log(res);
    // if (!res.ok) {
    //   throw new Error(`Could not fetch Rates recieved ${res.status}`);
    // };
    // const parseData = await res.json();
    
    // const data = Object.values(parseData.Valute);
    // console.log(data);
    return archiveListData;
   }



};  
const _apiBase = 'https://www.cbr-xml-daily.ru/daily_json.js';

export default class RatesStoreService {
  getDailyRates = async () => {
    const res = await fetch(_apiBase);
    if (!res.ok) {
      throw new Error(`Could not fetch Rates recieved ${res.status}`);
    }
    const data = await res.json();
    return data;
  };

  getArchiveRates = async (data, valuteId) => {
    const archiveData = Object.values(data.Valute);
    let previousDayURL = data.PreviousURL;
    const archiveListData = new Array(archiveData.filter((id) => id.ID.includes(valuteId)));
    for (let i = 0; i < 9; i++) {
      const res = await fetch(previousDayURL);
      const parseArchive = await res.json();
      const parseValute = Object.values(parseArchive.Valute);
      archiveListData.push(parseValute.filter((id) => id.ID.includes(valuteId)));
      previousDayURL = parseArchive.PreviousURL;
    }
    return archiveListData;
  };
}

import { Circle, Popup } from "react-leaflet";

export const sortData = (data: any) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export type AllCasesResponse = {
  active: number;
  activePerOneMillion: number;
  affectedCountries: number;
  cases: number;
  casesPerOneMillion: number;
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
};
export type CountryCasesResponse = {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  continent: string;
  country: string;
};
type CountryInfo = {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: URL;
};
type b = {
  hex: string;
  multiplier: number;
};
type ColorType = {
  cases: b;
  recovered: b;
  deaths: b;
};
const casesTypeColors: ColorType = {
  cases: {
    hex: "#1d52d7",
    multiplier: 300,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 400,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};
// export const showDataOnMap = (data: any, casesType: string = "cases") =>
//   data.map((country: any) => (
//     <Circle
//       radius={
//         Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
//       }
//       center={[country.countryInfo.lat, country.countryInfo.long]}
//     >
//       <Popup>
//         <div className="rounded-lg h-full">
//           <div
//             className="h-20 w-full bg-cover rounded-lg"
//             style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
//           ></div>
//           <div className="text-base mt-1">Cases: {country.cases}</div>
//           <div className="text-base mt-1">Recovered: {country.recovered}</div>
//           <div className="text-base mt-1">Deaths: {country.deaths}</div>
//         </div>
//       </Popup>
//     </Circle>
//   ));
export type HistoricalCasesResponse = {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  continent: string;
  country: string;
  countryInfo: CountryInfo;
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
};

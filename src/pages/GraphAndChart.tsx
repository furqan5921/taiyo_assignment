import { useQuery } from "@tanstack/react-query";
import React, { ChangeEvent, useEffect, useState } from "react";
import LoadingComponent from "../component/LoadingComponent";

import CasesInfo from "../component/CasesInfo";
import { sortData } from "../utils";
import Map from "../component/Map";
import Table from "../component/Table";
import Linegraph from "../component/LineGraph";

const GraphAndChart: React.FC = () => {
  const [casesType, setCasesType] = useState("cases");
  const [country, setCountry] = useState("worldwide");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const { isLoading: allCasesLoading, data: allCases } = useQuery({
    queryKey: ["allCases"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json()),
  });
  const { isLoading: countryCasesLoading, data: countryCases } = useQuery({
    queryKey: ["countryCases"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => sortData(data)),
  });

  if (allCasesLoading || countryCasesLoading) return <LoadingComponent />;
  return (
    <div className="w-full mt-5">
      <div className="flex w-full items-center justify-between mb-5 ml-2 mr-2">
        <h1 className="text-lg text-indigo-800">Covid Tracker</h1>
        <div>
          <select
            onChange={() => {}}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={"worldwide"} defaultValue={"worldwide"}>
              Worldwide
            </option>
            {countryCases?.map((country: any) => (
              <option key={country.country} value={country.countryInfo.iso2}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-between gap-2 flex-wrap">
        <CasesInfo
          title="Coronvirus cases"
          cases={allCases.todayCases}
          total={allCases.deaths}
          onClick={() => setCasesType("cases")}
        />
        <CasesInfo
          title="Recovered"
          cases={allCases.todayRecovered}
          total={allCases.recovered}
          onClick={() => setCasesType("recovered")}
        />
        <CasesInfo
          title="Deaths"
          cases={allCases.todayDeaths}
          total={allCases.deaths}
          onClick={() => setCasesType("deaths")}
        />
      </div>
      {/* <Map
        countries={countryCases}
        casesType={casesType}
        zoom={mapZoom}
        center={mapCenter}
      /> */}
      <div>
        <div>
          <h3 className="text-indigo-800 text-center text-xl">
            Live Cases by Country
          </h3>
          <Table countries={sortData(countryCases)} />
          <h3 className="mt-5 text-indigo-800 text-center text-xl">
            World wide new {casesType}
          </h3>
          <Linegraph casesType={casesType} />
        </div>
      </div>
    </div>
  );
};
export default GraphAndChart;

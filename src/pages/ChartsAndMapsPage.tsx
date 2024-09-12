import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LineGraph from "../components/LineGraph";
import WorldMap from "../components/WorldMap";

interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}

interface HistoricalData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

const fetchCountriesData = async (): Promise<CountryData[]> => {
  const response = await axios.get("https://disease.sh/v3/covid-19/countries");
  return response.data;
};

const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const response = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return response.data;
};

const ChartsAndMapsPage: React.FC = () => {
  const { data: countriesData, isLoading: isLoadingCountriesData } = useQuery<
    CountryData[]
  >({
    queryKey: ["countriesData"],
    queryFn: fetchCountriesData,
  });

  const { data: historicalData, isLoading: isLoadingHistoricalData } =
    useQuery<HistoricalData>({
      queryKey: ["historicalData"],
      queryFn: fetchHistoricalData,
    });

  const isLoading = isLoadingCountriesData || isLoadingHistoricalData;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="bg-blue-600 text-white p-4 pl-16 lg:pl-4">
        <h1 className="text-2xl font-bold">Charts and Maps</h1>
      </header>
      <main className="flex-1 p-4 overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Worldwide COVID-19 Cases
          </h2>
          {historicalData && <LineGraph data={historicalData} />}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            COVID-19 Cases by Country
          </h2>
          {countriesData && <WorldMap countries={countriesData} />}
        </div>
      </main>
    </div>
  );
};

export default ChartsAndMapsPage;

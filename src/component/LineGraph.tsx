import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingComponent from "./LoadingComponent";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

type LinegraphProps = {
  casesType: string;
};
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem: any, data: any) {
        return tooltipItem.value;
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value: any, index: any, values: any) {
            return value;
          },
        },
      },
    ],
  },
};

const Linegraph: React.FC<LinegraphProps> = ({ casesType = "cases" }) => {
  const buildChartData = (data: any, caseType: string) => {
    const chartData = [];
    let lastPoint;
    for (let date in data.cases) {
      if (lastPoint) {
        const newPoint = {
          x: date,
          y: data[caseType][date] - lastPoint,
        };
        chartData.push(newPoint);
      }
      lastPoint = data[caseType][date];
    }
    return chartData;
  };
  const { isLoading: historicalCasesLoading, data: historicalCases } = useQuery(
    {
      queryKey: ["historicalCases"],
      queryFn: () =>
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
          .then((res) => res.json())
          .then((data) => {
            const chartData = buildChartData(data, casesType);
            return chartData;
          }),
    }
  );
  console.log(historicalCases);
  if (historicalCasesLoading) return <LoadingComponent />;
  return (
    <div>
      <Line
        // options={options}
        data={{
          datasets: [
            {
              backgroundColor: "rgba(204, 16, 52, 0.5)",
              borderColor: "#CC1034",
              data: historicalCases,
            },
          ],
        }}
      />
    </div>
  );
};
export default Linegraph;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface LineGraphProps {
  data: {
    cases: { [date: string]: number };
  };
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const chartData = Object.entries(data.cases).map(([date, cases]) => ({
    date,
    cases,
  }));

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;

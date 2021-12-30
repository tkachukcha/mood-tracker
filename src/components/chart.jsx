import React from 'react';
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Chart = ({moodDatas}) => {
  return (
    <ResponsiveContainer width="80%" aspect={3}>
        <LineChart data={moodDatas} margin={{ right: 100 }}>
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="date" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line
            dataKey="mood"
            type="monotone"
            stroke="purple"
            activeDot={{ r: 10 }}
          />
          <Line
            dataKey="energy"
            type="monotone"
            stroke="red"
            activeDot={{ r: 10 }}
          />
          <Line
            dataKey="workHours"
            type="monotone"
            stroke="blue"
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
  );
}

export default Chart;
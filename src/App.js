import "./App.css";
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
import mood from "./data";
// Sample chart data

function App() {
  return (
    <div>
      <h1 className="m-10 text-2xl font-bold">
        Mood/Energy/WorkingHours Tracker
      </h1>
      <ResponsiveContainer width="50%" aspect={3}>
        <LineChart data={mood} margin={{ right: 100 }}>
          <CartesianGrid  strokeDasharray="1"/>
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
    </div>
  );
}

export default App;

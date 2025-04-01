import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function App() {
  return (
    <div>

    <h1>header123</h1>
    <BarChart
      series={[
        { data: [35, 44, 24, 34], label: "Series 1" },
        { data: [51, 6, 49, 30], label: "Series 2" },
        { data: [15, 25, 30, 50], label: "Series 3" },
        { data: [50, 50, 15, 25], label: "Series 4" },
      ]}
      height={400}
      xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </div>
  );
}

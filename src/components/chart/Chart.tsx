import React, { FC } from "react";
import ChartBar from "../chartBar/ChartBar";
import "./chart.css";

interface ChartProps {
  dataPoints: DataPoint[];
}

const Chart: FC<ChartProps> = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

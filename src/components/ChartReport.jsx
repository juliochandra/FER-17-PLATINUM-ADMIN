import { Bar } from "react-chartjs-2";
import { useGetReportQuery } from "../services/redux/apis/reportApi";

const ChartPage = ({ startDate = "2022-10-01", endDate = "2022-10-31" }) => {
  const { data: reportData } = useGetReportQuery({ startDate, endDate });

  const labels = reportData?.map((item) => item.day);
  const data = reportData?.map((item) => item.orderCount);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Amount of Car Rented",
        data: data,
        backgroundColor: "#586B90",
        borderColor: "#586B90",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      }}
      data={chartData}
    />
  );
};

export default ChartPage;

import { Bar } from "react-chartjs-2";
import { useGetReportQuery } from "../services/redux/apis/reportApi";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";

registerLocale("en-GB", enGB);

const ChartPage = () => {
  const { handleSubmit, setValue } = useForm();

  const getCurrentMonthRange = () => {
    const currentDate = new Date();
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    // console.log(firstDay);
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    // console.log(lastDay);
    return {
      startDate: firstDay.toISOString().split("T")[0],
      endDate: lastDay.toISOString().split("T")[0],
    };
  };
  // console.log(getCurrentMonthRange());
  const [dateRange, setDateRange] = useState(getCurrentMonthRange());
  const { data: reportData } = useGetReportQuery(dateRange);

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

  const handleDateRange = (data) => {
    const firstDay = new Date(
      data.startDate.getFullYear(),
      data.startDate.getMonth(),
      1
    );
    const lastDay = new Date(
      data.startDate.getFullYear(),
      data.startDate.getMonth() + 1,
      0
    );
    setDateRange({
      startDate: firstDay.toISOString().split("T")[0],
      endDate: lastDay.toISOString().split("T")[0],
    });
  };

  return (
    <>
      <Row>
        <h6>Month</h6>
        <Col md={4}>
          <Form onSubmit={handleSubmit(handleDateRange)}>
            <InputGroup>
              <DatePicker
                selected={new Date(dateRange.startDate)}
                onChange={(date) => setValue("startDate", date)}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
                locale="en-GB"
                className="form-control"
              />
              <Button type="submit" className="rounded-1">
                GO
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row>
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
      </Row>
    </>
  );
};

export default ChartPage;

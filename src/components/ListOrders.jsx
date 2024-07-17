import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import { useGetOrderQuery } from "../services/redux/apis/reportApi";
import { format } from "date-fns";
import { useState } from "react";
import OrderPagination from "./OrderPagination";
import { useForm } from "react-hook-form";

const ListOrders = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [orderParams, setOrderParams] = useState({
    sort: "created_at:desc",
    page: 1,
    pageSize: 10,
  });
  const { data: orderData } = useGetOrderQuery(orderParams);

  const handleLimitChange = (e) => {
    const pageSize = parseInt(e.target.value);
    setOrderParams((prevParams) => ({
      ...prevParams,
      pageSize,
      page: 1,
    }));
  };

  const handleSubmitPage = (formData) => {
    const selectedPage = parseInt(formData.page);
    setOrderParams((prevParams) => ({
      ...prevParams,
      page: selectedPage, // Reset page to 1 when changing pageSize
    }));
  };

  return (
    <Col>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>User Email</th>
              <th>Car</th>
              <th>Start Rent</th>
              <th>Finish Rent</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {orderData?.orders?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.User?.email}</td>
                <td>{item?.Car?.name}</td>
                <td>{format(new Date(item.start_rent_at), "yyyy-MM-dd")}</td>
                <td>{format(new Date(item.finish_rent_at), "yyyy-MM-dd")}</td>
                <td>{item?.total_price}</td>
                <td>{item?.Car?.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row className="justify-content-between mb-5 ">
        <Col>
          <Row>
            <Col xs={"auto"}>
              <Row>Limit</Row>
              <Row>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleLimitChange}
                  value={orderParams.pageSize}
                >
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                </Form.Select>
              </Row>
            </Col>
            <Col xs={"auto"}>
              <Row>Jump to page</Row>
              <Row>
                <Form onSubmit={handleSubmit(handleSubmitPage)}>
                  <InputGroup>
                    <Form.Select
                      {...register("page")}
                      aria-label="Default select example"
                      defaultValue={orderParams.page}
                    >
                      <option value={1}>1</option>
                      <option value={10}>10</option>
                      <option value={15}>15</option>
                      <option value={20}>20</option>
                      <option value={25}>25</option>
                    </Form.Select>
                    <Button type="submit">Go</Button>
                  </InputGroup>
                </Form>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="p-0 d-flex justify-content-end align-self-end">
          <OrderPagination
            orderParams={orderParams}
            orderData={orderData}
            setOrderParams={setOrderParams}
          />
        </Col>
      </Row>
    </Col>
  );
};
export default ListOrders;

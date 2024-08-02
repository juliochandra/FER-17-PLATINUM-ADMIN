import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import {
  useGetOrderQuery,
  usePatchOrderbyIdMutation,
} from "../services/redux/apis/reportApi";
import { format } from "date-fns";
import { useState } from "react";
import OrderPagination from "./OrderPagination";
import { useForm } from "react-hook-form";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";

const ListOrders = () => {
  const { register, handleSubmit } = useForm();
  const [orderParams, setOrderParams] = useState({
    sort: "created_at:desc",
    page: 1,
    pageSize: 10,
  });
  const { data: orderData } = useGetOrderQuery(orderParams);
  // console.log(orderData);

  const [patchOrderbyId] = usePatchOrderbyIdMutation();

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
      page: selectedPage,
    }));
  };

  const handleStatusToggle = async (orderId, currentStatus) => {
    try {
      const updatedStatus = !currentStatus;
      // console.log(updatedStatus);

      await patchOrderbyId({
        id: orderId,
        data: { status: updatedStatus },
      }).unwrap();
    } catch (error) {
      // console.error("Failed to update status:", error);
    }
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <InputSwitch
        checked={rowData.status}
        onChange={() => handleStatusToggle(rowData.id, rowData.status)}
      />
    );
  };

  return (
    <Col>
      <Row>
        <Col className="p-0 mb-3">
          <DataTable
            value={orderData?.orders}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              header="No"
              body={(rowData, { rowIndex }) => rowIndex + 1}
              style={{ width: "5%" }}
            ></Column>
            <Column
              field="User.email"
              body={(rowData) => rowData.User?.email || "-"}
              header="User Email"
              sortable
              style={{ width: "20%" }}
            ></Column>
            <Column
              field="Car.name"
              body={(rowData) => rowData.Car?.name || "-"}
              header="Car"
              sortable
              style={{ width: "20%" }}
            ></Column>
            <Column
              field="start_rent_at"
              header="Start Rent"
              body={(rowData) =>
                format(new Date(rowData.start_rent_at), "yyyy-MM-dd")
              }
              sortable
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="finish_rent_at"
              header="Finish Rent"
              body={(rowData) =>
                format(new Date(rowData.finish_rent_at), "yyyy-MM-dd")
              }
              sortable
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="total_price"
              header="Price"
              sortable
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="Car.category"
              body={(rowData) => rowData.Car?.category || "-"}
              header="Category"
              sortable
              style={{ width: "10%" }}
            ></Column>
            <Column
              field="status"
              body={statusBodyTemplate}
              header="Status"
              sortable
              style={{ width: "5%" }}
            ></Column>
          </DataTable>
        </Col>
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
        <Col className="p-0 mt-4 d-flex justify-content-end align-self-end">
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

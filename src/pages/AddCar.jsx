import { useState } from "react";
import { Breadcrumb, Col, Container, Form, Row } from "react-bootstrap";
import DashboardNavigation from "../components/DashboardNavigation";
import DashboardNavigationContent from "../components/DashboardNavigationContent";
import { useForm } from "react-hook-form";

import { useAddCarMutation } from "../services/redux/apis/carApi";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../contexs/NotificationContext";

const AddCar = () => {
  const navigate = useNavigate();
  const { addNotification } = useNotification();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const [addCar] = useAddCarMutation();
  const addCarSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("price", data.price);
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }
      await addCar(formData).unwrap();
      addNotification("Data Berhasil Disimpan", "success");
      navigate("/cars");
    } catch (error) {
      //   console.log(error);
      addNotification("Data Gagal Disimpan", "danger");
    }
  };

  const [isSidebarToggleVisible, setIsSidebarToggleVisible] = useState(true);
  const handleSidebarToggle = () => {
    setIsSidebarToggleVisible(!isSidebarToggleVisible);
  };

  const handleCancel = () => {
    navigate("/cars");
  };

  return (
    <>
      <Container fluid style={{ backgroundColor: "#F4F5F7" }}>
        <Row>
          <DashboardNavigation
            isSidebarToggleVisible={isSidebarToggleVisible}
          />
          <Col id="mainContent" className="">
            <DashboardNavigationContent
              handleSidebarToggle={handleSidebarToggle}
            />

            <Row id="content">
              <Col className="vh-100">
                <Row>
                  <Col>
                    <Breadcrumb>
                      <Breadcrumb.Item
                        to="/dashboard"
                        className="text-decoration-none text-black"
                      >
                        Cars
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>Add</Breadcrumb.Item>
                    </Breadcrumb>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>Add New Car</h3>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Form onSubmit={handleSubmit(addCarSubmit)}>
                    <Col className="vh-100">
                      <Form.Group as={Row} controlId="name">
                        <Form.Label column sm={2}>
                          Name/Tipe Mobil
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: true })}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="price">
                        <Form.Label column sm={2}>
                          Harga
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Control
                            type="number"
                            placeholder="Harga"
                            {...register("price", { required: true })}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="category">
                        <Form.Label column sm={2}>
                          Category
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Select
                            {...register("category", { required: true })}
                          >
                            <option value={"small"}>Small</option>
                            <option value={"medium"}>Medium</option>
                            <option value={"large"}>Large</option>
                          </Form.Select>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="image">
                        <Form.Label column sm={2}>
                          Image
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Control
                            type="file"
                            {...register("image", { required: true })}
                          />
                        </Col>
                      </Form.Group>

                      <Row className="mt-auto align-items-end">
                        <Col xs={"auto"}>
                          <button
                            className="btn btn-outline-primary"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </Col>
                        <Col>
                          <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary"
                          >
                            Save
                          </button>
                        </Col>
                      </Row>
                    </Col>
                  </Form>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddCar;

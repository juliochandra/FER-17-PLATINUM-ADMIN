import { useEffect, useState } from "react";
import { Breadcrumb, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetCarByIdQuery,
  useUpdateCarMutation,
} from "../services/redux/apis/carApi";
import DashboardNavigation from "../components/DashboardNavigation";
import DashboardNavigationContent from "../components/DashboardNavigationContent";
import { useNotification } from "../contexs/NotificationContext";

const EditCar = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

  const { addNotification } = useNotification();

  const {
    data: carData,
    error: fetchError,
    isLoading: isFetching,
  } = useGetCarByIdQuery(carId);
  const [updateCar, { isLoading: isUpdating }] = useUpdateCarMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (carData) {
      setValue("name", carData.name);
      setValue("category", carData.category);
      setValue("price", carData.price);
    }
  }, [carData, setValue]);

  const editCarSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("price", data.price);
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }
      await updateCar({ id: carId, data: formData }).unwrap();
      // console.log(res);
      addNotification("Data Berhasil Disimpan", "success");
      navigate("/cars");
    } catch (error) {
      // console.log(error);
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
    <Container fluid style={{ backgroundColor: "#F4F5F7" }}>
      <Row>
        <DashboardNavigation isSidebarToggleVisible={isSidebarToggleVisible} />
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
                    <Breadcrumb.Item active>Edit</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Edit Car</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  {isFetching ? (
                    <div>Loading...</div>
                  ) : fetchError ? (
                    <div>Error fetching car data</div>
                  ) : (
                    <Form onSubmit={handleSubmit(editCarSubmit)}>
                      <Form.Group as={Row} controlId="name">
                        <Form.Label column sm={2}>
                          Name
                        </Form.Label>
                        <Col sm={5}>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: true })}
                          />
                          {errors.name && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
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
                          {errors.price && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
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

                      <Row className="mt-3">
                        <Col xs={"auto"}>
                          <button
                            className="btn btn-outline-primary"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </Col>
                        <Col xs={"auto"}>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!isValid || isUpdating}
                          >
                            {isUpdating ? "Submitting..." : "Submit"}
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default EditCar;

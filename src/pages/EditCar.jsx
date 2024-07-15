import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetCarByIdQuery,
  useUpdateCarMutation,
} from "../services/redux/apis/carApi";
import { toast } from "react-toastify";
import DashboardNavigation from "../components/DashboardNavigation";
import DashboardNavigationContent from "../components/DashboardNavigationContent";

const EditCar = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

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
      // You can also handle the image if needed
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
      toast.success("Edit Car Success");
      navigate("/cars");
    } catch (error) {
      // console.log(error);
      toast.error("Edit Car Failed");
    }
  };

  const [isSidebarToggleVisible, setIsSidebarToggleVisible] = useState(true);
  const handleSidebarToggle = () => {
    setIsSidebarToggleVisible(!isSidebarToggleVisible);
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
                <Col>content</Col>
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
                        <Col sm={10}>
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

                      <Form.Group as={Row} controlId="category">
                        <Form.Label column sm={2}>
                          Category
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="text"
                            placeholder="Category"
                            {...register("category", { required: true })}
                          />
                          {errors.category && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="price">
                        <Form.Label column sm={2}>
                          Price
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="number"
                            placeholder="Price"
                            {...register("price", { required: true })}
                          />
                          {errors.price && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="image">
                        <Form.Label column sm={2}>
                          Image
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control
                            type="file"
                            {...register("image", { required: true })}
                          />
                        </Col>
                      </Form.Group>

                      <Row className="mt-3">
                        <Col sm={{ span: 10, offset: 2 }}>
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

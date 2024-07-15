import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import DashboardNavigation from "../components/DashboardNavigation";
import DashboardNavigationContent from "../components/DashboardNavigationContent";
import { useForm } from "react-hook-form";

import { useAddCarMutation } from "../services/redux/apis/carApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const navigate = useNavigate();
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
      toast.success("Add Car Success");
      navigate("/cars");
    } catch (error) {
      //   console.log(error);
      toast.error("Add Car Failed");
    }
  };

  const [isSidebarToggleVisible, setIsSidebarToggleVisible] = useState(true);
  const handleSidebarToggle = () => {
    setIsSidebarToggleVisible(!isSidebarToggleVisible);
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
                  <Col>content</Col>
                </Row>
                <Row>
                  <Col>
                    <Form onSubmit={handleSubmit(addCarSubmit)}>
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
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="image">
                        <Form.Label column sm={2}>
                          Image
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Control type="file" {...register("image")} />
                        </Col>
                      </Form.Group>

                      <Row className="mt-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                          <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
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

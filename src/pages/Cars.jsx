import { Button, Card, Col, Container, Row } from "react-bootstrap";
import DashboardNavigation from "../components/DashboardNavigation";
import { useState } from "react";
import DashboardNavigationContent from "../components/DashboardNavigationContent";
import {
  useGetCarQuery,
  useDeleteCarMutation,
} from "../services/redux/apis/carApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cars = () => {
  const { data: carsData } = useGetCarQuery({ pageSize: 100 });
  const [deleteCar, { isLoading }] = useDeleteCarMutation();

  const handleDeleteCar = async (carId) => {
    try {
      await deleteCar(carId).unwrap();
      toast.success("Delete Car Success");
    } catch (error) {
      toast.error("Delete Car Failed");
    }
  };
  // console.log(carsData);
  function formatPrice(price) {
    return price.toLocaleString("id-ID").replace(/,/g, "."); // Replace commas with dots directly
  }

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
                  <Col>List Car</Col>
                  <Col className="d-flex justify-content-end">
                    <Link to="/cars/add" className="rounded-1 btn btn-primary">
                      + Add New Car
                    </Link>
                  </Col>
                </Row>
                <Row>
                  {carsData?.cars?.map((car) => (
                    <Col
                      xs={12}
                      sm={12}
                      md={6}
                      lg={4}
                      xl={3}
                      key={car.id}
                      className="p-2"
                    >
                      <Card className="h-100">
                        <Card.Img variant="top" src={car.image} />
                        <Card.Body>
                          <Card.Text>{car.name}</Card.Text>
                          <Card.Title>
                            Rp {formatPrice(car.price)} / hari
                          </Card.Title>
                          <Card.Text>{car.category}</Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-white border-0">
                          <Row className="justify-content-between align-items-end">
                            <Col>
                              <Button
                                variant="outline-danger"
                                className="rounded-1"
                                onClick={() => handleDeleteCar(car.id)}
                                disabled={isLoading}
                              >
                                Delete
                              </Button>
                            </Col>
                            <Col className="d-flex justify-content-end">
                              <Link
                                className="rounded-1 btn btn-success text-white"
                                to={`/cars/edit/${car.id}`}
                              >
                                Edit
                              </Link>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Cars;

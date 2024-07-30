import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Row,
  Modal,
  Image,
  Form,
} from "react-bootstrap";
import DashboardNavigation from "../components/DashboardNavigation";
import { useState, useEffect } from "react";
import DashboardNavigationContent from "../components/DashboardNavigationContent";
import {
  useGetCarQuery,
  useDeleteCarMutation,
} from "../services/redux/apis/carApi";
import { Link, useLocation } from "react-router-dom";
import imgBeepBeep from "../assets/images/img-BeepBeep.png";
import { useNotification } from "../contexs/NotificationContext";
import Message from "../components/Message";
import CarsPagination from "../components/CarsPagination";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Cars = () => {
  const [carsParams, setCarsParams] = useState({
    name: "",
    category: "",
    isRented: "",
    minPrice: "",
    maxPrice: "",
    page: "",
    pageSize: 8,
  });

  const [modalShow, setModalShow] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);
  const { notification, addNotification } = useNotification();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.searchParams) {
      setCarsParams((prevParams) => ({
        ...prevParams,
        name: location.state.searchParams.name,
      }));
    }
  }, [location.state]);

  const { data: carsData } = useGetCarQuery(carsParams);
  const [deleteCar, { isLoading }] = useDeleteCarMutation();

  const handleDeleteCar = async (carId) => {
    try {
      await deleteCar(carId).unwrap();
      addNotification("Data Berhasil Dihapus", "dark");
    } catch (error) {
      addNotification("Data Gagal Dihapus", "danger");
    } finally {
      setModalShow(false); // Hide modal after delete action
      setCarToDelete(null); // Clear carToDelete after action
    }
  };

  const handleConfirmDelete = () => {
    if (carToDelete) {
      handleDeleteCar(carToDelete);
    }
  };

  const handleDeleteButtonClick = (carId) => {
    setCarToDelete(carId);
    setModalShow(true);
  };

  function formatPrice(price) {
    return price.toLocaleString("id-ID").replace(/,/g, "."); // Replace commas with dots directly
  }

  const [isSidebarToggleVisible, setIsSidebarToggleVisible] = useState(true);
  const handleSidebarToggle = () => {
    setIsSidebarToggleVisible(!isSidebarToggleVisible);
  };

  const handleButtonAll = () => {
    setCarsParams((prevParams) => ({
      ...prevParams,
      name: "",
      category: "",
      isRented: "",
      minPrice: "",
      maxPrice: "",
    }));
  };

  const handleButtonSmall = () => {
    setCarsParams((prevParams) => ({
      ...prevParams,
      category: "small",
    }));
  };

  const handleButtonMedium = () => {
    setCarsParams((prevParams) => ({
      ...prevParams,
      category: "medium",
    }));
  };

  const handleButtonLarge = () => {
    setCarsParams((prevParams) => ({
      ...prevParams,
      category: "large",
    }));
  };

  const handleLimitChange = (e) => {
    const pageSize = parseInt(e.target.value);
    setCarsParams((prevParams) => ({
      ...prevParams,
      pageSize,
      page: 1,
    }));
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
              setCarsParams={setCarsParams}
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
                      <Breadcrumb.Item active>List Car</Breadcrumb.Item>
                    </Breadcrumb>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ offset: 2, span: 8 }}>
                    {notification && (
                      <Message variant={notification.type}>
                        {notification.message}
                      </Message>
                    )}
                  </Col>
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
                  <Col xs={"auto"} className="p-1">
                    <Button variant="outline-primary" onClick={handleButtonAll}>
                      All
                    </Button>
                  </Col>
                  <Col xs={"auto"} className="p-1">
                    <Button
                      variant="outline-primary"
                      onClick={handleButtonSmall}
                    >
                      2 - 4 people
                    </Button>
                  </Col>
                  <Col xs={"auto"} className="p-1">
                    <Button
                      variant="outline-primary"
                      onClick={handleButtonMedium}
                    >
                      4 -6 people
                    </Button>
                  </Col>
                  <Col xs={"auto"} className="p-1">
                    <Button
                      variant="outline-primary"
                      onClick={handleButtonLarge}
                    >
                      6 - 8 people
                    </Button>
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
                          <Row className="justify-content-between align-items-end mb-3">
                            <Col>
                              <Button
                                variant="outline-danger"
                                className="rounded-1 w-100"
                                onClick={() => handleDeleteButtonClick(car.id)}
                                disabled={isLoading}
                              >
                                <i>
                                  <BsTrash />
                                </i>
                                <span className="ms-1 fs-6">Delete</span>
                              </Button>
                            </Col>
                            <Col className="d-flex justify-content-end">
                              <Link
                                className="rounded-1 btn btn-success text-white w-100"
                                to={`/cars/edit/${car.id}`}
                              >
                                <i>
                                  <FiEdit />
                                </i>
                                <span className="ms-1 fs-6">Edit</span>
                              </Link>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col className="d-flex justify-content-end gap-2">
                    <Col xs={"auto"} className="my-3">
                      <Form.Select
                        aria-label="Default select example"
                        onChange={handleLimitChange}
                        value={carsParams.pageSize}
                      >
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                        <option value={20}>20</option>
                        <option value={24}>24</option>
                      </Form.Select>
                    </Col>
                    <Col xs={"auto"} className="my-3">
                      <CarsPagination
                        carsParams={carsParams}
                        setCarsParams={setCarsParams}
                        carsData={carsData}
                      />
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header>
          <Col className="d-flex justify-content-center">
            <Image src={imgBeepBeep} fluid />
          </Col>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">Menghapus Data Mobil</h4>
          <p className="text-center mt-3 px-4">
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
            menghapus?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Col className="d-flex justify-content-center gap-3">
            <Button
              variant="primary"
              onClick={handleConfirmDelete}
              disabled={isLoading}
              className="rounded-1 w-25"
            >
              Ya
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => setModalShow(false)}
              className="rounded-1 w-25"
            >
              Tidak
            </Button>
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cars;

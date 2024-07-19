import { Button, Col, Form, Image, InputGroup, Row } from "react-bootstrap";
import fi_menu from "../assets/images/fi_menu.png";
import { BsChevronDown } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

const DashboardNavigationContent = ({ handleSidebarToggle, setCarsParams }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const handleSearchForm = (formData) => {
    if (location.pathname !== "/cars") {
      navigate("/cars", { state: { searchParams: formData } });
    } else {
      setCarsParams((prevParams) => ({
        ...prevParams,
        name: formData.name,
      }));
    }
  };
  return (
    <Row
      id="navigationContent"
      className="bg-white p-3 bottom-shadow align-items-center"
    >
      <Col xs="auto">
        <Button className="p-0" variant="link" onClick={handleSidebarToggle}>
          <Image src={fi_menu} alt="" />
        </Button>
      </Col>
      <Col className="">
        <Row className="justify-content-end align-items-center">
          <Col xs="auto" className=" d-flex align-items-center">
            <Form onSubmit={handleSubmit(handleSearchForm)}>
              <InputGroup className="">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  {...register("name")}
                />
                <Button
                  type="submit"
                  variant="outline-primary"
                  disabled={!isValid}
                  className="rounded-1"
                >
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
          <Col xs="auto">
            <Row>
              <Col xs="auto" className="p-0">
                <Image
                  src={"https://i.pravatar.cc/40"}
                  className="rounded-circle"
                />
              </Col>
              <Col className="d-flex justify-content-center align-items-center px-2">
                <h6 className="text-center mt-2">Unis Badri</h6>
              </Col>
              <Col xs="auto" className="p-0 d-flex align-items-center">
                <BsChevronDown />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default DashboardNavigationContent;

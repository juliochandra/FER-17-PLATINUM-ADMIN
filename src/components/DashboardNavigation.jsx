import { Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import retangle63 from "../assets/images/Rectangle 63.png";
import rectangle from "../assets/images/Rectangle 62.png";
import fi_menu from "../assets/images/fi_menu.png";
import group15 from "../assets/images/Group 15.png";
import { BsChevronDown } from "react-icons/bs";

const DashboardNavigation = () => {
  return (
    <>
      <Container fluid>
        <Row className="shadow">
          <Col
            xs={"auto"}
            className="bg-primary py-2 d-flex justify-content-center align-items-center"
          >
            <Image
              style={{ width: "30px", height: "30px" }}
              src={retangle63}
              alt=""
            />
          </Col>
          <Col>
            <Row>
              <Col xs={2} className="d-flex align-items-center">
                <Image
                  style={{ width: "100px", height: "46px" }}
                  src={rectangle}
                  alt=""
                  className=" p-2"
                />
              </Col>
              <Col className="p-2">
                <Row>
                  <Col className="d-flex align-items-center ">
                    <Image src={fi_menu} alt="" className="p-1" />
                  </Col>
                  <Col xs={3} className="d-flex align-items-center">
                    <InputGroup>
                      <Form.Control placeholder="&#x1F50E;&#xFE0E; Search" />
                      <InputGroup.Text id="basic-addon2">
                        Search
                      </InputGroup.Text>
                    </InputGroup>
                  </Col>
                  <Col
                    xs={"auto"}
                    className="d-flex align-items-center justify-content-end"
                  >
                    <Row>
                      <Col xs={"auto"}>
                        <Image src={group15} alt="" />
                      </Col>
                      <Col className="d-flex align-items-center justify-content-end">
                        Unis Badri
                      </Col>
                      <Col
                        xs={"auto"}
                        className="d-flex align-items-center justify-content-end"
                      >
                        <BsChevronDown />
                      </Col>
                    </Row>
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
export default DashboardNavigation;

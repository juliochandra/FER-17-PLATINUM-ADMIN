import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import fi_menu from "../assets/images/fi_menu.png";

const Dashboard = () => {
  const [isSidebarToggleVisible, setIsSidebarToggleVisible] = useState(true);
  const sidebarToggleRef = useRef(null); // Ref for the sidebarToggle element

  const toggleSidebarToggle = () => {
    setIsSidebarToggleVisible(!isSidebarToggleVisible);
  };
  useEffect(() => {
    // Get the actual width of the sidebarToggle when it's visible
    if (isSidebarToggleVisible && sidebarToggleRef.current) {
      const width = sidebarToggleRef.current.offsetWidth;
      sidebarToggleRef.current.style.width = `${width}px`;
    }
  }, [isSidebarToggleVisible]);

  console.log(isSidebarToggleVisible);

  return (
    <>
      <Container fluid style={{ backgroundColor: "#F4F5F7" }}>
        <Row>
          <Col
            id="sidebar"
            xs={"auto"}
            className="bg-primary text-white vh-100"
          >
            <Row className="flex-column">
              <Col>menu 1</Col>
              <Col>menu 2</Col>
              <Col>menu 3</Col>
            </Row>
          </Col>

          {isSidebarToggleVisible && (
            <Col id="sidebarToggle" xs={"auto"} className="bg-white vh-100">
              <Row className="flex-column p-1">
                <Col>menu 1</Col>
                <Col>menu 2</Col>
                <Col>menu 3</Col>
              </Row>
            </Col>
          )}

          <Col id="mainContent" className="">
            <Row
              id="navigationContent"
              className="bg-white p-1 bottom-shadow align-items-center"
            >
              <Col xs="auto">
                <Button
                  className="p-0"
                  variant="link"
                  onClick={toggleSidebarToggle}
                >
                  <Image src={fi_menu} alt="" />
                </Button>
              </Col>
              <Col className="">
                <Row className="justify-content-end">
                  <Col xs="auto">Search</Col>
                  <Col xs="auto">User</Col>
                </Row>
              </Col>
            </Row>

            <Row id="content">
              <Col className="vh-100">content</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;

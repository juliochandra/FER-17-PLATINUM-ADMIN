import { Col, Image, Row } from "react-bootstrap";
import retangle63 from "../assets/images/Rectangle 63.png";
import retangle62 from "../assets/images/Rectangle 62.png";
import { BsHouseDoor, BsCarFront } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const DashboardNavigation = ({ isSidebarToggleVisible }) => {
  const location = useLocation();
  let currentPath = location.pathname;
  if (currentPath.startsWith("/")) {
    currentPath = currentPath.substring(1);
  }
  return (
    <>
      <Col
        id="sidebar"
        xs={"auto"}
        className="bg-primary text-white vh-100 p-0"
      >
        <Row className="flex-column px-1">
          <Col className="d-flex align-items-center justify-content-center p-3">
            <Image src={retangle63} alt="" />
          </Col>
          <Col>
            <Link to="/dashboard">
              <Row>
                <BsHouseDoor className="fs-2 text-white" />
              </Row>
              <h6 className="text-white text-center">Dashboard</h6>
            </Link>
          </Col>
          <Col>
            <Link to="/cars">
              <Row>
                <BsCarFront className="fs-2 text-white" />
              </Row>
              <h6 className="text-white text-center">Cars</h6>
            </Link>
          </Col>
        </Row>
      </Col>

      {isSidebarToggleVisible && (
        <Col id="sidebarToggle" xs={"auto"} className="bg-white vh-100">
          <Row className="flex-column p-0">
            <Col className="bottom-shadow d-flex align-items-center justify-content-center p-3">
              <Image src={retangle62} alt="" />
            </Col>
            <Col className="text-uppercase">{currentPath}</Col>
            <Col>{currentPath}</Col>
          </Row>
        </Col>
      )}
    </>
  );
};
export default DashboardNavigation;

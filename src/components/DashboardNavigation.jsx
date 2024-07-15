import { Col, Row } from "react-bootstrap";

const DashboardNavigation = ({ isSidebarToggleVisible }) => {
  return (
    <>
      <Col id="sidebar" xs={"auto"} className="bg-primary text-white vh-100">
        <Row className="flex-column">
          <Col>menu 1</Col>
          <Col>Dashboard</Col>
          <Col>Cars</Col>
        </Row>
      </Col>

      {isSidebarToggleVisible && (
        <Col id="sidebarToggle" xs={"auto"} className="bg-white vh-100">
          <Row className="flex-column p-1">
            <Col>menu 1</Col>
            <Col>Dasboard</Col>
            <Col>Dasboard</Col>
          </Row>
        </Col>
      )}
    </>
  );
};
export default DashboardNavigation;

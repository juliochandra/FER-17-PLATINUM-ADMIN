import { Button, Col, Image, Row } from "react-bootstrap";
import fi_menu from "../assets/images/fi_menu.png";

const DashboardNavigationContent = ({ handleSidebarToggle }) => {
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
        <Row className="justify-content-end">
          <Col xs="auto">Search</Col>
          <Col xs="auto">User</Col>
        </Row>
      </Col>
    </Row>
  );
};
export default DashboardNavigationContent;

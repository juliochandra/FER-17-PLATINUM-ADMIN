import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChartPage from "../components/ChartReport";
import DashboardNavigation from "../components/DashboardNavigation";
import ListOrders from "../components/ListOrders";
import DashboardNavigationContent from "../components/DashboardNavigationContent";

const Dashboard = () => {
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
                  <ChartPage />
                </Col>
              </Row>
              <Row>
                <Col className="d-flex">
                  <ListOrders />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;

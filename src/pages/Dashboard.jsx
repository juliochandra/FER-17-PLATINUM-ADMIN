import { useState } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
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
    <Container fluid>
      <Row>
        <DashboardNavigation isSidebarToggleVisible={isSidebarToggleVisible} />

        <Col id="mainContent" className="">
          <DashboardNavigationContent
            handleSidebarToggle={handleSidebarToggle}
          />

          <Row id="content" className="mt-4">
            <Col className="vh-100">
              <Row>
                <Col>
                  <Breadcrumb>
                    <Breadcrumb.Item
                      to="/dashboard"
                      className="text-decoration-none text-black"
                    >
                      Dashboard
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <h4>Rented Car Data Visualization</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ChartPage />
                </Col>
              </Row>
              <Row className="mt-6">
                <ListOrders />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;

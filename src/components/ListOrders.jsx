import { Table } from "react-bootstrap";
import { useGetOrderQuery } from "../services/redux/apis/reportApi";
import { format } from "date-fns";

const ListOrders = () => {
  const { data: orderData } = useGetOrderQuery();
  console.log(orderData?.orders);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>User Email</th>
          <th>Car</th>
          <th>Start Rent</th>
          <th>Finish Rent</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {orderData?.orders?.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.User.email}</td>
            <td>{item.Car.name}</td>
            <td>{format(new Date(item.start_rent_at), "yyyy-MM-dd")}</td>
            <td>{format(new Date(item.finish_rent_at), "yyyy-MM-dd")}</td>
            <td>{item.total_price}</td>
            <td>{item.Car.category}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default ListOrders;

import { Pagination } from "react-bootstrap";

const OrderPagination = ({ orderParams, orderData, setOrderParams }) => {
  const handlePageChange = (page) => {
    // console.log(page);
    if (page < 1 || page > orderData?.pageCount) {
      return;
    }
    setOrderParams((prev) => ({ ...prev, page }));
  };

  const RenderPagination = () => {
    if (orderData?.page === 1) {
      return (
        <>
          <Pagination>
            <Pagination.First disabled onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              disabled
              onClick={() => handlePageChange(orderParams?.page - 1)}
            />
            <Pagination.Item active onClick={() => handlePageChange(1)}>
              {1}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(2)}>
              {2}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(3)}>
              {3}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(4)}>
              {4}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(5)}>
              {5}
            </Pagination.Item>
            <Pagination.Next
              onClick={() => handlePageChange(orderParams?.page + 1)}
            />
            <Pagination.Last
              onClick={() => handlePageChange(orderData?.pageCount)}
            />
          </Pagination>
        </>
      );
    } else if (orderData?.page === 2) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(orderParams?.page - 1)}
            />
            <Pagination.Item onClick={() => handlePageChange(1)}>
              {1}
            </Pagination.Item>
            <Pagination.Item active onClick={() => handlePageChange(2)}>
              {2}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(3)}>
              {3}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(4)}>
              {4}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(5)}>
              {5}
            </Pagination.Item>
            <Pagination.Next
              onClick={() => handlePageChange(orderParams?.page + 1)}
            />
            <Pagination.Last
              onClick={() => handlePageChange(orderData?.pageCount)}
            />
          </Pagination>
        </>
      );
    } else if (orderData?.page === 3) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(orderParams?.page - 1)}
            />
            <Pagination.Item onClick={() => handlePageChange(1)}>
              {1}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(2)}>
              {2}
            </Pagination.Item>
            <Pagination.Item active onClick={() => handlePageChange(3)}>
              {3}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(4)}>
              {4}
            </Pagination.Item>
            <Pagination.Item onClick={() => handlePageChange(5)}>
              {5}
            </Pagination.Item>
            <Pagination.Next
              onClick={() => handlePageChange(orderParams?.page + 1)}
            />
            <Pagination.Last
              onClick={() => handlePageChange(orderData?.pageCount)}
            />
          </Pagination>
        </>
      );
    } else if (
      orderData?.page > 3 &&
      orderData?.page < orderData?.pageCount - 2
    ) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(orderParams?.page - 1)}
            />
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.page - 2)}
            >
              {orderData?.page - 2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.page - 1)}
            >
              {orderData?.page - 1}
            </Pagination.Item>
            <Pagination.Item
              active
              onClick={() => handlePageChange(orderData?.page)}
            >
              {orderData?.page}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.page + 1)}
            >
              {orderData?.page + 1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.page + 2)}
            >
              {orderData?.page + 2}
            </Pagination.Item>
            <Pagination.Next
              onClick={() => handlePageChange(orderParams?.page + 1)}
            />
            <Pagination.Last
              onClick={() => handlePageChange(orderData?.pageCount)}
            />
          </Pagination>
        </>
      );
    } else if (orderData?.page === orderData?.pageCount) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(orderParams?.page - 1)}
            />
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 4)}
            >
              {orderData?.pageCount - 4}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 3)}
            >
              {orderData?.pageCount - 3}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 2)}
            >
              {orderData?.pageCount - 2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 1)}
            >
              {orderData?.pageCount - 1}
            </Pagination.Item>
            <Pagination.Item
              active
              onClick={() => handlePageChange(orderData?.pageCount)}
            >
              {orderData?.pageCount}
            </Pagination.Item>
            <Pagination.Next disabled />
            <Pagination.Last disabled />
          </Pagination>
        </>
      );
    } else if (orderData?.page === orderData?.pageCount - 1) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(orderParams?.page - 1)}
            />
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 4)}
            >
              {orderData?.pageCount - 4}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 3)}
            >
              {orderData?.pageCount - 3}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 2)}
            >
              {orderData?.pageCount - 2}
            </Pagination.Item>
            <Pagination.Item
              active
              onClick={() => handlePageChange(orderData?.pageCount - 1)}
            >
              {orderData?.pageCount - 1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount)}
            >
              {orderData?.pageCount}
            </Pagination.Item>
            <Pagination.Next disabled />
            <Pagination.Last disabled />
          </Pagination>
        </>
      );
    } else if (orderData?.page === orderData?.pageCount - 2) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(orderParams?.page - 1)}
            />
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 4)}
            >
              {orderData?.pageCount - 4}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 3)}
            >
              {orderData?.pageCount - 3}
            </Pagination.Item>
            <Pagination.Item
              active
              onClick={() => handlePageChange(orderData?.pageCount - 2)}
            >
              {orderData?.pageCount - 2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount - 1)}
            >
              {orderData?.pageCount - 1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(orderData?.pageCount)}
            >
              {orderData?.pageCount}
            </Pagination.Item>
            <Pagination.Next disabled />
            <Pagination.Last disabled />
          </Pagination>
        </>
      );
    }
  };

  return (
    <>
      <RenderPagination />
    </>
  );
};
export default OrderPagination;

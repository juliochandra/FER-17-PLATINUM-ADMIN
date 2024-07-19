import { Pagination } from "react-bootstrap";

const CarsPagination = ({ carsParams, setCarsParams, carsData }) => {
  const handlePageChange = (page) => {
    // console.log(page);
    if (page < 1 || page > carsData?.pageCount) {
      return;
    }
    setCarsParams((prev) => ({ ...prev, page }));
  };

  const RenderPagination = () => {
    if (carsData?.page === 1) {
      return (
        <>
          <Pagination>
            <Pagination.First disabled onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              disabled
              onClick={() => handlePageChange(carsParams?.page - 1)}
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
              onClick={() => handlePageChange(carsParams?.page + 1)}
            />
            <Pagination.Last
              onClick={() => handlePageChange(carsData?.pageCount)}
            />
          </Pagination>
        </>
      );
    } else if (carsData?.page === 2) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(carsParams?.page - 1)}
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
              onClick={() => handlePageChange(carsParams?.page + 1)}
            />
            <Pagination.Last
              onClick={() => handlePageChange(carsData?.pageCount)}
            />
          </Pagination>
        </>
      );
    } else if (carsData?.page === 3) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(carsParams?.page - 1)}
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
              onClick={() => handlePageChange(carsParams?.page + 1)}
            />
            <Pagination.Last
              onClick={() => handlePageChange(carsData?.pageCount)}
            />
          </Pagination>
        </>
      );
    } else if (carsData?.page > 3 && carsData?.page < carsData?.pageCount - 2) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(carsParams?.page - 1)}
            />
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.page - 2)}
            >
              {carsData?.page - 2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.page - 1)}
            >
              {carsData?.page - 1}
            </Pagination.Item>
            <Pagination.Item
              active
              onClick={() => handlePageChange(carsData?.page)}
            >
              {carsData?.page}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.page + 1)}
            >
              {carsData?.page + 1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.page + 2)}
            >
              {carsData?.page + 2}
            </Pagination.Item>
            <Pagination.Next
              onClick={() => handlePageChange(carsParams?.page + 1)}
            />
            <Pagination.Last
              onClick={() => handlePageChange(carsData?.pageCount)}
            />
          </Pagination>
        </>
      );
    } else if (carsData?.page === carsData?.pageCount) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(carsParams?.page - 1)}
            />
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 4)}
            >
              {carsData?.pageCount - 4}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 3)}
            >
              {carsData?.pageCount - 3}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 2)}
            >
              {carsData?.pageCount - 2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 1)}
            >
              {carsData?.pageCount - 1}
            </Pagination.Item>
            <Pagination.Item
              active
              onClick={() => handlePageChange(carsData?.pageCount)}
            >
              {carsData?.pageCount}
            </Pagination.Item>
            <Pagination.Next disabled />
            <Pagination.Last disabled />
          </Pagination>
        </>
      );
    } else if (carsData?.page === carsData?.pageCount - 1) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(carsParams?.page - 1)}
            />
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 4)}
            >
              {carsData?.pageCount - 4}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 3)}
            >
              {carsData?.pageCount - 3}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 2)}
            >
              {carsData?.pageCount - 2}
            </Pagination.Item>
            <Pagination.Item
              active
              onClick={() => handlePageChange(carsData?.pageCount - 1)}
            >
              {carsData?.pageCount - 1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount)}
            >
              {carsData?.pageCount}
            </Pagination.Item>
            <Pagination.Next disabled />
            <Pagination.Last disabled />
          </Pagination>
        </>
      );
    } else if (carsData?.page === carsData?.pageCount - 2) {
      return (
        <>
          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(carsParams?.page - 1)}
            />
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 4)}
            >
              {carsData?.pageCount - 4}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 3)}
            >
              {carsData?.pageCount - 3}
            </Pagination.Item>
            <Pagination.Item
              active
              onClick={() => handlePageChange(carsData?.pageCount - 2)}
            >
              {carsData?.pageCount - 2}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount - 1)}
            >
              {carsData?.pageCount - 1}
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(carsData?.pageCount)}
            >
              {carsData?.pageCount}
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
export default CarsPagination;

import {
  Container,
  Button,
  Form,
  Alert,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../services/redux/apis/authApi";
import { setUserInfo } from "../services/redux/reducers/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import image from "../assets/images/image 2.png";
import rectangle from "../assets/images/Rectangle 62.png";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [login, { isLoading, isError, error }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const loginSubmit = async (data) => {
    // console.log(data);
    try {
      const res = await login(data).unwrap();
      //   console.log(res);
      dispatch(setUserInfo(res));
      toast.success("Login Success");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      //   toast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <>
      <section id="login">
        <Container fluid>
          <Row>
            <Col sm={8} className="m-0 p-0">
              <Image
                src={image}
                fluid
                style={{ opacity: "70", height: "100vh", objectFit: "cover" }}
              />
            </Col>
            <Col
              sm={4}
              className="px-5 d-flex flex-column justify-content-center"
            >
              <Image
                src={rectangle}
                style={{ width: "100px", height: "34px" }}
                className="mb-5"
              />
              <h1 className="mb-5">Welcome, Admin BCR</h1>
              <Alert variant="danger" show={isError}>
                {error?.data?.message || error?.error}
              </Alert>
              <Form onSubmit={handleSubmit(loginSubmit)}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label className="mb-3">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="mb-3"
                    // value={"admin@bcr.io"}
                    {...register("email", { required: "Email is required" })}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label className="mb-3">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="mb-3"
                    // value={"123456"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit" className="rounded-1">
                    Sign in
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Login;

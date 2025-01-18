import Button from "@mui/material/Button";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link} from "react-router-dom";



interface InnputValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const initialValues: InnputValues = { email: "", password: "" };
  const navigate = useNavigate();


  const handleSubmit = async (
    values: InnputValues,
    { setErrors }: any 
  ) => {
       try {
        const response = await axios.post("http://localhost:3030/api/login", {email: values.email, password: values.password});
        const data = response.data;
        const { accessToken, refreshToken } = data;
        console.log("login successful");
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/");
    } catch (error: any) {
      if(error.response === undefined) {
        console.error(error.message);
        return
      }
      
      if (error.response.status === 401) {
          setErrors({ email: "Invalid email or password", password: "Invalid email or password" });
      } else if (error.response.status === 404) {
          setErrors({ email: "User not found" });
      } else if (error.response.status === 400) {
          setErrors({ email: "Please fill all the fields", password: "Please fill all the fields" });
      } else {
          setErrors({ email: "An unexpected error occurred", password: "An unexpected error occurred" });
      }
    }
    

   
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h2>
        Sign in to <img className="h-5" src="/src/assets/logo.png" />
      </h2>

      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: { email?: string; password?: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={handleSubmit} 
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center space-y-4 p-4">
            <label
              htmlFor="email"
              className="block text-md font-bold text-gray-700 self-start "
            >
              Email Address:
            </label>
            <Field
              className="w-[300px] md:w-[500px] text-lg border-gray-300 focus:outline-blue-500"
              type="email"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="self-start text-sm text-red-600"
            />
            <label
              htmlFor="password"
              className="block text-md font-bold text-gray-700 self-start "
            >
              Password:
            </label>
            <Field
              className="w-[300px] md:w-[500px] text-lg border-gray-300 focus:outline-blue-500 "
              type="password"
              name="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="self-start text-sm text-red-600"
            />
            <Button
              variant="contained"
              color="primary"
              className="w-[300px] md:w-[500px]"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
            <div className="self-start pt-4">
              <span>Don't have an account? </span>
              <Link className="hover:text-blue-900 visited:text-blue-500 active:text-blue-500 text-blue-500" to="/register">Create one now</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;

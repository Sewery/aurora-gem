import Button from "@mui/material/Button";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link} from "react-router-dom";


interface InnputValues {
    email: string;
    password: string;
    password2: string;
    firstname: string;
    lastname: string;
    postal_code: string;
    address: string;
  }

const RegisterPage = () => {
    const initialValues: InnputValues = { email: "", password: "", password2: "", firstname: "", lastname: "", postal_code: "", address: "" };
    const navigate = useNavigate();

    const handleSubmit = async (
        values: InnputValues,
        { setErrors }: any 
      ) => {
           try {
            await axios.post("http://localhost:3030/api/register",{email: values.email, password: values.password, firstname: values.firstname, lastname: values.lastname, postal_code: values.postal_code, address: values.address});

            console.log("register successful");

            navigate("/login");
            
        }   catch (error: any) {
          if(axios.isAxiosError(error)){
            console.error(error.message);
            return
          }
          if (error.response.status === 403) {
              setErrors({ email: "User with this email already exists" });
          } else if (error.response.status === 400) {
              setErrors({ email: "Please fill all the fields", password: "Please fill all the fields", password2: "Please fill all the fields", firstname: "Please fill all the fields", lastname: "Please fill all the fields", postal_code: "Please fill all the fields", address: "Please fill all the fields" });
          } else {
              setErrors({ email: "An unexpected error occurred", password: "An unexpected error occurred", password2: "An unexpected error occurred", firstname: "An unexpected error occurred", lastname: "An unexpected error occurred", postal_code: "An unexpected error occurred", address: "An unexpected error occurred" });
          }
        }
    }


    return (
        <div className="flex flex-col items-center space-y-4 p-4">
        <h2>
          Sign in to <img className="h-5" src="/src/assets/logo.png" />
        </h2>
  
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: { email?: string; password?: string, password2?:string, firstname?:string, lastname?:string, postal_code?:string, address?:string } = {};
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
            if (!values.password2) {
                errors.password = "Required";
            }
            if(values.password !== values.password2){
                errors.password = "Passwords do not match";
                
            }
            if (!values.firstname) {
                errors.firstname = "Required";
            }
            if (!values.lastname) {
                errors.lastname = "Required";
            }
            if (!values.postal_code) {
                errors.postal_code = "Required";
            }
        
            if (!values.address) {
                errors.address = "Required";
            }
            return errors;
          }}
          onSubmit={handleSubmit} 
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col items-center space-y-8 p-4">
                <div style={{border:"1px solid black"}} className="flex flex-col items-center space-y-4 p-4   rounded-md ">

                    <h6 className="text-sm self-start my-0 text-gray-500 ">Customer Details</h6>                
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
                        htmlFor="firstname"
                        className="block text-md font-bold text-gray-700 self-start "
                    >
                        First Name:
                    </label>
                    <Field
                        className="w-[300px] md:w-[500px] text-lg border-gray-300 focus:outline-blue-500"
                        type="text"
                        name="firstname"
                    />
                    <ErrorMessage
                        name="firstname"
                        component="div"
                        className="self-start text-sm text-red-600"
                    />

                    <label
                        htmlFor="lastname"
                        className="block text-md font-bold text-gray-700 self-start "
                    >
                        Last Name:
                    </label>
                    <Field
                        className="w-[300px] md:w-[500px] text-lg border-gray-300 focus:outline-blue-500"
                        type="text"
                        name="lastname"
                    />
                    <ErrorMessage
                        name="lastname"
                        component="div"
                        className="self-start text-sm text-red-600"
                    />
                </div>

                <div style={{border:"1px solid black"}} className="flex flex-col items-center space-y-4 p-4   rounded-md ">
                <h6 className="text-sm self-start my-0 text-gray-500 ">Password</h6> 
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

                    <label
                        htmlFor="password2"
                        className="block text-md font-bold text-gray-700 self-start "
                    >
                        Repeat password:
                    </label>
                    <Field
                        className="w-[300px] md:w-[500px] text-lg border-gray-300 focus:outline-blue-500 "
                        type="password"
                        name="password2"
                    />
                    <ErrorMessage
                        name="password2"
                        component="div"
                        className="self-start text-sm text-red-600"
                    />
                     

                </div>
                <div style={{border:"1px solid black"}} className="flex flex-col items-center space-y-4 p-4   rounded-md ">
                        <h6 className="text-sm self-start my-0 text-gray-500 ">Address Details</h6>
                        <label
                        htmlFor="address"
                        className="block text-md font-bold text-gray-700 self-start "
                        >
                            Address:
                        </label>
                        <Field
                            className="w-[300px] md:w-[500px] text-lg border-gray-300 focus:outline-blue-500"
                            type="text"
                            name="address"
                        />
                        <ErrorMessage
                            name="address"
                            component="div"
                            className="self-start text-sm text-red-600"
                        />

                        <label
                        htmlFor="postal_code"
                        className="block text-md font-bold text-gray-700 self-start "
                        >
                            Postal Code:
                        </label>
                        <Field
                            className="w-[300px] md:w-[500px] text-lg border-gray-300 focus:outline-blue-500"
                            type="text"
                            name="postal_code"
                        />
                        <ErrorMessage
                            name="postal_code"
                            component="div"
                            className="self-start text-sm text-red-600"
                        />


                </div>
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
                    <span>Already have an account? </span>
                    <Link className="hover:text-blue-900 visited:text-blue-500 active:text-blue-500 text-blue-500" to="/login">Log in</Link>
                </div>
            </Form>
          )}
        </Formik>
      </div>
        
    )
      
}


export default RegisterPage;
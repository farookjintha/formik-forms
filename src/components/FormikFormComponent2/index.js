import {useState} from 'react';
import axios from 'axios';
// import { useFormik } from "formik";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikFormComponent2 = () => {


    return (
        <div>
            <h1>Formik Form Component with Formik, Form, Field Tags.</h1>

            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password: ''
                }}
                validationSchema= {
                    Yup.object({
                        name: Yup.string().required('Name is required'),
                        email: Yup.string().email('Invalid Email Address').required('Email is required'),
                        password: Yup.string().required('Password is required')
                    })
                }

                onSubmit={
                    (values) => {
                        console.log("Values: ", values)
                    // try{
                    //     const response = await axios.post('http://localhost:4000/api/signup', values) //via API
                    //     if(response){
                    //         console.log("Success: ",response.data);
                    //     }
                    // }catch(error){
                    //     console.log('Error: ', error)
                    // }
            
                    axios.post('http://localhost:4000/api/signup', values).then(response => {
                        console.log("Formik with Formik Form Field Elements -> Callback Success: ",response.data);
                    }).catch(error => {
                        console.log("Error: ", error)
                    })
                    }
                }
                >
                <Form>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <Field name="name" type="text" placeholder='Your Name' />
                        <ErrorMessage name="name" />
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label>
                            <Field name="email" type="email" placeholder='Your Email' />
                            <ErrorMessage name="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <Field name="password" type="password" placeholder='Your Password' />
                        <ErrorMessage name="password" />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>












            
            {/* <form className="register-form" onSubmit={formik.handleSubmit}>
                <div>
                    <span>Name: </span>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                </div>
                <div>
                    <span>Email: </span>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div>
                    <span>Password: </span>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form> */}
        </div>
    )
}

export default FormikFormComponent2;
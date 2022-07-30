import {useState} from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import * as Yup from 'yup';

const FormikFormComponent = () => {
    const formik = useFormik({ // { InitialValues, onSubmit, validationSchema }
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
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
            console.log("Formik with useFormik -> Callback Success: ",response.data);
        }).catch(error => {
            console.log("Error: ", error)
        })
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid Email Address').required('Email is required'),
            password: Yup.string().required('Password is required')
        })
    });


    return (
        <div>
            <h1>Formik Form Component using useFormik Hook</h1>
            <form className="register-form" onSubmit={formik.handleSubmit}>
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
            </form>
        </div>
    )
}

export default FormikFormComponent;
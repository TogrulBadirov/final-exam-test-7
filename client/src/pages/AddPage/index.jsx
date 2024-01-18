import "./index.scss"
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useEffect, useState } from "react";
import axios from "axios";
const AddPage = () => {
    const [products, setProducts] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [sortValue, setSortValue] = useState(null)

    const getAllProducts = async()=>{
        const resp = await axios("http://localhost:3000/")
        setProducts(resp.data)
    }

    const postProduct = async(values)=>{
        await axios.post("http://localhost:3000/",values)
        getAllProducts()
    }
    const deleteProduct = async(id)=>{
        console.log(id);
        const resp = await axios.delete(`http://localhost:3000/${id}`)
        console.log(resp.data);
        getAllProducts()
    }

    useEffect(() => {
        getAllProducts()
    }, [])
    
  return (

    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <section id="add-form">
      <Formik
       initialValues={{ name: '', desc: '', price: '', category:'' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(50, 'Must be 50 characters or less')
           .matches(/^[A-Za-z]/, 'Must include text.')
           .required('Required'),
         desc: Yup.string()
           .max(150, 'Must be 150 characters or less')
           .matches(/^[A-Za-z]/, 'Must include text.')
           .required('Required'),
         price: Yup.number()
         .min(1,"Must be 0 or more!")
         .required('Required'),
         category: Yup.string()
         .required('Required'),
       })}
       onSubmit={(values, { setSubmitting,resetForm }) => {
         setTimeout(() => {
            postProduct(values)
            resetForm()
            getAllProducts()
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
       <h1>Add From</h1>

         <div>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text"  className="form-control"/>
         <div className="error">
         <ErrorMessage name="name" />
         </div>
         </div>
 
         <div>
         <label htmlFor="desc">Desc</label>
         <Field name="desc" type="text" className="form-control" />
         <div className="error">
         <ErrorMessage name="desc" />
         </div>
         </div>
 
         <div>
         <label htmlFor="price">price</label>
         <Field name="price" type="number"  min={1} className="form-control" />
         <div className="error">
         <ErrorMessage name="price" />
         </div>
         </div>

         <div>
         <label htmlFor="category">category</label>
         <Field name="category" type="string"  min={1} className="form-control" />
         <div className="error">
         <ErrorMessage name="category" />
         </div>
         </div>
 
         <button className="btn btn-primary" type="submit">Submit</button>
       </Form>
     </Formik>
      </section>
      <section id="product-table">
      <div className="container">
        <input type="text" placeholder="Search"  onChange={(e)=>setSearchValue(e.target.value)}/>
        <button className="btn btn-dark" onClick={()=>setSortValue({property:"name",asc:true})}>Sort By Name: A-Z</button>
        <button className="btn btn-dark" onClick={()=>setSortValue({property:"name",asc:false})}>Sort By Name: Z-A</button>
        <button className="btn btn-dark" onClick={()=>setSortValue({property:"price",asc:true,type:"number"})}>Sort By Price: Increase</button>
        <button className="btn btn-dark" onClick={()=>setSortValue({property:"price",asc:false,type:"number"})}>Sort By Price: Decrease</button>
        <button className="btn btn-dark" onClick={()=>setSortValue(null)}>Default</button>
      <table className="table table-dark">
            <thead>
                <tr>
                    <th>name</th>
                    <th>desc</th>
                    <th>price</th>
                    <th>category</th>
                    <th>category</th>
                </tr>
            </thead>
            <tbody>
                {products && products
                .filter(x=> x.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
                .sort((a,b)=>{
                    if (sortValue && sortValue.type === "number" && sortValue.asc === true) {
                        return a[sortValue.property] - b[sortValue.property]
                    }
                    else if(sortValue && sortValue.type === "number" && sortValue.asc === false){
                        return b[sortValue.property] - a[sortValue.property]
                    }
                    else if(sortValue  && sortValue.asc === true){
                        return  a[sortValue.property].localeCompare(b[sortValue.property])
                    }
                    else if(sortValue  && sortValue.asc === false){
                        return  b[sortValue.property].localeCompare(a[sortValue.property])
                    }
                    else{
                        return 0 
                    }
                })
                .map(item=>(
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.desc}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td><button onClick={()=>deleteProduct(item._id)} className="btn btn-danger">Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      </section>

    </>
  );
};

export default AddPage;


// social media 
// whatsapp
//hali saha reservation
//hotel reservation
//e-commerce
//auction website

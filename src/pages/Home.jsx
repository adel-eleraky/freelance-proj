import React, { useState } from 'react'
import "./Home.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';



function Home() {


    let [submit, setSubmit] = useState("")
    let navigate = useNavigate()

    const arabicToEnglish = (input) => {
    return input.replace(/[\u0660-\u0669]/g, (c) => {
        return String.fromCharCode(c.charCodeAt(0) - 0x0660 + 48);
    });
    };

    const sheetUrl = "https://script.google.com/macros/s/AKfycbzdu5FG3fMYUL_i_wn-zT9dphYbs9j_Sakv_pE3akGLBIrMfdKkhFNn2sA8e3jBVFD01w/exec"
    const validationSchema = Yup.object({
        name: Yup.string().required("الاسم مطلوب"),
        phone: Yup.string()
            .transform((value) => arabicToEnglish(value || "")) // convert Arabic to English
            .matches(
            /^(010\d{8}|011\d{8}|015\d{8}|012[01278]\d{7})$/,
            "يجب أن يكون رقم الهاتف المصري صحيحًا ويبدأ بـ 010 أو 011 أو 012 أو 015"
            )
    .required("رقم الهاتف مطلوب"),
        // phone2: Yup.string()
        //     .matches(/^(010|011|012|015)\d{8}$/, "يجب أن يكون رقم الهاتف المصري صحيحًا ويبدأ بـ 010 أو 011 أو 012 أو 015"),
        // address: Yup.string().required('ادخل عنوانك - محافظتك - منطقة - اسم شارع - علامة مميزة'),

    });

    return (
        <>
        
            <div className="py-4 text-center text-white fs-3 fw-bold" style={{ backgroundColor: 'rgb(2 0 0)'}}>
                💰 سعر العبوة: <span className="text-warning">370 جنيه</span> | بدلا من 550 <span className="text-success"> + الشحن مجانا لجميع المحافظات </span>
            </div>
            <div className="first-section">
                <div className="row">
                    <div className="col-12 col-md-6 first-col ps-0">
                        <div className='text-center text-white position-relative d-flex align-items-center' >
                            <div style={{ width: '70%' }}>
                                <h1 className='mx-auto' style={{ margin: 'auto' }}>  وداعا لضعف الانتصاب استعيد ثقتك و فحولتك <span className='rounded d-block text-white mx-auto mt-2 px-2 py-1' style={{ backgroundColor: 'black', width: 'fit-content' }}> من جديد </span> </h1>
                            </div>
                            <div>
                                <img src="img/marvel_nobg.png" alt="" className="img-fluid w-100 header-img" style={{ height: "550px" }} />
                            </div>

                        </div>
                        <div className='py-5 bottom-sec' >
                            <a href="#form" className="btn py-2 mx-auto d-block px-3 rounded bg-white fs-3 fw-bold mt-5 order-now-btn" style={{ width: 'fit-content' }}> اطلب الان <i className="fa-solid fa-cart-shopping"></i></a>

                            <p className="m-auto text-center  mb-3 text-white p-4 fw-bold fs-3 rounded" >  ستحصل على انتصاب قوى و صلب <br />  ليجعل شريكتك تصل لنشوتها اكثر من مرة </p>
                            <p className="w-75 m-auto text-center mb-3 text-white p-4 fw-bold fs-3 rounded" style={{ backgroundColor: '#811a1a' }} > يعطيك قضيب ضخم و سوف تصل الى درجة الفحولة التى تحبها كل النساء </p>
                            <p className="w-75 m-auto text-center mb-3 text-white p-4 fw-bold fs-3 rounded"> يقضى نهائيا على سرعة القذف المحرجة للرجال لتتمتع انت و شريكتك بعلاقة اطول </p>
                            <p className="w-75 m-auto text-center mb-3 text-white p-4 fw-bold fs-3 rounded" style={{ backgroundColor: '#811a1a' }} > حل نهائى و جذرى للمشكلة و ليس حل كؤقت كباقى المنتجات </p>
                            {/* <p className="w-75 m-auto text-center mb-3 text-white p-4 fw-bold fs-3 rounded"> مناسب لجميع انواع الشعر و امن تماما على فروة الرأس </p> */}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 second-col text-white" style={{ paddingTop: "100px !important",  }}>
                        <div className="text-center ">
                            <div className="main-title text-white fw-bold fs-3 py-2 px-3">
                                لا تتردد فى طلب المنتج لاسعاد زوجتك
                            </div>
                        </div>

                        <div className="container container-custom mt-4 mx-auto">
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="box mb-5 border rounded text-dark">
                                        <div className=' box-title rounded bg-dark py-3 fs-3 fw-bold bg-white' style={{  }}> نتائج الاسبوع الاول </div>
                                        <div className='bg-transparent text-dark py-3 fs-3 text-dark'> زيادة طول العضو من 3.5 سم ال 4.5 سم </div>
                                        <div className='bg-transparent text-dark py-3 fs-3 text-dark' style={{ borderTop: "1px solid #d8cfcf" }}> متوسط مدة العلاقة 15 دقيقة الى 25 دقيقة </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box mb-5 border rounded">
                                        <div className=' box-title rounded bg-dark py-3 fs-3 fw-bold bg-white' style={{  }}> نتائج الاسبوع الثانى </div>
                                        <div className='bg-transparent text-dark py-3 fs-3 text-dark'> زيادة طول العضو من 6 سم ال 8 سم </div>
                                        <div className='bg-transparent text-dark py-3 fs-3 text-dark' style={{ borderTop: "1px solid #d8cfcf" }}> متوسط مدة العلاقة من 30 دقيقة الى 55 دقيقة </div>
                                    </div>
                                </div>
                                {/* <div className="col-12">
                                    <div className="box mb-5 border rounded">
                                        <div className=' text-white box-title rounded bg-dark py-3 fs-3 fw-bold'> خلال 30 يوم </div>
                                        <div className='bg-transparent text-dark py-3 fs-3'> استعادة الكثافة الطبيعية و زيادة قوة الشعر </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="border mt-5 py-4 rounded fw-bold fs-1 position-relative text-dark">
                                <span className="position-absolute caution"> تنويه </span>
                                المنتج امن و صحى  على مرضى القلب و الضغط و السكر و بدون اى اثار جانبية
                            </div>
                            <a href="#form" className="btn py-2 px-3 rounded bg-white fs-3 fw-bold mt-5 order-now-btn"> اطلب الان <i className="fa-solid fa-cart-shopping"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-section">
                <div className="row align-item-center">
                    <div className="col-12 col-md-6 first-col">
                        <h2 className='w-75 m-auto my-5 text-center'> لماذا ينصح 90 % من الاطباء باستخدام تريند جيل </h2>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6">
                                <p> لانه احدث ما توصل اليه الطب خلال هذا العام </p>
                                <p> نتيجة فورية سريعة من اول استخدام </p>
                                <p> لانه يعطيك القوة و الفحولة التى تريدها </p>
                                <p> لانه كورس علاج نهائى و ليس حل مؤقت </p>
                            </div>
                            <div className="col-12 col-md-6"> <img src="img/marvel_nobg.png" alt="" className="img-fluid" style={{ height: "550px" }} /> </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 second-col">
                        {/* <img src="img/top-work.webp" alt="" className="img-fluid" /> */}
                        <div className="content text-white">
                            <h2 className='text-center mb-5 pt-5'> مميزات المنتج </h2>
                            <div className='px-5 py-3'>
                                <i className="fa-solid fa-1 rounded-circle border p-3 ms-2"></i> <span className='fw-bold fs-3'> يعمل على تنشيط الدورة الدموية و تنشيط الخلايا الخاملة فى النسيج الكهفى للعضو الذكرى </span>
                                {/* <p className='mt-3'> - اغسل شعرك بالماء الفاتر و الشامبو المناسب لنوع شعرك  </p>
                                <p> - جفف رأسك بلطف و بمنشفة ناعمة قبل تطبيق المنتج </p> */}
                            </div>
                            <div className='px-5 py-3'>
                                <i className="fa-solid fa-2 rounded-circle border p-3 ms-2"></i> <span className='fw-bold fs-3'> افراز هرمون التستوستيرون بكميات كبيرة حتى يعطيك انتصاب صلب كالحديد و حجم ضخم </span>
                                {/* <p className='mt-3'> - ضع كمية مناسبة من المنتج على الاماكن التى تعانى من التساقط او الصلع </p>
                                <p> - قم بتدليك فروة الرأس بحركات دائرية لمدة 2-3 دقائق لضمان امتصاصه جيدا </p> */}
                            </div>
                            <div className='px-5 py-3'>
                                <i className="fa-solid fa-3 rounded-circle border p-3 ms-2"></i> <span className='fw-bold fs-3'> يزيد من الرغبة و المتعة الجنسية للرجال و يرفع مستوى الاداء و القوة اثناء العلاقة </span>
                                {/* <p className='mt-3'> - استخدم المنتج مرتين يوميا ( صباحا و مساءا  ) للحصول على افضل النتائج </p>
                                <p> - لا تغسل شعرك مباشرة بعد التطبيق , و اتركه ليعمل لمدة لا تقل عن 6 ساعات </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-section">
                <div className="row">
                    <div className="col-12 col-md-6 first-col">
                        <div className="row">
                           
                            <div className='col-7'>
                                <div style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'}}>
                                    <div className="price-card-modern">
                                        <div className="discount-badge">
                                        وفر 33%
                                        </div>

                                        <div className="price-header">
                                        <span className="price-label">السعر الخاص</span>
                                        </div>

                                        <div className="price-content">
                                        <div className="current-price">
                                            <span className="amount">370</span>
                                            <span className="currency">جنيه</span>
                                        </div>

                                        <div className="original-price">
                                            <span className="old-label">السعر الأصلي</span>
                                            <span className="old-amount">550 جنيه</span>
                                        </div>
                                        </div>

                                        <div className="price-footer">
                                        <div className="savings-highlight">
                                            <svg className="savings-icon" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                                            </svg>
                                            توفير 180 جنيه
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5"><img src="img/marvel_nobg.png" alt="" className="img-fluid" /></div>
                        </div>

                        <p className='text-white p-2 rounded fw-bold fs-3 m-auto mt-5' style={{ width: "fit-content", background: '#811a1a' }}> الشحن مجانى لجميع المحافظات  </p>
                        <p className='text-dark bg-white rounded mb-3 py-2 px-3 fw-bold fs-3 m-auto mt-4' style={{ width: "fit-content" }}> الدفع عند استلام المنتج </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className='text-dark text-center p-4 fs-5 fw-bold mt-5 fw-bold m-auto' style={{ width: "fit-content" }}> سياسة الأسترجاع فى حالة عدم رضائك عن المنتج ضمان استرجاع خلال 14 يوم </p>
                        <Formik
                            initialValues={{ name: "", phone: "" }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                setSubmit("submitting")
                                console.log("Form Submitted:", values);
                                fetch(sheetUrl, {
                                    method: "POST",
                                    mode: "no-cors",  // <--- This bypasses CORS but does not return a response
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(values),
                                })
                                    .then(() => {
                                        setSubmit("submitted")
                                        toast.success('تم تسجيل بياناتك بنجاح', {
                                            position: "top-center",
                                            className: "toast-success",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: false,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                        });
                                        navigate("/completed")
                                    })
                                    .catch(error => {
                                        setSubmit("submitted")
                                        toast.error(`${error}`, {
                                            position: "top-center",
                                            className: "toast-error",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: false,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "light",
                                        });
                                    });
                            }}
                        >
                            {({ handleSubmit }) => (
                                <Form
                                    className="needs-validation w-75 m-auto mt-5 shadow p-5"
                                    noValidate
                                    onSubmit={handleSubmit}
                                    id='form'
                                >
                                    <h2 className="text-center text-white mb-5">
                                        سجل بياناتك الآن وسوف نقوم بالتواصل معكم بكل التفاصيل قبل شحن المنتج
                                    </h2>

                                    {/* Name Field */}
                                    <div className="mt-3">
                                        <div className="input mb-3">
                                            {/* <label htmlFor="name" className="form-label fw-bold mb-2">
                                                الاسم بالكامل
                                            </label> */}
                                            <div className="input-group has-validation ">
                                                
                                                <Field
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control rounded p-3"
                                                    placeholder=" الاسم "
                                                />
                                            </div>
                                            <ErrorMessage name="name" component="div" className="text-danger mb-3" />
                                        </div>

                                        {/* Phone Field */}
                                        <div className="input">
                                            {/* <label htmlFor="phone" className="form-label fw-bold mb-2">
                                                رقم التليفون
                                            </label> */}
                                            <div className="input-group has-validation ">
                                                
                                                <Field
                                                    type="text"
                                                    id="phone"
                                                    maxLength="11"
                                                    name="phone"
                                                    className="form-control rounded p-3"
                                                    placeholder=" التليفون "
                                                />
                                            </div>
                                            <ErrorMessage name="phone" component="div" className="text-danger mb-3" />
                                        </div>
                                        {/* <div className="input mt-3">
                                            <label htmlFor="phone" className="form-label fw-bold mb-2">
                                                رقم تليفون بديل
                                            </label>
                                            <div className="input-group has-validation ">
                                                <span className="input-group-text rounded-0 rounded-end">
                                                    <i className="fa-solid fa-phone p-2"></i>
                                                </span>
                                                <Field
                                                    type="text"
                                                    id="phone"
                                                    maxLength="11"
                                                    name="phone2"
                                                    className="form-control rounded-0 rounded-start p-2"
                                                    placeholder="ادخل رقم تليفون بديل ( اختيارى )"
                                                />
                                            </div>
                                            <ErrorMessage name="phone2" component="div" className="text-danger mb-3" />
                                        </div>
                                        <div className="input mt-3">
                                            <label htmlFor="address" className="form-label fw-bold mb-2">
                                                العنوان
                                            </label>
                                            <div className="input-group has-validation ">
                                                <span className="input-group-text rounded-0 rounded-end">
                                                    <i className="fa-solid fa-location-dot p-2"></i>
                                                </span>
                                                <Field
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    className="form-control rounded-0 rounded-start p-2"
                                                    placeholder=" ادخل عنوانك: محافظة - منطقة - اسم الشارع - علامة مميزة "
                                                />
                                            </div>
                                            <ErrorMessage name="address" component="div" className="text-danger mb-3" />
                                        </div> */}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn  py-2 px-3 rounded text-white m-auto d-block fs-3 fw-bold mt-5"
                                            style={{ backgroundColor: 'black'}}
                                    >
                                        {submit == "submitting" ?
                                            "جارى التسجيل" : "اطلب الان"}
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            
            <footer className='py-3 d-flex justify-content-center'>
                <div className="container text-center py-3">
                    <div className="row">
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0"><img src="img/extra-1.PNG" alt="" className="img-fluid" /></div>
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0"><img src="img/extra-2.PNG" alt="" className="img-fluid" /></div>
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0"><img src="img/extra-3.PNG" alt="" className="img-fluid" /></div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    className="d-flex"
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={true}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </footer>
        </>
    )
}

export default Home

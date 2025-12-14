import React, { useEffect } from 'react'
import "./Completed.css"
import ReactPixel from 'react-facebook-pixel';

function Completed() {

    useEffect(() => {
        ReactPixel.track("FormSubmissionSuccess"); // Custom event for form submission success
        console.log("Meta Pixel tracked: FormSubmissionSuccess");
    }, []);

    return (
        <div className='completed_order h-100 text-white py-5'>
            <h3 className="fs-2 text-center w-75 m-auto"> تم تسجيل بياناتك بنجاح, سيتم التواصل معك فى أقرب وقت </h3>
            <img src="img/marvel_nobg.png" alt="" className="img-fluid d-block m-auto " />
        </div>
    )
}

export default Completed

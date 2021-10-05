import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <h1 className='headingOne'>Contact Us</h1>
            <h2>Meet Our Instructors</h2>
            <div>
                <h3>Contact Info</h3>
                <p>
                Welcome to our Website. We are glad to have you around. For more help please contact with us .thank you and stay with us.
                </p>
                Cell Phone : 01999232478 <br />
                Cell Phone : 01999232466 <br />
                Cell Phone : 01999232499 <br />
            </div>
              <div className='d-flex justify-content-center'>
              <div>
               <img className='m-5' src="https://3.imimg.com/data3/KW/EQ/MY-16391904/neet-coaching-classes-250x250.png" alt="" />
               </div>
                <div className='address'>
              <span className='add'> Address : </span> Opposite to the fallpatti mosque, dewan tower, (1st Floor),Motijhil,Dhaka,Bangladesh.
              <h2>CONNECT WITH US</h2>
              <h3>SOCIAL MEDIA CHANNEL</h3>
              <h3 className="text-success mt-5">
                <i className="fab fa-twitter me-2"></i>
                <i className="fab fa-instagram me-2"></i>
                <i className="fab fa-facebook-f me-2"></i>
                <i className="fab fa-facebook-messenger me-2"></i>
                <i className="fab fa-whatsapp me-2"></i>
              </h3>
            </div>
              </div>
            <div>
                <p className='text-justify'>
              To serve the students or only to do business and gain profit? In most of the cases coaching centres do not help a student that much. Rather attending the classes of coaching centre is an extra hazard for students. Though coaching centers promises many things at the time of admission but ultimately the result is zero. At the end of the day coaching centers only earn a huge amount of money from the students. Meanwhile students only attend coaching centers to make friends and to do chitchat with friends. Coaching center is a place to hangout for the teenagers. If a student wants to learn, he/she will pay attention to school classes as he/she can learn from the school classes. Coaching is not needed for them in that case. But the students are not solely responsible for such a situation. Teachers play a very important role in this case. Teachers do not pay much attention to the students in class time.
              </p>
            </div>

        </div>
    )
}

export default Contact

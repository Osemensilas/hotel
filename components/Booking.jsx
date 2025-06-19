import { useState } from "react";
import axios from "axios";

const Booking = () => {

    const [bookingError, setBookingError] = useState('');
    const [contactSuccess, setContactSuccess] = useState('');
    const [formData, setFormData] = useState({
        'fullname': '',
        'email': '',
        'checkin': '',
        'checkout': '',
        'phone': '',
        'suite': '',
    });

    const handleChanged = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const formSubmitted = async (e) => {
        e.preventDefault();

        let nameVal = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        let errorValue = false;

        if (!nameVal.test(formData.fullname)){
            setBookingError('Please enter a valid name');
            errorValue = true;
        }else{
            setBookingError('');

            if (!emailVal.test(formData.email)){
                setBookingError('Please enter a valid email');
                errorValue = true;
            }else{
                setBookingError('');

                if (!formData.checkin || !formData.checkout){
                    setBookingError('Please select check-in and check-out dates');
                    errorValue = true;
                }else{
                    setBookingError('');

                    if (!formData.phone){
                        setBookingError('Please enter a phone number');
                        errorValue = true;
                    }else{
                        setBookingError('');

                        if (!formData.suite){
                            setBookingError('Book a suite of cottage');
                            errorValue = true;
                        }else{
                            setBookingError('');
                        }
                    }
                }
            }
        }

        if (!errorValue){
            try{
                let url = "https://backend.palmhavenhotel.com/booking.php";

                const response = await axios.post(url, formData,{
                    headers: {
                        'Content-Type': 'application/json',
                    },withCredentials: true,
                })
                
                const {error, msg} = response.data;

                if (msg === 'unsuccessful'){
                    if (error.fullname === 'Name is required'){
                        setBookingError('Name is required');
                    }else{
                        setBookingError('');

                        if (error.fullname === 'Invalid name'){
                            setBookingError('Invalid name');
                        }else{
                            setBookingError('');

                            if (error.email === 'Email address is required'){
                                setBookingError('Email address is required');
                            }else{
                                setBookingError('');

                                if (error.email === 'Invalid email address'){
                                    setBookingError('Invalid email address');
                                }else{
                                    setBookingError('');

                                    if (error.phone === 'Phone number is required'){
                                        setBookingError('Phone number is required');
                                    }else{
                                        setBookingError('');

                                        if(error.phone === "Begin phone number with country's code"){
                                            setBookingError("Begin phone number with country's code");
                                        }else{
                                            setBookingError('');

                                            if (error.suite === 'suite/cottage should not be empty'){
                                                setBookingError('suite/cottage should not be empty');
                                            }else{
                                                setBookingError('');

                                                if (error.checkin === 'Invalid date format'){
                                                    setBookingError('Invalid date format');
                                                }else{
                                                    setBookingError('');

                                                    if (error.checkin === 'Check-in date cannot be in the past'){
                                                        setBookingError('Check in date cannot be in the past');
                                                    }else{
                                                        setBookingError('');

                                                        if (error.checkout === 'Check-out date must be after check-in date'){
                                                            setBookingError('Check out date must be after check-in date');
                                                        }else{
                                                            setBookingError('');
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                if (msg === 'success'){
                    setContactSuccess('Booking successful');
                }
            }catch(error){
                console.log("Error submitting form: ", error);
                setBookingError('An error occurred while submitting your booking. Please try again later.');
            }
        }
    }

    return ( 
        <>
        <div className="w-full sm:w-max h-max z-30 overflow-scroll">
            <form onSubmit={formSubmitted} id="booking-form" action="/" className="h-max bg-accent rounded px-1 sm:px-3 z-30 w-[95%] sm:w-[600px]">
                <header className="w-full h-max py-5 mb-2 sm:mb-5 border-b border-grey">
                    <h2 className="text-2xl sm:text-4xl text-offBlack text-center">Book Reservation</h2>
                </header>
                <div className={`rounded text-accent text-base w-full h-10 flex justify-center items-center mb-1
                    ${bookingError ? 'block bg-red-500 ' : 'hidden'}${contactSuccess ? 'block bg-green-500' : 'hidden'}
                    `}>
                    {bookingError}
                    {contactSuccess}
                </div>
                <div className="w-full h-max grid grid-cols-1 sm:grid-cols-2 mb-3">
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start justify-start" style={{width: '98%'}}>
                            <label htmlFor="fullname" className="text-grey mb-1 hidden sm:block">Name:</label>
                            <input type="text" name="fullname" value={formData.fullname} onChange={handleChanged} placeholder="Name" id="fullname" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-end justify-end" style={{width: '98%'}}>
                            <label htmlFor="email" className="text-grey mb-1 hidden sm:block">Email:</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChanged} id="email" placeholder="Email" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/>
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start justify-start" style={{width: '98%'}}>
                            <label htmlFor="checkin" className="text-grey mb-1">Check In:</label>
                            <input type="date" name="checkin" value={formData.checkin} onChange={handleChanged} id="checkin" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start sm:items-end justify-start sm:justify-end" style={{width: '98%'}}>
                            <label htmlFor="checkout" className="text-grey mb-1">Check Out:</label>
                            <input type="date" name="checkout" value={formData.checkout} onChange={handleChanged} id="checkout" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/>
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start justify-start" style={{width: '98%'}}>
                            <label htmlFor="adult" className="text-grey mb-1 hidden sm:block">Phone:</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChanged} id="phone" placeholder="Phone Number" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-end justify-end" style={{width: '98%'}}>
                            <label htmlFor="suite" className="text-grey mb-1 hidden sm:block">Suite/Cottage:</label>
                            <select type="text" name="suite" value={formData.suite} onChange={handleChanged} id="suite" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}>
                                <option value="">-- Select Suite/Cottage --</option>
                                <option value="Royal Suite">Royal Suite</option>
                                <option value="Executive Suite">Executive Suite</option>
                                <option value="Standard Suite">Standard Suite</option>
                                <option value="Garden Cottage">Garden Cottage</option>
                                <option value="Palm Grove Cottage">Palm Grove Cottage</option>
                                <option value="Family Cottage">Family Cottage</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max mt-2 py-3 border-t border-grey flex items-center justify-center">
                    <button type="submit" className="w-1/2 h-max bg-primary text-offBlack rounded py-2 text-center">Book</button>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default Booking;
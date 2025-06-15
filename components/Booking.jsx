const Booking = () => {
    return ( 
        <>
        <div className="w-full sm:w-max h-max z-30 overflow-scroll">
            <form id="booking-form" action="/" className="h-max bg-accent rounded px-1 sm:px-3 z-30 w-[95%] sm:w-[600px]">
                <header className="w-full h-max py-5 mb-2 sm:mb-5 border-b border-grey">
                    <h2 className="text-2xl sm:text-4xl text-offBlack text-center">Book Reservation</h2>
                </header>
                <div className="bg-red-500 rounded text-accent text-base w-full h-10 flex justify-center items-center mb-1">Invalid Input</div>
                <div className="w-full h-max grid grid-cols-1 sm:grid-cols-2 mb-3">
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start justify-start" style={{width: '98%'}}>
                            <label htmlFor="fullname" className="text-grey mb-1 hidden sm:block">Name:</label>
                            <input type="text" placeholder="Name" id="fullname" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-end justify-end" style={{width: '98%'}}>
                            <label htmlFor="email" className="text-grey mb-1 hidden sm:block">Email:</label>
                            <input type="text" id="email" placeholder="Email" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/>
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start justify-start" style={{width: '98%'}}>
                            <label htmlFor="checkin" className="text-grey mb-1">Check In:</label>
                            <input type="date" id="checkin" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start sm:items-end justify-start sm:justify-end" style={{width: '98%'}}>
                            <label htmlFor="checkout" className="text-grey mb-1">Check Out:</label>
                            <input type="date" id="checkout" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/>
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-start justify-start" style={{width: '98%'}}>
                            <label htmlFor="adult" className="text-grey mb-1 hidden sm:block">Adult(s):</label>
                            <input type="text" id="adult" placeholder="Adults e.g. 2" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/> 
                        </div>
                    </div>
                    <div className="w-full h-max mb-3">
                        <div className="h-max flex flex-col items-end justify-end" style={{width: '98%'}}>
                            <label htmlFor="children" className="text-grey mb-1 hidden sm:block">Children:</label>
                            <input type="text" id="children" placeholder="Children e.g. 3" className="w-full border border-grey rounded outline-none px-3" style={{height: '40px'}}/>
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
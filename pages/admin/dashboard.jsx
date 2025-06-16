import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

        let url = "http://localhost/backends/hotel/booked.php";

        try{

            const fetchBookings = async () => {
                const response = await axios.get(url, {
                    headers: {
                        'Content-Type' : 'application/json',
                    },withCredentials: true,
                })
                console.log(response.data);
                const {status, bookings} = response.data;
                if (status === "success"){
                    setBookings(bookings);
                }
            }

            fetchBookings();

        }catch(err){
            console.log("Error fetching bookings: ", err);
        }
      setLoading(false);
    }, 1000);
  }, []);

  const logoutBtn = async () => {
    try{
        let url = "http://localhost/backends/hotel/logout.php";

        const response = await axios.post(url, 'logout', {
            headers: {
                'Content-Type': 'application/json',
            },withCredentials: true
        });
        
        const {status, error} = response.data;

        if (status === "success"){
            window.location.href = '/';
        }
    }catch(err){
        console.log("Error logging out: ", err);
    }
  }

  return (
    <>
    <div className="h-[120px] w-screen">

    </div>
    <div className="min-h-screen bg-offWhite p-8">
      <div className=" mb-8 w-full h-max flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
        <button onClick={logoutBtn} className="py-3 px-10 bg-red-500 rounded border-none cursor-pointer text-accent">Logout</button>
      </div>
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-accent">All Bookings</h2>
        {loading ? (
          <div>Loading bookings...</div>
        ) : bookings.length === 0 ? (
          <div>No bookings found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-primary text-offWhite">
                  <th className="py-2 px-4 border">id</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Phone</th>
                  <th className="py-2 px-4 border">Check In</th>
                  <th className="py-2 px-4 border">Check Out</th>
                  <th className="py-2 px-4 border">Room</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr key={b.id} className="text-center">
                    <td className="py-2 px-4 border">{b.booking_id}</td>
                    <td className="py-2 px-4 border">{b.name}</td>
                    <td className="py-2 px-4 border">{b.email}</td>
                    <td className="py-2 px-4 border">{b.phone}</td>
                    <td className="py-2 px-4 border">{b.check_in}</td>
                    <td className="py-2 px-4 border">{b.check_out}</td>
                    <td className="py-2 px-4 border">{b.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
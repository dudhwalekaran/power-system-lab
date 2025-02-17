import connectDb from '@/app/lib/db'; // Adjust this to your actual connection function
import Reservation from '@/app/models/Reservation';

// Handle POST request to create a new reservation
export async function POST(req) {
  try {
    // Parse the request body to extract the reservation details
    const { equipment, fromDate, toDate } = await req.json();
    
    // Connect to the database
    await connectDb();
    
    // Create a new reservation document using the provided data
    const newReservation = new Reservation({ equipment, fromDate, toDate });
    
    // Save the reservation to the database
    await newReservation.save();

    // Return a success message
    return new Response(
      JSON.stringify({ message: 'Reservation successful!' }), 
      { status: 201 }
    );
  } catch (error) {
    // Return an error response if something goes wrong
    return new Response(
      JSON.stringify({ error: 'Failed to reserve equipment' }), 
      { status: 500 }
    );
  }
}

// Handle GET request to fetch all reservations
export async function GET(req) {
  try {
    // Connect to the database
    await connectDb();
    
    // Fetch all reservations from the database
    const reservations = await Reservation.find();
    
    // Return the list of reservations
    return new Response(
      JSON.stringify(reservations), 
      { status: 200 }
    );
  } catch (error) {
    // Return an error response if something goes wrong
    return new Response(
      JSON.stringify({ error: 'Failed to fetch reservations' }), 
      { status: 500 }
    );
  }
}

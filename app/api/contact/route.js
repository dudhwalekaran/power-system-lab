// app/api/contact/route.js
import connectDb from '../../lib/db'; // MongoDB connection
import FormData from '../../models/formData'; // Mongoose model for form data

export async function POST(req) {
  try {
    // Parse the incoming JSON data from the request body
    const { name, email, message } = await req.json();

    // Basic validation (ensure all fields are filled)
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      );
    }

    // Connect to the MongoDB database
    await connectDb(); // Make sure this is not throwing any error

    // Create a new form data entry in the database
    const formData = new FormData({ name, email, message });
    await formData.save();

    // Send a success response
    return new Response(
      JSON.stringify({ message: 'Form data saved successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving form data:', error);

    // Detailed logging to help debug
    console.error('Error stack:', error.stack);

    return new Response(
      JSON.stringify({ message: 'Server error' }),
      { status: 500 }
    );
  }
}

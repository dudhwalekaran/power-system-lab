import connectDb from "@/app/lib/db";
import Bus from "@/app/models/Task";

// DELETE method
export async function DELETE(req, { params }) {
  const { id } = params; // Extract the ID from the dynamic route
  await connectDb();

  try {
    const deletedBus = await Bus.findByIdAndDelete(id);
    if (!deletedBus) {
      return new Response(JSON.stringify({ success: false, message: "Task not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ success: true, message: "Task deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Server error" }), {
      status: 500,
    });
  }
}

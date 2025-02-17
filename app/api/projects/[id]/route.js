import connectDb from "@/app/lib/db";
import Project from "@/app/models/Project";

// DELETE method
export async function DELETE(req, { params }) {
  const { id } = params; // Extract the ID from the dynamic route
  await connectDb();

  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return new Response(JSON.stringify({ success: false, message: "Project not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ success: true, message: "Project deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Server error" }), {
      status: 500,
    });
  }
}

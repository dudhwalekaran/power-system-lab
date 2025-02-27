"use client";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function LoginRequest() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const [showPopup, setShowPopup] = useState(null);

  const handlePopupAction = async (action, user) => {
    try {
      let response;

      switch (action) {
        case "accept":
        case "reject":
          response = await fetch(
            `/api/userAction?action=${action}&id=${user._id}`,
            {
              method: "POST",
            }
          );
          const result = await response.json();
          console.log(result);  // Check for errors or success messages
          break;

        case "delete":
          response = await fetch(
            `/api/userAction?action=${action}&id=${user._id}`,
            {
              method: "DELETE",
            }
          );
          break;

        default:
          console.error("Unknown action");
          return;
      }

      if (response.ok) {
        alert(
          `${
            action.charAt(0).toUpperCase() + action.slice(1)
          } action performed successfully!`
        );
        if (action === "delete") {
          setUsers(users.filter((u) => u._id !== user._id));
        }
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(`Error performing ${action} action:`, error);
    }
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        console.log("Fetching users...");
        const response = await fetch("/api/fetch-login-user"); // Corrected API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setUsers(data.map((user) => ({ ...user, password: undefined }))); // Exclude password
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    }

    fetchUsers();
  }, []);

  // Calculate pagination values
  const totalRecords = users.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const startRecord = (currentPage - 1) * recordsPerPage + 1;
  const endRecord = Math.min(currentPage * recordsPerPage, totalRecords);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function generateInitials(name) {
    if (typeof name !== "string" || name.trim() === "") {
      return ""; // Return an empty string if name is not a valid string or is empty
    }

    const nameParts = name.trim().split(" ").filter(Boolean); // Split by spaces and remove empty entries
    if (nameParts.length === 0) {
      return ""; // If nameParts is empty, return an empty string
    }

    const initials = nameParts
      .map((part) => part.charAt(0).toUpperCase()) // Get the first letter of each part
      .slice(0, 2) // Take only the first two initials
      .join(""); // Join them into a string

    return initials;
  }

  // Function to generate a random background color
  function getRandomBgColor() {
    const colors = [
      "bg-blue-600",
      "bg-[#FBCEB1]",
      "bg-[#B2BEB5]",
      "bg-[#89CFF0]",
      "bg-green-500",
      "bg-[#9F8170]",
      "bg-[#9C2542]",
      "bg-[#967117]",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div>
      <h1 className="font-bold text-4xl mb-4 ml-14 mt-5">Login Requests</h1>

      <div className="">
        {/* Search Bar */}
        <div className="flex items-center space-x-10 mb-2">
          <div className="relative w-[77%] ml-10">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch className="w-4 h-4 ml-5" />
            </span>
            <input
              type="text"
              placeholder="Search by username or email..."
              className="w-full h-[45px] pl-16 pr-4 bg-[#F2F3F5] border border-gray-300 rounded-3xl placeholder:text-base font-medium"
            />
          </div>

          {/* Operation Type and Dropdown */}
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <p className="font-normal text-lg">Status:</p>
              <select className="border border-[#3B82F6] text-sm font-normal rounded-md bg-[#Fff] px-4 py-2">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Record Count and Pagination */}
        <div className="flex justify-between items-center mt-4">
          {/* Records Info */}
          <div className="text-black font-medium ml-10">
            {totalRecords > 0
              ? `Showing ${startRecord} - ${endRecord} of ${totalRecords} records`
              : "No records found"}
          </div>

          {/* Pagination */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border-blue-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <table border="1" style={{ width: "100%", textAlign: "left" }} className="ml-10">
        <thead>
          <tr className="border-b text-[#6B7B90] font-light text-sm">
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Requested At</th>
            <th>Status</th>
            <th className="py-2 pl-28">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => {
              const initials = generateInitials(user.name);
              const bgColor = getRandomBgColor();
              return (
                <tr key={user._id} className="border-b space-x-20">
                  <td className="py-3 px-4 flex items-center space-x-4">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-lg font-bold ${bgColor}`}
                    >
                      {initials}
                    </div>
                    <span>{user.name}</span>
                  </td>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">
                    {new Date(user.requestedAt).toLocaleString()}
                  </td>
                  <td className="">{user.status}</td>
                  <td className="py-0.5 relative">
                    <button
                      onClick={() =>
                        setShowPopup(showPopup === user._id ? null : user._id)
                      }
                      className="border border-black font-medium px-2 rounded-md mt-4 mb-5 ml-20"
                    >
                      {user.actions
                        ? user.actions.join(", ")
                        : "Request actions"}
                    </button>
                    {showPopup === user._id && (
                      <div className="absolute top-12 left-0 bg-white border rounded-md space-y-4 px-4 py-4 z-10">
                        <button
                          onClick={() => handlePopupAction("accept", user)}
                          className="block px-12 py-1 font-semibold hover:bg-gray-100 text-green-500 border border-green-500 rounded-md"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handlePopupAction("reject", user)}
                          className="block px-12 py-1 font-semibold hover:bg-gray-100 text-red-500 border border-red-500 rounded-md"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => handlePopupAction("delete", user)}
                          className="block px-12 py-1 font-semibold hover:bg-gray-100 text-red-500 border border-red-500 rounded-md"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5">No user requests found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

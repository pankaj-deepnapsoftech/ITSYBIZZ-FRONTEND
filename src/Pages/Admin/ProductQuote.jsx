import React, { useState, useEffect } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "../../Components/Dashboard/Modal";
import DetailsComponent from "../../Components/Dashboard/DetailsComponent"; // Import the DetailsComponent
import axios from "axios";
import { toast } from "react-hot-toast";

const ProductQuote = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductQuote, setSelectedProductQuote] = useState(null); // State for selected product quote
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // State for view modal visibility
  const itemsPerPage = 10; // Show only 10 items per page

  useEffect(() => {
    const getUsers = async () => {
      try {
        const token = localStorage.getItem("user"); // Assuming token is stored in localStorage
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/quote/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach token
              "Content-Type": "application/json",
            },
          }
        );

        if (Array.isArray(response.data)) {
          setProductList(response.data);
        } else {
          console.error("Unexpected API response:", response.data);
          setProductList([]);
        }
      } catch (err) {
        console.error(
          "Fetching users failed:",
          err.response?.data || err.message
        );
        setProductList([]);
      }
    };

    getUsers();
  }, []);

  // Handle Delete Function
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        toast.error("Authentication token missing");
        return;
      }

      // Send DELETE request to the backend
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/iot/quote/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Remove the deleted item from the UI
      setProductList((prevList) => prevList.filter((item) => item._id !== id));

      toast.success("Quote deleted successfully!");
    } catch (error) {
      console.error("Error deleting quote:", error);
      toast.error("Failed to delete quote");
    }
  };

  const filteredProducts = productList.filter(
    (product) =>
      product?.productName?.toLowerCase().includes(search.toLowerCase()) ||
      product?.phone?.toLowerCase().includes(search.toLowerCase()) ||
      product?.email?.toLowerCase().includes(search.toLowerCase()) ||
      product?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedData = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle View Function
  const handleView = (productQuoteData) => {
    setSelectedProductQuote(productQuoteData); // Set selected product quote data
    setIsViewModalOpen(true); // Open the view modal
  };

  // Close View Modal Function
  const closeViewModal = () => {
    setIsViewModalOpen(false); // Close the view modal
    setSelectedProductQuote(null); // Clear selected product quote data
  };

  // Prepare details for the DetailsComponent
  const details = selectedProductQuote
    ? [
        { label: "Name", value: selectedProductQuote.name },
        { label: "Email", value: selectedProductQuote.email },
        { label: "Phone", value: selectedProductQuote.phone },
        { label: "Product Name", value: selectedProductQuote.productName },
      ]
    : [];

  return (
    <div className="p-5">
      <h2 className="text-2xl text-sky-900 font-bold mb-4">
        IoT Products Quote
      </h2>
      <div className="mb-4 flex justify-end space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-200 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-sky-800 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Product Name</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((product) => (
            <tr
              key={product._id} // Use _id instead of id
              className="odd:bg-white even:bg-gray-50 border-b"
            >
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.email}</td>
              <td className="p-3">{product.phone}</td>
              <td className="p-3">{product.productName}</td>
              <td className="p-3 flex">
                <button
                  className="px-4 py-2 text-lg text-green-500 rounded hover:text-green-600"
                  onClick={() => handleView(product)} // Open view modal on click
                >
                  <FaEye />
                </button>

                <button
                  className="px-2 py-2 text-lg text-orange-500 rounded hover:text-orange-600"
                  onClick={() => handleDelete(product._id)} // Delete the quote
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center items-center space-x-4">
          <button
            className={`px-4 py-2 text-white bg-sky-600 rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700 font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-4 py-2 text-white bg-sky-600 rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* View Product Quote Modal */}
      {isViewModalOpen && (
        <Modal onClose={closeViewModal}>
          <DetailsComponent details={details} />
        </Modal>
      )}
    </div>
  );
};

export default ProductQuote;
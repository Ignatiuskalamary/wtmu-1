import React, { useState } from "react";
import { IoEye, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "../WtmuPagination";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";
interface UserDetails {
  id: number;
  fullname: string;
  dob: string;
  gender: string;
  country: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  zip: string;
  isApproved?: boolean;
  idProof: string;
  studentPhoto: string;
  certificate: string;
}

// UserDetailsModal component
const UserDetailsModal: React.FC<{
  user: UserDetails;
  onClose: () => void;
}> = ({ user, onClose }) => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    //   onClick={onClose}
    // >
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Starts from left (x: -100)
      animate={{ opacity: 1, x: 0 }} // Moves to center (x: 0)
      exit={{ opacity: 0, x: 100 }} // Exits to right (x: 100)
      transition={{ type: "spring", stiffness: 100 }} // Optional: adds spring effect
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Starts from left (x: -100)
        animate={{ opacity: 1, x: 0 }} // Moves to center (x: 0)
        exit={{ opacity: 0, x: 100 }} // Exits to right (x: 100)
        className="bg-white rounded-lg p-4 shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white p-4 border-b border-green-500 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">User Details</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <IoClose className="text-gray-500 text-xl" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-700 border-b border-green-500 pb-2">
              Personal Information
            </h4>
            <DetailRow label="Full Name" value={user.fullname} />
            <DetailRow label="Date of Birth" value={user.dob} />
            <DetailRow label="Gender" value={user.gender} />
            <DetailRow label="Email" value={user.email} />
            <DetailRow label="Phone" value={user.phone} />
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-700 border-b border-green-500 pb-2">
              Address Information
            </h4>
            <DetailRow label="Country" value={user.country} />
            <DetailRow label="State/Province" value={user.state} />
            <DetailRow label="Address" value={user.address} />
            <DetailRow label="ZIP/Postal Code" value={user.zip} />
          </div>
          {/* ID Proofs */}

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-lg font-medium text-gray-700 border-b border-green-500 pb-2">
              ID Proofs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ImagePreview src={user.idProof} label="ID Proof" />
              <ImagePreview src={user.studentPhoto} label="Student Photo" />
              <ImagePreview src={user.certificate} label="Certificate" />
            </div>
          </div>
        </div>
        <div className="flex justify-end p-2 items-end">
          <div className="ml-2 gap-4 flex">
            <button className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-green-700 text-yellow-300 px-6 py-2.5">
              Approve
              <FcApprove className="w-8 h-8 text-yellow-400" />
            </button>
            <button className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-green-700 text-yellow-300 px-6 py-2.5">
              Disapprove
              <FcDisapprove className="w-8 h-8" />
            </button>
            <button className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-green-700 text-yellow-300 px-6 py-2.5">
              Cancel
              <GiCancel className="w-8 h-8" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Helper components
const DetailRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="mt-1 text-gray-800 break-words">{value || "-"}</p>
  </div>
);

const ImagePreview: React.FC<{ src: string; label: string }> = ({
  src,
  label,
}) => (
  <div className="space-y-2">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <div className="border border-green-500 rounded-md overflow-hidden">
      <img
        src={src}
        alt={label}
        className="w-full h-32 object-contain bg-gray-100"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://via.placeholder.com/150";
        }}
      />
    </div>
  </div>
);

const WtmuUserTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "approved" | "notApproved">(
    "all"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // You can make this configurable

  // Dummy data with approval status
  const users: UserDetails[] = [
    {
      id: 1,
      fullname: "John Doe",
      dob: "1990-05-15",
      gender: "Male",
      country: "United States",
      state: "California",
      address: "123 Main St, Apt 4B",
      phone: "+1 (555) 123-4567",
      email: "john.doe@example.com",
      zip: "90210",
      isApproved: true,
      idProof: "https://via.placeholder.com/150?text=ID+1",
      studentPhoto: "https://via.placeholder.com/150?text=ID+1",
      certificate: "https://via.placeholder.com/150?text=ID+1",
    },
    {
      id: 2,
      fullname: "Jane Smith",
      dob: "1985-08-20",
      gender: "Female",
      country: "Canada",
      state: "Ontario",
      address: "456 Oak Ave",
      phone: "+1 (555) 987-6543",
      email: "jane.smith@example.com",
      zip: "M5V 2T6",
      isApproved: true,
      idProof: "https://via.placeholder.com/150?text=ID+1",
      studentPhoto: "https://via.placeholder.com/150?text=ID+1",
      certificate: "https://via.placeholder.com/150?text=ID+1",
    },
    {
      id: 3,
      fullname: "Alice Johnson",
      dob: "1992-03-10",
      gender: "Female",
      country: "United Kingdom",
      state: "England",
      address: "789 Park Lane",
      phone: "+44 20 1234 5678",
      email: "alice.johnson@example.com",
      zip: "W1K 7TN",
      isApproved: true,
      idProof: "https://via.placeholder.com/150?text=ID+1",
      studentPhoto: "https://via.placeholder.com/150?text=ID+1",
      certificate: "https://via.placeholder.com/150?text=ID+1",
    },
    {
      id: 4,
      fullname: "Bob Williams",
      dob: "1988-11-25",
      gender: "Male",
      country: "Australia",
      state: "New South Wales",
      address: "321 Beach Rd",
      phone: "+61 2 9876 5432",
      email: "bob.williams@example.com",
      zip: "2000",
      isApproved: true,
      idProof: "https://via.placeholder.com/150?text=ID+1",
      studentPhoto: "https://via.placeholder.com/150?text=ID+1",
      certificate: "https://via.placeholder.com/150?text=ID+1",
    },
    {
      id: 5,
      fullname: "Charlie Brown",
      dob: "1995-07-15",
      gender: "Male",
      country: "United States",
      state: "New York",
      address: "654 Broadway",
      phone: "+1 (212) 555-7890",
      email: "charlie.brown@example.com",
      zip: "10003",
      isApproved: true,
      idProof: "https://via.placeholder.com/150?text=ID+1",
      studentPhoto: "https://via.placeholder.com/150?text=ID+1",
      certificate: "https://via.placeholder.com/150?text=ID+1",
    },
    {
      id: 6,
      fullname: "Diana Prince",
      dob: "1990-09-30",
      gender: "Female",
      country: "Canada",
      state: "British Columbia",
      address: "987 Mountain View",
      phone: "+1 (604) 555-1234",
      email: "diana.prince@example.com",
      zip: "V6B 1H6",
      isApproved: true,
      idProof: "https://via.placeholder.com/150?text=ID+1",
      studentPhoto: "https://via.placeholder.com/150?text=ID+1",
      certificate: "https://via.placeholder.com/150?text=ID+1",
    },
    {
      id: 7,
      fullname: "Ethan Hunt",
      dob: "1985-12-05",
      gender: "Male",
      country: "United States",
      state: "California",
      address: "159 Mission St",
      phone: "+1 (415) 555-4567",
      email: "ethan.hunt@example.com",
      zip: "94105",
      isApproved: false,
      idProof: "https://via.placeholder.com/150?text=ID+1",
      studentPhoto: "https://via.placeholder.com/150?text=ID+1",
      certificate: "https://via.placeholder.com/150?text=ID+1",
    },

    // Add more users as needed
  ];

  const filteredUsers = users.filter((user) => {
    // Filter by approval status
    if (filter === "approved") return user.isApproved;
    if (filter === "notApproved") return !user.isApproved;

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        user.fullname.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.phone.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });
  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleView = async (user: UserDetails) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUserDetails(user);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
      <div className="p-4 border-b border-green-600 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => {
              setFilter("all");
              setCurrentPage(1);
            }}
            className={`px-4 py-1 rounded-full text-sm ${
              filter === "all"
                ? "bg-green-700 text-yellow-400"
                : "text-black-400 hover:bg-green-500"
            }`}
          >
            All Users
          </button>
          <button
            onClick={() => {
              setFilter("approved");
              setCurrentPage(1);
            }}
            className={`px-4 py-1 rounded-full text-sm ${
              filter === "approved"
                ? "bg-green-700 text-yellow-400"
                : "text-black-400 hover:bg-green-500"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => {
              setFilter("notApproved");
              setCurrentPage(1);
            }}
            className={`px-4 py-1 rounded-full text-sm ${
              filter === "notApproved"
                ? "bg-green-700 text-yellow-400"
                : "text-black-400 hover:bg-green-500"
            }`}
          >
            Not Approved
          </button>
        </div>
        <input
          type="text"
          placeholder="Search users..."
          className="px-4 py-1 border border-green-600 rounded-lg text-sm w-full sm:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="text-xs text-gray-600 uppercase bg-gray-50">
          <tr className="border-b-4 text-left bg-green-700 text-yellow-400 border-yellow-400">
            <th scope="col" className="px-2 py-4 xl:px-6">
              #
            </th>
            <th scope="col" className="px-2 py-4">
              Name
            </th>
            <th scope="col" className="px-2 py-4 max-sm:hidden">
              Email
            </th>
            <th scope="col" className="px-2 py-4 max-sm:hidden">
              Status
            </th>
            <th scope="col" className="px-2 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, idx) => (
            <tr
              key={user.id}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="px-2 py-4 font-medium text-gray-900">
                {indexOfFirstItem + idx + 1}
              </td>
              <td className="px-2 py-4">{user.fullname}</td>
              <td className="px-2 py-4 max-sm:hidden">{user.email}</td>
              <td className="px-2 py-4 max-sm:hidden">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    user.isApproved
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.isApproved ? "Approved" : "Not Approved"}
                </span>
              </td>
              <td className="px-2 py-4 flex gap-2 items-center">
                <button
                  onClick={() => handleView(user)}
                  disabled={isLoading}
                  className={`p-1.5 rounded-md transition-colors w-10 flex items-center justify-center ${
                    isLoading
                      ? "bg-gray-100 cursor-wait"
                      : "hover:bg-yellow-100"
                  }`}
                  aria-label="View user details"
                  title="View user details"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <IoEye className="text-green-700 text-lg" />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add pagination at the bottom */}
      <div className="p-4 border-t border-gray-200">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <AnimatePresence>
        {isModalOpen && userDetails && (
          <UserDetailsModal
            user={userDetails}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WtmuUserTable;

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminHeader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="flex space-x-6">
        <Link
          to="/SerReq"
          className="px-6 py-4 bg-gray-800 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-gray-700"
        >
          Service Request
        </Link>
        <Link
          to="/adJobApp"
          className="px-6 py-4 bg-gray-800 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-gray-700"
        >
          Job Application
        </Link>
        <Link
          to="/adFeedback"
          className="px-6 py-4 bg-gray-800 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-gray-700"
        >
          Feedback
        </Link>
        <Link
          to="/OnlyFinals"
          className="px-6 py-4 bg-gray-800 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-gray-700"
        >
          Final Deals
        </Link>
        
      </div>
    </div>
  );
};

export default AdminHeader;

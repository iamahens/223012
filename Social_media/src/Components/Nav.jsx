import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      
      <div className="flex items-center space-x-2">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-xl font-bold text-gray-800">SocialDash</span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link
          to="/top-users"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Top Users
        </Link>
        <Link
          to="/trending-posts"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Trending Posts
        </Link>
        <Link
          to="/feed"
          className="text-gray-700 hover:text-blue-600 font-medium transition"
        >
          Feed
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

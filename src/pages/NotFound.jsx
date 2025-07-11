import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;

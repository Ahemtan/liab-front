import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuItem = ({ to, onClick, icon: Icon, children }) => {
  return (
    <div>
      {to ? (
        <Link
          to={to}
          className="block border border-gray-400 rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
          role="menuitem"
        >
          <LogOut />
          {children}
        </button>
      )}
    </div>
  );
};

export default MenuItem;

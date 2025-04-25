import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, UserCircle, Bell, Search, MessageCircle, Settings } from 'lucide-react';

const SidebarNav = () => {
  return (
    <nav className="h-screen w-16 bg-blue-800 flex flex-col items-center py-4 space-y-6">
      <Link to="/" className="hover:scale-110 transition-transform">
        <Home color="white" size={28} />
      </Link>
      <Link to="/firends" className="hover:scale-110 transition-transform">
        <Users color="white" size={28} />
      </Link>
      <Link to="/profile" className="hover:scale-110 transition-transform">
        <UserCircle color="white" size={28} />
      </Link>
      <Link to="/notifications" className="hover:scale-110 transition-transform">
        <Bell color="white" size={28} />
      </Link>
      <Link to="/search" className="hover:scale-110 transition-transform">
        <Search color="white" size={28} />
      </Link>
      <Link to="/chat" className="hover:scale-110 transition-transform">
        <MessageCircle color="white" size={28} />
      </Link>
      <Link to="/settings" className="hover:scale-110 transition-transform">
        <Settings color="white" size={28} />
      </Link>
    </nav>
  );
};


export default SidebarNav;
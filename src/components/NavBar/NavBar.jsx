import React from 'react';
import { Home, Users, UserCircle, Bell, Search, MessageCircle, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-16 bg-blue-800 flex flex-col items-center py-4 space-y-6">
      <Home color="white" size={28} />
      <Users color="white" size={28} />
      <UserCircle color="white" size={28} />
      <Bell color="white" size={28} />
      <Search color="white" size={28} />
      <MessageCircle color="white" size={28} />
      <Settings color="white" size={28} />
    </div>
  );
};

export default Sidebar;
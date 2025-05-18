import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f0f0f] text-gray-400 py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-4 flex justify-center gap-6 flex-wrap text-sm">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">Help Center</a>
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Movie App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {children}
    </div>
  );
};

export default Layout;

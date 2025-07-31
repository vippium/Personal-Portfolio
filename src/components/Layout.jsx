const Layout = ({ children }) => {
  return (
    <div
      className="relative min-h-screen font-sans bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]
 text-white"
    >
      {children}
    </div>
  );
};

export default Layout;

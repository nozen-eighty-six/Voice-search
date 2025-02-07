const Layout = ({ children }) => {
  return (
    <div className="bg-[#e1dfe2] w-full h-screen ">
      <div className="border-2 w-full h-full pt-10">
        <h1 className="text-2xl text-center mb-8">Voice Search</h1>
        <div className="container 2xl:w-[1220px]  mx-auto bg-white shadow-md p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

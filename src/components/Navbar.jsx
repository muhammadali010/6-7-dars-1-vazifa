const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-pink-400 text-2xl font-bold">C</div>
        <div className="flex space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About</a>
          <a href="/products" className="text-white">Products</a>
          <a href="/cart" className="text-white">Cart</a>
        </div>
        <div className="flex items-center">
          <button className="text-white mr-4">Dark mode</button>
          <button className="text-white">Cart</button>
        </div>
      </nav>
    );
  };
  export default Navbar;
  
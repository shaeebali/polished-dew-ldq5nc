export const NavBar = () => {
  return(
  <nav className="flex flex-wrap justify-between items-center">
  <nav className="navbar">
  <div className="navbar-left">
  </div>
  <div className="main-menu w-full lg:w-auto flex flex-row">
    <ul className="flex lg:flex-row">
      <li>
        <a className="p-3 text-white hover:text-red-500" href="/products">Home</a>
      </li>
      <li>
        <a className="p-3 text-white hover:text-red-500" href="/about">User Management</a>
      </li>
      <li>
        <a className="p-3 text-white hover:text-red-500" href="/contact">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</nav>
  );
}

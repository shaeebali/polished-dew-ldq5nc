export const NavBar = () => {
  return(
  <nav>
  <div id="home" className="main-menu w-full lg:w-auto flex flex-row">
    <ul className="flex lg:flex-row">
      <li>
        <a className="p-3 text-white hover:text-red-500" href="#home">Home</a>
      </li>
      <li>
        <a className="p-3 text-white hover:text-red-500" href="">User Management</a>
      </li>
      <li>
        <a className="p-3 text-white hover:text-red-500" href="">Logout</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

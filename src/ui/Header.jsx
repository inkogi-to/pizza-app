import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import UserName from "../features/user/UserName.jsx";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-yellow-500 border-b border-stone-200 sm:px-6 ">
      <Link to="/" className="tracking-widest">
        Don Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
export default Header;

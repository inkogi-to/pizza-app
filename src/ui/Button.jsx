import { Link } from "react-router-dom";

const base =
  "inline-block text-sm font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

const styles = {
  primary: base + " px-4 py-3 md:px-6 md:py-4",
  small: base + " px-4 py-2 text-xs md:px-5 md:py-2.5",
  secondary:
    "inline-block text-sm border-2 border-stone-300 font-semibold tracking-wide uppercase transition-colors duration-300 rounded-full text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
};
function Button({ children, disable, to, type, onClick }) {
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick} disabled={disable}>
        {children}
      </button>
    );
  return <button className={styles[type]}>{children}</button>;
}

export default Button;

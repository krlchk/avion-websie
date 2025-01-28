/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function NavigateComponent({ className }) {
  return (
    <div className={className}>
      <Link to="/">Homepage</Link>
      <Link to="/aboutus">About us</Link>
      <Link to="/allproducts">All products</Link>
    </div>
  );
}

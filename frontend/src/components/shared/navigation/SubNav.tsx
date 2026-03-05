import React from "react";
import Cart from "../cart/Cart";
import SideDrawer from "../modal/SideDrawer/SideDrawer";
export default function SubNav() {
  return (
    <nav id="sub-nav">
      <ul>
        <li><a href="/register" style={{ textDecoration: "none", color: "inherit" }}>Register</a></li>
        <li>Free Shipping on Orders Over US$ 100</li>
        <div className="flex gap-4">
          <li><a href="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</a></li>
          <Cart />
        </div>
      </ul>
    </nav>
  );
}


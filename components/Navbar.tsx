import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    // hidden
    <div className=" lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
          <Link className="navbar_link relative" href="#">
            HOME
          </Link>

          <Link className="navbar_link relative" href="#">
            CATEGORIES
          </Link>

          <Link className="navbar_link relative" href="#">
            MEN
          </Link>

          <Link className="navbar_link relative" href="#">
            WOMEN
          </Link>

          <Link className="navbar_link relative" href="#">
            JEWELRY
          </Link>

          <Link className="navbar_link relative" href="#">
            BLOG
          </Link>

          <Link className="navbar_link relative" href="#">
            HOT OFFRS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

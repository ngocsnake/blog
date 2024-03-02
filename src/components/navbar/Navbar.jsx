import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 border-b">
      <div className="flex gap-4 items-center">
        <Link href="/">
          <img src="https://s1cdn.vnecdn.net/vnexpress/restruct/i/v862/v2_2019/pc/graphics/logo.svg" />
        </Link>
        <div className="text-gray-700 font-medium border-l pl-4">
          {getCurrentDate("/")}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <AuthLinks />
      </div>
    </div>
  );
};

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `${month}` : `${month}`
  }${separator}${year}`;
}

export default Navbar;

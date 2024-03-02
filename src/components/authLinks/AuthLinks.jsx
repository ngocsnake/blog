"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status, data } = useSession();

  console.log(data);

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="flex items-center gap-2">
          <FaUser />
          <span>Đăng nhập</span>
        </Link>
      ) : (
        <>
          <p>Xin chào {data?.user?.name}</p>
          <Link href="/write" className={styles.link}>
            Đăng bài viết
          </Link>
          <span className={styles.link} onClick={signOut}>
            Thoát
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

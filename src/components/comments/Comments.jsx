"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const userLogin = useSession().data;

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  const handleDelete = async (id) => {
    await fetch("/api/comments", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Bình luận về bài viết..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
            style={{ border: "1px solid #ccc", borderRadius: 8 }}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className="flex items-center justify-between">
                  <div className={styles.user}>
                    {item?.user?.image && (
                      <Image
                        src={item.user.image}
                        alt=""
                        width={50}
                        height={50}
                        className={styles.image}
                      />
                    )}
                    <div className={styles.userInfo}>
                      <span className={styles.username}>{item.user.name}</span>
                      <span className={styles.date}>
                        {new Date(item.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  {item?.user?.email === userLogin?.user?.email && (
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Xóa bình luận
                    </button>
                  )}
                </div>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;

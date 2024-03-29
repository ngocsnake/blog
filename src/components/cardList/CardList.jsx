import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  const top = await fetch(`http://localhost:3000/api/posts/top`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return {
    ...(await res.json()),
    top: await top.json(),
  };
};

const CardList = async ({ page, cat }) => {
  const { posts, count, top } = await getData(page, cat);

  console.log(top);

  return (
    <div className={styles.container}>
      <h1 className={styles.title + " font-bold"}>Bài viết nổi bật</h1>
      <div className={styles.posts + " grid grid-cols-4"}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

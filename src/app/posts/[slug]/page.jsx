"use client";

import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { useSession } from "next-auth/react";
import { getAuthSession } from "@/utils/auth";
import useSWR from "swr";
import { useRouter } from "next/navigation";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data?.message);
    throw error;
  }

  return data;
};

const SinglePage = ({ params }) => {
  const { slug } = params;
  const user = useSession()?.data?.user;
  const router = useRouter();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/posts/${slug}`,
    fetcher
  );

  const handleDelete = async () => {
    await fetch("/api/posts", {
      method: "DELETE",
      body: JSON.stringify({ id: data?.id }),
    });
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold my-12">{data?.title}</h1>
      <div className="flex justify-between items-center">
        <div className={styles.user + " py-4"}>
          {data?.user?.image && (
            <div className={styles.userImageContainer}>
              <Image
                src={data?.user.image}
                alt=""
                fill
                className={styles.avatar}
              />
            </div>
          )}
          <div className={styles.userTextContainer}>
            <span className={styles.username}>{data?.user?.name}</span>
            <span className={styles.date}>
              {new Date(data?.createdAt).toLocaleString()}
            </span>
          </div>
        </div>

        {user?.email === data?.user?.email && (
          <button onClick={handleDelete}>Xóa bài viết</button>
        )}
      </div>

      {data?.img && (
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

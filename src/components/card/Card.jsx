import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <Link href={`/posts/${item.slug}`}>
      {item.img && <img src={item.img} alt="" className={" aspect-[3/2]"} />}
      <h1 className="mt-2 font-semibold">{item.title}</h1>
    </Link>
  );
};

export default Card;

import React from "react";
import catStyles from "../styles/categories.module.css";
import { data } from "../data";
import CatItem from "./CatItem";
import Link from "next/link";
const Categories = () => {
  let catData = data.slice(2, 6);
  console.log(catData);
  return (
    <div className={catStyles.catContainer}>
      <div className={catStyles.catItem}>
        {catData.map((item) => (
          <Link href="/productList" key={item.id}>
            <a>
              <CatItem url={item.url} title={item.title} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

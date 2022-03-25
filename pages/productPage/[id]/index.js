import prodPageStyles from "../../../styles/productpage.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { RiHeart2Line } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import { server } from "../../../Config";
import { useRouter } from "next/router";
const Index = ({ product }) => {
  const router = useRouter();
  const [toggleOption, setToggleOption] = useState(true);
  let prod = product;
  return (
    <>
      <div className={prodPageStyles.addToCardBtn}>
      <div className={prodPageStyles.btn}>
          <span>
            <BsArrowLeft className={prodPageStyles.btnIcon} />
          </span>
          <button>Buy Now</button>
        </div>
      </div>
      <div className={prodPageStyles.prodContainer}>
        <div className={prodPageStyles.prodImage}>
          <div className={prodPageStyles.prodIcons}>
            <BsArrowLeft
              onClick={() => router.back()}
              className={prodPageStyles.arrowIcon}
            />
            <RiHeart2Line className={prodPageStyles.heartIcon} />
          </div>
          <div className={prodPageStyles.imgBox}>
            <Image src={prod.url} alt={prod.title} />
          </div>
        </div>
        <div className={prodPageStyles.prodInfo}>
          <div className={prodPageStyles.titlePrice}>
            <h3 className={prodPageStyles.title}>{prod.title}</h3>
            <div className={prodPageStyles.price}>
              <h3>${prod.price}</h3>
              <del>$500</del>
            </div>
          </div>
          <div className={prodPageStyles.details}>
            <div className={prodPageStyles.option}>
              <h3
                onClick={() => setToggleOption(true)}
                className={toggleOption ? prodPageStyles.active : ""}
              >
                Info
              </h3>
              <h3
                onClick={() => setToggleOption(false)}
                className={toggleOption ? "" : prodPageStyles.active}
              >
                Option
              </h3>
            </div>
            {toggleOption && (
              <p className={prodPageStyles.description}>
                <p>
                  <strong>Details</strong>
                </p>
                {prod.description}
              </p>
            )}
            {!toggleOption && (
              <div className={prodPageStyles.colorSize}>
                <div className={prodPageStyles.size}>
                  <h4>Size :</h4>
                  <p>
                    <span>x</span>
                    <span>xl</span>
                    <span>xxl</span>
                  </p>
                </div>
                <div className={prodPageStyles.color}>
                  <h4>Color :</h4>
                  <p>
                    <span style={{ backgroundColor: "blue" }}></span>
                    <span style={{ backgroundColor: "green" }}></span>
                    <span style={{ backgroundColor: "brown" }}></span>
                    <span style={{ backgroundColor: "yellow" }}></span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export const getStaticProps = async (context) => {
  let data = await fetch(`${server}/api/products/${context.params.id}`);
  let product = await data.json();

  return {
    props: {
      product,
    },
  };
};
export const getStaticPaths = async () => {
  let data = await fetch(`${server}/api/products`);
  let product = await data.json();
  let ids = product.map((item) => item.id);
  let paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
export default Index;

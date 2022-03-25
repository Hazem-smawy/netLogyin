import Products from "../../components/ProductsList";
import {server} from '../../Config'
const index = ({products}) => {
  
  return (
    <>
      <Products data={products}/>
    </>
  );
};

export const getStaticProps = async ()=>{
  const res = await fetch(`${server}/api/products`);
  const products =await res.json();
  return {
    props:{
      products
    }
  }
}
export default index;

import Caroussel from "./components/Caroussel";
import Header from "./components/Header";
import Search from "./components/Search";
import Subheader from "./components/Subheader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./Redux/productSlice";
import Brands from "./components/Brands";
import TrendingProducts from "./components/TrendingProducts";
import FeaturedProducts from "./components/FeaturedProducts";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

function App() {
  const dispatch=useDispatch()




  useEffect(()=>{
dispatch(getProducts())
  },[])


  return (
    <div className="overflow-x-hidden">

      <Subheader/>
      <Header/>
      <Search/>
      <Caroussel/>
      <Brands/>
      <TrendingProducts/>
      <FeaturedProducts/>
      <Newsletter/>
      <Footer/>
      <Footer2/>
    </div>
  );
}

export default App;

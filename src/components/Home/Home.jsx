import { useLoaderData } from "react-router-dom"
import Banner from "../Banner/Banner"
import TypeWritter from "../TypeWritter/TypeWritter";
import CategoryItemSection from "../CategoryItemSection/CategoryItemSection";
import SubCategoryItemSection from "../SubCategoryItemSection/SubCategoryItemSection";
import AskedQuestion from "../AskedQuestion/AskedQuestion";
import CategoryDetailsRoute from "../../Routes/CategoryDetailsRoute";


const Home = () => {


  return (


    <div>
        <Banner></Banner>
        <TypeWritter></TypeWritter>
        <CategoryItemSection></CategoryItemSection>
        <SubCategoryItemSection></SubCategoryItemSection>
        <AskedQuestion></AskedQuestion>
        
    </div>
  )
}

export default Home

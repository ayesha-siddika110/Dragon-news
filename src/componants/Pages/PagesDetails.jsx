import { useLoaderData } from "react-router-dom";
import Header from "../Header";
import Detail from "./detail/Detail";
import RightNav from "../Navs/RightNav/RightNav";
import Navbar from "../Navbar";


const PagesDetails = () => {
    const data = useLoaderData()
    // console.log(data.data[0]);


    
    return (
        <div>
            <Header></Header>
            

            <div className="w-[90%] m-auto gap-6 flex mt-6">
            <section className="w-[80%]">
            <p className="font-bold text-2xl pb-3">Dragon News</p>
                <Detail data={data.data[0]}></Detail>
            </section>
            <section className="w-[20%] border">
                
                <RightNav></RightNav>
            </section>

            </div>
            
        </div>
    );
};

export default PagesDetails;
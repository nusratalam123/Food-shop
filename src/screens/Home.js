import React from "react";
import Navbarr from "../component/Navbarr";
import Footer from "../component/Footer";
import CardBox from "../component/CardBox";
import Carousal from "../component/Carousal";

export default function Home() {
  return (
    <div>
      <div>
        {" "}
        <Navbarr />
      </div>
      <div>
       <Carousal></Carousal>
      </div>
      <div>
       <CardBox></CardBox>
       <CardBox></CardBox>
       <CardBox></CardBox>
       <CardBox></CardBox>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

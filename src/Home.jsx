import React from "react";
import "./App.css";
import Product from "./Product";
import NavAll from "./NavAll";
import Footer from "./Footer";
import Center from "./Center";



function Home() {

    return (
        <div>
            <div>
                <div className="header" >
                    <NavAll />

                </div>
                <div>
                    <Center />
                </div>
                <Footer />

            </div>
        </div>

    );

}
export default Home;
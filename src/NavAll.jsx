import React from "react";
import "./App.css";

function NavAll() {

    return (<nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#"><img className="img-header" src="BKAL.png" alt="logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

            <form class="form-inline my-2 my-lg-0">
                <div className="searchbar" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                </div>
            </form>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                <li>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </li>
                <li class="nav-item active">
                    <a className="nav-link subNames" href="#">
                        <h6>Hello,</h6>
                        <p>
                            naryanabv2014@gmail.com
                        </p><span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link subNames1" href="#"><p>
                        Returns
                        & Orders
                    </p></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link subNames1" href="#"><p>
                        Prime
                    </p></a>
                </li>
                <li>
                    <button className="btn btn-sm btn-outline-success" type="button">Cart</button>
                </li>
            </ul>


        </div>
    </nav >
    )
};

export default NavAll;
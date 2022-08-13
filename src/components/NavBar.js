import React from "react";
import "../asset/NavBar.css";
import logo from "../asset/images/svgexport-3.png";

const NavBar = () => {
    return (
        <>
        <div className="py-lg-0 sticky-top">
            <nav className="navbar navbar-expand-lg px-lg-3 mx-lg-4 pb-4">
                <div className="container-fluid px-lg-5 mx-lg-5">
                    <a className="navbar-brand p-2 rounded-15 ms-lg-3" href="#">
                        <div><img src={logo} alt="" /></div>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse row-lg mt-2" id="navbarNavAltMarkup">
                        <div className="navbar-nav col-lg-8">
                            <a className="nav-link" aria-current="page" href="#" id="hover">Stores</a>
                            <a className="nav-link" href="#" id="hover">Locations</a>
                            <a className="nav-link" href="#" style={{color: "#D92D20", fontSize:"17px", fontWeight:"500"}}>Become a Shopper</a>
                        </div>

                        <div className="navbar-nav col-lg-4 row-lg ms-lg-5">
                            <a href="" className="nav-link col-lg-4 insign rounded-pill text-center" id="signin">Sign in</a>
                            <a href="" className="nav-link border rounded-pill col-lg-4 text-center p-2" id="signup">Sign up</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default NavBar;

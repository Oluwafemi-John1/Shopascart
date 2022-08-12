import React from "react";
import "../asset/NavBar.css";
import logo from "../asset/images/svgexport-3.png";

const NavBar = () => {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg px-lg-3 mx-lg-4">
                <div className="container-fluid px-lg-5 mx-lg-5">
                    <a className="navbar-brand p-2 rounded-15" href="#">
                        <div><img src={logo} alt="" /></div>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-nav col-4 row">
                            <a href="" className="nav-link col-lg-4 insign" id="signin" style={{fontSize:"17px", fontWeight:"500", color:"black"}}>Sign in</a>
                            <a href="" className="nav-link border rounded-pill col-lg-4 text-center p-2" id="signup">Sign up</a>
                    </div>

                    <div className="collapse navbar-collapse row" id="navbarNavAltMarkup">
                        <div className="navbar-nav col-8">
                            <a className="nav-link active" aria-current="page" href="#" id="hover" style={{fontSize:"17px", fontWeight:"500"}}>Stores</a>
                            <a className="nav-link active" href="#" id="hover" style={{fontSize:"17px", fontWeight:"500"}}>Locations</a>
                            <a className="nav-link" href="#" style={{color: "#D92D20", fontSize:"17px", fontWeight:"500"}}>Become a Shopper</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default NavBar;

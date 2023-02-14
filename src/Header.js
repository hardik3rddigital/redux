import React from "react";
import { useSelector } from "react-redux";

const Header = ()=> {
   const bankrs = useSelector(state => state.bankBalance)

    
    return(
        <>
            <header className="header">
                <div className="container bg-primary py-3 text-white text-center">
                    <h1>This is a header components</h1>
                    <h4 className="btn btn-light">Balance : {bankrs}</h4>
                </div>
            </header>
        </>
    )
}

export default Header;
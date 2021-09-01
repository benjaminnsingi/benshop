import React from "react";

const Searchbar = () => {


    return (
        <div className="bg-main">
            <div className="mid-header container">
                <a href="#" className="logo">ATShop</a>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <i className="fas fa-search"/>
                </div>
            </div>
        </div>
    )
}

export default Searchbar;
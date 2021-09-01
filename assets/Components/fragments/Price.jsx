import React, { useState } from "react";

const Price = ({selectedPrice, setSelectedPrice}) => {

    const [isActiveBrand, setIsActiveBrand] = useState(false);
    const brands = [ "Adidas", "Nike", "Puma", "D&G" ];

    return (

        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActiveBrand(!isActiveBrand)}>
                {selectedBrand}
                <span className="fas fa-caret-down"/>
            </div>
            {isActiveBrand && (
                <div className="dropdown-content">
                    {brands.map((brand) => (
                        <div
                            className="dropdown-item"
                            onClick={(e) => {
                                setSelectedBrand(brand)
                                setIsActiveBrand(false)
                            }
                            }
                        >
                            {brand}
                        </div>
                    ) )}
                </div>
            )
            }
        </div>
    )
}

export default Brand;
import React, { useState } from "react";

const Color = ({selectedColor, setSelectedColor}) => {

    const [isActiveBrand, setIsActiveBrand] = useState(false);
    const colors = [ "Blue", "Red", "Green", "Yellow" ];

    return (

        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActiveBrand(!isActiveBrand)}>
                {selectedColor}
                <span className="fas fa-caret-down"/>
            </div>
            {isActiveBrand && (
                <div className="dropdown-content">
                    {colors.map((color) => (
                        <div
                            className="dropdown-item"
                            onClick={(e) => {
                                setSelectedColor(color)
                                setIsActiveBrand(false)
                            }
                            }
                        >
                            {color}
                        </div>
                    ) )}
                </div>
            )
            }
        </div>
    )
}

export default Color;
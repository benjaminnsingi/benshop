import React, {useState} from "react";

const Size = ({selectedSize, setSelectedSize}) => {

    const [isActiveSize, setIsActiveSize] = useState(false);
    const sizes = [ "S", "M", "L", "XL" ];

    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActiveSize(!isActiveSize)}>
                {selectedSize}
                <span className="fas fa-caret-down"/>
            </div>
            {isActiveSize && (
                <div className="dropdown-content">
                    {sizes.map((size) => (
                        <div
                            className="dropdown-item"
                            onClick={(e) => {
                                setSelectedSize(size)
                                setIsActiveSize(false)
                            }
                            }
                        >
                            {size}
                        </div>
                    ) )}
                </div>
            )
            }
        </div>
    )
}

export  default Size;
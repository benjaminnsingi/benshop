import React, {useState} from "react";

const Gender = () => {

    const [isActiveSize, setIsActiveSize] = useState(false);
    const genders = [ "Homme", "Femme" ];

    return(
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActiveSize(!isActiveSize)}>
                {selected}
                <span className="fas fa-caret-down"/>
            </div>
            {isActiveSize && (
                <div className="dropdown-content">
                    {genders.map((gender) => (
                        <div
                            className="dropdown-item"
                            onClick={(e) => {
                                setIsActiveSize(gender)
                                setIsActiveSize(false)
                            }
                            }
                        >
                            {gender}
                        </div>
                    ) )}
                </div>
            )
            }
        </div>
    )
}

export  default Gender;
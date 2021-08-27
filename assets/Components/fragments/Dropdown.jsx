import React, {useState} from "react";

const Dropdown = ({selected, setSelected}) => {

    const [isActiveBrand, setIsActiveBrand] = useState(false);
    const brands = [ "Adidas", "Nike", "Puma", "D&G" ];


    const [isActiveSize, setIsActiveSize] = useState(false);
    const [isActiveColor, setIsActiveColor] = useState(false);
    const [isActiveGender, setIsActiveGender] = useState(false);


    return (

      <div className="product-select">
          <div className="dropdown">
              <div className="dropdown-btn" onClick={(e) => setIsActiveBrand(!isActiveBrand)}>
                  {selected}
                  <span className="fas fa-caret-down"/>
              </div>
              {isActiveBrand && (
                  <div className="dropdown-content">
                      {brands.map((brand) => (
                          <div
                              className="dropdown-item"
                              onClick={(e) => {
                                  setSelected(brand)
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

          <div className="dropdown">
              <div className="dropdown-btn" onClick={(e) => setIsActiveSize(!isActiveSize)}>
                  Choose One
                  <span className="fas fa-caret-down"/>
              </div>
              {isActiveSize && (
                  <div className="dropdown-content">
                      <div className="dropdown-item">React</div>
                      <div className="dropdown-item">Vue</div>
                  </div>
              )
              }
          </div>

          <div className="dropdown">
              <div className="dropdown-btn" onClick={(e) => setIsActiveColor(!isActiveColor)}>
                  Color
                  <span className="fas fa-caret-down"/>
              </div>
              {isActiveColor && (
                  <div className="dropdown-content">
                      <div className="dropdown-item">Green</div>
                      <div className="dropdown-item">Blue</div>
                  </div>
              )
              }
          </div>

          <div className="dropdown">
              <div className="dropdown-btn" onClick={(e) => setIsActiveGender(!isActiveGender)}>
                  Choose One
                  <span className="fas fa-caret-down"/>
              </div>
              {isActiveGender && (
                  <div className="dropdown-content">
                      <div className="dropdown-item">Homme</div>
                      <div className="dropdown-item">Femme</div>
                  </div>
              )
              }
          </div>

      </div>
    )
}

export default Dropdown;
import React from "react";

const Special = () => {
    return(
        <div className="bg-second">
            <div className="section container">
                <div className="row">
                    <div className="col-4 col-md-4">
                        <div className="sp-item-img">
                            <img
                                src="./images/hero-2.png"
                                alt=""/>
                        </div>
                    </div>
                    <div className="col-7 col-md-8">
                        <div className="sp-item-info">
                            <div className="sp-item-name">Trouvez les bonnes affaires</div>
                            <p className="sp-item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos itaque et
                                eaque quod harum vero autem? Reprehenderit enim non voluptate! Qui provident modi est
                                non eius ratione, debitis iure.
                            </p>
                            <button className="btn-flat-special btn-hover">Achetez maintenant</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Special;
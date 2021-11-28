import React from "react";
import HeroImg from "assets/images/hero-1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Hero(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg">
                   <h1 className="hero-text">
                    Grow your
                    subscription
                    business
                   </h1>
                   <p class="text-secondary">Outcome-centered products that reduce churn, 
                       optimize pricing, and grow your subscription business end-to-end.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                    <button className="btn btn-secondary btn-circle btn-lg"><FontAwesomeIcon icon={faArrowDown} className="text-dark pr-5" /></button>
                </div>
                <div className="col-lg d-flex justify-content-end">
                   <img src={HeroImg} width="90%" alt=""/>
                </div>
            </div>
        </div>
    )
}
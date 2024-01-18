import BannerPicture from "../../components/BannerPicture/BannerPicture.jsx";
import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import "./about.scss";
export default function About() {
    return (
        <div className={'about'}>
            <section className="about__banner">
                <BannerPicture imageName={"mountain_asset.jpg"} alt={"paysage de montagne"}/>
            </section>
            <section className="about__content">
                <Dropdown title={"Fiabilité"} content={"test"}/>
                <Dropdown title={"Respect"} content={"test"}/>
                <Dropdown title={"Service"} content={"test"}/>
                <Dropdown title={"Sécurité"} content={"test"}/>
            </section>
        </div>
    )
}
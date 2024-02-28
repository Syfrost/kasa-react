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
                <Dropdown title={"Fiabilité"} content={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
                <Dropdown title={"Respect"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."}/>
                <Dropdown title={"Service"} content={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."}/>
                <Dropdown title={"Sécurité"} content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
            </section>
        </div>
    )
}
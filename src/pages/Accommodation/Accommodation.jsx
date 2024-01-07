import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./accommodation.scss";
import Tags from "../../components/Tags/Tags.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import StarsRating from "../../components/StarsRating/StarsRating.jsx";
import Host from "../../components/Host/Host.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
export default function Accommodation() {
    let { id } = useParams();
    const [accommodation, setAccommodation] = useState(null);

    useEffect(() => {
        fetch("/logements.json")
            .then(response => response.json())
            .then(data => {
                // Trouver l'hébergement par son ID
                const foundAccommodation = data.find(item => item.id === id);
                setAccommodation(foundAccommodation);
            })
            .catch(error => console.error("Erreur de chargement des logements", error));
    }, [id]); // Dépendance à l'ID pour recharger si l'ID change

    if (!accommodation) {
        return <div>Chargement en cours...</div>;
    }

    return (
        <>
            <section className="accommodation__info">
                <Carousel pictures={accommodation.pictures} />
                <h1 className="accommodation__info__title">{accommodation.title}</h1>
                <h2 className="accommodation__info__subtitle">{accommodation.location}</h2>
                <Tags tagsList={accommodation.tags}/>
                {/*<StarsRating rating="3"/>*/}
                <StarsRating rating={accommodation.rating}/>
                <Host name={accommodation.host.name} picture={accommodation.host.picture}/>
                <Dropdown title={"Description"} content={accommodation.description}/>
                <Dropdown title={"Équipements"} content={accommodation.equipments}/>
            </section>
        </>
    )
}
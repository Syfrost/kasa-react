import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import "./accommodation.scss";
import Tags from "../../components/Tags/Tags.jsx";
import Dropdown from "../../components/Dropdown/Dropdown.jsx";
import StarsRating from "../../components/StarsRating/StarsRating.jsx";
import Host from "../../components/Host/Host.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
export default function Accommodation() {
    let { id } = useParams();
    const [accommodation, setAccommodation] = useState(null);

    const navigate = useNavigate()

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

    if (accommodation === null) {
        return <div>Chargement en cours...</div>;
    }

    if (accommodation === undefined) {
        return navigate('/paindemie');
    }

    return (
        <div className={'accommodation'}>
            <section className="accommodation__pictures">
                <Carousel pictures={accommodation.pictures}/>
            </section>

            <section className="accommodation__info">
                <div className="info-section">
                    <h1 className="accommodation__info__title">{accommodation.title}</h1>
                    <h2 className="accommodation__info__subtitle">{accommodation.location}</h2>
                    <Tags tagsList={accommodation.tags}/>
                </div>
                <div className="info-section">
                    <StarsRating rating={accommodation.rating}/>
                    <Host name={accommodation.host.name} picture={accommodation.host.picture}/>
                </div>
            </section>
            <article className={'accommodation__info__description'}>
                <Dropdown title={"Description"} content={accommodation.description}/>
                <Dropdown title={"Équipements"} content={accommodation.equipments}/>
            </article>
        </div>
)
}
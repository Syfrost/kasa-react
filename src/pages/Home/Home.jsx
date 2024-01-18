import React, { useState, useEffect } from 'react';
import AccommodationCard from "../../components/AccommodationCard/AccommodationCard.jsx";
import sea_asset from "../../assets/sea_asset.jpg";
import "./home.scss";
import BannerPicture from "../../components/BannerPicture/BannerPicture.jsx";
export default function Home() {

    const [accommodations, setAccommodations] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then(response => response.json())
            .then(data => setAccommodations(data))
            .catch(error => console.error("Erreur de chargement des logements", error));
    }, []);

    return (
        <>
            <main className="home">
                <section className="home__presentation">
                    <BannerPicture imageName={"sea_asset.jpg"} pictureText={"Chez vous, partout et ailleurs"} alt={"vu mer et forêt"}/>
                </section>
                <section className="home__accommodation">
                    {accommodations.map(accommodation => (
                        //<AccommodationCard key={accommodation.id} {...accommodation} />
                        <AccommodationCard
                            key={accommodation.id}
                            id={accommodation.id}
                            image_url={accommodation.cover}
                            description={accommodation.title}
                        />
                    ))}
                </section>
            </main>
        </>
    )
}
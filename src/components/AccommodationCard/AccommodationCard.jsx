import PropTypes from "prop-types";
import "./accommodationCard.scss";
import {NavLink} from "react-router-dom";

function AccommodationCard({ id, image_url, description}) {
    return (
        <>
            <NavLink className="accommodation" to={`/accommodation/${id}`}>
                <article className="accommodation__card">
                    <img className="accommodation__card__image" src={image_url} alt={description} />
                    <p className="accommodation__card__title">{description}</p>
                </article>
            </NavLink>
        </>
    )
}

AccommodationCard.propTypes = {
    id: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
export default AccommodationCard;
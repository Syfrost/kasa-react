import PropTypes from 'prop-types';
import './bannerPicture.scss';
function BannerPicture({ imageName, pictureText, alt }) {
    const imagePath = new URL(`../../assets/${imageName}`, import.meta.url).href;

    return (
            <section className={'banner'}>
                <img className={'banner__img'} src={imagePath} alt={alt} />
                {pictureText && <span className={'banner__text'}>{pictureText}</span>}
            </section>
    );
}

BannerPicture.propTypes = {
    imageName: PropTypes.string.isRequired,
    pictureText: PropTypes.string,
    alt: PropTypes.string.isRequired
};

export default BannerPicture;
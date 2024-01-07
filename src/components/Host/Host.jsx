import PropTypes from 'prop-types';
import "./host.scss";

const Host = ({ name, picture}) => {
    return (
        <>
            <div className={'host-container'}>
                <div className={'name-container'}>
                    <span className="host__name__firstname">
                        {name.substring(0, name.indexOf(' '))}
                    </span>
                    <span className="host__name__lastname">
                        {name.substring(name.indexOf(' ') + 1)}
                    </span>
                </div>
                <img className="host__picture" src={picture} alt={name}/>
            </div>
        </>
    );
};

Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

export default Host;
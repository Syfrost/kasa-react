import './tags.scss';
import PropTypes from "prop-types";

function Tags({ tagsList }) {
    return (
        <ol className="tags">
            {tagsList.map((tag, index) => (
                <li className="tags__element" key={index}>{tag}</li>
            ))}
        </ol>
    );
}

Tags.propTypes = {
    tagsList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tags;
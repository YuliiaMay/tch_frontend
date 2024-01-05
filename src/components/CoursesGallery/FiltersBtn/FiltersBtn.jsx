import { Icon } from "../../common";
import {
    FilterButton,
    FilterChildrens,
} from "./FiltersBtn.styled";
import PropTypes from 'prop-types';


const FiltersBtn = ({ onClick }) => {
    return (
        <FilterButton
            type='button'
            size="filter"
            onClick={onClick}
        >
            <FilterChildrens>
                <span>Filters</span>
                <Icon
                    name="filter"
                    size={24}
                    color='#FFFFFF'
                />
            </FilterChildrens>
        </FilterButton>
    );
};

FiltersBtn.propTypes = {
    onClick: PropTypes.func,
}

export default FiltersBtn;
import PropTypes from 'prop-types';
import { Button } from '../../../common';
import FiltersList from '../FiltersList/FiltersList';
import {
    Section
} from './FiltersContainer.styled';


const FiltersContainer = ({ onClick, isVisible }) => {
    return (
        <Section $isVisible={isVisible}>
            <FiltersList />
            <Button
                type='submit'
                variant='tertiary'
                size='standard'
                onClick={onClick}
                >Apply filtering
            </Button>                
        </Section>
    );
};

FiltersContainer.propTypes = {
    onClick: PropTypes.func,
    isVisible: PropTypes.bool,
};

export default FiltersContainer;
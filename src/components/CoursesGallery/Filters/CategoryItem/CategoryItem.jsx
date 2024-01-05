import PropTypes from 'prop-types';
import { useState } from 'react';
import {
    CategoryItemWrapper,
    StyledIcon,
} from './CategoryItem.styled';


const CategoryItem = ({ category }) => {
    const [isChecked, setIsChecked] = useState(false);


    const handleToggleCheckCategory = () => {
        setIsChecked(!isChecked);
    };    

    
    return (
        <CategoryItemWrapper>
            <div onClick={handleToggleCheckCategory}>
                <StyledIcon name={isChecked ? 'checked' : 'unchecked'} />
            </div>
            <span>{category}</span>        
        </CategoryItemWrapper>        
    );
};

CategoryItem.propTypes = {
    category: PropTypes.string.isRequired
}

export default CategoryItem;
import { useState } from "react";
import CoursesList from "../CoursesList/CoursesList";
import FiltersBtn from "../FiltersBtn/FiltersBtn";
import FiltersContainer from "../Filters/FiltersContainer/FiltersContainer";
import {
    Section,
    SortWrapper,
    MainContentWrapper,
} from "./Gallery.styled";
import PropTypes from 'prop-types';


const Gallery = ({adverts}) => {
    const [isFiltersShown, setIsFiltersShown] = useState(false);

    
    const handleToggleFiltersList = () => {
        setIsFiltersShown(!isFiltersShown);
    };
    

    return (
        <Section>
            <SortWrapper>
                < FiltersBtn onClick={handleToggleFiltersList} />
            </SortWrapper>

            <MainContentWrapper>
                < FiltersContainer
                            isVisible={isFiltersShown}
                            onClick={handleToggleFiltersList}
                />
                < CoursesList
                    isVisible={!isFiltersShown}
                    adverts={adverts}
                />  
            </MainContentWrapper>

        </Section>
    );
};


Gallery.propTypes = {
    adverts: PropTypes.array,
};


export default Gallery;
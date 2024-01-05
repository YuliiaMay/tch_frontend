import { CourseCard } from "../../CoursesGallery/CourseCard";
import { Section } from "./AdvertDetailsContainer.styled";
import PropTypes from 'prop-types';


const AdvertDetailsContainer = ({advert}) => {
    return (
        <>
            <Section>
                <CourseCard advert={advert} />              
            </Section>
        </>
);
};

AdvertDetailsContainer.propTypes = {
    advert: PropTypes.object.isRequired,
}


export default AdvertDetailsContainer;
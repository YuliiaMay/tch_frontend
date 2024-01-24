import PropTypes from 'prop-types';
import { CourseCard } from '../CourseCard';
import { List, GalleryListSection } from './CoursesList.styled';
import { useEffect, useState } from 'react';
import { fetchFilteredAdverts } from '../../../services';
import NotAviableLessons from '../../../assets/images/lessons/noitemstoshow.jpg';


const CoursesList = ({ isVisible = true }) => {
    const [adverts, setAdverts] = useState(null);

    useEffect(() => {
        getFilteredAdverts();
    }, []);    

    async function getFilteredAdverts() {
        const params = {
            page: 1,
            per_page: 20
        }
        
        try {
            const data = await fetchFilteredAdverts(params);
            setAdverts(data.advertisements);
            
            return data;
        } catch (error) {
            console.log(error.message);
        }
    }
    

    return (
        <GalleryListSection>
            {
                !adverts
                    ? <img src={NotAviableLessons} alt="NotAviableLessons" />
                    : (
                        <List $isVisible={isVisible}>
                            {
                                adverts.map((advert) =>
                                    <CourseCard
                                        key={advert.id}
                                        advert={advert}
                                    />
                                )
                            }
                        </List >
                    )
            }        
        </GalleryListSection>
    );
};


CoursesList.propTypes = {
    isVisible: PropTypes.bool,
    adverts: PropTypes.array,
}


export default CoursesList;
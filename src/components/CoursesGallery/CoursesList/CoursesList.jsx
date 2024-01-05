import PropTypes from 'prop-types';
import { CourseCard } from '../CourseCard';
import { List } from './CoursesList.styled';
import Loader from '../../common/Loader/Loader';


const CoursesList = ({ isVisible = true, adverts }) => {
    return (
        <>
            {
                !adverts
                    ? <Loader/>
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
        </>
    );
};


CoursesList.propTypes = {
    isVisible: PropTypes.bool,
    adverts: PropTypes.array,
}


export default CoursesList;
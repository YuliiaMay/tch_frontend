import { useState, useCallback } from "react";
import { fetchMyAdverts } from "../../../services";
import CoursesList from '../../CoursesGallery/CoursesList/CoursesList';
import { NoAdversInfo } from "./ActiveAdverts.styled";


const ActiveAdverts = () => {
    const [adverts, setAdverts] = useState([]);


    const getMyAdverts = useCallback(        
        async () => {
            try {
                const response = await fetchMyAdverts();
                setAdverts(response);
            } catch (error) {
                console.log(error.message);
            }
        },
        []
    );

    getMyAdverts();

    return (
        <>
            {
                adverts
                    ? <CoursesList adverts={adverts} />
                    : <NoAdversInfo>You do not have any ads of your own yet!</NoAdversInfo>
                    
            }            
        </>
    );
};


export default ActiveAdverts;
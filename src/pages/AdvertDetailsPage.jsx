import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAdvertById } from "../services";
import { AdvertDetailsContainer } from '../components/AdvertDetails';


const AdvertDetailsPage = () => {
    const { advertId } = useParams();
    const [advert, setAdvert] = useState({});

    useEffect(() => {
        getAdvert(advertId);
    }, [advertId])

    async function getAdvert(advertId) {
        try {
            const response = await fetchAdvertById(advertId);
            setAdvert(response);
            return response;
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <AdvertDetailsContainer advert={advert} />
        </>
    );
}

export default AdvertDetailsPage;
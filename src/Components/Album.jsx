import React, {useEffect, useState} from 'react';
import {getImg} from "../API/UserAPI";
import style from './Album.module.css'

const Album = ({title, imageId, setPopUpData, setIsOpen}) => {

    
    // const routeParams = useParams();

    const [imageData, setImageData] = useState([]);
    const [imageUrl, setImageUrl] = useState('')



    useEffect(() => {
        // Fetch data from API and update state
        const fetchData = async () => {

            try {
                const response = await getImg(imageId);
                setImageData(response);
                setImageUrl(response[0].thumbnailUrl)    
                // console.log(response)        
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const openPopUp = (e) => {
        setPopUpData(imageData)
        setIsOpen(true)

    }


    return (
        <div className={style.wrapper} onClick={openPopUp}>
            <div className={style.image}>
                <img
                    src={imageUrl}
                    alt="image tnumbnail"
                    />
            </div>
            <div className={style.title}>
                <h4>{title}</h4>
            </div>
        </div>

    );
};

export default Album;
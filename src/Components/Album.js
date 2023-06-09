import React, {useEffect, useState} from 'react';
import {getImg, linkAPI} from "../API/UserAPI";
import {useParams} from "react-router-dom";

const Album = (props) => {
    // const routeParams = useParams();
    // const imageIndex = routeParams.id;

    const [imageData, setImageData] = useState([]);
    const imageID = props.imageId
    // console.log(imageID)
    useEffect(() => {
        // Fetch data from API and update state
        const fetchData = async () => {
            try {
                const response = await getImg(imageID);
                setImageData(response);
                console.log(imageData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const imageURL = imageData.thumbnailUrl;
    return (
        <div>
            <div>
                <img
                    src={imageURL}
                    alt="image tnumbnail"
                    />
            </div>
            <div>
                <h4>{props.title}</h4>
            </div>
        </div>
    );
};

export default Album;
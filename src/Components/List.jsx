import React, { useEffect, useState } from 'react';
import { linkAPI } from "../API/UserAPI";
import Album from "./Album";
import style from './List.module.css'

const List = ({ setPopUpData, setIsOpen }) => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // Fetch data from API and update state

        const fetchData = async () => {
            try {
                const res = await linkAPI();
                setAlbums(res);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className={style.main}>
            {
                albums.map(album => <div key={album.id}>
                        <Album title={album.title} imageId={album.id}
                            setPopUpData={setPopUpData} setIsOpen={setIsOpen} />
                    </div>)
            }

        </div>
    );
};

export default List;
import React, {useEffect, useState} from 'react';
import {linkAPI} from "../API/UserAPI";
import Album from "./Album";

const HomePage = () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        // Fetch data from API and update state
        const fetchData = async () => {
            try {
                const response = await linkAPI();
                setTests(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className= 'main'>
            {tests.map((test, index) => (
                <list key={test.id}>
                        <Album index={tests.length - index} title={test.title} imageId={test.id}></Album>
                </list>))}
        </div>
    );
};

export default HomePage;
import React from 'react'
import styles from './Card.module.css';


const Card = ({card}) => {

    return (
        <div className={styles.wrapper} >
            <div className={styles.image}>
                <img
                    src={card.thumbnailUrl}
                    alt="image tnumbnail"
                />
            </div>
            <div className={styles.title}>
                <h4>{card.title}</h4>
            </div>
        </div>
    );
};

export default Card;

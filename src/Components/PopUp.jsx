import React from 'react'
import styles from './PopUp.module.css';
import Card from './Card';


const PopUp = ({ data, isOpen, close }) => {

    console.log(data)

    const closeHandler = () => {
        close(false)
    }
    return (

        isOpen && <div className={styles.box}>
            <div className={styles.content}>
                <button className={styles.close} onClick={closeHandler}>X</button>

                <div className={styles.album}>

                    {data.map(card => <Card  card={card}/>)}
                    </div>
            </div>
        </div>
    );
};

export default PopUp;

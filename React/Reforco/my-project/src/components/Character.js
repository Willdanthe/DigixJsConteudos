import styles from './Character.module.css'
import React from 'react'
function Character(props){
    return(
        // <div className="character">
        //     <h1>Name: {props.name}</h1>
        //     <img src={props.picture} alt="Picture" />
        //     <p>Profession: {props.profession}</p>
        // </div>

        // OU


        <div className={styles.character}>
            <h1>Name: {props.name}</h1>
            <img src={props.picture} alt="Picture" />
            <p>Profession: {props.profession}</p>
        </div>

    )
}

export default Character
import React from 'react';
import styles from './DisplayLink.css';

export default function DisplayLink ({ link }) {

    return (
        <div>
            <div className={styles.fullerButtonBlue}>
                <a href={link["link"]} style={{
                    width: "0px", 
                    height: "0px", 
                    borderLeft: "40px solid transparent", 
                    borderRight: "40px solid transparent", 
                    borderTop: "40px solid #d1e8ff",
                    marginBottom: "3px",
                    display: "inline-block",
                    verticalAlign: "middle"
                    }}>
                </a>
        </div>
        <div style={{fontSize: '1em', marginBottom: '50px'}} >
            {link["title"]}
            <div style={{color: '#14F67D'}}>{link["snippet"]}</div>
        </div>
        </div>
    )
};
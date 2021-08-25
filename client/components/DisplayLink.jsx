import React from 'react';


export default function DisplayLink ({ link }) {
    console.log(link);
    return (
        <div style={{fontSize: '1em', marginBottom: '50px'}} >
            {link["title"]}
            <div style={{color: 'green'}}>{link["snippet"]}</div>
            <div>{link["link"]}</div>
        </div>
    )
};
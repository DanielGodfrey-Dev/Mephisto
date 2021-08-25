import React from 'react';


export default function DisplayLink ({ data }) {
    return (
        <div style={{fontSize: '1em', marginBottom: '50px'}} >
            {data[0]["title"]}
            <div style={{color: 'green'}}>{data[0]["snippet"]}</div>
            <div>{data[0]["link"]}</div>
        </div>
    )
};
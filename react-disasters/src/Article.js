import React, { useState } from 'react'

const Article = (props) => {

    return(
        <div className="article-div">
            <img src={props.data.image} alt={props.data.message} className="article-img"></img>
            <div className="article-body">
            <p>{props.data.articleDate}, {props.data.location}</p>
            <br />
            <p>{props.data.message}</p>
            <br />
            <p>{props.data.summary}</p><a href={props.data.articleLink} target="_blank">Read More...</a>
            </div>
        </div>
    )
}

export default Article
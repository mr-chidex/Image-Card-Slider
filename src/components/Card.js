import React from 'react'

const Card = (props) => {
    return (
        <div className="card-wrapper">
            <div className="card">
                <div className="card-image">
                    <img src={props.image} alt={props.image} />
                </div>
                <ul className="social-icons">
                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                </ul>

                <div className="card-content">
                    <h1>{props.name} <span>{props.jobTitle}</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Card

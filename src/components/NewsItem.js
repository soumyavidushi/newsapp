import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src={imageUrl ? imageUrl : "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/01/17/1015079-earth-g8b0c930bd1280.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem

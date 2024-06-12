import React from 'react';

const NewsItem = (props)=> {
 
    const { title, description, imageUrl, newsUrl, author, date } = props;

    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">By {author} at {new Date(date).toGMTString()}</p>
           
    
            <a href={newsUrl} className="btn btn-dark">Read News</a>
          </div>
        </div>

      </>
    );
  }


export default NewsItem;

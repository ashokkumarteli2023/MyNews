import React from 'react'
const Newsitems=(props)=> {
    let {title, description, imageUrl, newsUrl, author, publishedAt, source}=props;
    return (
      <div className="card">
        <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{right: '0', zIndex:'1'}}>
        {source}</span>
                <img src={imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p>By author: {author?author:"unknown"} on Date: {new Date(publishedAt).toGMTString()}</p>
                        <a href={newsUrl} className="btn btn-dark" target='_blank' 
                        rel="noopener noreferrer">Read More</a>
                    </div>
      </div>
    )
  }
export default Newsitems




// class based Component
// import React, { Component } from 'react'

// export class Newsitems extends Component {
//   render() {
//     let {title, description, imageUrl, newsUrl, author, publishedAt, source}=this.props;
//     return (
//       <div className="card">
//         <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{right: '0', zIndex:'1'}}>
//         {source}</span>
//                 <img src={imageUrl} className="card-img-top" alt="" />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}...</h5>
//                         <p className="card-text">{description}...</p>
//                         <p>By author: {author?author:"unknown"} on Date: {new Date(publishedAt).toGMTString()}</p>
//                         <a href={newsUrl} className="btn btn-primary" target='_blank'>Read More</a>
//                     </div>
//       </div>
//     )
//   }
// }

// export default Newsitems

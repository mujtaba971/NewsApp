import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    let {title, description, imgUrl} = this.props;
    return (

      <div className='my-4'>
          <div className="card" style={{width: "18rem"}}>
                <img src={imgUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href="/" className="btn  btn-sm btn-primary">Read More</a>
          </div>
       </div>
        
      </div>
    )
  }
}

export default NewsItem

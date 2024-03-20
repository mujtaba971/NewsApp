import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import PropTypes from 'prop-types'

export class News extends Component {
  static propTypes = {

  }

  render() {
    // constructor();{
    //   super();
    //   console.log("Hello i m a constructor")
    //   this.state={
        
    //   }
    // }
    return (
      <div className='container my-3'>
        <h2>News Monkey - Top Headlines</h2>
        <div className='row'>
          <div className='col-md-4'>
           <NewsItem title = "myTitle" description = "mydesc" imgUrl="https://cdn.cnn.com/cnnnext/dam/assets/240120184108-01-ayodhya-muslims-ram-temple-super-tease.jpg"/>
          </div>
          <div className='col-md-4'>
           <NewsItem title = "myTitle" description = "mydesc" imgUrl="https://cdn.cnn.com/cnnnext/dam/assets/240120184108-01-ayodhya-muslims-ram-temple-super-tease.jpg"/>
          </div>
          <div className='col-md-4'>
           <NewsItem title = "myTitle" description = "mydesc"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News

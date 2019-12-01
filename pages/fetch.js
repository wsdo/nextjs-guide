import React from 'react'
import 'isomorphic-unfetch'
import style from './style.modules.css'
export default class Fetch extends React.Component {
  static async getInitialProps () {
    const moviesApi = 'http://api.shudong.wang/v1/movies/coming'
    const res = await fetch(moviesApi)
    const moviesComingData = await res.json()
    return { moviesComingData }
  }

  render() {
    const moviesComingData = JSON.parse(this.props.moviesComingData.data)
    // console.log('moviesComingData',moviesComingData.moviecomings)
    return (
      <div>
        {
          moviesComingData.moviecomings.map((item,index)=>{
            return <div key={index}>
              <div className="card">
                <img src={item.image} className={style.img} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.releaseDate } 类型：{item.type}</p>
                  <a href="#" className="btn btn-primary">点击观看</a>
                </div>
              </div>
            </div>
          })
        }
      </div>
    )
  }
}

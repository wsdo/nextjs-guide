import React, { Component } from 'react'
import Link from 'next/link'
export default class Nav extends Component {
  render () {
    return (
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link  href="/"><a className="nav-link active">home</a></Link>
          </li>
          <li className="nav-item">
            <Link  href="/blog"><a className="nav-link">blog</a></Link>
          </li>
          <li className="nav-item">
            <Link  href="/about"><a className="nav-link">about</a></Link>
          </li>
        </ul>
      </div>
    )
  }
}

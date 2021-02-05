import React from 'react'
import {Link} from 'react-router-dom'

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Category',
    path: '/category'
  },
  {
    title: 'Contact Us',
    path: '/contactus'
  }
]

export default function Navigation () {
  return(
    <nav className="site-navigation">
      <span>Fivegs</span>
      <ul>
        { navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))
        }
      </ul>
    </nav>
  )
}
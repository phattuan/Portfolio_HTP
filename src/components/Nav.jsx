import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <header className="header">
      <nav className="nav flex flex-col">
        <Link className="icon" href="#introduce">
          {/* <a className="icon"> */}
            <i className="las la-home"></i>
            <span className="title-icon">Home</span>
          {/* </a> */}
        </Link>
        <Link className="icon" href="#about">
          {/* <a className="icon"> */}
            <i className="las la-user-secret"></i>
            <span className="title-icon">About</span>
          {/* </a> */}
        </Link>
        <Link className="icon" href="#resume">
          {/* <a className="icon"> */}
            <i className="las la-briefcase"></i>
            <span className="title-icon">Resume</span>
          {/* </a> */}
        </Link>
        <Link className="icon" href="#skills">
          {/* <a className="icon"> */}
            <i className="las la-shapes"></i>
            <span className="title-icon">Skills</span>
          {/* </a> */}
        </Link>
        <Link className="icon" href="#services">
          {/* <a className="icon"> */}
            <i className="las la-stream"></i>
            <span className="title-icon">Services</span>
          {/* </a> */}
        </Link>
        <Link className="icon" href="#reply">
          {/* <a className="icon"> */}
            <i className="las la-envelope"></i>
            <span className="title-icon">Reply</span>
          {/* </a> */}
        </Link>
        <Link className="icon" href="#contact">
          {/* <a className="icon"> */}
            <i className="las la-comment-dots"></i>
            <span className="title-icon">Contact</span>
          {/* </a> */}
        </Link>
      </nav>
    </header>
  )
}

export default Nav
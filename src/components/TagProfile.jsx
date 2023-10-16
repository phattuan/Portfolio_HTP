/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

//=*=*=*=*= import image =*=*=*=*=
// import avatarMe from '../../public/images/avatar-me.png'
import avatarMe2 from '../../public/images/avatar-me-2.jpg'
import Image from 'next/image'


const TagProfile = () => {
    const [avatarMee, setAvatar] = useState(avatarMe2)
    return (
        <section className="tag-profile">
            {/* //=*=*=*=*= border container profile =*=*=*=*= */}
            <div className="border-tag-profile">
                {/* //=*=*=*=*= icon config  =*=*=*=*= */}
                <i className="las la-cog icon-config"></i>
                {/* //=*=*=*=*= name & job =*=*=*=*= */}
                <div className="container-name-job">
                    <span className="user-name">Ho Tuan Phat</span>
                    <span className="my-job">FullStack</span>
                </div>
                {/* //=*=*=*=*= avatar me =*=*=*=*= */}
                <div className="border-avatar-me">
                    <div className="border-outline-avatar-me">
                        <img src='images/avatar-me-2.jpg' alt="avatar-me" className='avatar-me' />
                    </div>
                </div>
                {/* //=*=*=*=*= review tag profile =*=*=*=*= */}
                <div className="container-content-review-me">
                    <span className="content-rv">
                        Hello, i am Ho Tuan Phat
                    </span>
                    <span className="content-rv">
                        I was born in Binh Dinh, Vietnam
                    </span>
                </div>
                {/* //=*=*=*=*= copyright =*=*=*=*= */}
                <div className="container-copyright">
                    <span className="copyright">
                        Copyright <i className="las la-copyright"></i> 2023 Ho Tuan Phat
                    </span>
                </div>
                {/* //=*=*=*=*= icon link =*=*=*=*= */}
                <div className="container-icon-link">
                    <span className="border-icon">
                        <i className="lab la-facebook-f"></i>
                    </span>
                    <span className="border-icon">
                        <i className="lab la-github"></i>
                    </span>
                    <span className="border-icon">
                        <i className="lab la-instagram"></i>
                    </span>
                    <span className="border-icon">
                        <i className="las la-envelope"></i>
                    </span>
                </div>
                {/* //=*=*=*=*= button contact me =*=*=*=*= */}
                <div className="button-contact-me">
                    <span>
                        Contact Me
                    </span>
                </div>
            </div>
        </section>
    )
}

export default TagProfile
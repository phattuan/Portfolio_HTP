import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import TagProfile from '../components/TagProfile'
import LayoutMain from '../components/LayoutMain'
//=*=*=*=*= import bg =*=*=*=*=


const MainHome = () => {
   
    return (
        <div className='main-home'>
            {/* //=*=*=*=*= background  =*=*=*=*= */}
            <video
                loop
                autoPlay
                muted
                style={{
                    'width': '100%',
                    'height': '100vh',
                    'objectFit': 'fill',
                    'position': 'fixed',
                    'top': '0',
                    'left': '0',
                    'zIndex': '-100'
                    // 'opacity': '0.5'

                }}
                src="videos/bg-portfolio-2.mp4"
            />
            {/* //=*=*=*=*= layout home =*=*=*=*= */}
            <div className="layout-home">
                <Nav />
                {/* //=*=*=*=*= tag profile left =*=*=*=*= */}
                <TagProfile />
                <div className="container-right">
                    <LayoutMain />
                </div>
            </div>
        </div>
    )
}

export default MainHome
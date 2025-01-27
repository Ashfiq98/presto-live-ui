import React from 'react'

type Props = {}

export default function AnalyticsGrid({ }: Props) {
    return (
        <div className='container'>

             {/* first part of airtrip */}
            
            <div className="airtrip">
                <div className="left-airtrip">
                    <div className="left-airtrip-image">
                        <img src="left-airtrip.svg" alt="" />
                    </div>
                    <p>
                        Airtrip
                    </p>
                </div>
                <div className="right-airtrip">
                    <p>
                        Manage Websites Crafted with TravelAI Studio
                    </p>
                </div>
            </div>

            {/* second part of airtrip */}
            <div className="airtrip-second">
               <div className="carousel-card">

               </div>
               <div className="site-">
                </div>progress
            </div>
            {/* third part of airtrip  */}
            <div className="airtrip-third">

            </div>
        </div>
    )
}
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
                {/* <div className="website-demo">
                    <img src="demo-home.png" width='100%' height='100%' alt="" />
                </div> */}
                <div className="website-demo">
                    <div className="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-slide active">
                                <img src="demo-home.png" alt="Demo 1" />
                            </div>
                            <div className="carousel-slide">
                                <img src="demo-home.png" alt="Demo 2" />
                            </div>
                            <div className="carousel-slide">
                                <img src="demo-home.png" alt="Demo 3" />
                            </div>
                        </div>

                        <button className="carousel-button prev">❮</button>
                        <button className="carousel-button next">❯</button>

                        <div className="carousel-controls">
                            <div className="carousel-dot active"></div>
                            <div className="carousel-dot"></div>
                            <div className="carousel-dot"></div>
                        </div>
                    </div>
                </div>
                <div className="site">
                    <div className="site-header">
                        <div className="website">
                            <p>Airtrip</p>
                            <section>
                                <a href="">Airtrip.com</a>
                                <img src="share-box.svg" width='14px' height='14px' alt="" />
                            </section>
                        </div>
                        <div className='site-btn'>
                            <button className='edit-btn'>
                                <img src="edit-icon.svg" alt="" />
                                Edit website
                            </button>
                            <button className='more-btn'>
                                <img src="more.svg" alt="" />
                                <ul className="dropdown">
    <li><a href="#">Edit</a></li>
    <li><a href="#">Delete</a></li>
    <li><a href="#">Share</a></li>
  </ul>
                            </button>
                            
                        </div>

                    </div>
                    <hr className='horizontal-border' />

                    <div className="site-progress-details">
                        <div className="progress-bar-details">
                            <p>Site progress</p>
                            <div className="progress-bar">
                                <section className="progress">

                                </section>
                                {/* <section className='remaining'>

                           </section> */}
                            </div>
                            <p>4/7 completed</p>
                        </div>
                        <div className="progress-bar-data">
                            <div className="complete-task">
                                <ul className='complete'>
                                    <li className='complete-li'>
                                        <img src="check.svg" alt="" width='12px' height='12px' />
                                        <p>Edit heading text</p>
                                    </li>
                                    <li className='complete-li'>
                                        <img src="check.svg" alt="" width='12px' height='12px' />
                                        <p>Update image</p>
                                    </li>
                                    <li className='complete-li'>
                                        <img src="check.svg" alt="" width='12px' height='12px' />
                                        <p>Edit paragraph text</p>
                                    </li>
                                    <li className='complete-li'>
                                        <img src="check.svg" alt="" />
                                        <p>Update Logo in the header</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="remaining-task">
                                <ul>
                                    <li className='pending'>
                                        <img src="circle.svg" width='12px' height='12px' alt="" />
                                        <p>Update Social Media</p>
                                    </li>
                                    <li className='pending'>
                                        <img src="circle.svg" width='12px' height='12px' alt="" />
                                        <p>Optimize site for google</p>
                                    </li>
                                    <li className='pending'>
                                        <img src="circle.svg" width='12px' height='12px' alt="" />
                                        <p>Go live</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* third part of airtrip  */}
            <div className="airtrip-third ">
                <div className="analytics-header">
                    <p>Analytics</p>
                    <ul className="pagination">
                        <li>1W</li>
                        <li className='active'>1M</li>
                        <li>1Y</li>
                        <li>All time</li>
                        <li>Custom</li>
                    </ul>
                </div>
                <div className="analytics-card">
                    <div className="card">
                        <div className="card-header">
                            <p>Bookings</p>
                            <div className="tooltip-wrapper">
                                <img src="info-icon.svg" alt="" />
                                <span className="tooltip">Track real-time booking updates and availability. Ensure seamless reservations, reduce cancellations, and enhance customer satisfaction. Monitor trends, manage schedules efficiently, and optimize occupancy rates. Stay informed about peak booking times and customer preferences to improve service and maximize revenue.</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="percentage">
                                <span className='percentage-text'>2,450</span>
                                <span className='percentage-highlight'>+ 4.3%</span>
                            </div>
                            <div className="analytics-result">
                                <p><span className='highlights'>+2.3K</span>  Increase vs last month</p>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header">
                            <p>Visitors</p>
                            <div className="tooltip-wrapper">
                                <img src="info-icon.svg" alt="" />
                                <span className="tooltip">Your tooltip text here</span>
                            </div>

                        </div>
                        <div className="card-content">
                            <div className="percentage">
                                <span className='percentage-text'>56,003</span>
                                <span className='percentage-highlight'>+ 4.3%</span>
                            </div>
                            <div className="analytics-result">
                                <p><span className='highlights'>+2.3K</span>  Increase vs last month</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <p>Page view</p>
                            <div className="tooltip-wrapper">
                                <img src="info-icon.svg" alt="" />
                                <span className="tooltip">Your tooltip text here</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="percentage">
                                <span className='percentage-text'>56,054</span>
                                <span className='percentage-highlight'>+ 4.3%</span>
                            </div>
                            <div className="analytics-result">
                                <p><span className='highlights'>+2.3K</span>  Increase vs last month</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <p>Conv. rate</p>
                            <div className="tooltip-wrapper">
                                <img src="info-icon.svg" alt="" />
                                <span className="tooltip">Your tooltip text here</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="percentage">
                                <span className='percentage-text'>2,450</span>
                                <span className='percentage-highlight'>+ 4.3%</span>
                            </div>
                            <div className="analytics-result">
                                <p><span className='highlights'>+2.3K</span>  Increase vs last month</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <p>Users</p>
                            <div className="tooltip-wrapper">
                                <img src="info-icon.svg" alt="" />
                                <span className="tooltip">Your tooltip text here</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="percentage">
                                <span className='percentage-text'>2,450</span>
                                <span className='percentage-highlight'>+ 4.3%</span>
                            </div>
                            <div className="analytics-result">
                                <p><span className='highlights'>+2.3K</span>  Increase vs last month</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <p>Sessions</p>
                            <div className="tooltip-wrapper">
                                <img src="info-icon.svg" alt="" />
                                <span className="tooltip">Your tooltip text here</span>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="percentage">
                                <span className='percentage-text'>2,450</span>
                                <span className='percentage-highlight'>+ 4.3%</span>
                            </div>
                            <div className="analytics-result">
                                <p><span className='highlights'>+2.3K</span>  Increase vs last month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
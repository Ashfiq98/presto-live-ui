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
                <div className="website-demo">
                    <img src="demo-home.png" width='100%' height='100%' alt="" />
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
                            </button>
                        </div>

                    </div>
                    {/* <section className='horizontal-border'>
                    
                    </section> */}
                    {/* <div className="site-progress">

                    </div>
                    <div className="site-details">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> */}

                    <div className="progress-container">
                        <div className="progress-header">
                            <div className="progress-title">Site progress</div>
                            <div className="progress-count">4/7 Completed</div>
                        </div>

                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>

                        <div className="tasks-list">
                            {/* <!-- Completed Tasks --> */}
                            <div className="task-item task-completed">
                                <div className="checkmark">✓</div>
                                <span>Edit heading text</span>
                            </div>
                            <div className="task-item task-completed">
                                <div className="checkmark">✓</div>
                                <span>Update image</span>
                            </div>
                            <div className="task-item task-completed">
                                <div className="checkmark">✓</div>
                                <span>Edit paragraph text</span>
                            </div>
                            <div className="task-item task-completed">
                                <div className="checkmark">✓</div>
                                <span>Update Logo in the header</span>
                            </div>

                            {/* <!-- Pending Tasks --> */}
                            <div className="task-item">
                                <div className="pending-circle"></div>
                                <span className="task-pending">Update Social media</span>
                            </div>
                            <div className="task-item">
                                <div className="pending-circle"></div>
                                <span className="task-pending">Optimize site for google</span>
                            </div>
                            <div className="task-item">
                                <div className="pending-circle"></div>
                                <span className="task-pending">Go live</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* third part of airtrip  */}
            <div className="airtrip-third ">
                <h1>hello third...</h1>
            </div>
        </div>
    )
}
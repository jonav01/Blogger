import React from "react";
import './About.css';

function About ()  {
    return (
        
        <div className="service component__space" id="Services">
            <h2 class="top">About</h2>
            <div className="heading">
                <h1 className="heading">About Us</h1>
                <h2 className="heading2">Welcome to the Blogging Community! <br></br>
                Create a blog and share your voice in minutes. </h2>
                <p className="heading p__color">
                Blogger is a blogging platform that lets creators build beautiful blogs & newsletters. It is free (and ad-free) blogging platform to publish your ideas, share them with the Community and the world. 
                It provides users with a potent, minimalist writing experience that is easy to use, well-supported, and distraction-free.
                <br></br>
                <br></br>
                You can edit conversations collaboratively, and attach files and photos to posts.
                It's simple, beautiful, collaborative, and it helps you find the right audience for whatever you have to say.
            </p>
            </div>

            <div className="heading3">
                <h2>What's Interesting about Blogger?</h2>
                </div>


            <div className="container">
                <div className="row">


                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Create Blogs</h1>
                                <p className="p service__text p__color">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                {/* <p className="p service__text p__color">
                                nemo asperiores fugiat et quas deserunt ?
                                </p> */}
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Blogger</h1>
                                <p className="p service__text p__color">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                {/* <p className="p service__text p__color">
                                nemo asperiores fugiat et quas deserunt?
                                </p> */}
                            </div>
                         </div>
                         </div>
                    

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Blogger</h1>
                                <p className="p service__text p__color">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                {/* <p className="p service__text p__color">
                                nemo asperiores fugiat et quas deserunt?
                                </p> */}
                            </div>
                         </div>
                    </div>
                      
                    
                </div>
            </div>
        </div>
    )
}

export default About;
 
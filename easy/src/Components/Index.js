import React from 'react'
import './style.css'

class Index extends React.Component {
    render() {
        return (
            <>
                <div className='main-header'>



                    <div className='grid'>
                        <div>
                            <a href="index.js"><img src="Images/logo2.png" alt="logo" width='150px' /></a>
                        </div>

                        <div className='flex' >
                            <center>


                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <span></span> USD
                                    </button>

                                    <div className="dropdown-content">
                                        <a href="#">
                                            <span></span>  EUR</a>

                                        <a href="#">
                                            <span></span>   GBP</a>
                                        <a href="#">
                                            <span></span>   RUR</a>

                                    </div>
                                </div>
                            </center>
                        </div>

                        <div>

                            <center>


                                <div className="dropdown">
                                    <button className="dropbtn ">
                                        <a href="#"> <img src='Images/lan/1.png' width="20" height="15" />  Eng </a>
                                    </button>

                                    <div className="dropdown-content">
                                        <a href="#">
                                            <img src='Images/lan/4.png' width="20" height="15" /> De</a>

                                        <a href="#">
                                            <img src='Images/lan/5.png' width="20" height="15" /> It</a>
                                        <a href="#">
                                            <img src='Images/lan/2.png' width="20" height="15" /> Fr</a>
                                        <a href="#">
                                            <img src='Images/lan/3.png' width="20" height="15" /> Es</a>
                                    </div>
                                </div>
                            </center>

                        </div>

                        <div>
                            <div className="show-reg-form modal-open"><i className="fa fa-sign-in"></i>Sign In</div>
                        </div>

                        <div>
                            <div className="add-hotel">Add Your Hotel <span><i className="far fa-plus"></i></span></div>
                        </div>

                    </div>

                    <div className='grid'>

                        <div className="flex">

                            <center>


                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <span></span> Home
                                    </button>

                                    <div className="dropdown-content">
                                        <a href="#">
                                            <span></span> Parallax Image</a>

                                        <a href="#">
                                            <span></span> Slider</a>
                                        <a href="#">
                                            <span></span>   Video</a>
                                        <a href="#">
                                            <span></span> Slideshow
                                        </a>

                                    </div>
                                </div>
                            </center>

                            <center>


                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <span></span> Lisitngs
                                    </button>

                                    <div className="dropdown-content">
                                        <a href="#">
                                            <span></span>Column map</a>

                                        <a href="#">
                                            <span></span>Column map 2</a>
                                        <a href="#">
                                            <span></span>Fullwidth Map</a>
                                        <a href="#">
                                            <span></span>Fullwidth Ma 2
                                        </a>
                                        <a href="#">
                                            <span></span>Without Map</a>
                                        <a href="#">
                                            <span></span>Without Map 2
                                        </a>

                                    </div>
                                </div>
                            </center>

                            <div>
                                <div className="show-reg-form modal-open"><i className="fa fa-sign-in"></i>News</div>
                            </div>

                            <center>


                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <span></span> Single
                                    </button>

                                    <div className="dropdown-content">
                                        <a href="#">
                                            <span></span> Style 1</a>

                                        <a href="#">
                                            <span></span> Style 2</a>
                                        <a href="#">
                                            <span></span>Style 3</a>
                                        <a href="#">
                                            <span></span> Style 4</a>

                                    </div>
                                </div>
                            </center>

                            <center>


                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <span></span> Pages
                                    </button>

                                    <div className="dropdown-content">
                                        <a href="#">
                                            <span></span>About</a>

                                        <a href="#">
                                            <span></span>Contacts</a>
                                        <a href="#">
                                            <span></span>User single</a>
                                        <a href="#">
                                            <span></span>Help FAQ</a>
                                        <a href="#">
                                            <span></span>Pricing</a>
                                        <a href="#">
                                            <span></span>Booking</a>
                                        <a href="#">
                                            <span></span>User Dashboard</a>
                                        <a href="#">
                                            <span></span>Blog Classik</a>
                                        <a href="#">
                                            <span></span>Blog Single</a>
                                        <a href="#">
                                            <span></span>Add Listing</a>
                                        <a href="#">
                                            <span></span>404</a>
                                        <a href="#">
                                            <span></span>Invoice</a>
                                        <a href="#">
                                            <span></span>Coming Soon</a>


                                    </div>
                                </div>
                            </center>

                        </div>

                        <div className="flex">

                            <center>


                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <span ><img src="Images/avatar/4.jpg" alt="" width='30px' /></span> My account
                                    </button>

                                    <div className="dropdown-content">
                                        <a href="#">
                                            <span></span> Edit profile</a>

                                        <a href="#">
                                            <span></span>Add Listing</a>
                                        <a href="#">
                                            <span></span>Bookings</a>
                                        <a href="#">
                                            <span></span> Reviews </a>
                                        <a href="#">
                                            <span></span> Log Out </a>


                                    </div>
                                </div>
                            </center>

                            <div className=""><i class="fal fa-heart"></i><span className="">3</span></div>
                            <div className=""><span>Search</span> <i className="fas fa-search"></i> </div>

                        </div>

                    </div>


                </div>



                <div className="img">
                    <div>
                        <center><h1>EasyBook Hotel Booking System</h1></center>
                    </div>
                    <div>
                        <center> <h5>Let's start exploring the world together with EasyBook</h5></center>
                    </div>



                    <div className='flex mid'>


                        <div>
                            <span class="inpt_dec"><i class="fal fa-map-marker"></i></span>
                            <input type="text" placeholder="Hotel , City..." />
                            <a href="#"><i class="fal fa-dot-circle"></i></a>
                        </div>
                        <div>
                            <span><i class="fal fa-calendar-check"></i></span> <input
                                type="text" placeholder="When" name="main-input-search" value="" />
                        </div>

                        <div >
                            <div >
                                <input type="number" placeholder='Persons' />
                            </div>



                        </div>

                        <button className='btn btn-primary btn-sm'>Search <i class="fal fa-search"></i></button>


                    </div>


                </div>



                <div className='space'>

                    <div className="color">
                        <center><h1>Popular Destination</h1></center>
                    </div>
                    <div>
                        <center><p>Explore some of the best tips from around the city from our partners and friends.</p></center>
                    </div>

                </div>


                <div className="around">

                    <div className='back'>
                        <div className='hotels'><span>79 </span> Hotels</div>
                        <div className='back1'>Rome</div>
                        <div className='hotels1'>Constant care and attention to the patients makes good record</div>
                    </div>

                    <div className='back-item'>
                        <div className='hotels'><span>43 </span> Hotels</div>
                        <div className='back1'>Rome</div>
                        <div className='hotels1'>Constant care and attention to the patients makes good record</div>
                    </div>
                </div>

                <div className="flex">
                <div className='back'>
                        <div className='hotels'><span>79 </span> Hotels</div>
                        <div className='back1'>Rome</div>
                        <div className='hotels1'>Constant care and attention to the patients makes good record</div>
                    </div>
                    <div className='back'>
                        <div className='hotels'><span>79 </span> Hotels</div>
                        <div className='back1'>Rome</div>
                        <div className='hotels1'>Constant care and attention to the patients makes good record</div>
                    </div>
                    <div className='back'>
                        <div className='hotels'><span>79 </span> Hotels</div>
                        <div className='back1'>Rome</div>
                        <div className='hotels1'>Constant care and attention to the patients makes good record</div>
                    </div>
                </div>

                <div>
                    kjhfihdshf
                </div>
            </>
        )
    }
}
export default Index;
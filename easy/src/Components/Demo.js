import React from 'react'


export default class Index extends React.Component {
    render() {
        return (
            <>

                <div class="loader-wrap">
                    <div class="pin">
                        <div class="pulse"></div>
                    </div>
                </div>

                <div id="main">

                    <header class="main-header">

                        <div class="header-top fl-wrap">
                            <div class="container">
                                <div class="logo-holder">
                                    <a href="index.html"><img src="Images/logo.png" alt="" /></a>
                                </div>
                                <a href="dashboard-add-listing.html" class="add-hotel">Add Your Hotel <span><i
                                    class="far fa-plus"></i></span></a>
                                <div class="show-reg-form modal-open"><i class="fa fa-sign-in"></i>Sign In</div>
                                <div class="lang-wrap">
                                    <div class="show-lang"><img src="Images/lan/1.png" alt="" /> <span>Eng</span><i
                                        class="fa fa-caret-down"></i></div>
                                    <ul class="lang-tooltip green-bg">
                                        <li><a href="#"><img src="Images/lan/4.png" alt="" /> De</a></li>
                                        <li><a href="#"><img src="Images/lan/5.png" alt="" /> It</a></li>
                                        <li><a href="#"><img src="Images/lan/2.png" alt="" /> Fr</a></li>
                                        <li><a href="#"><img src="Images/lan/3.png" alt="" /> Es</a></li>
                                    </ul>
                                </div>
                                <div class="currency-wrap">
                                    <div class="show-currency-tooltip"><i class="fas fa-dollar-sign"></i> <span>USD <i
                                        class="fa fa-caret-down"></i> </span></div>
                                    <ul class="currency-tooltip">
                                        <li><a href="#"><i class="far fa-euro-sign"></i> EUR</a></li>
                                        <li><a href="#"><i class="far fa-pound-sign"></i> GBP</a></li>
                                        <li><a href="#"><i class="far fa-ruble-sign"></i>RUR</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="header-inner fl-wrap">
                            <div class="container">
                                <div class="show-search-button"><span>Search</span> <i class="fas fa-search"></i> </div>
                                <div class="wishlist-link"><i class="fal fa-heart"></i><span class="wl_counter">3</span></div>
                                <div class="header-user-menu">
                                    <div class="header-user-name">
                                        <span><img src="Images/avatar/4.jpg" alt="" /></span>
                                        My account
                                    </div>
                                    <ul>
                                        <li><a href="dashboard-myprofile.html"> Edit profile</a></li>
                                        <li><a href="dashboard-add-listing.html"> Add Listing</a></li>
                                        <li><a href="dashboard-bookings.html"> Bookings </a></li>
                                        <li><a href="dashboard-review.html"> Reviews </a></li>
                                        <li><a href="#">Log Out</a></li>
                                    </ul>
                                </div>
                                <div class="home-btn"><a href="index.html"><i class="fas fa-home"></i></a></div>

                                <div class="nav-button-wrap color-bg">
                                    <div class="nav-button">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>

                                <div class="nav-holder main-menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <a href="#" class="act-link">Home <i class="fas fa-caret-down"></i></a>

                                                <ul>
                                                    <li><a href="index.html">Parallax Image</a></li>
                                                    <li><a href="index2.html">Slider</a></li>
                                                    <li><a href="index3.html">Video</a></li>
                                                    <li><a href="index4.html">Slideshow</a></li>
                                                </ul>

                                            </li>
                                            <li>
                                                <a href="#">Listings <i class="fas fa-caret-down"></i></a>

                                                <ul>
                                                    <li><a href="listing.html">Column map</a></li>
                                                    <li><a href="listing6.html">Column map 2</a></li>
                                                    <li><a href="listing2.html">Fullwidth Map</a></li>
                                                    <li><a href="listing3.html">Fullwidth Map 2</a></li>
                                                    <li><a href="listing4.html">Without Map</a></li>
                                                    <li><a href="listing5.html">Without Map 2</a></li>
                                                    <li>
                                                        <a href="#">Single <i class="fas fa-caret-down"></i></a>

                                                        <ul>
                                                            <li><a href="listing-single.html">Style 1</a></li>
                                                            <li><a href="listing-single2.html">Style 2</a></li>
                                                            <li><a href="listing-single3.html">Style 3</a></li>
                                                            <li><a href="listing-single4.html">Style 4</a></li>
                                                        </ul>

                                                    </li>
                                                </ul>

                                            </li>
                                            <li>
                                                <a href="blog.html">News</a>
                                            </li>
                                            <li>
                                                <a href="#">Pages <i class="fas fa-caret-down"></i></a>

                                                <ul>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="contacts.html">Contacts</a></li>
                                                    <li><a href="author-single.html">User single</a></li>
                                                    <li><a href="help.html">Help FAQ</a></li>
                                                    <li><a href="pricing-tables.html">Pricing</a></li>
                                                    <li><a href="booking-single.html">Booking</a></li>
                                                    <li><a href="dashboard.html">User Dashboard</a></li>
                                                    <li><a href="blog2.html">Blog Classik</a></li>
                                                    <li><a href="blog-single.html">Blog Single</a></li>
                                                    <li><a href="dashboard-add-listing.html">Add Listing</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                    <li><a href="invoice.html">Invoice</a></li>
                                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                                </ul>

                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div class="wishlist-wrap scrollbar-inner novis_wishlist">
                                    <div class="box-widget-content">
                                        <div class="widget-posts fl-wrap">
                                            <ul>
                                                <li class="clearfix">
                                                    <a href="#" class="widget-posts-img"><img src="Images/gal/7.jpg" class="respimg"
                                                        alt="" /></a>
                                                    <div class="widget-posts-descr">
                                                        <a href="#" title="">Park Central</a>
                                                        <div class="listing-rating card-popup-rainingvis" data-starrating2="5">
                                                        </div>
                                                        <div class="geodir-category-location fl-wrap"><a href="#"><i
                                                            class="fas fa-map-marker-alt"></i> 40 JOURNAL SQUARE PLAZA, NJ,
                                                            US</a></div>
                                                        <span class="rooms-price">$80 <strong> / Awg</strong></span>
                                                    </div>
                                                </li>
                                                <li class="clearfix">
                                                    <a href="#" class="widget-posts-img"><img src="Images/gal/8.jpg" class="respimg"
                                                        alt="" /></a>
                                                    <div class="widget-posts-descr">
                                                        <a href="#" title="">Holiday Home</a>
                                                        <div class="listing-rating card-popup-rainingvis" data-starrating2="3">
                                                        </div>
                                                        <div class="geodir-category-location fl-wrap"><a href="#"><i
                                                            class="fas fa-map-marker-alt"></i> 75 PRINCE ST, NY, USA</a>
                                                        </div>
                                                        <span class="rooms-price">$50 <strong> / Awg</strong></span>
                                                    </div>
                                                </li>
                                                <li class="clearfix">
                                                    <a href="#" class="widget-posts-img"><img src="Images/gal/9.jpg" class="respimg"
                                                        alt="" /></a>
                                                    <div class="widget-posts-descr">
                                                        <a href="#" title="">Moonlight Hotel</a>
                                                        <div class="listing-rating card-popup-rainingvis" data-starrating2="4">
                                                        </div>
                                                        <div class="geodir-category-location fl-wrap"><a href="#"><i
                                                            class="fas fa-map-marker-alt"></i> 70 BRIGHT ST NEW YORK,
                                                            USA</a></div>
                                                        <span class="rooms-price">$105 <strong> / Awg</strong></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="header-search vis-search">
                            <div class="container">
                                <div class="row">

                                    <div class="col-sm-4">
                                        <div class="header-search-input-item fl-wrap location autocomplete-container">
                                            <label>Destination or Hotel Name</label>
                                            <span class="header-search-input-item-icon"><i class="fal fa-map-marker-alt"></i></span>
                                            <input type="text" placeholder="Location" class="autocomplete-input" id="autocompleteid"
                                                value="" />
                                            <a href="#"><i class="fal fa-dot-circle"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-sm-3">
                                        <div class="header-search-input-item fl-wrap date-parent">
                                            <label>Date In-Out </label>
                                            <span class="header-search-input-item-icon"><i class="fal fa-calendar-check"></i></span>
                                            <input type="text" placeholder="When" name="header-search" value="" />
                                        </div>
                                    </div>

                                    <div class="col-sm-3">
                                        <div class="header-search-input-item fl-wrap">
                                            <div class="quantity-item">
                                                <label>Rooms</label>
                                                <div class="quantity">
                                                    <input type="number" min="1" max="3" step="1" value="1" />
                                                </div>
                                            </div>
                                            <div class="quantity-item">
                                                <label>Adults</label>
                                                <div class="quantity">
                                                    <input type="number" min="1" max="3" step="1" value="1" />
                                                </div>
                                            </div>
                                            <div class="quantity-item">
                                                <label>Children</label>
                                                <div class="quantity">
                                                    <input type="number" min="0" max="3" step="1" value="0" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-2">
                                        <div class="header-search-input-item fl-wrap">
                                            <button class="header-search-button"
                                                onclick="window.location.href='listing.html'">Search <i
                                                    class="far fa-search"></i></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="close-header-search"><i class="fal fa-angle-double-up"></i></div>
                        </div>

                    </header>

                </div>
            </>
        )
    }
}
import axiosClient from "@/utils/axios";
import Newsletter from "./Newsletter";
import Link from "next/link";
// import { useEffect, useState } from "react"
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Header = async () => {
  const response = await axiosClient.get('/menu-items')
  const {brands, catageories} = response.data
  return (
    <div>
      <Newsletter />
      <header className="header-main_area bg--sapphire">
        <div className="header-top_area d-lg-block d-none">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <div className="main-menu_area position-relative">
                  <nav className="main-nav">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/products">Products</Link>
                      </li>
                      <li className="">
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="">
                        <Link href="#">Services</Link>
                      </li>
                      <li className="dropdown-holder ">
                        <Link href="#">
                          Support <i className="ion-ios-arrow-down" />
                        </Link>
                        <ul className="hm-dropdown">
                          {brands.map((brand)=><li key={brand.id}>
                            <Link href={`${brand.brand_url}`} target="_blank">{brand.title}</Link>
                          </li>)}
                         
                        </ul>
                      </li>
                      <li className="dropdown-holder">
                        <Link href="#">
                          Resources <i className="ion-ios-arrow-down" />
                        </Link>
                        <ul className="hm-dropdown">
                          <li>
                            <Link href="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="#">Webinars</Link>
                          </li>
                          <li>
                            <Link href="#">Newsletter</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4">
                <div className="ht-right_area">
                  <div className="ht-menu">
                    <ul>
                      <li>
                        <Link href="/login">My Account</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-top_area header-sticky bg--sapphire">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-7 col-lg-7 d-lg-block d-none">
                <div className="main-menu_area position-relative">
                  <nav className="main-nav">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/products">Products</Link>
                      </li>
                      <li className="">
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="">
                        <Link href="/services">Services</Link>
                      </li>
                      <li className="dropdown-holder ">
                        <Link href="#">
                          Support <i className="ion-ios-arrow-down" />
                        </Link>
                        <ul className="hm-dropdown">
                          <li>
                            <Link href="https://www.ui.com/">Ubiquiti</Link>
                          </li>
                          <li>
                            <Link href="https://mikrotik.com/">MikroTik</Link>
                          </li>
                          <li>
                            <Link href="https://www.siklu.com/">Siklu</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-holder">
                        <Link href="#">
                          Resources <i className="ion-ios-arrow-down" />
                        </Link>
                        <ul className="hm-dropdown">
                          <li>
                            <Link href="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="#">Webinars</Link>
                          </li>
                          <li>
                            <Link href="#">Newsletter</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-sm-3 d-block d-lg-none">
                <div className="header-logo_area header-sticky_logo">
                  <Link href="/index">
                    <img
                      src="/assets/images/menu/logo/1.png"
                      alt="Simplifi Networks Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-sm-9">
                <div className="header-right_area">
                  <ul>
                    <li className="mobile-menu_wrap d-flex d-lg-none">
                      <Link
                        href="#mobileMenu"
                        className="mobile-menu_btn toolbar-btn color--white"
                      >
                        <i className="ion-navicon" />
                      </Link>
                    </li>
                    <li className="contact-us_wrap">
                      <Link href="tel://254727401262">
                        <i className="ion-android-call" />
                        Ke: +254 727 401 262
                      </Link>
                    </li>
                    <li className="contact-us_wrap">
                      <Link href="tel://+256758937003">
                        <i className="ion-android-call" />
                        Ug: +256 758 937 003
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle_area">
          <div className="container-fluid">
            <div className="row">
              <div className="custom-logo_col col-12">
                <div className="header-logo_area">
                  <Link href="/">
                    <img
                      src="/assets/images/menu/logo/1.png"
                      alt="Simplifi Network's Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="custom-category_col col-12">
                <div className="category-menu category-menu-hidden">
                  <div className="category-heading">
                    <h2 className="categories-toggle">
                      <span>Browse By</span>
                      <span>Catalogue</span>
                    </h2>
                  </div>
                  <div id="cate-toggle" className="category-menu-list">
                    <ul>
                      <li className="right-menu">
                        <Link href="#">Browse by Manufacturer</Link>
                        <ul className="cat-mega-menu">
                          <li className="right-menu cat-mega-title">
                            {/* <Link href="#">Sub header</Link> */}
                            <ul>
                              {brands.slice(0, 5).map((brand)=><li>
                                <Link href="/products">{brand.title}</Link>
                              </li>)}
                            </ul>
                          </li>
                          <li className="right-menu cat-mega-title">
                            {/* <Link href="#">sub header</Link> */}
                            <ul>
                              {brands.slice(5, 10).map((brand)=><li>
                                <Link href="/products">{brand.title}</Link>
                              </li>)}
                            </ul>
                          </li>
                          <li className="right-menu cat-mega-title">
                            {/* <Link href="#">sub header</Link> */}
                            <ul>
                              {brands.slice(10, 15).map((brand)=><li>
                                <Link href="/products">{brand.title}</Link>
                              </li>)}
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu">
                        <Link href="wireless-access-points.html">
                          Wireless Access Points
                        </Link>
                        <ul className="cat-dropdown cat-dropdown-2">
                          <li>
                            <Link href="indoor-access-points-wifi-4.html">
                              Indoor Access Points
                            </Link>
                            <Link href="wireless-access-points.html">
                              Outdoor Access Points
                            </Link>
                          </li>
                          <li>
                            <Link href="wireless-access-points.html">
                              Mesh Access Points
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu">
                        <Link href="wireless-access-points.html">WISP/ISP</Link>
                        <ul className="cat-dropdown cat-dropdown-2">
                          <li>
                            <Link href="#">WISP Backhaul</Link>
                            <Link href="#">WISP Basestation</Link>
                            <Link href="#">WISP CPE</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu">
                        <Link href="wireless-access-points.html">Cables</Link>
                        <ul className="cat-dropdown cat-dropdown-2">
                          <li>
                            <Link href="#">Optical Cables</Link>
                            <Link href="#">Copper Ethernet Cables</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="right-menu">
                        <Link href="shop-left-sidebar.html">
                          Fiber and GPON
                        </Link>
                        <ul className="cat-mega-menu cat-mega-menu-3">
                          <li className="right-menu cat-mega-title">
                            <ul>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  Optical Cable
                                </Link>
                              </li>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  Fusion Splicer
                                </Link>
                              </li>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  SFT Transceiver
                                </Link>
                              </li>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  Splitters
                                </Link>
                              </li>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  Patch Cords
                                </Link>
                              </li>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  Pigtails
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="right-menu cat-mega-title">
                            <ul>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  Distribution Boxes
                                </Link>
                              </li>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  Terminal Boxes
                                </Link>
                              </li>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  Outdoor Closures
                                </Link>
                              </li>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  POT Terminals
                                </Link>
                              </li>
                              <li>
                                <Link href="shop-left-sidebar.html">
                                  Accessories
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="#">Routers Gateways and Management</Link>
                      </li>
                      <li>
                        <Link href="#">Surveillance and Security</Link>
                      </li>
                      <li>
                        <Link href="#">Network Switches</Link>
                      </li>
                      <li>
                        <Link href="#">Network Accessories</Link>
                      </li>
                      <li>
                        <Link href="#">Antennas</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="custom-search_col col-12">
                <div className="hm-form_area">
                  <form action="#" className="hm-searchbox">
                    {/*  */}
                    <input
                      type="text"
                      placeholder="Enter your search key ..."
                    />
                    <button className="header-search_btn" type="submit">
                      <i className="ion-ios-search-strong">
                        <span>Search</span>
                      </i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="custom-cart_col col-12">
                <div className="header-right_area">
                  <ul>
                    <li className="mobile-menu_wrap d-flex d-lg-none">
                      <Link
                        href="#mobileMenu"
                        className="mobile-menu_btn toolbar-btn color--white"
                      >
                        <i className="ion-navicon" />
                      </Link>
                    </li>
                    <li className="contact-us_wrap">
                      <Link href="tel://+254727401262">
                        <i className="ion-android-call" />
                        Ke: +254 727 401 262
                      </Link>
                    </li>
                    <li className="contact-us_wrap">
                      <Link href="tel://+256758937003">
                        <i className="ion-android-call" />
                        Ug: +256 758 937 003
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu_wrapper" id="mobileMenu">
          <div className="offcanvas-menu-inner">
            <div className="container">
              <Link href="#" className="btn-close">
                <i className="ion-android-close" />
              </Link>
              <div className="offcanvas-inner_search">
                <form action="#" className="inner-searchbox">
                  <input type="text" placeholder="Search for item..." />
                  <button className="search_btn" type="submit">
                    <i className="ion-ios-search-strong" />
                  </button>
                </form>
              </div>
              <nav className="offcanvas-navigation">
                <ul className="mobile-menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li className="">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="">
                    <Link href="#">Services</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="/blog">
                      <span className="mm-text">Blog</span>
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/">
                      <span className="mm-text">Page 2</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="">
                          <span className="mm-text">My Account</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <nav className="offcanvas-navigation user-setting_area">
                <ul className="mobile-menu">
                  <li className="menu-item-has-children active">
                    <Link href="#">
                      <span className="mm-text">User Setting</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="my-account.html">
                          <span className="mm-text">My Account</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="login-register.html">
                          <span className="mm-text">Login | Register</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

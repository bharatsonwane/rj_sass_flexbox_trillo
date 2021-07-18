import React, { Fragment } from 'react'

import svgIcons from 'src/assets/img/sprite.svg'

import logo from 'src/assets/img/logo.png'
import user from 'src/assets/img/user.jpg'

function NavbarMenu() {

    return (
        <Fragment>
            <header className="header">
                <img src={logo} alt="trillo logo" className="logo" />

                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search hotels" />
                    <button className="search__button">
                        <svg className="search__icon">
                            <use xlinkHref={`${svgIcons}#icon-magnifying-glass`}></use>
                        </svg>
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref={`${svgIcons}#icon-bookmark`}></use>
                        </svg>
                        <span className="user-nav__notification">7</span>
                    </div>
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref={`${svgIcons}#icon-chat`}></use>
                        </svg>
                        <span className="user-nav__notification">13</span>
                    </div>
                    <div className="user-nav__user">
                        <img src={user} alt="User photo" className="user-nav__user-photo" />
                        <span className="user-nav__user-name">Jonas</span>
                    </div>
                </nav>
            </header>

        </Fragment>
    )
}

export default NavbarMenu

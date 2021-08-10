import React, { Fragment } from 'react'
import { allClass } from 'src/helper/customModuleClassMethod'
import mdl from "./trillo.module.scss"

import NavbarMenu from 'src/components/navbarMenu/NavbarMenu'
import SidebarMenu from 'src/components/sidebarMenu/SidebarMenu'

import Gallery from './content/gallery/Gallery'
import Overview from './content/overview/Overview'
import Detail from './content/detail/Detail'




function Trillo() {

    return (
        <Fragment>
            <div className={allClass("globalContainer", "localComponentLevelContainer localComponentLevelContainer--modifier", mdl)}>
                <NavbarMenu />
                <div className={allClass("content", "content", mdl)}>
                    <SidebarMenu />
                    <main className={allClass("", "hotel-view", mdl)}>
                        <Gallery />
                        <Overview />
                        <div className={allClass("", "detail", mdl)}>
                            <Detail />
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default Trillo

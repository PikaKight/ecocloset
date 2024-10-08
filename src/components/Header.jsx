"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

/* Components */
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    
    return (
        <header className="py-8 xl:py-12" id="navbar">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/ecocloset_logo.png"
                        alt="Ecocloset Logo"
                        width={50}
                        height={50}
                        className="logo"
                    />
                </Link>
            
                {/* desktop nav bar */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                </div>
                
                {/* mobile nav bar */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
  )
}

export default Header
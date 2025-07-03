import React from 'react'

const navLinks = [
    {
        links: "Events",
        href: "#events"
    },
    {
        links: "About",
        href: "#about"
    },
    {
        links: "Contact",
        href: "#contact"
    }
]

const NavLinks = () => {
  return (
    <div>
        <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
            <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
            >
                {link.links}
            </a>
            ))}
        </nav>
    </div>
  )
}

export default NavLinks

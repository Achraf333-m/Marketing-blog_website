import { useEffect, useState } from "react";

function Nav() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const scroll = () => {
            setScrolled(false)
            if (window.scrollY > 0) {
                setScrolled(true)
            }
        }
        window.addEventListener('scroll', scroll)

        return () => {
            window.removeEventListener('scroll', scroll)
        }

    }, [])
  return (
    <nav className={`fixed top-0 transition-all duration-700 w-full ${scrolled ? 'bg-gradient-to-bl from-blue-600/50 to-black/50' : 'bg-transparent'} h-12 px-8 py-8 font-extrabold`}>
      <div className="w-full h-full flex items-center justify-around text-white text-xl">
        <figure>ShopLand</figure>
        <ul className="flex space-x-3">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

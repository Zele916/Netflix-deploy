import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className='main header'>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="">
			        ☰
			    </button>
                <div className="navbar-collapse collapse ">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/home/">Home</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">TV Shows</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Movies</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">New & Popular</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">myList</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Browser by Language</a></li>
						
						{/* <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={SearchIcon} /> </a> </li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={CartIcon} /> </a> </li> */}
			        </ul>
			    </div>
      
    </div>
  )
}

export default Header

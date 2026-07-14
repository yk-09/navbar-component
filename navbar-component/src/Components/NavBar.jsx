import './NavBar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export function NavBarDesktop(){
  return (
    <nav className="navbar nav-desktop">
      <section className="left-section">
        <figure>
          <img src="../../public/img/abstractly.svg" alt="brand-icon" />
        </figure>
      </section>
      <section className="middle-section">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </section>
      <section className="right-section">
        <button className='button learn'>
          <span>
            Learn More
          </span>
        </button>
        <button className='button price'>
          <span>
            See pricing
          </span>
        </button>
      </section>
    </nav>
  )
}

export function NavBarMobile({setIsOn, isOn}){

  function handleClick() {
    setIsOn(true);
  }

  return (
    <nav className='navbar nav-mobile'>
      <figure>
        <img src="../../public/img/abstractly.svg" alt="brand-icon" />
      </figure>
      <RxHamburgerMenu className='ham-icon' size={30} onClick={handleClick}/>
    </nav>
  )
}

export function NavigationMenu({isOn, setIsOn}) {
  return (
    <nav className={`nav-menu ${!isOn && 'slide-out'}`}>
      <div className='top-section'>
        <figure>
          <img src="../../public/img/abstractly.svg" alt="Brand-icon" />
        </figure>
        <IoClose onClick={() => {setIsOn(false)}}/>
      </div>
      <ul className='nav-links'>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className='call-to-action'>
        <button className='button learn'>
          <span>
            Learn More
          </span>
        </button>
        <button className='button price'>
          <span>
            Try it out
          </span>
        </button>
      </div>
    </nav>
  )
}
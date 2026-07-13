import './NavBar.css';

export function NavBar(){
  return (
    <nav className="navbar">
      <section className="left-section">
        <figure>
          <img src="../../public/img/abstractly.svg" alt="brand-icon" width={10} height={10} />
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
          Learn more
        </button>
        <button className='button price'>
          See pricing
        </button>
      </section>
    </nav>
  )
}
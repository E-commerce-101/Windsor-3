const NavBar =()=>{
    return(
        <div className='nav-bar'>
      <ul className='nav-menu'>
        <li className='nav-menu-item'>
          <a href='#'>Wedding</a>
          </li>
        <li className='nav-menu-item'>
          <a href='#'>Graduations</a>
          </li>
        <li className='nav-menu-item'>
          <a href='#'>Formal wear</a>
          </li>
        <li className='nav-menu-item'>
          <a href='#'>Casual wear</a>
          </li>
          <li className='nav-menu-item'>
          <a href='#'>shoes</a>
          </li>
          <li className='nav-menu-item'>
          <a href='#'>Accessories</a>
          </li>
      </ul>
      <div className='nav-action'>
        <form className='search-form'>
          <span className='material-symbols-outlined'>search</span>
          <input type='text' name='search-input' placeholder='search'/>
        </form>
        <span className='material-symbols-outlined'>shopping_bag</span>
      </div>
      </div>
    )
}
export default NavBar
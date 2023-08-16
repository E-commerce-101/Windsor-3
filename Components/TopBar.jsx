const TopBar =()=>{
    return(
        <div className='top-bar'>
      <div className='Support'><a href='#'>Support</a></div>
      <div className='top-bar-cta'>Up to 60% Off | in with the new</div>
      <div className='Myaccount'>
      <form>
        <select name='account'> 
        <option value='choose'>MY ACCOUNT</option>
        </select>
      </form>
      </div>
     </div>
    )
}
export default TopBar
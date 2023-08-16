import bottom from "../assets/bottom.png"
import top from "../assets/top.png"
import dress from "../assets/dress.png"
import outfits from "../assets/outfits.jpg"
import lastoutfit from "../assets/going-out-outfits.png"
import bridesmaid from "../assets/bridesmaid-dresses.png"
import windsorsale from "../assets/windsor-summer-sale-60-off.png"
import dressesSummer from "../assets/dresses-summer.png"
const HomeGrid =()=>{
    return(
        <div className="home-grid">
        <div className='grid-items'>
          <div className='grid-block'>
          <h2>DRESSES</h2>
          <img src={dress}/>
          <p>Sophia Formal Rose Applique Pink Mini Dress Featuring A Strapless
            Straight-Across Neckline,Statement Rosette Appliques At The Bodice
            And Hip,Flexible Boning Inserts At The Bodice, A Mini-Length Hem, 
            And A Form-Hugging Fit.
          </p>
          </div>
          <div className='grid-block'>
          <h2>TOPS</h2>
          <img src={top}/>
          <p>Featuring Long Fitted Sleeves, Tie-Front Design Creating A V-Neckline
            Cropped Hem,& A Multi-color Printed Design Styled With Denim Shorts With
            Lace-Up Slide, A Pink Boater Hat,&Fashion Jewelry.
          </p>
          </div>
        <div className='grid-block'>
          <h2>BOTTOMS</h2>
          <img src={bottom}/>
          <p>Pink Swirl Print Flare Pants Featuring A High-Rise Waist, A Form-Hugging 
            Fit With A Flared Hem, & Stretchy Brushed Knit Fabric In A Retro-Inspired 
            Swirl Print Pattern Styled With A Pink Faux Leather Corset Top.
          </p>
        </div>
      </div>
      <div className='mid-body'>
        <img src={outfits}/>
      </div>
      <div className='body-nav'>
      <ul className='body-nav-menu'>
        <li className='bodynav-menu-item'>
          <a href='#'>SHORT & MINI DRESSES</a>
          </li>
        <li className='nav-menu-item'>
          <a href='#'>MATCHING SETS</a>
          </li>
        <li className='nav-menu-item'>
          <a href='#'>CROP TOPS</a>
          </li>
        <li className='nav-menu-item'>
          <a href='#'>HEEELS</a>
          </li>
      </ul>
      </div>
      <div className='second-body-pic'>
        <img src={lastoutfit}/>
      </div>
      <div className='second-nav'>
      <ul className='second-nav-menu'>
        <li className='second-nav-menu-item'>
          <a href='#'>BODYCON DRESSES</a>
          </li>
        <li className='nav-menu-item'>
          <a href='#'>CORSETS & BUSTIERS</a>
          </li>
        <li className='nav-menu-item'>
          <a href='#'>MINI SKIRTS</a>
          </li>
        <li className='nav-menu-item'>
          <a href='#'>ACCESSORIES</a>
          </li>
      </ul>
      </div>
      <div className="pictures">
        <img src={dressesSummer}/>
        <img src={windsorsale}/>
        <img src={bridesmaid}/>
      </div>
      </div>
    )
}
export default HomeGrid
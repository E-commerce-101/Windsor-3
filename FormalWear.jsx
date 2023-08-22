import './App.css'
import Formal1 from '../assets/Formal wear/formal12.png'
import Formal2 from '../assets/Formal wear/formal9.png'
import Formal3 from '../assets/Formal wear/formal8.png'
import Formal4 from '../assets/Formal wear/formal26.jpg'
import Formal5 from '../assets/Formal wear/formal25.jpg'
import Formal6 from '../assets/Formal wear/formal23.jpg'
import Formal7 from '../assets/Formal wear/formal27.jpg'
import Formal8 from '../assets/Formal wear/formal28.jpg'
const FormalWear=()=>{
    return(
       <div className='ProductGrid'>
        <div className='grid-items'>
          <div className='grid-block'>
          <img src={Formal1}/>
          </div>
          <div className='grid-block'>
          <img src={Formal2}/>
          </div>
        <div className='grid-block'>
          <img src={Formal3}/>
        </div>
        <div className='grid-block'>
          <img src={Formal4}/>
          </div>
          <div className='grid-block'>
          <img src={Formal5}/>
          </div>
          <div className='grid-block'>
          <img src={Formal6}/>
          </div>
          <div className='grid-block'>
          <img src={Formal7}/>
          </div>
          <div className='grid-block'>
          <img src={Formal8}/>
          </div>
      </div>
      </div> 
    )
}
  export default FormalWear

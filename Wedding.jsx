import './App.css'
import Wedding1 from '../assets/Wedding/crop_center1.png'
import Wedding2 from '../assets/Wedding/crop_center2.png'
import Wedding3 from '../assets/Wedding/crop_center3.png'
import Wedding4 from '../assets/Wedding/crop_center4.png'
import Wedding5 from '../assets/Wedding/crop_center5.png'
import Wedding6 from '../assets/Wedding/crop_center6.png'
import Wedding7 from '../assets/Wedding/crop_center7.png'
import Wedding8 from '../assets/Wedding/crop_center8.png'
const Wedding=()=>{
    return(
       <div className='ProductGrid'>
        <div className='grid-itemsP'>
          <div className='grid-blockP'>
          <img src={Wedding1}/>
          </div>
          <div className='grid-blockP'>
          <img src={Wedding2}/>
          </div>
        <div className='grid-blockP'>
          <img src={Wedding3}/>
        </div>
        <div className='grid-blockP'>
          <img src={Wedding4}/>
          </div>
          <div className='grid-blockP'>
          <img src={Wedding5}/>
          </div>
          <div className='grid-blockP'>
          <img src={Wedding6}/>
          </div>
          <div className='grid-blockP'>
          <img src={Wedding7}/>
          </div>
          <div className='grid-blockP'>
          <img src={Wedding8}/>
          </div>
      </div>
      </div> 
    )
}
  export default Wedding
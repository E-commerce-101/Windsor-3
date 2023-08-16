import partydress from "../assets/party-dress.jpg"
import jumpsuits from "../assets/jumpsuit.jpg"
import Corset from "../assets/corset.jpg"
import home from "../assets/HomePic.png"
import body from "../assets/homePic2.jpg"

const Content =()=>{
    return(
        <div className='content'>
      <div className="body">
      <img src={home} alt='website home image'/>
      </div>
      <div className="body-grid">
        <div className='grid-items'>
          <div className='grid-block'>
          <img src={jumpsuits}/>
          </div>
          <div className='grid-block'>
          <img src={Corset}/>
          </div>
        <div className='grid-block'>
          <img src={partydress}/>
        </div>
      </div>
      </div>
      <div className="post-body">
      <img src={body} alt='website second home image'/>
      </div>
      <h3>SHE IS GIVING PINK</h3>
      </div>
    )
}

export default Content
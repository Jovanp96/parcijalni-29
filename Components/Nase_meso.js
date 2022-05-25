import './Nase_meso.css'
import Cow from '../Assets/Cow-256.png'
import Heart from '../Assets/Heart-256.png'
import hamburger from '../Assets/hamburger.png'

const Nase_meso =()=> {
  return (
    <div className='nase_meso-main'>
      <h2>NAŠE MESO JE...</h2>
      <div className='nase_meso-item'>
        <img src={Cow}></img>
        <div className='nase_meso-item-text'>
          <h3>NAJKVALITETNIJE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className='nase_meso-item'>
        <img className='heart' src={Heart}></img>
        <div className='nase_meso-item-text'>
          <h3 className='left-text'>NAJKVALITETNIJE</h3>
          <p className='left-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className='nase_meso-item'>
        <img src={hamburger}></img>
        <div className='nase_meso-item-text'>
          <h3>NAJKVALITETNIJE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  )
}

export default Nase_meso;
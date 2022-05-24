import './Header.css'
import logo from '../Assets/logo_favicon.png'

const Header =()=> {
  return (
    <div className='header-main'>
        <div className='header-nav'>
          <div className='header-nav_items'>
            <img src={logo}/>
            <h3>POČETNA</h3>
            <h3>O NAMA</h3>
            <h3>NAŠE MESO</h3>
            <h3>LOKACIJE</h3>
            <h3>RECEPTI</h3>
            <h3>KONTAKT</h3>
            </div>  
        </div>
        <div className='header-text'>
          <h1>SVEŽA ORGANSKA </h1>
          <h1>GOVEDINA SA</h1>
          <h1>NAŠE FARME</h1>
          <h1>PRAVO NA <span style={{color: '#913535'}}>VAŠ</span></h1>
          <h1><span style={{color: '#913535'}}>PRAG</span>.</h1>
        </div>
    </div>
  )
}

export default Header;
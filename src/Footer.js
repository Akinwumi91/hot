import React from 'react'


const Footer = () => {
  return (
    <div className=' footcontainer'>

    
    <div className='innerfoot footer row'>
    <div className='col-sm-6 col-md-3 col-lg-3'>
    <ul className='navbar-nav quesandcontact'>
    <li className='nav-item'><a className='nav-link' href="">Questions? Contact us.</a></li>
    </ul>
    <ul className='navbar-nav'>
      <li className='nav-item'><a className='nav-link' href="">FAQ</a></li>
      <li className='nav-item'><a className='nav-link' href="">Media Center</a></li>
      <li className='nav-item'><a className='nav-link' href="">Way to watch</a></li>
      <li className='nav-item'><a className='nav-link' href="">Cookies Prefrences</a></li>
      <li className='nav-item'><a className='nav-link' href="">Speed Test</a></li>
     </ul>
     </div>
     

     <div className='col-sm-6 col-md-3 col-lg-3'>
     <ul className='navbar-nav'>
      <li className='nav-item'><a className='nav-link' href="">Help Center</a></li>
      <li className='nav-item'><a className='nav-link' href="">Investor Relations</a></li>
      <li className='nav-item'><a className='nav-link' href="">Terms of use</a></li>
      <li className='nav-item'><a className='nav-link' href="">Corporate Information</a></li>
      <li className='nav-item'><a className='nav-link' href="">Legal Notices</a></li>
     </ul>
     </div>

     <div className='col-sm-6 col-md-3 col-lg-3'>
     <ul className='navbar-nav'>
      <li className='nav-item'><a className='nav-link' href="">Account</a></li>
      <li className='nav-item'><a className='nav-link' href="">Jobs</a></li>
      <li className='nav-item'><a className='nav-link' href="">Contact Us</a></li>
      <li className='nav-item'><a className='nav-link' href="">Corporate Information</a></li>
      <li className='nav-item'><a className='nav-link' href="">Only on Netflix</a></li>
     </ul>
     </div>
    </div>
    </div>
  )
}

export default Footer


{/* <div className='subscribe col-sm-6 col-md-4 col-lg-3'>
<h6>Subscribe</h6>
 <form action="">
   <input 
   type="text"
   placeholder='Enter Your Email'
    />
    <button type='submit' className='btn btn-sm'>Subcribe</button>
 </form>
</div> */}
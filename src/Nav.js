import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="nav">
    
     <section className="topimge">
     <nav className="mynav navbar navbar-expand-lg ">
      <div className="brand">
      <a href=""><img src="./image/logonetflix.png" alt="" height='40px' /></a>
      </div>

      <div className="signin" >
      <a href="/signin">Sign In</a>
      </div>
    </nav>
       <div className="topwords ">
       <div className='topwordword'>
        <h2>Unlimited movies, TV shows, and more</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
       </div>
      <form action="">
        <input 
        type="text"
        placeholder='Enter Your Email'
          />
        <button type='submit' className='btn btn-sm'>Get Started <FontAwesomeIcon icon={faArrowRight}  color="white" /></button>
      </form>
       </div>
     </section>
    </div>
  );
}

export default App;

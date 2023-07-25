import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Home() {
  const[isopen, setisopen] = useState(false)
  const[isopen2, setisopen2] = useState(false)
  const[isopen3, setisopen3] = useState(false)
  const[isopen4, setisopen4] = useState(false)
  const[isopen5, setisopen5] = useState(false)
  const[isopen6, setisopen6] = useState(false)
  return (
    <div className="home">
    

    <section className='sectionone homein' >
     <div className='contain row'>
     <div className='sec1 toptext col-md-6'>
     <h2>Enjoy on your TV</h2>
     <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>     </div>
     <div className='sec1 col-md-6'>
     <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="nmhp-card-animation-asset-image" className="default-ltr-cache-1d3w5wq" width='400px' />
     </div>
     </div>
    </section>
    <section className='sectiontwo homein' >
     <div className='contain row'>
     <div className='sec1 col-md-6'>
     <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="nmhp-card-animation-asset-image" className="default-ltr-cache-1d3w5wq" width='400px' />
     </div>
     <div className='sec1 col-md-6'>
     <h2>Download your shows to watch offline</h2>
     <p>Save your favorites easily and always have something to watch.</p>
     </div>
     </div>
    </section>

    <section className='sectionthree homein' >
     <div className='contain row'>
     <div className='sec1 col-md-6'>
     <h2>Watch everywhere</h2>
     <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
     </div>
     <div className='sec1 col-md-6'>
     </div>
     </div>
    </section>

    <section className='sectionfour homein'>
     <div className='contain row'>
     <div className='sec1 col-md-6'>
     <img alt="" src="https://occ-0-5544-299.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" data-uia="nmhp-card-animation-asset-image" className="default-ltr-cache-1d3w5wq"  />
    </div>
     
     <div className='sec1 col-md-6'>
     <h2>Enjoy on your TV</h2>
     <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
     </div>
     </div>
    </section>

    <section className='sectionfive homein row' >
     <div className='sec5 sec1 col-md-12'>
     <h1 className=' faq'>Frequently Asked Questions</h1>
     
     <div>
      <button onClick={() => setisopen(!isopen)}><span>What is Netflix ? </span> {isopen ? <FontAwesomeIcon icon={faTimes} onClick={() => setisopen(false)} className='times' color="white" /> : <FontAwesomeIcon icon={faPlus} className='plus' color="white" /> } </button>
      <div className={isopen ? "showanswer" : "answer"}>
      <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
         You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
      </p>
      </div>
     </div>

     <div>
      <button onClick={() => setisopen2(!isopen2)}><span>How much does Netflix cost ? </span> {isopen2 ? <FontAwesomeIcon icon={faTimes} onClick={() => setisopen2(false)} className='times' color="white" /> : <FontAwesomeIcon icon={faPlus} className='plus' color="white" /> } </button>
      <div className={isopen2 ? "showanswer" : "answer"}>
      <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
      </p>
      </div>
     </div>

     <div>
      <button onClick={() => setisopen3(!isopen3)}><span>Where can I watch ? </span> {isopen3 ? <FontAwesomeIcon icon={faTimes} onClick={() => setisopen3(false)} className='times' color="white" /> : <FontAwesomeIcon icon={faPlus} className='plus' color="white" /> } </button>
      <div className={isopen3 ? "showanswer" : "answer"}>
      <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
          You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
      </p>
      </div>
     </div>

     <div>
      <button onClick={() => setisopen4(!isopen4)}><span>How do I cancel ? </span> {isopen4 ? <FontAwesomeIcon icon={faTimes} onClick={() => setisopen4(false)} className='times' color="white" /> : <FontAwesomeIcon icon={faPlus} className='plus' color="white" /> } </button>
      <div className={isopen4 ? "showanswer" : "answer"}>
      <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
      </p>
      </div>
     </div>

     <div>
      <button onClick={() => setisopen5(!isopen5)}><span>What can I watch on Netflix ? </span> {isopen5 ? <FontAwesomeIcon icon={faTimes} onClick={() => setisopen5(false)} className='times' color="white" /> : <FontAwesomeIcon icon={faPlus} className='plus' color="white" /> } </button>
      <div className={isopen5 ? "showanswer" : "answer"}>
      <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
      </p>
      </div>
     </div>

     <div>
      <button onClick={() => setisopen6(!isopen6)}><span>Is Netflix good for kids ? </span> {isopen6 ? <FontAwesomeIcon icon={faTimes} onClick={() => setisopen6(false)} className='times' color="white" /> : <FontAwesomeIcon icon={faPlus} className='plus' color="white" /> } </button>
      <div className={isopen6 ? "showanswer" : "answer"}>
      <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
         Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
      </p>
      </div>
     </div>

     </div>

     <div className="topwords ">
     <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <form action="">
        <input 
        type="text"
        placeholder='Enter Your Email'
          />
        <button type='submit' className='btn btn-sm'>Get Started  <FontAwesomeIcon icon={faArrowRight}  color="white" /></button>
      </form>

      </div>
    </section>


   
    </div>
  );
}

export default Home;

{/* <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="nmhp-card-animation-asset-image" className="default-ltr-cache-1d3w5wq"> */}

{/* <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="nmhp-card-animation-asset-image" class="default-ltr-cache-1d3w5wq"></img> */}

{/* <img alt="" src="https://occ-0-5544-299.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" data-uia="nmhp-card-animation-asset-image" class="default-ltr-cache-1d3w5wq"> */}

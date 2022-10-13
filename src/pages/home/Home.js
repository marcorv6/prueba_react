import React, {useState} from 'react'
import Countdown from '../../components/countdown/Countdown'
import Videos from '../../components/videos/Videos'
import styles from './Home.module.css'

function Home() {
  const urlsAndTexts = [
    {url: 'https://www.youtube.com/embed/1Q8fG0TtVAY', text: 'Texto de ejemplo 1'},
    {url: 'https://www.youtube.com/embed/DBXH9jJRaDk', text: 'Texto de ejemplo 1'},
    {url: 'https://www.youtube.com/embed/FAv9MJm5ylQ', text: 'Texto de ejemplo 1'},
    {url: 'https://www.youtube.com/embed/ygluZ0tB8S4', text: 'Texto de ejemplo 1'},
  ];
  const [activeUrl, setActiveUrl] = useState(urlsAndTexts[0].url);
  const [active, setActive] = useState(0);
  
  const handleChangeActiveUrl = (id) => {
    setActiveUrl(urlsAndTexts[id].url);
    setActive(id);
  };
  return (
    <div className={`${styles.homeContainer}`}>
      <div className={`${styles.coundownContainer}`}>
        <h2 className='text-center text-white pt-4 mb-4'><b>FALTAN</b></h2>
        <div className='d-flex justify-content-center'>
          <Countdown className={`${styles.homeContainer}`} />
        </div>
        <div className='d-flex justify-content-center mt-5 pb-5'>
          {/* 16/9 iframe */}
          <iframe className={`${styles.iframe}`} title='main'
            src={activeUrl}>
          </iframe>
        </div>
      </div>
      <div className={`${styles.videosContainer} text-white d-flex justify-content-center`}>
        <Videos handleChangeActiveUrl={handleChangeActiveUrl} active={active}/>
      </div>
    </div>
  )
}

export default Home
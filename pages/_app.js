import '../styles/root.css'

import '../styles/header.css'

import '../styles/footer.css'



import '../styles/App.scss';



import '../styles/index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React , { useState , useEffect } from 'react'


export default function MyApp({ Component, pageProps }) {
	
	
	
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)



const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {



  return (

 
  

getLayout(<Component {...pageProps} />)


 

  

) 

} 

}

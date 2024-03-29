import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Meta from './Meta'
import Sidebar from './Sidebar'

import Header from './Header'




import AuthContextProvider from '/context/authContext'

import { BrowserRouter as Router   } from 'react-router-dom'


const Layout = ({ meta, children, ...props }) => {
  const router = useRouter()
  return (
  
  <Router>
  
  <AuthContextProvider>
    <div className="max-w-screen min-h-screen lg:flex">
      <Meta {...meta} />
      <Sidebar />
      <Header />
      
      <div className="mx-auto flex w-[100%] max-w-screen-xl flex-col">
        <main className="flex-1 px-2 py-2 md:px-6" {...props}>
        
      
        
          {children}
          
          
          
        </main>
        {router.pathname === '/' && <Footer />}
        
      </div>
    </div>
    
   </AuthContextProvider>
   
   </Router>
    
  )
}

export default Layout

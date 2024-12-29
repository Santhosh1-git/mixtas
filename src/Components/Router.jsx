import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { page } from './Linkpages'

import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Pages from '../Pages/Pages'
import Blog from '../Pages/Blog'
import Contactus from '../Pages/Contactus'
// blog admins
import Ad_min1 from '../Pages/Admin_pages/Ad_min1'
import Ad_min2 from '../Pages/Admin_pages/Ad_min2'
import Ad_min3 from '../Pages/Admin_pages/Ad_min3'
import Ad_min4 from '../Pages/Admin_pages/Ad_min4'
import Ad_min5 from '../Pages/Admin_pages/Ad_min5'
import Ad_min6 from '../Pages/Admin_pages/Ad_min6'
import Singleshop from './Singleshop'
import Favorit from './Favorit'
import Singleshop2 from '../Components/Singleshop2'
import Singleshop3 from './Singleshop3'
import Search_shop from './Search_shop'

function Router() {
  const link1=page.link1
  const link2=page.link2
  const link3=page.link3
  const link4=page.link4
  const link5=page.link5
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/' >
          <Route path={link1} element={<Home/>} />
          <Route path={link2} element={<Shop/>} />
          <Route path={link3} element={<Pages/>} />
          <Route path={link4} element={<Blog/>} />
          <Route path={link5} element={<Contactus/>} />
          </Route> 
          <Route path='/' >
          <Route path='Ad_min1' element={<Ad_min1/>}/>
          <Route path='Ad_min2' element={<Ad_min2/>}/>
          <Route path='Ad_min3' element={<Ad_min3/>}/>
          <Route path='Ad_min4' element={<Ad_min4/>}/>
          <Route path='Ad_min5' element={<Ad_min5/>}/>
          <Route path='Ad_min6' element={<Ad_min6/>}/>
          </Route> 
          <Route path='/SHOP/singleshop/:id' element={<Singleshop/>}/>
          <Route path={'/favorite'}  element={<Favorit/>}/>
         
          <Route path='singleshop2/:id' element={<Singleshop2/>}/>
          <Route path='/HOME/singleshop2/:id' element={<Singleshop2/>}/>
         
          <Route  path={'singleshop3/:id'} element={<Singleshop3/>}/>
          <Route  path={'/HOME/singleshop3/:id'} element={<Singleshop3/>}/>
         
          <Route  path={'Search_shop/:id'} element={<Search_shop/>}/>
          <Route  path={'/HOME/Search_shop/:id'} element={<Search_shop/>}/>
          <Route  path={'/SHOP/Search_shop/:id'} element={<Search_shop/>}/>
          <Route  path={'/ABOUT/Search_shop/:id'} element={<Search_shop/>}/>
          <Route  path={'/BLOG/Search_shop/:id'} element={<Search_shop/>}/>
          <Route  path={'/CONTACTUS/Search_shop/:id'} element={<Search_shop/>}/>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default Router

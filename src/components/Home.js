import React from 'react'
import {Carousel} from 'react-bootstrap'
import { FaFacebook,FaInstagram,FaWhatsapp} from "react-icons/fa"

import {Link}from "react-router-dom";


function Home(){
  return(
     
  <div>
     
     <Carousel >
  <Carousel.Item>
    <img
      className="  d-block w-100 see"
      id="1"

      src="http://www.letshelpindia.in/images/causes/donateclothes/3.JPG"
      alt=""
    />
    <Carousel.Caption>


    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" d-block w-100 see"
      id="2"
      src="http://www.letshelpindia.in/images/causes/donateclothes/4.JPG"
      alt=""
    />

    <Carousel.Caption>
     
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 see"
      id="3"
      src="https://sadsindia.org/wp-content/uploads/2018/07/spreadhappiness-collage.jpg"
      alt=""
    />

    <Carousel.Caption>
  
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   <div className=" pt-5 photo">
    <h1>
      IT'S BETTER TO DONATE THAN ACCUMULATE
    </h1>
    <h3 className="pt-5">
         ----------------------------------------------------------Our Memories----------------------------------------------------------
    </h3>
   </div>



        <div  >
          <div className=" text-white">
         <h1 className="text-center"> Book Now</h1>
         
         <div className="card-group">
  <div className="card  bg-black m-3 dem">
    <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/12/soundofhope.jpg" className=" h-100" alt=""/>
    
  </div>
  <div className="card bg-black m-3">
    <img src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/299801202_373034578367784_6947659053059024139_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C5a6deXJswQAX_CViUJ&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfCASMMNoieuZD1Pj-iSqU2F6LrgDRlSCnlXLMl2jnsnqw&oe=63927023" className="h-100" alt=""/>
    
  </div>
  <div className="card bg-black m-3">
    <img src="http://vrikshbethechange.org/images/past_events/2018_11/8.jpg" className="h-100" alt=""/>
    
    
  </div>
</div>


<div className="card-group ">
  <div className="card bg-black m-3">
    <img src="https://www.sanchayika.org/wp-content/uploads/2018/11/Cloth-Distribution_09-870x500.jpg" className="h-100" alt=""/>
    
  </div>
  <div className="card bg-black m-3">
    <img src="https://i1.wp.com/www.udayfoundation.org/wp-content/uploads/2017/11/doante-blankets-7.jpg?w=1224&ssl=1" className="h-100" alt=""/>
    
   
  </div>
  <div className="card bg-black m-3">
    <img src="http://shuds.org/wp-content/uploads/2016/04/3.jpg" className="h-100" alt=""/>
    
    
  </div>
</div>

    </div>
    
    
        </div>
    

        <div className=" text-white">
         <h1 className="text-center"> Book Now</h1>
         
         <div className="card-group">
  <div className="card  bg-black m-3 dem">
    <img src="http://www.letsnotforget.in/assets/images/clothes_h.jpg" className=" h-100" alt=""/>
    
  </div>
  <div className="card bg-black m-3">
    <img src="http://www.higherground.com.np/wp-content/uploads/2020/03/DSC1160.jpg" className="h-100" alt=""/>
    
  </div>
  <div className="card bg-black m-3">
    <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/http://www.sabrihelpage.org/wp-content/uploads/2020/01/cloth_distribution90-1.jpg" className="h-100" alt=""/>
    
    
  </div>
</div>


<div className="card-group ">
  <div className="card bg-black m-3">
    <img src="http://www.higherground.com.np/wp-content/uploads/2020/03/57004809_2710184462341366_6149107937563377664_o-1.jpg" className="h-100" alt=""/>
    
  </div>
  <div className="card bg-black m-3">
    <img src="https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/19000/19672/image/63a3ea71d4dde40be4ea05a5a8de93c5b7a140b0.jpg" className="h-100" alt=""/>
    
   
  </div>
  <div className="card bg-black m-3">
    <img src="https://en-media.thebetterindia.com/uploads/2019/04/Saju-Clothes-Bank-WP.jpg" className="h-100" alt=""/>
    
    
  </div>
</div>

    </div>

  </div>
    

    
  )
}
export default Home
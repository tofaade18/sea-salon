<template>
    <div class="hero">
      <div class="hero-text">
        <h1>Your Style<br> Would 'Bomb' Your Surroundings!</h1>
        <a href="#featured" class="btn">Explore</a>
      </div>
    </div>
    
    <!-- Featured Section -->
    <section id="featured" style="background-color: rgba(30, 20, 18,0.8);">
      <div class="wrapper" style="flex-direction: row-reverse;">
        <div class="image mb-5">
          <img src="https://www.pngitem.com/pimgs/m/42-422052_hair-gel-png-download-image-cosmetics-transparent-png.png" alt="Facial Cream">
        </div>
        <div class="text mr-2">
          <h2>Pomade Dragon</h2>
          <p>A lightweight formula that packs a punch with avocado protein extract to strengthen skin's own moisture barrier, sealing in hydration to protect, nourish and soften skin.</p>
          <a href="#" class=btn>Details</a>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="title title-left">
        <span class="line"></span><h3>Pomade</h3>
      </div>
      <div class="wrapper">
        <div class="text">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti maxime aliquam ad repudiandae eos, iste provident sit nemo mollitia esse asperiores, nisi laudantium fugit numquam ab sequi possimus quis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis aut earum, amet quos ad consequuntur ipsa ducimus optio qui? Nisi commodi necessitatibus quaerat neque accusamus quis ullam nulla error.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure dolorum molestias officiis dolores! Reprehenderit necessitatibus iure earum dolorum possimus odit sit autem ut dolores, ea voluptas aliquid! Molestias, minima.</p>
        </div>
        <div class="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LwLIDIjhyKk?si=90uJlENNMl74CbdB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
      </div>
    </section>
      </template>
      
      <script>
      export default {
        name: 'Hairstyle-page'
      }
      </script>
      
    <style scoped>
    .btn{
      display: inline-block;
      padding: .5em 1.5em;
      border: solid 1px #d3e7c9;
      color: gainsboro;  
      transition: all .3s ease-in;
    }
    .btn:hover, .btn:focus{
      transform: translate(0px, -2px);
      -webkit-box-shadow: 0px 10px 7px -9px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 10px 7px -9px rgba(0,0,0,0.75);
      box-shadow: 0px 10px 7px -9px rgba(0,0,0,0.75);
      transition: all .3s ease-out; 
    }
    .hero {
        display: flex;
        height: 100vh;
        align-items: center;
        background: linear-gradient(rgba(36, 39, 38, 0.5), rgba(36, 39, 38, 0.5)), rgba(36, 39, 38, 0.5) url('https://themewagon.github.io/Man-Hair-Salon/images/hero-img.jpg') no-repeat center;
        background-size: cover;
    }
    .hero-text{
      padding: 0 2em 7.5em;
    }
    
    /* Featured Section */
    #featured .image img{
      width: 100%;
      height: auto;
    }
    .text{
      text-align: center;
      padding-top: 1em;
    }
    .text p{
      text-align: justify;
      padding-bottom: 1em;
      line-height: 1.4em;
    }
    
    .box{
      display: block;
      position: relative;
      padding: 1.3em;
      background-color: #f5d9d6;
      text-align: center;
      margin-bottom: 2em;
    }
    .box-overlay {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
        border: solid 3px #fff;
        transform: translate(8px, 8px);
      transition: all 1s ease;
    }
    .box:last-child{
      margin-bottom: 5.8em;
    }
    .box:hover .box-overlay,
    .box:focus .box-overlay
    {
      transform: translate(0px, 0px) scale(0.92, 0.8);
    }
    
    /* About Section */
    #about{
      background-color: #f5d9d6;
    }
    section#about{
      padding-bottom: 5.8em;
    }
    #about .text{
      padding-top: 0;
      margin-top: 0;
      padding-bottom: 2em;
    }
    #about .text p{
      padding-bottom: 0;
      text-align: left;
    }
    .video-wrapper{
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      overflow: hidden;
      height: 0;
    }
    .video-wrapper iframe{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    /* Contact Section */
    section#contact{
      padding: 3em 2em .5em;
    }
    .form-wrapper:after,
    .contact-wrapper:after{
      display: block;
      content: "";
      margin: 2em auto;
      border-bottom: solid 1px #dadada;
    }
    form{
      display: flex;
    }
    form input:first-child{
      flex: 1 0 80%;
      background-color: transparent;
    }
    form input:last-child{
      flex: 1 0 20%;
      border-left: 0;  
      cursor: pointer;
      background-color: #f5d9d6;
      transition: all .25s ease;
    }
    #submit:hover {
        background-color: #000;
        color: #fff;
      transition: all .25s ease;
    }
    input{
      padding: 1em;
      border: 1px solid #000;
    }
    .contact-wrapper .wrapper{
      display: flex;
      text-align: center;
      flex-wrap: wrap;
    }
    .contact-wrapper .social-menu{
      flex: 1 0 100%;
      justify-content: center;
    }
    .contact-wrapper .social-menu li a {
        font-size: 1.5em;
      padding: 0;
      margin: 0 1.5em 0 0;
    }
    .contact-wrapper a i{
      width: 100%;
      padding-bottom: .2em;
    }
    .contact-footer{
      padding: 1em 0;
      border: 1px solid #000;
    }
    .contact-footer:last-child{
      border-left: 0;
    }
    .contact-footer:hover{
      background-color: #f5d9d6;
    }
    .contact-tel{
      flex: 1 0 50%;
    }
    .contact-email{
      flex: 1 0 50%;
    }
    .copy-wrapper a{
      font-weight: 700;
    }
    
    /* Responsive Style */
    @media(min-width: 320px){
      
    }
    @media(min-width: 576px){
      /*  Global  */
      h1{
        font-size: 2em;
      }
      
      /*  Hero Section  */
      .hero{
        justify-content: center;
        overflow: hidden;
      }
      .hero-text{
        padding: 0 2em;
        color: gainsboro;
      }
      
      /*  Featured Section  */
      .text{
        margin: 2em 2em auto;
      }
      
      /*  Collections Section  */
      #collections .wrapper{
        display: flex;
        flex-wrap: wrap;
      }
      .box{
        padding: 3.2em;
      }
      .box1{
        flex: 1 0 47%;
        margin-right: 1em;
      }
      .box2{
        flex: 1 0 47%;
      }
      .box3{
        flex: 2 0 100%;
      }
      
      /*  About Section  */
      .video-wrapper{
        margin: 0 2em;
      }
    }
    @media(min-width: 768px){
      /*  Global  */
      .wrapper{
        display: flex;
      }
      
      /*  Header  */
      .nav-brand img{
        height: 10em;
      }
      .toggle-menu{
        display: none;
      }
      .navbar{
        display: flex;
        position: relative;
        height: auto;
        width: auto;
        background-color: transparent;
        z-index: 1;
      }
      .menu{
        flex-direction: row;
        padding: 0;
        justify-content: flex-end;
      }
      .social-menu{
        display: none;
      }
      .menu li{
        margin-top: 0;
      }
      a.nav-link{
        margin-right: 3em;
      }
      
      /*  Featured Section  */  
      .text{
        text-align: left;    
        margin: 0 0 auto 4em;
      }
      #featured .text{
        flex: 1;
        order: 1;
        color: gainsboro;
      }
      #featured .image{
        flex: 1 0 12em;
        order: 2;
      }
      
      /*  Collections Section  */
      #collections .wrapper{
        margin: 0 4em;
      }
      
      /*  About Section  */
      #about .wrapper{
        display: block;
      }
      #about .text{
        margin-right: 4em;
      }
      .video-wrapper{
        margin: auto 4em;
      }
      
      /* Contact Section  */
      #contact .wrapper{
        flex-wrap: wrap;
      }
      .form-wrapper, .contact-wrapper{
        flex: 1 0 50%;
        align-self: center;
        padding: 0 1em;
      }
      .copy-wrapper{
        flex: 1 0 100%;
        padding: 0 1em;
      }
      .form-wrapper:after,
      .contact-wrapper:after{
        display: none;
      }
      .contact-footer{
        border: 0;
        padding: 0;
        margin: .6em auto;
        text-align: left;
      }
      .contact-footer:hover{
        background-color: transparent;
      }
      .contact-wrapper a i{
        width: auto;
        padding-right: 1em;
      }
      .contact-wrapper .social-menu{
        display: flex;
        order: 3;
        justify-content: flex-start;
      }
      .contact-wrapper .social-menu a i{
        padding-right: 0;
      }
      .copy-wrapper:before{
        display: block;
        content: "";
        margin: 2em auto;
        border-bottom: solid 1px #dadada;
      }
    }
    @media(min-width: 992px){
      /*  Global  */
      section{
        padding: 5.8em 7em 0;
      }  
      .title.title-left{
        margin-left: -2.5em;
      }
      .title.title-right{
        margin-right: -2.5em;
      }
      .line{
        width: 5.5em;
      }
      
      /*  Hero Section  */
      .hero-img img{
        width: 14.5em;
      }
      
      /*  Featured Section  */
      #featured .image{
        margin-top: -2em;
      }
      
      /* About Section  */
      #about .wrapper{
        display: flex;
      }
      #about .text{
        flex: 1 0 40%;
        margin-right: 1em;
        padding-bottom: 0;
      }
      .video-wrapper{
        flex: 2 0 55%;
        padding-bottom: 33.25%;
        align-self: center;
        margin: 1.4em 0;        
      }
      .contact-tel{
        flex-basis: 20%;
      }
    }
    @media(min-width: 1200px){
      /*  Global  */
      h1{
        font-size: 2.4em;
      }
      section{
        padding: 5.8em 11em 0;
      }
      
      /*  Hero Section  */
      .hero-img img{
        width: 15.5em;
      }
      
      /*  Featured Section  */
      #featured .image{
        margin-top: -4em;
      }
      
      /*  About Section  */
      #about .text{
        padding-right: 3em;
        padding-bottom: 0;
      }
      .video-wrapper{
        margin: 0;
      }
    }
      </style>
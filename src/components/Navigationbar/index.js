import React from 'react';
import './index.css';
import $ from 'jquery';

const NavigationBar = () => <nav>
<div className="nav-fostrap">
  <ul>
    <li><a href="">Home</a></li>
    <li><a href="">Web Design<span className="arrow-down"></span></a>
      <ul className="dropdown">
        <li><a href="">HTML</a></li>
        <li><a href="">CSS</a></li>
        <li><a href="">Javascript</a></li>
        <li><a href="">JQuery</a></li>
      </ul>
    </li>
    <li><a href="" >Blogger<span className="arrow-down"></span></a>
      <ul className="dropdown">
        <li><a href="">Widget</a></li>
        <li><a href="">Tips</a></li>
      </ul>
    </li>
    <li><a href="" >SEO<span className="arrow-down"></span></a>
      <ul className="dropdown">
        <li><a href="">Tools</a></li>
        <li><a href="">Backlink</a></li>
      </ul>
    </li>
    <li><a href="">Google Adsense</a></li>
    <li><a href="">Advertising</a></li>
    <li><a href="">Business</a></li>
  </ul>
</div>
<div className="nav-bg-fostrap">
  <div className="navbar-fostrap"> <span></span> <span></span> <span></span> </div>
  <a href="" className="title-mobile">Rajiv Khushiram</a>
</div>
</nav>
$(document).ready(function(){
    $('.navbar-fostrap').click(function(){
        $('.nav-fostrap').toggleClass('visible');
        $('body').toggleClass('cover-bg');
    });
});

export default NavigationBar
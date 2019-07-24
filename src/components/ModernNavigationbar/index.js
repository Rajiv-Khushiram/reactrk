import React from 'react';
import './index.scss';
import $ from 'jquery';



const ModernNavigationbar = () =>
<nav className="nav">
  <a href="#" className="nav-item is-active" activecolor="orange">Home</a>
  <a href="#" className="nav-item" activecolor="green">About</a>
  <a href="#" className="nav-item" activecolor="blue">Testimonials</a>
  <a href="#" className="nav-item" activecolor="red">Blog</a>
  <a href="#" className="nav-item" activecolor="rebeccapurple">Contact</a>
  <span className="nav-indicator"></span>
</nav>
const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});

export default ModernNavigationbar;
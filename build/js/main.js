/*=========================================================================

Template Name: IMOZAR - Personal Portfolio Template
Author: PhyDev
Author Link: https://themeforest.net/user/phydev;
Version: 1.0
Design and Developed by: PhyDev

NOTE: This is the main javascript file for the template

=========================================================================*/
$(function(){"use strict";
// Define Some Elements
/*---------------------------------------------------------------------
  Javascript Function For Sticky Navigation Bar AND SMOOTH SCROLLING
----------------------------------------------------------------------*/
// Define stikyNav Function
function e(){100<=(d=c.scrollTop())?s.addClass("nav-sticky"):s.removeClass("nav-sticky"),
// SHow Also Scroll up Button
1e3<=d?$(".scroll-up").addClass("show-up-btn"):$(".scroll-up").removeClass("show-up-btn")}
// Select all links with hashes
// Define ChangeClass Function
function a(){d=c.scrollTop(),$.each(g,function(e,a){var t=$(this),i=t.offset().top,o=i+t.height();if(i<=d&&d<=o){var n=y.find("li");$.each(n,function(e,a){var t;$(this).find("a").removeClass("active")}),y.find('li [href="#'+t.attr("id")+'"]').addClass("active")}})}// End of ChangeClass Function
/*---------------------------------------------------
  Javascript Function FOR PARALLAX EFFECT
---------------------------------------------------*/
// create variables
function t(){
// for each of background parallax element
$.each(k,function(e,a){var t=$(this),i=t.offset().top,o=t.height(),n=((
// update positions
d=c.scrollTop())-i)/2;n<=o+i&&t.css({backgroundPosition:"50% "+n+"px"})})}
//Progress Bars function
function i(e){if(w.length&&!w.hasClass("done")){var a=w.offset().top,t=c.scrollTop(),i;a-(c.height()-160)<=t&&(w.addClass("done"),$.each(C,function(e,a){var t=$(this),i=t.data("percent"),o=$(t).closest(".progress-bar-linear").find(".progress-cont span");t.css("width",i+"%"),o.html(i+"%")}))}}//End progressFunction Fuction
function o(){e(),a(),t(),i()}
// add Event listener to window
function n(){if($(this).is("#email")){var e=$(this).val(),a;if(!P.test(e))return $(".email-error").html("please enter a valid email."),!1;$(".email-error").html("")}else{var t=$(this).attr("id"),i=$("."+t+"-error");if(""===$(this).val())return i.html("please enter a valid "+t+"."),!1;i.html(" ")}}// End ValidateForm Function
var c=$(window),r=$("body"),d=c.scrollTop(),s=$(".nav-wrapper");
/*------------------------------------------------
  Javascript Function for The Preloader
--------------------------------------------------*/c.on("load",function(){$(".loader-con").fadeOut("slow")});
/*-----------------------------------------------------
  Javascript Function To check Aniamtion support
-------------------------------------------------------*/
var l=!1,p="animation",f="",u="Webkit Moz O ms Khtml".split(" "),v="",h=document.createElement("div");if(void 0!==h.style.animationName&&(l=!0),!1===l)for(var m=0;m<u.length;m++)if(void 0!==h.style[u[m]+"AnimationName"]){p=(v=u[m])+"Animation",f="-"+v.toLowerCase()+"-",l=!0;break}
/*-----------------------------------------------------
  Javascript Function For Smooth Mouse Scrolling
-------------------------------------------------------*/jQuery.scrollSpeed=function(e,a){var i=$(document),t=$("html, body"),o="default",n=d,r=!1,s,l;if(window.navigator.msPointerEnabled)return!1;c.on("mousewheel DOMMouseScroll",function(e){var a=e.originalEvent.wheelDeltaY,t=e.originalEvent.detail;s=i.height()>c.height(),r=!0}).on("scroll",function(){s&&!r&&(n=d),r||(n=c.scrollTop())}).on("resize",function(){s&&!r&&(l=c.height())})},jQuery.easing.default=function(e,a,t,i,o){return-i*((a=a/o-1)*a*a*a-1)+t},
// initialize Smooth Scrolling Only in Modern browsers
l&&jQuery.scrollSpeed(400,700),$("a.scroll").on("click",function(e){
// On-page links
if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){
// Figure out element to scroll to
var a=$(this.hash),t=$(this).data("speed")||800;
// Does a scroll target exist?
(a=a.length?a:$("[name="+this.hash.slice(1)+"]")).length&&(
// Only prevent default if animation is actually gonna happen
e.preventDefault(),$("html, body").animate({scrollTop:a.offset().top},t))}}),$(".scroll-up").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},900)});
/*---------------------------------------------------------------------
  Javascript Function for Hide Navbar Dropdown After Click On Links
-------------------------------------------------------------------*/
var b=s.find(".navbar-collapse ul li a");$.each(b,function(e,a){var t;$(this).on("click",function(e){s.find(".navbar-collapse").collapse("hide")})});
/*----------------------------------------------------------------
  Javascript Function For Change active Class on navigation bar
-----------------------------------------------------------------*/
var g=$(".one-page-section"),y=s.find("ul.navbar-nav"),k=$(".parallax"),w=$(".skills-section"),C=$(".progress-bar-line");
/*------------------------------------------
  Javascript for initialize text Typer
--------------------------------------------*/
// initialize text Typer Only in Modern browsers
if(c.on("scroll",function(){o()}),l){var _=$("#home .typer-title"),T="Product Designer and Developer",z="UX/UI Designer",D="Front-End Developer";$.prototype.typer&&_.typer([T,z,D])}
/*----------------------------------------------------------------------
 Javascript Function Initialize Particules
-----------------------------------------------------------------------*/"undefined"!=typeof particlesJS&&particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:600}},color:{value:"#777"},shape:{type:"circle",stroke:{width:0,color:"#888"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.7,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#bbb",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"bottom",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})
/*------------------------------------------------------
  Javascript Function for filtering portfolio items
--------------------------------------------------------*/;var x=$("#work .filtr-container"),S;0<x.length&&$.prototype.isotope&&(x.imagesLoaded(function(){S=x.isotope({itemSelector:".filtr-item"})}),$("#work-list li a.filter").on("click",function(e){
// Prevent the default link behavior 
e.preventDefault();var a=$(this),t=a.data("filter");S.isotope({filter:t}),
// return if already current
a.hasClass("filter-active")||(
// remove current
$("#work-list").find(".filter-active").removeClass("filter-active"),
// set current
a.addClass("filter-active"))}))
/*-------------------------------------------
 Magnific Popup Portfolio Initializing
-------------------------------------------*/;$(".popup-youtube").magnificPopup({type:"iframe"}),$(".popup-link").magnificPopup({type:"image",removalDelay:300,mainClass:"mfp-fade",gallery:{enabled:!0},zoom:{enabled:!0,duration:260,easing:"ease-in"}}),
/*------------------------------------------------------
Javascript Function for initialize owl carousel
--------------------------------------------------------*/
$.prototype.owlCarousel&&($(".home-3 .home-carousel").owlCarousel({nav:!0,navText:["<div class='home-slider-btn effect ver-center'><i class='fa fa-chevron-left center'></i><span></span></div>","<div class='home-slider-btn effect ver-center'><i class='fa fa-chevron-right center'></i><span></span></div>"],dots:!0,loop:!0,items:1}),$(".testimonial-slider").owlCarousel({loop:!0,nav:!0,navText:["<div class='testimonial-slider-btn effect hor-center'><i class='fa fa-angle-left center'></i></div>","<div class='testimonial-slider-btn effect hor-center'><i class='fa fa-angle-right center'></i></div>"],margin:20,responsive:{0:{items:1},780:{items:2}}}));
/*------------------------------------------------------------------------
 Javascript Function for Validate and Submit the CONTACT Form Using AJAX
-------------------------------------------------------------------------*/
// Get the form.
var A=$("#contact-form"),P=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3,4})$/,j=$(".input-field");$.each(j,function(e,a){$(this).on("blur",n)});
// Get the messages div.
var E=$("#form-message");
// Set up an event listener for the contact form.
$(A).on("submit",function(e){
// Stop the browser from submitting the form.
e.preventDefault();
// Serialize the form data.
var a=$(A).serialize();
// Submit the form using AJAX.
$.ajax({type:"POST",url:A.attr("action"),data:a}).done(function(e){
// Make sure that the formMessages div has the 'success' class.
E.removeClass("error"),E.addClass("success"),
// Set the message text.
E.text(e),
// Clear the form.
$("#name").val(""),$("#email").val(""),$("#message").val("")}).fail(function(e){
// Make sure that the formMessages div has the 'error' class.
E.removeClass("success"),E.addClass("error"),
// Set the message text.
""!==e.responseText?E.text(e.responseText):E.text("Sorry! An error occured and your message could not be sent.")})})});
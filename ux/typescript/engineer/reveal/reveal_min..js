"use strict";var ltdc_reveal={aRevAct:0,aRevX:0,sRevId:"",eRev:0,eRevScrim:0,init:function(){ltdc_reveal.aRevX=document.getElementsByClassName("close-reveal-modal");for(var e=0,l=ltdc_reveal.aRevX.length;e<l;e++)ltdc_reveal.aRevX[e].addEventListener("click",ltdc_reveal.close,!1);ltdc_reveal.aRevAct=document.querySelectorAll("[data-reveal-id]");for(e=0,l=ltdc_reveal.aRevAct.length;e<l;e++)ltdc_reveal.aRevAct[e].addEventListener("click",ltdc_reveal.open,!1);ltdc_reveal.eRevScrim=document.getElementById("id-reveal__scrim")},open:function(e){return ltdc_reveal.sRevId=this.getAttribute("data-reveal-id"),ltdc_reveal.sRevId&&(ltdc_reveal.eRev=document.getElementById(ltdc_reveal.sRevId),ltdc_reveal.eRev&&(ltdc_reveal.eRevScrim.classList.add("reveal__scrim"),ltdc_reveal.eRev.classList.add("reveal__box"),ltdc_reveal.eRev.parentElement.classList.remove("reveal__init"),ltdc_reveal.eRev.style.top=String(window.pageYOffset+84)+"px",ltdc_reveal.eRev.style.visibility="visible",ltdc_reveal.eRev.setAttribute("aria-hidden","false"),e.preventDefault(),playAudioFile(1))),!1},close:function(e){ltdc_reveal.eRevScrim.classList.remove("reveal__scrim"),ltdc_reveal.eRev.classList.remove("reveal__box"),ltdc_reveal.eRev.parentElement.classList.add("reveal__init"),ltdc_reveal.eRev.setAttribute("aria-hidden","true"),e&&e.preventDefault()}};ltdc_reveal.init();
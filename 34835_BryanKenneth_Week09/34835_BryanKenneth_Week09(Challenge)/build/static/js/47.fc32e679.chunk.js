(this.webpackJsonp34835_BryanKenneth_Week08=this.webpackJsonp34835_BryanKenneth_Week08||[]).push([[47],{160:function(n,t,e){"use strict";e.r(t),e.d(t,"startFocusVisible",(function(){return i}));var o="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],i=function(){var n=[],t=!0,e=document,i=function(t){n.forEach((function(n){return n.classList.remove(o)})),t.forEach((function(n){return n.classList.add(o)})),n=t},r=function(){t=!1,i([])};e.addEventListener("keydown",(function(n){(t=s.includes(n.key))||i([])})),e.addEventListener("focusin",(function(n){if(t&&n.composedPath){var e=n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains("ion-focusable")}));i(e)}})),e.addEventListener("focusout",(function(){e.activeElement===e.body&&i([])})),e.addEventListener("touchstart",r),e.addEventListener("mousedown",r)}}}]);
//# sourceMappingURL=47.fc32e679.chunk.js.map
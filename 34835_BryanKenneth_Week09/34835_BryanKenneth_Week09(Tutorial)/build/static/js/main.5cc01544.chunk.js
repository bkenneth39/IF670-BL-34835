(this["webpackJsonp34835_BryanKenneth_Week09(Tutorial)"]=this["webpackJsonp34835_BryanKenneth_Week09(Tutorial)"]||[]).push([[1],{62:function(n,e,t){var r={"./ion-action-sheet.entry.js":[87,5],"./ion-alert.entry.js":[88,6],"./ion-app_8.entry.js":[89,7],"./ion-avatar_3.entry.js":[90,17],"./ion-back-button.entry.js":[91,18],"./ion-backdrop.entry.js":[92,44],"./ion-button_2.entry.js":[93,19],"./ion-card_5.entry.js":[94,20],"./ion-checkbox.entry.js":[95,21],"./ion-chip.entry.js":[96,22],"./ion-col_3.entry.js":[97,45],"./ion-datetime_3.entry.js":[98,10],"./ion-fab_3.entry.js":[99,23],"./ion-img.entry.js":[100,46],"./ion-infinite-scroll_2.entry.js":[101,47],"./ion-input.entry.js":[102,24],"./ion-item-option_3.entry.js":[103,25],"./ion-item_8.entry.js":[104,26],"./ion-loading.entry.js":[105,27],"./ion-menu_3.entry.js":[106,28],"./ion-modal.entry.js":[107,8],"./ion-nav_2.entry.js":[108,14],"./ion-popover.entry.js":[109,9],"./ion-progress-bar.entry.js":[110,29],"./ion-radio_2.entry.js":[111,30],"./ion-range.entry.js":[112,31],"./ion-refresher_2.entry.js":[113,11],"./ion-reorder_2.entry.js":[114,16],"./ion-ripple-effect.entry.js":[115,48],"./ion-route_4.entry.js":[116,32],"./ion-searchbar.entry.js":[117,33],"./ion-segment_2.entry.js":[118,34],"./ion-select_3.entry.js":[119,35],"./ion-slide_2.entry.js":[120,49],"./ion-spinner.entry.js":[121,13],"./ion-split-pane.entry.js":[122,50],"./ion-tab-bar_2.entry.js":[123,36],"./ion-tab_2.entry.js":[124,15],"./ion-text.entry.js":[125,37],"./ion-textarea.entry.js":[126,38],"./ion-toast.entry.js":[127,39],"./ion-toggle.entry.js":[128,12],"./ion-virtual-scroll.entry.js":[129,51]};function o(n){if(!t.o(r,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[n],o=e[0];return t.e(e[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=62,n.exports=o},64:function(n,e,t){var r={"./ion-icon.entry.js":[130,58]};function o(n){if(!t.o(r,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[n],o=e[0];return t.e(e[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=64,n.exports=o},72:function(n,e,t){},84:function(n,e,t){},85:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(23),s=t.n(i),c=t(22),a=t(11),j=t(50),l=t(6),u=t.n(l),d=t(13),h=t(19),y=t(41),b=t(36),f=(t(72),t(10)),g=function(){var n=Object(r.useState)(-6.257377926995551),e=Object(h.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(106.61829861017398),s=Object(h.a)(i,2),c=s[0],j=s[1],l=function(){var n=Object(d.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.getCurrentPosition({enableHighAccuracy:!0});case 2:e=n.sent,console.log("Current position: ",e),console.log("Lat: ",e.coords.latitude),console.log("Lng:",e.coords.longitude),o(e.coords.latitude),j(e.coords.longitude);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=Object(d.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.watchPosition({enableHighAccuracy:!0,timeout:1e3},(function(n,e){n&&console.log(n)}));case 2:n.sent;case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(f.jsxs)(a.e,{children:[Object(f.jsx)(a.d,{children:Object(f.jsx)(a.i,{children:Object(f.jsx)(a.h,{children:"Blank"})})}),Object(f.jsxs)(a.c,{fullscreen:!0,children:[Object(f.jsx)(a.d,{collapse:"condense",children:Object(f.jsx)(a.i,{children:Object(f.jsx)(a.h,{size:"large",children:"Blank"})})}),Object(f.jsx)(a.b,{onClick:l,children:"Current Position"}),Object(f.jsx)(a.b,{onClick:g,children:"Track Position"}),Object(f.jsx)(b.b,{googleMapsApiKey:"AIzaSyB9liAgEJWuL6TC9aUWj76xG09M8-t6kOw",children:Object(f.jsxs)(b.a,{mapContainerStyle:{width:"100%",height:"100%"},center:{lat:t,lng:c},zoom:18,onClick:function(n){var e,t,r,i;(null===(e=n.latLng)||void 0===e?void 0:e.lat())&&o(null===(r=n.latLng)||void 0===r?void 0:r.lat());(null===(t=n.latLng)||void 0===t?void 0:t.lng())&&j(null===(i=n.latLng)||void 0===i?void 0:i.lng())},children:[Object(f.jsx)(b.c,{position:{lat:t,lng:c}}),Object(f.jsx)(f.Fragment,{})]})})]})]})},p=(t(74),t(75),t(76),t(77),t(78),t(79),t(80),t(81),t(82),t(83),t(84),function(){return Object(f.jsx)(a.a,{children:Object(f.jsx)(j.a,{children:Object(f.jsxs)(a.g,{children:[Object(f.jsx)(c.b,{exact:!0,path:"/home",children:Object(f.jsx)(g,{})}),Object(f.jsx)(c.b,{exact:!0,path:"/",children:Object(f.jsx)(c.a,{to:"/home"})})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=function(n){n&&n instanceof Function&&t.e(59).then(t.bind(null,148)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,s=e.getTTFB;t(n),r(n),o(n),i(n),s(n)}))};s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)})),O()}},[[85,3,4]]]);
//# sourceMappingURL=main.5cc01544.chunk.js.map
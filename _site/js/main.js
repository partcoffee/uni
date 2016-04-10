!function(t,e){var i=e(t,t.document);t.lazySizes=i,"object"==typeof module&&module.exports&&(module.exports=i)}(window,function(t,e){"use strict";if(e.getElementsByClassName){var i,n=e.documentElement,o=t.HTMLPictureElement&&"sizes"in e.createElement("img"),r="addEventListener",s="getAttribute",a=t[r],l=t.setTimeout,c=t.requestAnimationFrame||l,d=/^picture$/i,u=["load","error","lazyincluded","_lazyloaded"],f={},h=Array.prototype.forEach,p=function(t,e){return f[e]||(f[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),f[e].test(t[s]("class")||"")&&f[e]},y=function(t,e){p(t,e)||t.setAttribute("class",(t[s]("class")||"").trim()+" "+e)},g=function(t,e){var i;(i=p(t,e))&&t.setAttribute("class",(t[s]("class")||"").replace(i," "))},w=function(t,e,i){var n=i?r:"removeEventListener";i&&w(t,e),u.forEach(function(i){t[n](i,e)})},m=function(t,i,n,o,r){var s=e.createEvent("CustomEvent");return s.initCustomEvent(i,!o,!r,n||{}),t.dispatchEvent(s),s},v=function(e,n){var r;!o&&(r=t.picturefill||i.pf)?r({reevaluate:!0,elements:[e]}):n&&n.src&&(e.src=n.src)},z=function(t,e){return(getComputedStyle(t,null)||{})[e]},A=function(t,e,n){for(n=n||t.offsetWidth;n<i.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},x=function(e){var i,n=0,o=t.Date,r=function(){i=!1,n=o.now(),e()},s=function(){l(r)},a=function(){c(s)};return function(){if(!i){var t=125-(o.now()-n);i=!0,6>t&&(t=6),l(a,t)}}},b=function(){var o,u,f,A,b,S,E,k,W,T,N,P,H,_,O,R=/^img$/i,M=/^iframe$/i,q="onscroll"in t&&!/glebot/.test(navigator.userAgent),B=0,$=0,F=0,L=0,Q=function(t){F--,t&&t.target&&w(t.target,Q),(!t||0>F||!t.target)&&(F=0)},j=function(t,i){var o,r=t,s="hidden"==z(e.body,"visibility")||"hidden"!=z(t,"visibility");for(W-=i,P+=i,T-=i,N+=i;s&&(r=r.offsetParent)&&r!=e.body&&r!=n;)s=(z(r,"opacity")||1)>0,s&&"visible"!=z(r,"overflow")&&(o=r.getBoundingClientRect(),s=N>o.left&&T<o.right&&P>o.top-1&&W<o.bottom+1);return s},D=function(){var t,e,r,a,l,c,d,h,p;if((b=i.loadMode)&&8>F&&(t=o.length)){e=0,L++,null==_&&("expand"in i||(i.expand=n.clientHeight>600?n.clientWidth>860?500:410:359),H=i.expand,_=H*i.expFactor),_>$&&1>F&&L>3&&b>2?($=_,L=0):$=b>1&&L>2&&6>F?H:B;for(;t>e;e++)if(o[e]&&!o[e]._lazyRace)if(q)if((h=o[e][s]("data-expand"))&&(c=1*h)||(c=$),p!==c&&(E=innerWidth+c*O,k=innerHeight+c,d=-1*c,p=c),r=o[e].getBoundingClientRect(),(P=r.bottom)>=d&&(W=r.top)<=k&&(N=r.right)>=d*O&&(T=r.left)<=E&&(P||N||T||W)&&(f&&3>F&&!h&&(3>b||4>L)||j(o[e],c))){if(U(o[e]),l=!0,F>9)break}else!l&&f&&!a&&4>F&&4>L&&b>2&&(u[0]||i.preloadAfterLoad)&&(u[0]||!h&&(P||N||T||W||"auto"!=o[e][s](i.sizesAttr)))&&(a=u[0]||o[e]);else U(o[e]);a&&!l&&U(a)}},K=x(D),I=function(t){y(t.target,i.loadedClass),g(t.target,i.loadingClass),w(t.target,Z)},Z=function(t){t={target:t.target},c(function(){I(t)})},G=function(t,e){try{t.contentWindow.location.replace(e)}catch(i){t.src=e}},V=function(t){var e,n,o=t[s](i.srcsetAttr);(e=i.customMedia[t[s]("data-media")||t[s]("media")])&&t.setAttribute("media",e),o&&t.setAttribute("srcset",o),e&&(n=t.parentNode,n.insertBefore(t.cloneNode(),t),n.removeChild(t))},J=function(){var t,e=[],i=function(){for(;e.length;)e.shift()();t=!1},n=function(n){e.push(n),t||(t=!0,c(i))};return{add:n,run:i}}(),U=function(t){var e,n,o,r,a,u,z,x=R.test(t.nodeName),b=x&&(t[s](i.sizesAttr)||t[s]("sizes")),S="auto"==b;(!S&&f||!x||!t.src&&!t.srcset||t.complete||p(t,i.errorClass))&&(S&&(z=t.offsetWidth),t._lazyRace=!0,F++,i.rC&&(z=i.rC(t,z)||z),J.add(function(){(a=m(t,"lazybeforeunveil")).defaultPrevented||(b&&(S?(C.updateElem(t,!0,z),y(t,i.autosizesClass)):t.setAttribute("sizes",b)),n=t[s](i.srcsetAttr),e=t[s](i.srcAttr),x&&(o=t.parentNode,r=o&&d.test(o.nodeName||"")),u=a.detail.firesLoad||"src"in t&&(n||e||r),a={target:t},u&&(w(t,Q,!0),clearTimeout(A),A=l(Q,2500),y(t,i.loadingClass),w(t,Z,!0)),r&&h.call(o.getElementsByTagName("source"),V),n?t.setAttribute("srcset",n):e&&!r&&(M.test(t.nodeName)?G(t,e):t.src=e),(n||r)&&v(t,{src:e})),c(function(){t._lazyRace&&delete t._lazyRace,g(t,i.lazyClass),(!u||t.complete)&&(u?Q(a):F--,I(a))})}))},X=function(){if(!f){if(Date.now()-S<999)return void l(X,999);var t,n=function(){i.loadMode=3,K()};f=!0,i.loadMode=3,e.hidden?(D(),J.run()):K(),a("scroll",function(){3==i.loadMode&&(i.loadMode=2),clearTimeout(t),t=l(n,99)},!0)}};return{_:function(){S=Date.now(),o=e.getElementsByClassName(i.lazyClass),u=e.getElementsByClassName(i.lazyClass+" "+i.preloadClass),O=i.hFac,a("scroll",K,!0),a("resize",K,!0),t.MutationObserver?new MutationObserver(K).observe(n,{childList:!0,subtree:!0,attributes:!0}):(n[r]("DOMNodeInserted",K,!0),n[r]("DOMAttrModified",K,!0),setInterval(K,999)),a("hashchange",K,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e[r](t,K,!0)}),/d$|^c/.test(e.readyState)?X():(a("load",X),e[r]("DOMContentLoaded",K),l(X,2e4)),K(o.length>0)},checkElems:K,unveil:U}}(),C=function(){var t,n=function(t,e,i){var n,o,r,s,a=t.parentNode;if(a&&(i=A(t,a,i),s=m(t,"lazybeforesizes",{width:i,dataAttr:!!e}),!s.defaultPrevented&&(i=s.detail.width,i&&i!==t._lazysizesWidth))){if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),d.test(a.nodeName||""))for(n=a.getElementsByTagName("source"),o=0,r=n.length;r>o;o++)n[o].setAttribute("sizes",i);s.detail.dataAttr||v(t,s.detail)}},o=function(){var e,i=t.length;if(i)for(e=0;i>e;e++)n(t[e])},r=x(o);return{_:function(){t=e.getElementsByClassName(i.autosizesClass),a("resize",r)},checkElems:r,updateElem:n}}(),S=function(){S.i||(S.i=!0,C._(),b._())};return function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.7,hFac:.8,loadMode:2};i=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n)e in i||(i[e]=n[e]);t.lazySizesConfig=i,l(function(){i.init&&S()})}(),{cfg:i,autoSizer:C,loader:b,init:S,uP:v,aC:y,rC:g,hC:p,fire:m,gW:A}}}),is_safari=!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),is_firefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;var control=!1;$(document).on("keyup keydown",function(t){control=t.metaKey}),$(".shift").on("click",function(){control||is_safari||is_firefox||$("body").addClass("animate").css("opacity",0)}),function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in i)e.push(i[n]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,n={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll,r=o?n.forward:n.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=n.oldScroll<a.triggerPoint,c=n.newScroll>=a.triggerPoint,d=l&&c,u=!l&&!c;(d||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var f in t)t[f].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=this.adapter.offset(),n={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var o in t){var r=t[o];for(var s in this.waypoints[o]){var a,l,c,d,u,f=this.waypoints[o][s],h=f.options.offset,p=f.triggerPoint,y=0,g=null==p;f.element!==f.element.window&&(y=f.adapter.offset()[r.offsetProp]),"function"==typeof h?h=h.apply(f):"string"==typeof h&&(h=parseFloat(h),f.options.offset.indexOf("%")>-1&&(h=Math.ceil(r.contextDimension*h/100))),a=r.contextScroll-r.contextOffset,f.triggerPoint=y+a-h,l=p<r.oldScroll,c=f.triggerPoint>=r.oldScroll,d=l&&c,u=!l&&!c,!g&&d?(f.queueTrigger(r.backward),n[f.group.id]=f.group):!g&&u?(f.queueTrigger(r.forward),n[f.group.id]=f.group):g&&r.oldScroll>=f.triggerPoint&&(f.queueTrigger(r.forward),n[f.group.id]=f.group)}}for(var w in n)n[w].flushTriggers();return this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var n=this.triggerQueues[i],o="up"===i||"left"===i;n.sort(o?e:t);for(var r=0,s=n.length;s>r;r+=1){var a=n[r];(a.options.continuous||r===n.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints),n=i===this.waypoints.length-1;return n?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,n){t[n]=e[n]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],n=arguments[0];return t.isFunction(arguments[0])&&(n=t.extend({},arguments[1]),n.handler=arguments[0]),this.each(function(){var o=t.extend({},n,{element:this});"string"==typeof o.context&&(o.context=t(this).closest(o.context)[0]),i.push(new e(o))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}(),$(".entry").each(function(t){$(this).attr("id","item_"+t);new Waypoint({element:document.getElementById("item_"+t),handler:function(t){"down"==t&&$(this.element).addClass("up")},offset:"90%"})});
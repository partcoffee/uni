/*! lazysizes - v1.5.0-rc4 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.HTMLPictureElement&&"sizes"in b.createElement("img"),f="addEventListener",g="getAttribute",h=a[f],i=a.setTimeout,j=a.requestAnimationFrame||i,k=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],m={},n=Array.prototype.forEach,o=function(a,b){return m[b]||(m[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),m[b].test(a[g]("class")||"")&&m[b]},p=function(a,b){o(a,b)||a.setAttribute("class",(a[g]("class")||"").trim()+" "+b)},q=function(a,b){var c;(c=o(a,b))&&a.setAttribute("class",(a[g]("class")||"").replace(c," "))},r=function(a,b,c){var d=c?f:"removeEventListener";c&&r(a,b),l.forEach(function(c){a[d](c,b)})},s=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},t=function(b,d){var f;!e&&(f=a.picturefill||c.pf)?f({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},u=function(a,b){return(getComputedStyle(a,null)||{})[b]},v=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},w=function(b){var c,d=0,e=a.Date,f=function(){c=!1,d=e.now(),b()},g=function(){i(f)},h=function(){j(g)};return function(){if(!c){var a=125-(e.now()-d);c=!0,6>a&&(a=6),i(h,a)}}},x=function(){var e,l,m,v,x,z,A,B,C,D,E,F,G,H,I,J=/^img$/i,K=/^iframe$/i,L="onscroll"in a&&!/glebot/.test(navigator.userAgent),M=0,N=0,O=0,P=0,Q=function(a){O--,a&&a.target&&r(a.target,Q),(!a||0>O||!a.target)&&(O=0)},R=function(a,c){var e,f=a,g="hidden"==u(b.body,"visibility")||"hidden"!=u(a,"visibility");for(C-=c,F+=c,D-=c,E+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=d;)g=(u(f,"opacity")||1)>0,g&&"visible"!=u(f,"overflow")&&(e=f.getBoundingClientRect(),g=E>e.left&&D<e.right&&F>e.top-1&&C<e.bottom+1);return g},S=function(){var a,b,f,h,i,j,k,n,o;if((x=c.loadMode)&&8>O&&(a=e.length)){b=0,P++,null==H&&("expand"in c||(c.expand=d.clientHeight>600?d.clientWidth>860?500:410:359),G=c.expand,H=G*c.expFactor),H>N&&1>O&&P>3&&x>2?(N=H,P=0):N=x>1&&P>2&&6>O?G:M;for(;a>b;b++)if(e[b]&&!e[b]._lazyRace)if(L)if((n=e[b][g]("data-expand"))&&(j=1*n)||(j=N),o!==j&&(A=innerWidth+j*I,B=innerHeight+j,k=-1*j,o=j),f=e[b].getBoundingClientRect(),(F=f.bottom)>=k&&(C=f.top)<=B&&(E=f.right)>=k*I&&(D=f.left)<=A&&(F||E||D||C)&&(m&&3>O&&!n&&(3>x||4>P)||R(e[b],j))){if(Z(e[b]),i=!0,O>9)break}else!i&&m&&!h&&4>O&&4>P&&x>2&&(l[0]||c.preloadAfterLoad)&&(l[0]||!n&&(F||E||D||C||"auto"!=e[b][g](c.sizesAttr)))&&(h=l[0]||e[b]);else Z(e[b]);h&&!i&&Z(h)}},T=w(S),U=function(a){p(a.target,c.loadedClass),q(a.target,c.loadingClass),r(a.target,V)},V=function(a){a={target:a.target},j(function(){U(a)})},W=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},X=function(a){var b,d,e=a[g](c.srcsetAttr);(b=c.customMedia[a[g]("data-media")||a[g]("media")])&&a.setAttribute("media",b),e&&a.setAttribute("srcset",e),b&&(d=a.parentNode,d.insertBefore(a.cloneNode(),a),d.removeChild(a))},Y=function(){var a,b=[],c=function(){for(;b.length;)b.shift()();a=!1},d=function(d){b.push(d),a||(a=!0,j(c))};return{add:d,run:c}}(),Z=function(a){var b,d,e,f,h,l,u,w=J.test(a.nodeName),x=w&&(a[g](c.sizesAttr)||a[g]("sizes")),z="auto"==x;(!z&&m||!w||!a.src&&!a.srcset||a.complete||o(a,c.errorClass))&&(z&&(u=a.offsetWidth),a._lazyRace=!0,O++,c.rC&&(u=c.rC(a,u)||u),Y.add(function(){(h=s(a,"lazybeforeunveil")).defaultPrevented||(x&&(z?(y.updateElem(a,!0,u),p(a,c.autosizesClass)):a.setAttribute("sizes",x)),d=a[g](c.srcsetAttr),b=a[g](c.srcAttr),w&&(e=a.parentNode,f=e&&k.test(e.nodeName||"")),l=h.detail.firesLoad||"src"in a&&(d||b||f),h={target:a},l&&(r(a,Q,!0),clearTimeout(v),v=i(Q,2500),p(a,c.loadingClass),r(a,V,!0)),f&&n.call(e.getElementsByTagName("source"),X),d?a.setAttribute("srcset",d):b&&!f&&(K.test(a.nodeName)?W(a,b):a.src=b),(d||f)&&t(a,{src:b})),j(function(){a._lazyRace&&delete a._lazyRace,q(a,c.lazyClass),(!l||a.complete)&&(l?Q(h):O--,U(h))})}))},$=function(){if(!m){if(Date.now()-z<999)return void i($,999);var a,d=function(){c.loadMode=3,T()};m=!0,c.loadMode=3,b.hidden?(S(),Y.run()):T(),h("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(a),a=i(d,99)},!0)}};return{_:function(){z=Date.now(),e=b.getElementsByClassName(c.lazyClass),l=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),I=c.hFac,h("scroll",T,!0),h("resize",T,!0),a.MutationObserver?new MutationObserver(T).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[f]("DOMNodeInserted",T,!0),d[f]("DOMAttrModified",T,!0),setInterval(T,999)),h("hashchange",T,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[f](a,T,!0)}),/d$|^c/.test(b.readyState)?$():(h("load",$),b[f]("DOMContentLoaded",T),i($,2e4)),T(e.length>0)},checkElems:T,unveil:Z}}(),y=function(){var a,d=function(a,b,c){var d,e,f,g,h=a.parentNode;if(h&&(c=v(a,h,c),g=s(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!g.defaultPrevented&&(c=g.detail.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),k.test(h.nodeName||""))for(d=h.getElementsByTagName("source"),e=0,f=d.length;f>e;e++)d[e].setAttribute("sizes",c);g.detail.dataAttr||t(a,g.detail)}},e=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},f=w(e);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),h("resize",f)},checkElems:f,updateElem:d}}(),z=function(){z.i||(z.i=!0,y._(),x._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.7,hFac:.8,loadMode:2};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,i(function(){c.init&&z()})}(),{cfg:c,autoSizer:y,loader:x,init:z,uP:t,aC:p,rC:q,hC:o,fire:s,gW:v}}});

// Just checking if we're dealing with Safari, as the back-key in the browser breaks page transitions
is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)

// Just checking if we're deadling with Firefox, for the reasons above
is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// Prevents the page from fading out when the command-key is clicked on Macs
var control = false;
$(document).on('keyup keydown', function(e) {
  control = e.metaKey;
});

// Fade the page out when the user clicks a link with the "shift"-class. Smoother page transitions
$('.shift').on('click', function() {
  if (control || is_safari || is_firefox) {
    // Do nothing!
  } else {
    // We will add the animate-class on click as the initial load will look odd if it's on by default.
    $('body').addClass('animate').css('opacity', 0);
  }
});

// Waypoints
// Detects where the user is on the page and adds a class to elements in view – for us that means fading elements in and up into view.
// Like the header text or pull-quotes.
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.invokeAll('enable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    if (horizontalEmpty && verticalEmpty) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = elementOffset + contextModifier - adjustment
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }

  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'innerHeight',
    'innerWidth',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  Waypoint.Adapter = JQueryAdapter
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function createExtension(framework) {
    return function() {
      var waypoints = []
      var overrides = arguments[0]

      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1])
        overrides.handler = arguments[0]
      }

      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        })
        if (typeof options.context === 'string') {
          options.context = framework(this).closest(options.context)[0]
        }
        waypoints.push(new Waypoint(options))
      })

      return waypoints
    }
  }

  if (window.jQuery) {
    window.jQuery.fn.waypoint = createExtension(window.jQuery)
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto)
  }
}())
;


// For each entry point
$(".entry").each(function(index){
$(this).attr('id','item_'+index);
	var waypoint = new Waypoint({
		element: document.getElementById('item_'+index),
      handler: function(direction) {
		if(direction == 'down') {
			// console.log(this.element.id + ' triggers at ' + this.triggerPoint)
			$(this.element).addClass('up');
			}
		},
    // When the 'entry'-class is 10% from the bottom of the viewport
		offset: '90%'
	});
});

// Custom message for the curious who explore the console log :)
// console.log("Even after 400 generations in villages and cities, we haven't forgotten. The open road still softly calls, like a nearly forgotten song of childhood. We invest far-off places with a certain romance. This appeal, I suspect, has been meticulously crafted by natural selection as an essential element in our survival. Long summers, mild winters, rich harvests, plentiful game—none of them lasts forever.\n\nIt is beyond our powers to predict the future. Catastrophic events have a way of sneaking up on us, of catching us unaware. Your own life, or your band's, or even your species' might be owed to a restless few—drawn, by a craving they can hardly articulate or understand, to undiscovered lands and new worlds.\n\nHerman Melville, in Moby Dick, spoke for wanderers in all epochs and meridians – 'I am tormented with an everlasting itch for things remote. I love to sail forbidden seas...'\n\n– Carl Sagan");

;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-jinlingyingcaiwangtubiao40" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M720.768 372.1984c-10.5984 0-19.2 8.6016-19.2 19.2l0 353.2288L321.3312 744.6272 321.3312 391.3984c0-10.5984-8.6016-19.2-19.2-19.2s-19.2 8.6016-19.2 19.2l0 372.4288c0 10.5984 8.6016 19.2 19.2 19.2l418.6624 0c10.5984 0 19.2-8.6016 19.2-19.2L739.9936 391.3984C739.968 380.8 731.3664 372.1984 720.768 372.1984z"  ></path>'+
      ''+
      '<path d="M763.904 290.944l-142.976 0-44.3648-44.3392c-3.6096-3.6096-8.4736-5.632-13.568-5.632l-97.1264 0c-4.8384 0-9.5232 1.8432-13.0816 5.1456l-48.2816 44.8256L253.2864 290.944c-10.5984 0-19.2 8.6016-19.2 19.2s8.6016 19.2 19.2 19.2l158.7712 0c4.8384 0 9.5232-1.8432 13.0816-5.1456l48.2816-44.8256 81.6128 0 44.3648 44.3392c3.6096 3.6096 8.4736 5.632 13.568 5.632l150.9376 0c10.5984 0 19.2-8.6016 19.2-19.2S774.5024 290.944 763.904 290.944z"  ></path>'+
      ''+
      '<path d="M432.2304 682.5728 432.2304 400.0256c0-10.5984-8.6016-19.2-19.2-19.2s-19.2 8.6016-19.2 19.2l0 282.5472c0 10.5984 8.6016 19.2 19.2 19.2S432.2304 693.1712 432.2304 682.5728z"  ></path>'+
      ''+
      '<path d="M529.6128 682.5728 529.6128 400.0256c0-10.5984-8.6016-19.2-19.2-19.2s-19.2 8.6016-19.2 19.2l0 282.5472c0 10.5984 8.6016 19.2 19.2 19.2S529.6128 693.1712 529.6128 682.5728z"  ></path>'+
      ''+
      '<path d="M628.2496 682.5728 628.2496 400.0256c0-10.5984-8.6016-19.2-19.2-19.2s-19.2 8.6016-19.2 19.2l0 282.5472c0 10.5984 8.6016 19.2 19.2 19.2S628.2496 693.1712 628.2496 682.5728z"  ></path>'+
      ''+
      '<path d="M515.968 51.2C261.888 51.2 55.1936 257.92 55.1936 512.0256 55.1936 766.1056 261.888 972.8 515.968 972.8s460.7744-206.6944 460.7744-460.7744C976.7424 257.92 770.048 51.2 515.968 51.2zM515.968 934.4c-232.9088 0-422.3744-189.4656-422.3744-422.3744 0-232.9344 189.4656-422.4256 422.3744-422.4256s422.3744 189.4912 422.3744 422.4256C938.3424 744.9344 748.8768 934.4 515.968 934.4z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-10" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M368.308706 642.198588c13.432471 13.432471 35.177412 13.432471 48.609882 0l231.936-231.905882-48.64-48.64-231.905882 231.905882C354.876235 606.991059 354.876235 628.766118 368.308706 642.198588z"  ></path>'+
      ''+
      '<path d="M659.576471 424.749176l-231.905882 231.936c-7.258353 7.198118-7.258353 18.944 0 26.172235 7.198118 7.228235 18.913882 7.228235 26.172235 0l231.905882-231.936c0.662588-0.632471 1.174588-1.355294 1.686588-2.048l-25.810824-25.810824C660.931765 423.574588 660.208941 424.116706 659.576471 424.749176z"  ></path>'+
      ''+
      '<path d="M353.340235 582.324706l231.936-231.936c0.632471-0.632471 1.144471-1.325176 1.656471-2.048l-25.810824-25.810824c-0.692706 0.542118-1.415529 1.054118-2.048 1.686588l-231.936 231.905882c-7.228235 7.228235-7.228235 18.944 0 26.202353C334.396235 589.583059 346.112 589.583059 353.340235 582.324706z"  ></path>'+
      ''+
      '<path d="M401.317647 675.870118c-74.059294 0-63.457882-63.457882-63.457882-63.457882-31.744 0-37.014588-21.142588-37.014588-21.142588l-31.744 153.389176 158.72-37.014588C398.155294 701.289412 401.317647 675.870118 401.317647 675.870118z"  ></path>'+
      ''+
      '<path d="M672.225882 282.473412c-19.456-19.456-51.019294-19.456-70.505412 0l-24.455529 24.455529 126.915765 126.945882 24.485647-24.455529c19.456-19.456 19.456-51.049412 0-70.535529L672.225882 282.473412z"  ></path>'+
      ''+
      '<path d="M864.045176 148.269176C768.451765 52.675765 641.295059 0 506.066824 0 370.778353 0 243.591529 52.675765 148.028235 148.299294c-197.391059 197.391059-197.330824 518.565647 0.030118 715.956706 95.593412 95.623529 222.72 148.269176 358.008471 148.269176 135.228235 0 262.384941-52.645647 357.918118-148.239059 95.653647-95.623529 148.299294-222.750118 148.299294-358.008471S959.638588 243.892706 864.045176 148.269176zM828.777412 829.048471c-86.136471 86.166588-200.824471 133.632-322.710588 133.632-121.946353 0-236.574118-47.465412-322.831059-133.662118-177.965176-177.965176-177.965176-467.546353 0-645.511529 86.196706-86.196706 200.884706-133.692235 322.831059-133.692235s236.544 47.465412 322.710588 133.662118c86.196706 86.196706 133.692235 200.854588 133.692235 322.770824C962.469647 628.193882 914.974118 742.881882 828.777412 829.048471z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)

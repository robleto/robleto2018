/*!
 * jquery.typer.js 0.0.4 - https://github.com/yckart/jquery.typer.js
 * The typewriter effect
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/03/24
*/
!function(f){f.fn.typer=function(u,h){return h=f.extend({},{char:"",delay:5e3,duration:800,endless:!0,onType:f.noop,afterAll:f.noop,afterPhrase:f.noop},h||u),u=f.isPlainObject(u)?h.text:u,u=f.isArray(u)?u:u.split(" "),this.each(function(){var a=f(this),s={input:1,textarea:1}[this.tagName.toLowerCase()],i=!1,o,l=0;!function e(t){var n=({string:1,number:1}[typeof u]?u:u[t])+"",r=n.substr(l++,1);if("<"===r&&(i=!0),">"===r&&(i=!1),a[s?"val":"html"](n.substr(0,l)+(f.isFunction(h.char)?h.char():h.char||" ")),l<=n.length)i?e(t):o=setTimeout(e,h.duration/10,t),h.onType(o);else{if(l=0,++t===u.length&&!h.endless)return;t===u.length&&(t=0),o=setTimeout(e,h.delay,t),t===u.length-1&&h.afterAll(o),h.afterPhrase(o)}}(0)})}}(jQuery);
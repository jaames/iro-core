var t="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",e="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n=new RegExp("rgb"+r),i=new RegExp("rgba"+e),a=new RegExp("hsl"+r),s=new RegExp("hsla"+e),h=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$"),o=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$"),u=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$"),g=new RegExp("^(?:#?|0x?)([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$"),l=Math.log,c=Math.round,f=Math.floor;function v(t,r){var e=t.indexOf("%")>-1,n=parseFloat(t);return e?r/100*n:n}function b(t){return parseInt(t,16)}function d(t){return t.toString(16).padStart(2,"0")}var p=function(t,r){this.$={h:0,s:0,v:0,a:1},t&&this.set(t),this.onChange=r},x={hsv:{configurable:!0},hsva:{configurable:!0},hue:{configurable:!0},saturation:{configurable:!0},value:{configurable:!0},alpha:{configurable:!0},kelvin:{configurable:!0},rgb:{configurable:!0},rgba:{configurable:!0},hsl:{configurable:!0},hsla:{configurable:!0},rgbString:{configurable:!0},rgbaString:{configurable:!0},hexString:{configurable:!0},hex8String:{configurable:!0},hslString:{configurable:!0},hslaString:{configurable:!0}};p.prototype.set=function(t){if("string"==typeof t)/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t)?this.hexString=t:/^rgba?/.test(t)?this.rgbString=t:/^hsla?/.test(t)&&(this.hslString=t);else{if("object"!=typeof t)throw new Error("Invalid color value");t instanceof p?this.hsv=t.hsv:"object"==typeof t&&"r"in t&&"g"in t&&"b"in t?this.rgb=t:"object"==typeof t&&"h"in t&&"s"in t&&"v"in t?this.hsv=t:"object"==typeof t&&"h"in t&&"s"in t&&"l"in t&&(this.hsl=t)}},p.prototype.setChannel=function(t,r,e){var n;this[t]=Object.assign({},this[t],((n={})[r]=e,n))},p.prototype.clone=function(){return new p(this)},p.hsvToRgb=function(t){var r=t.h/60,e=t.s/100,n=t.v/100,i=f(r),a=r-i,s=n*(1-e),h=n*(1-a*e),o=n*(1-(1-a)*e),u=i%6;return{r:255*[n,h,s,s,o,n][u],g:255*[o,n,n,h,s,s][u],b:255*[s,s,o,n,n,h][u]}},p.rgbToHsv=function(t){var r=t.r/255,e=t.g/255,n=t.b/255,i=Math.max(r,e,n),a=Math.min(r,e,n),s=i-a,h=0,o=i,u=0===i?0:s/i;switch(i){case a:h=0;break;case r:h=(e-n)/s+(e<n?6:0);break;case e:h=(n-r)/s+2;break;case n:h=(r-e)/s+4}return{h:60*h,s:100*u,v:100*o}},p.hsvToHsl=function(t){var r=t.s/100,e=t.v/100,n=(2-r)*e,i=n<=1?n:2-n;return{h:t.h,s:100*(i<1e-9?0:r*e/i),l:50*n}},p.hslToHsv=function(t){var r=2*t.l,e=t.s*(r<=100?r:200-r)/100;return{h:t.h,s:100*(r+e<1e-9?0:2*e/(r+e)),v:(r+e)/2}},p.kelvinToRgb=function(t){var r,e,n,i=t/100;return i<66?(r=255,e=-155.25485562709179-.44596950469579133*(e=i-2)+104.49216199393888*l(e),n=i<20?0:.8274096064007395*(n=i-10)-254.76935184120902+115.67994401066147*l(n)):(r=351.97690566805693+.114206453784165*(r=i-55)-40.25366309332127*l(r),e=325.4494125711974+.07943456536662342*(e=i-50)-28.0852963507957*l(e),n=255),{r:f(r),g:f(e),b:f(n)}},p.rgbToKelvin=function(t){for(var r,e=t.r,n=t.b,i=1e3,a=4e4;a-i>.4;){var s=p.kelvinToRgb(r=.5*(a+i));s.b/s.r>=n/e?a=r:i=r}return r},x.hsv.get=function(){var t=this.$;return{h:t.h,s:t.s,v:t.v}},x.hsv.set=function(t){var r=this.$;if(t=Object.assign({},r,t),this.onChange){var e={h:!1,v:!1,s:!1,a:!1};for(var n in r)e[n]=t[n]!=r[n];this.$=t,(e.h||e.s||e.v||e.a)&&this.onChange(this,e)}else this.$=t},x.hsva.get=function(){return Object.assign({},this.$)},x.hsva.set=function(t){this.hsv=t},x.hue.get=function(){return this.$.h},x.hue.set=function(t){this.hsv={h:t}},x.saturation.get=function(){return this.$.s},x.saturation.set=function(t){this.hsv={s:t}},x.value.get=function(){return this.$.v},x.value.set=function(t){this.hsv={v:t}},x.alpha.get=function(){return this.$.a},x.alpha.set=function(t){this.hsv=Object.assign({},this.hsv,{a:t})},x.kelvin.get=function(){return p.rgbToKelvin(this.rgb)},x.kelvin.set=function(t){this.rgb=p.kelvinToRgb(t)},x.rgb.get=function(){var t=p.hsvToRgb(this.$),r=t.g,e=t.b;return{r:c(t.r),g:c(r),b:c(e)}},x.rgb.set=function(t){this.hsv=Object.assign({},p.rgbToHsv(t),{a:void 0===t.a?1:t.a})},x.rgba.get=function(){return Object.assign({},this.rgb,{a:this.alpha})},x.rgba.set=function(t){this.rgb=t},x.hsl.get=function(){var t=p.hsvToHsl(this.$),r=t.s,e=t.l;return{h:c(t.h),s:c(r),l:c(e)}},x.hsl.set=function(t){this.hsv=Object.assign({},p.hslToHsv(t),{a:void 0===t.a?1:t.a})},x.hsla.get=function(){return Object.assign({},this.hsl,{a:this.alpha})},x.hsla.set=function(t){this.hsl=t},x.rgbString.get=function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},x.rgbString.set=function(t){var r,e,a,s,h=1;if((r=n.exec(t))?(e=v(r[1],255),a=v(r[2],255),s=v(r[3],255)):(r=i.exec(t))&&(e=v(r[1],255),a=v(r[2],255),s=v(r[3],255),h=v(r[4],1)),!r)throw new Error("Invalid rgb string");this.rgb={r:e,g:a,b:s,a:h}},x.rgbaString.get=function(){var t=this.rgba;return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},x.rgbaString.set=function(t){this.rgbString=t},x.hexString.get=function(){var t=this.rgb;return"#"+d(t.r)+d(t.g)+d(t.b)},x.hexString.set=function(t){var r,e,n,i,a=255;if((r=h.exec(t))?(e=17*b(r[1]),n=17*b(r[2]),i=17*b(r[3])):(r=o.exec(t))?(e=17*b(r[1]),n=17*b(r[2]),i=17*b(r[3]),a=17*b(r[4])):(r=u.exec(t))?(e=b(r[1]),n=b(r[2]),i=b(r[3])):(r=g.exec(t))&&(e=b(r[1]),n=b(r[2]),i=b(r[3]),a=b(r[4])),!r)throw new Error("Invalid hex string");this.rgb={r:e,g:n,b:i,a:a/255}},x.hex8String.get=function(){var t=this.rgba;return"#"+d(t.r)+d(t.g)+d(t.b)+d(f(255*t.a))},x.hex8String.set=function(t){this.hexString=t},x.hslString.get=function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},x.hslString.set=function(t){var r,e,n,i,h=1;if((r=a.exec(t))?(e=v(r[1],360),n=v(r[2],100),i=v(r[3],100)):(r=s.exec(t))&&(e=v(r[1],360),n=v(r[2],100),i=v(r[3],100),h=v(r[4],1)),!r)throw new Error("Invalid hsl string");this.hsl={h:e,s:n,l:i,a:h}},x.hslaString.get=function(){var t=this.hsla;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},x.hslaString.set=function(t){this.hslString=t},Object.defineProperties(p.prototype,x);var w={sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3};function m(t){var r;return(r={})["vertical"===t.layoutDirection?"marginLeft":"marginTop"]=t.sliderMargin,r}function M(t){var r=t.width,e=t.sliderHeight,n=t.borderWidth,i=t.handleRadius,a=t.padding,s="vertical"===t.layoutDirection;return e=e||2*a+2*i+2*n,"circle"===t.sliderShape?{handleStart:t.padding+t.handleRadius,handleRange:r-2*a-2*i-2*n,width:r,height:r,cx:r/2,cy:r/2,radius:r/2-n/2}:{handleStart:e/2,handleRange:r-e,radius:e/2,x:0,y:0,width:s?e:r,height:s?r:e}}function S(t){var r=t.color.hsva;switch(t.sliderType){case"alpha":return 100*r.a;case"kelvin":var e=t.minTemperature;return Math.max(0,Math.min((t.color.kelvin-e)/(t.maxTemperature-e)*100,100));case"hue":return r.h/=3.6;case"saturation":return r.s;case"value":default:return r.v}}function T(t,r,e,n){var i,a=M(t),s=a.handleRange,h=a.handleStart;i="vertical"===t.layoutDirection?-1*(e-n.top)+s+h:r-(n.left+h),i=Math.max(Math.min(i,s),0);var o=Math.round(100/s*i);switch(t.sliderType){case"kelvin":var u=t.minTemperature;return u+o/100*(t.maxTemperature-u);case"alpha":return o/100;case"hue":return 3.6*o;default:return o}}function y(t){var r=M(t),e=r.handleRange,n=r.handleStart,i="vertical"===t.layoutDirection,a=i?r.width/2:r.height/2,s=n+S(t)/100*e;return i&&(s=-1*s+e+2*n),{x:i?a:s,y:i?s:a}}function R(t){var r=t.color.hsv;switch(t.sliderType){case"alpha":var e=t.color.rgb;return[[0,"rgba("+e.r+","+e.g+","+e.b+",0)"],[100,"rgb("+e.r+","+e.g+","+e.b+")"]];case"kelvin":for(var n=[],i=t.minTemperature,a=t.maxTemperature,s=a-i,h=i,o=0;h<a;h+=s/8,o+=1){var u=p.kelvinToRgb(h);n.push([12.5*o,"rgb("+u.r+","+u.g+","+u.b+")"])}return n;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var g=p.hsvToHsl({h:r.h,s:0,v:r.v}),l=p.hsvToHsl({h:r.h,s:100,v:r.v});return[[0,"hsl("+g.h+","+g.s+"%,"+g.l+"%)"],[100,"hsl("+l.h+","+l.s+"%,"+l.l+"%)"]];case"value":default:var c=p.hsvToHsl({h:r.h,s:r.s,v:100});return[[0,"#000"],[100,"hsl("+c.h+","+c.s+"%,"+c.l+"%)"]]}}function A(t){var r="vertical"===t.layoutDirection;return{x1:"0%",y1:r?"100%":"0%",x2:r?"0%":"100%",y2:"0%"}}function k(t){var r=t.width/2;return{width:t.width,radius:r-t.borderWidth,cx:r,cy:r}}function $(t,r){var e=t.wheelAngle;return((r="clockwise"===t.wheelDirection?-360+r-e:e-r)%360+360)%360}function F(t){var r=t.color.hsv,e=k(t),n=e.cx,i=e.cy,a=t.width/2-t.padding-t.handleRadius-t.borderWidth,s=$(t,r.h)*(Math.PI/180),h=r.s/100*a,o="clockwise"===t.wheelDirection?-1:1;return{x:n+h*Math.cos(s)*o,y:i+h*Math.sin(s)*o}}function j(t,r,e,n){var i=k(t),a=t.width/2-t.padding-t.handleRadius-t.borderWidth;r=i.cx-(r-n.left),e=i.cy-(e-n.top);var s=$(t,Math.atan2(-e,-r)*(180/Math.PI)),h=Math.min(Math.sqrt(r*r+e*e),a);return{h:Math.round(s),s:Math.round(100/a*h)}}function E(t){var r;return(r={})["vertical"===t.layoutDirection?"marginLeft":"marginTop"]=t.sliderMargin,r}function H(t){var r=t.width;return{width:r,height:r,radius:t.padding+t.handleRadius}}function O(t,r,e,n){var i=H(t),a=i.radius,s=(e-=n.top+a)/(i.height-2*a)*100;return{s:Math.max(0,Math.min((r-=n.left+a)/(i.width-2*a)*100,100)),v:Math.max(0,Math.min(100-s,100))}}function D(t){var r=H(t),e=r.radius,n=t.color.hsv,i=r.height-2*e;return{x:e+n.s/100*(r.width-2*e),y:e+(i-n.v/100*i)}}function I(t){return[[[0,"#fff"],[100,"hsl("+t.color.hue+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}var P=document.getElementsByTagName("base");function C(t){var r=window.navigator.userAgent,e=/^((?!chrome|android).)*safari/i.test(r),n=/iPhone|iPod|iPad/i.test(r),i=window.location;return(e||n)&&P.length>0?i.protocol+"//"+i.host+i.pathname+i.search+t:t}function W(t,r,e,n,i){var a=i-n<=180?0:1;return n*=Math.PI/180,i*=Math.PI/180,"M "+(t+e*Math.cos(i))+" "+(r+e*Math.sin(i))+" A "+e+" "+e+" 0 "+a+" 0 "+(t+e*Math.cos(n))+" "+(r+e*Math.sin(n))}var L={width:300,height:300,handleRadius:8,handleSvg:null,handleOrigin:{x:0,y:0},color:"#fff",borderColor:"#fff",borderWidth:0,wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderHeight:null,sliderMargin:12,padding:6};export{p as IroColor,w as sliderDefaultOptions,m as getSliderStyles,M as getSliderDimensions,S as getCurrentSliderValue,T as getSliderValueFromInput,y as getSliderHandlePosition,R as getSliderGradient,A as getSliderGradientCoords,k as getWheelDimensions,$ as translateWheelAngle,F as getWheelHandlePosition,j as getWheelValueFromInput,E as getBoxStyles,H as getBoxDimensions,O as getBoxValueFromInput,D as getBoxHandlePosition,I as getBoxGradients,C as resolveSvgUrl,W as getSvgArcPath,L as iroColorPickerOptionDefaults};
//# sourceMappingURL=iro-core.es.js.map

(function(e){"use strict";function m(){var t=typeof elementor!="undefined"?elementor:elementorFrontend;t.hooks.addFilter("pxl_section_start_render",function(e,t){return typeof t.pxl_parallax_bg_img!="undefined"&&t.pxl_parallax_bg_img.url!=""&&(e+='<div class="pxl-section-bg-parallax"></div>'),typeof t.pxl_color_offset!="undefined"&&t.pxl_color_offset!="none"&&(e+='<div class="pxl-section-overlay-color"></div>'),typeof t.pxl_overlay_img!="undefined"&&t.pxl_overlay_img.url!=""&&(e+='<div class="pxl-overlay--image pxl-overlay--imageLeft"><div class="bg-image"></div></div>'),typeof t.pxl_overlay_img2!="undefined"&&t.pxl_overlay_img2.url!=""&&(e+='<div class="pxl-overlay--image pxl-overlay--imageRight"><div class="bg-image"></div></div>'),e}),e(".pxl-section-bg-parallax").parent(".elementor-element").addClass("pxl-section-parallax-overflow")}function i(){var e=typeof elementor!="undefined"?elementor:elementorFrontend;e.hooks.addFilter("pxl-custom-column/before-render",function(e,t){return typeof t.pxl_column_parallax_bg_img!="undefined"&&t.pxl_column_parallax_bg_img.url!=""&&(e+='<div class="pxl-column-bg-parallax"></div>'),e})}function u(){var t="<style>";e(document).find(".pxl-inline-css").each(function(){var n=e(this);t+=n.attr("data-css")+" ",n.remove()}),t+="</style>",e("head").append(t)}function s(){var e=typeof elementor!="undefined"?elementor:elementorFrontend;e.hooks.addFilter("pxl-custom-section/before-render",function(e,t){if(typeof t.row_divider!="undefined"){if(t.row_divider=="angle-top"||t.row_divider=="angle-bottom"||t.row_divider=="angle-top-right"||t.row_divider=="angle-bottom-left")return e='<svg class="pxl-row-angle" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg>',e;if(t.row_divider=="angle-top-bottom"||t.row_divider=="angle-top-bottom-left")return e='<svg class="pxl-row-angle pxl-row-angle-top" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg><svg class="pxl-row-angle pxl-row-angle-bottom" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg>',e;if(t.row_divider=="wave-animation-top"||t.row_divider=="wave-animation-bottom")return e='<svg class="pxl-row-angle" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 150" fill="#fff"><path d="M 0 26.1978 C 275.76 83.8152 430.707 65.0509 716.279 25.6386 C 930.422 -3.86123 1210.32 -3.98357 1439 9.18045 C 2072.34 45.9691 2201.93 62.4429 2560 26.198 V 172.199 L 0 172.199 V 26.1978 Z"><animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"></animate></path></svg>',e;if(t.row_divider=="curved-top"||t.row_divider=="curved-bottom")return e='<svg class="pxl-row-angle" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1920 128" version="1.1" preserveAspectRatio="none" style="fill:#ffffff"><path stroke-width="0" d="M-1,126a3693.886,3693.886,0,0,1,1921,2.125V-192H-7Z"></path></svg>',e}})}var h=function(e,t){setTimeout(function(){t(".pxl--item").each(function(){var e=t(this).find(".pxl--form-icon"),n=t(this).find(".wpcf7-form-control");n.before(e.clone()),e.remove()})},10)};function a(t){setTimeout(function(){var n=t.find(".pxl-split-text");if(n.length==0)return;gsap.registerPlugin(SplitText),n.each(function(t,n){n.split=new SplitText(n,{type:"lines,words,chars",linesClass:"split-line"}),gsap.set(n,{perspective:400}),e(n).hasClass("split-in-fade")&&(e(n).addClass("active"),gsap.set(n.split.chars,{opacity:0,ease:"Back.easeOut"})),e(n).hasClass("split-in-right")&&gsap.set(n.split.chars,{opacity:0,x:"50",ease:"Back.easeOut"}),e(n).hasClass("split-in-left")&&gsap.set(n.split.chars,{opacity:0,x:"-50",ease:"circ.out"}),e(n).hasClass("split-in-up")&&gsap.set(n.split.chars,{opacity:0,y:"80",ease:"circ.out"}),e(n).hasClass("split-in-down")&&gsap.set(n.split.chars,{opacity:0,y:"-80",ease:"circ.out"}),e(n).hasClass("split-in-rotate")&&gsap.set(n.split.chars,{opacity:0,rotateX:"50deg",ease:"circ.out"}),e(n).hasClass("split-in-scale")&&gsap.set(n.split.chars,{opacity:0,scale:"0.5",ease:"circ.out"}),n.anim=gsap.to(n.split.chars,{scrollTrigger:{trigger:n,toggleActions:"restart pause resume reverse",start:"top 90%"},x:"0",y:"0",rotateX:"0",scale:1,opacity:1,duration:.8,stagger:.02})})},200)}function r(){elementorFrontend.waypoint(e(document).find(".pxl-zoom-point"),function(){var t=e(this).offset(),n=t.top,s=e(window).scrollTop()},{offset:-100,triggerOnce:!0})}function c(){e(".pxl-section-fix-top").length>0&&ScrollTrigger.matchMedia({"(min-width: 991px)":function(){const e=[".pxl-section-fix-top"];e.forEach(e=>{gsap.to(".pxl-section-fix-bottom",{scrollTrigger:{trigger:".pxl-section-fix-bottom",scrub:!0,pin:e,pinSpacing:!1,start:"top bottom",end:"bottom top"}})})}})}function j(e){const t=e.find(".pxl-item--marquee");if(gsap.set(t,{autoAlpha:1}),t.each(function(e,t){gsap.set(t,{xPercent:100*e})}),t.length>2){const e=gsap.utils.wrap(-100,(t.length-1)*100),s=t.data("duration"),o=t.data("slip-type");var n=`-=${t.length*100}`;o=="right"&&(n=`+=${t.length*100}`),gsap.to(t,{xPercent:n,duration:s,repeat:-1,ease:"none",modifiers:{xPercent:t=>e(parseFloat(t))}})}}function l(e){const t=e.find(".pxl-text-marquee"),n=t.find(".pxl-text--marquee"),s=gsap.utils.toArray(n),a=t.hasClass("pxl-right-to-left"),o=t.hasClass("pxl-left-to-right"),r=i(s,{paused:!1,repeat:-1,reversed:o});function i(e,t){e=gsap.utils.toArray(e),t=t||{};let n=gsap.timeline({repeat:t.repeat,paused:t.paused,defaults:{ease:"none"},onReverseComplete:()=>n.totalTime(n.rawTime()+n.duration()*100)}),o=e.length,v=e[0].offsetLeft,p=[],r=[],l=[],i=0,d=(t.speed||1)*100,m=t.snap===!1?e=>e:gsap.utils.snap(t.snap||1),f,c,h,a,u,s;gsap.set(e,{xPercent:(e,t)=>{let n=r[e]=parseFloat(gsap.getProperty(t,"width","px"));return l[e]=m(parseFloat(gsap.getProperty(t,"x","px"))/n*100+gsap.getProperty(t,"xPercent")),l[e]}}),gsap.set(e,{x:0}),f=e[o-1].offsetLeft+l[o-1]/100*r[o-1]-v+e[o-1].offsetWidth*gsap.getProperty(e[o-1],"scaleX")+(parseFloat(t.paddingRight)||0);for(s=0;s<o;s++)u=e[s],c=l[s]/100*r[s],h=u.offsetLeft+c-v,a=h+r[s]*gsap.getProperty(u,"scaleX"),n.to(u,{xPercent:m((c-a)/r[s]*100),duration:a/d},0).fromTo(u,{xPercent:m((c-a+f)/r[s]*100)},{xPercent:l[s],duration:(c-a+f-c)/d,immediateRender:!1},a/d).add("label"+s,h/d),p[s]=h/d;function g(e,t){t=t||{},Math.abs(e-i)>o/2&&(e+=e>i?-o:o);let a=gsap.utils.wrap(0,o,e),s=p[a];return s>n.time()!==e>i&&(t.modifiers={time:gsap.utils.wrap(0,n.duration())},s+=n.duration()*(e>i?1:-1)),i=a,t.overwrite=!0,n.tweenTo(s,t)}return n.next=e=>g(i+1,e),n.previous=e=>g(i-1,e),n.current=()=>i,n.toIndex=(e,t)=>g(e,t),n.times=p,n.progress(1,!0).progress(0,!0),t.reversed&&(n.vars.onReverseComplete(),n.reverse()),n}}function o(){let e=document.querySelectorAll(".pxl-scroll-reveal");e.length>0&&window.innerWidth>767&&(gsap.registerPlugin(ScrollTrigger),e.forEach(e=>{let n=e.querySelector("img"),t=gsap.timeline({scrollTrigger:{trigger:e,toggleActions:"play none none none"}});t.set(e,{autoAlpha:1}),t.from(e,{xPercent:-100,duration:1.5,ease:Power2.out}),t.from(n,{xPercent:100,scale:1.3,duration:1.5,delay:-1.5,ease:Power2.out})}))}function t(){const e=document.querySelectorAll(".pxl-process3 .pxl--item");window.innerWidth>960&&(e.forEach((t,n)=>{t.style.left=`${n*120}px`,t.style.top=`${n*52}px`,t.style.position="absolute",t.style.transition="transform 0.3s ease, z-index 0s",t.addEventListener("click",n=>{n.stopPropagation(),e.forEach(e=>{e.style.zIndex="1",e.style.transform="scale(1)";const t=e.querySelector(".pxl-icon");t&&t.classList.remove("pxl_spin");const n=e.querySelector("img");n&&(n.style.borderRadius="12px")}),t.style.zIndex="10",t.style.transform="scale(1.1)";const s=t.querySelector(".pxl-icon");s&&s.classList.add("pxl_spin");const o=t.querySelector("img");o&&(o.style.borderRadius="0px")})}),document.addEventListener("click",()=>{e.forEach(e=>{e.style.zIndex="1",e.style.transform="scale(1)";const t=e.querySelector(".pxl-icon");t&&t.classList.remove("pxl_spin");const n=e.querySelector("img");n&&(n.style.borderRadius="12px")})}))}window.addEventListener("resize",t);function n(){var e=document.querySelectorAll(".pxl-heading .pxl-heading--text-scroll");e.length>0&&e.forEach(e=>{var t=new SplitText(e,{type:"words, chars"});t.words.forEach(e=>{e.children.length>0&&e.children[0].classList.add("first-char")}),gsap.fromTo(t.chars,{position:"relative",display:"inline-block",opacity:.2,x:-5},{opacity:1,x:0,stagger:.1,scrollTrigger:{trigger:e,toggleActions:"play pause reverse pause",start:"top 90%",end:"top 40%",scrub:.7}})})}function f(){let e=0,s=window.scrollY;const o=window.matchMedia("(max-width: 1200px)");let t=!1;function a(){const i=document.querySelector(".pxl-image-split .containers"),n=document.querySelector(".pxl-image-split .pxl-width"),o=document.querySelector(".pxl-image-split .filler-space");if(i&&n&&o){const a=i.getBoundingClientRect().top,r=o.getBoundingClientRect().bottom,c=o.getBoundingClientRect().top,l=n.getBoundingClientRect().top,t=window.scrollY-s;a<=0&&(t>0&&(e=Math.min(100,e+t*.1)),t<0&&r>=window.innerHeight&&(e=Math.max(0,e-Math.abs(t)*.15)),c>=l&&(e=0),n.style.width=e+"%")}s=window.scrollY,t=!1}function i(){t||(t=!0,requestAnimationFrame(a))}function n(){o.matches?window.removeEventListener("scroll",i):window.addEventListener("scroll",i)}function r(){n()}document.querySelector(".pxl-image-split .containers")&&document.querySelector(".pxl-image-split .pxl-width")&&document.querySelector(".pxl-image-split .filler-space")&&(n(),o.addEventListener("change",n),window.addEventListener("resize",r))}function p(){var t,n,s=`#ifdef GL_ES
        precision mediump float;
        #endif

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        uniform mat4 texture0Matrix;
        uniform mat4 texture1Matrix;
        uniform mat4 mapMatrix;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord0;
        varying vec2 vTextureCoord1;
        varying vec2 vTextureCoordMap;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            vTextureCoord0 = (texture0Matrix * vec4(aTextureCoord, 0., 1.)).xy;
            vTextureCoord1 = (texture1Matrix * vec4(aTextureCoord, 0., 1.)).xy;
            vTextureCoordMap = (mapMatrix * vec4(aTextureCoord, 0., 1.)).xy;
            vVertexPosition = vertexPosition;
        }`,o=`#ifdef GL_ES
        precision mediump float;
        #endif

        #define PI2 6.28318530718
        #define PI 3.14159265359
        #define S(a,b,n) smoothstep(a,b,n)

        uniform float uTime;
        uniform float uProgress;
        uniform vec2 uReso;
        uniform vec2 uMouse;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord0;
        varying vec2 vTextureCoord1;
        varying vec2 vTextureCoordMap;

        uniform sampler2D texture0;
        uniform sampler2D texture1;
        uniform sampler2D map;

        float exponentialEasing (float x, float a){

            float epsilon = 0.00001;
            float min_param_a = 0.0 + epsilon;
            float max_param_a = 1.0 - epsilon;
            a = max(min_param_a, min(max_param_a, a));

            if (a < 0.5){
                a = 2.0 * a;
                float y = pow(x, a);
                return y;
            } else {
                a = 2.0 * (a-0.5);
                float y = pow(x, 1.0 / (1.-a));
                return y;
            }
        }

        vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
            vec4 color = vec4(0.0);
            vec2 off1 = vec2(1.411764705882353) * direction;
            vec2 off2 = vec2(3.2941176470588234) * direction;
            vec2 off3 = vec2(5.176470588235294) * direction;
            color += texture2D(image, uv) * 0.1964825501511404;
            color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
            color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
            color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
            color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
            return color;
        }

        void main(){
            vec2 uv0 = vTextureCoord0;
            vec2 uv1 = vTextureCoord1;

            float progress0 = uProgress;
            float progress1 = 1. - uProgress;

            vec4 map = blur13(map, vTextureCoordMap, uReso, vec2(2.)) + 0.5;

            uv0.x += progress0 * map.r;
            uv1.x -= progress1 * map.r;

            vec4 color = texture2D( texture0, uv0 );
            vec4 color1 = texture2D( texture1, uv1 );

            gl_FragColor = mix(color, color1, progress0 );
        }`;class i{constructor(e){this.canvas=e.canvas,this.webGLCurtain=new Curtains({container:this.canvas,watchScroll:!1,pixelRatio:Math.min(1.5,window.devicePixelRatio)}),this.planeElement=e.planeElement,this.mouse={x:0,y:0},this.params={vertexShader:s,fragmentShader:o,widthSegments:40,heightSegments:40,uniforms:{time:{name:"uTime",type:"1f",value:0},mousepos:{name:"uMouse",type:"2f",value:[0,0]},resolution:{name:"uReso",type:"2f",value:[innerWidth,innerHeight]},progress:{name:"uProgress",type:"1f",value:0}}},this.initPlane()}initPlane(){this.plane=this.webGLCurtain.addPlane(this.planeElement,this.params),this.plane&&this.plane.onReady(()=>{this.update(),this.initEvent()})}update(){this.plane.onRender(()=>{this.plane.uniforms.time.value+=.01,this.plane.uniforms.resolution.value=[innerWidth,innerHeight]})}initEvent(){this.planeElement.addEventListener("mouseenter",e=>{gsap.to(this.plane.uniforms.progress,.8,{value:1})}),this.planeElement.addEventListener("mouseout",e=>{gsap.to(this.plane.uniforms.progress,.8,{value:0})})}}(navigator.userAgent.indexOf("Safari")==-1||navigator.userAgent.indexOf("Chrome")>-1)&&e(".pxl-image-effect1.normal").each(function(){const t=e(this),n=t.find(".canvas")[0],s=t.find(".item--image")[0],o=t.data("initialized");!o&&n&&s&&(new i({canvas:n,planeElement:s}),t.data("initialized",!0))}),t=`#ifdef GL_ES
        precision mediump float;
        #endif

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec2 vTextureCoord;

        void main() {
            gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

            vTextureCoord = aTextureCoord;
        }`,n=`
        #ifdef GL_ES
        precision mediump float;
        #endif

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        uniform sampler2D planeTexture;

        void main() {
            vec2 textureCoord = vTextureCoord;

            const float PI = 3.141592;

            textureCoord.x += (
            sin(textureCoord.x * 2.5 + ((uTime * (PI / 3.0)) * 0.031))
            + sin(textureCoord.y * 2.5 + ((uTime * (PI / 2.489)) * 0.017))
            ) * 0.0075;

            textureCoord.y += (
            sin(textureCoord.y * 2.5 + ((uTime * (PI / 2.023)) * 0.023))
            + sin(textureCoord.x * 2.5 + ((uTime * (PI / 3.1254)) * 0.037))
            ) * 0.0125;

            gl_FragColor = texture2D(planeTexture, textureCoord);
        }
        `;class a{constructor(e){this.canvas=e.canvas,this.webGLCurtain=new Curtains({container:this.canvas,watchScroll:!1,pixelRatio:Math.min(1.5,window.devicePixelRatio)}),this.planeElement=e.planeElement,this.mouse={x:0,y:0},this.params={vertexShader:t,fragmentShader:n,widthSegments:40,heightSegments:40,uniforms:{time:{name:"uTime",type:"1f",value:0},mousepos:{name:"uMouse",type:"2f",value:[0,0]},resolution:{name:"uReso",type:"2f",value:[innerWidth,innerHeight]},progress:{name:"uProgress",type:"1f",value:0}}},this.initPlane()}initPlane(){this.plane=this.webGLCurtain.addPlane(this.planeElement,this.params),this.plane=new Plane(this.webGLCurtain,this.planeElement,this.params),this.plane&&this.plane.onReady(()=>{this.update(),this.initEvent()})}update(){this.plane.onRender(()=>{this.plane.uniforms.resolution.value=[innerWidth,innerHeight]})}initEvent(){let e=!1;this.planeElement.addEventListener("mouseenter",t=>{e=!0}),this.planeElement.addEventListener("mouseout",t=>{e=!1}),this.plane.onRender(()=>{e&&this.plane.uniforms.time.value++})}}(navigator.userAgent.indexOf("Safari")==-1||navigator.userAgent.indexOf("Chrome")>-1)&&e(".pxl-image-effect1.expo").each(function(){const t=e(this),n=t.find(".canvas")[0],s=t.find(".item--image")[0],o=t.data("initialized");!o&&n&&s&&(new a({canvas:n,planeElement:s}),t.data("initialized",!0))});const r=`
        precision mediump float;

        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;

        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform float uTime;

        void main() {
            vec3 vertexPosition = aVertexPosition;

            float waveCoords = ((uTime / 45.0) * 3.5) - 1.75;

            float distanceToWave = distance(vec2(vertexPosition.x, 0.0), vec2(waveCoords, 0.0));

            vertexPosition.z -= (cos(clamp(distanceToWave, 0.0, 0.75) * 3.141592) - cos(0.75 * 3.141592) + (2.0 * sin(3.141592 * uTime / 90.0))) * 0.025;

            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);

            vTextureCoord = aTextureCoord;
            vVertexPosition = vertexPosition;
        }
        `,c=`precision mediump float;

        uniform float uTime;

        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;

        uniform sampler2D uExample;


        void main() {

            vec2 textureCoords = vec2(vTextureCoord.x, vTextureCoord.y);
            vec4 finalColor = texture2D(uExample, textureCoords);

            gl_FragColor = finalColor;
        }`;class l{constructor(e){this.canvas=e.canvas,this.webGLCurtain=new Curtains({container:this.canvas,watchScroll:!1,pixelRatio:Math.min(1.5,window.devicePixelRatio)}),this.planeElement=e.planeElement,this.mouse={x:0,y:0},this.params={vertexShader:r,fragmentShader:c,widthSegments:40,heightSegments:40,uniforms:{time:{name:"uTime",type:"1f",value:0},resolution:{name:"uReso",type:"2f",value:[innerWidth,innerHeight]}}},this.initPlane()}initPlane(){this.plane=this.webGLCurtain.addPlane(this.planeElement,this.params),this.plane&&this.plane.onReady(()=>{this.update(),this.initEvent()})}update(){this.plane.onRender(()=>{this.plane.uniforms.time.value+=.01,this.plane.uniforms.resolution.value=[innerWidth,innerHeight]})}initEvent(){let e=!1;this.planeElement.addEventListener("mouseenter",t=>{e=!0}),this.planeElement.addEventListener("mouseout",t=>{e=!1}),this.plane.onRender(()=>{e?this.plane.uniforms.time.value+=(45-this.plane.uniforms.time.value)*.0375:this.plane.uniforms.time.value+=(0-this.plane.uniforms.time.value)*.0375})}}(navigator.userAgent.indexOf("Safari")==-1||navigator.userAgent.indexOf("Chrome")>-1)&&e(".pxl-image-effect1.wave").each(function(){const t=e(this),n=t.find(".canvas")[0],s=t.find(".item--image")[0],o=t.data("initialized");!o&&n&&s&&(new l({canvas:n,planeElement:s}),t.data("initialized",!0))}),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&e(".pxl-image-effect1 .image-front").css("opacity","1")}function g(e){if(!e.find(".pxl-image-2d .item").length)return;let s=gsap.utils.toArray(e.find(".pxl-image-2d .item")),t=o(s,{radiusX:1200,radiusY:1e3,activeAngle:-90,draggable:!0,onClick(e,t){t.to(e,{duration:3,ease:"linear"},"short")},onActivate(e){e.classList.add("active")},onDeactivate(e){e.classList.remove("active")}});t.render();function o(e,{radiusX:t=200,radiusY:n=200,activeAngle:s=-90,activeElement:o,onClick:i,onActivate:a,onDeactivate:r,onStart:c,onStop:l,draggable:d,autoAdvance:u}){e=gsap.utils.toArray(e),gsap.set(e,{xPercent:-50,x:0,yPercent:-50,y:0});let x=Math.PI/180,v=("ontouchstart"in document.documentElement?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in document.documentElement?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),C=e=>Math.round(e*1e4)/1e4,p=document.createElement("div"),j=e.length,b=360/j,f=gsap.utils.wrap(0,j),A=gsap.utils.wrap(0,360),g=0,y,O,m=u&&gsap.delayedCall(parseFloat(u)||2,()=>{h.next(),m.restart(!0)}),S=e.map(e=>gsap.quickSetter(e,"x","px")),M=e.map(e=>gsap.quickSetter(e,"y","px")),h={rotation(t){if(arguments.length){let n=o;g=A(t),o=e[f(Math.round(-t/b))],h.render(),n!==o&&(r&&n&&r(n,h),a&&a(o,h))}return g},resize(e,s){t=e,n=s,h.render()},render(){h.render=function(){let r=b*x,a=(g+s)*x,i=e.indexOf(o);for(let s=0;s<j;s++)S[s](C(Math.cos(a)*t)),M[s](C(Math.sin(a)*n)),s===i?gsap.to(e[s],{opacity:1,rotate:0,duration:.3,ease:"power1.out"}):s===f(i-1)||s===f(i+1)?gsap.to(e[s],{opacity:1,rotate:s===f(i-1)?-18:18,duration:.3,ease:"power1.out"}):s===f(i-2)||s===f(i+2)?gsap.to(e[s],{opacity:1,rotate:s===f(i-2)?-30:30,duration:.3,ease:"power1.out"}):s===f(i-3)||s===f(i+3)?gsap.to(e[s],{opacity:0,rotate:s===f(i-3)?-60:60,duration:.3,ease:"power1.out"}):gsap.to(e[s],{opacity:0,rotate:0,duration:.3,ease:"power1.out"}),a+=r}},activeElement(e){return arguments.length&&h.rotation(h.elementRotation(e)),o},elementRotation(t){let n=e.indexOf(gsap.utils.toArray(t)[0]);return(j-n)*b},to(e,t,n){t=t||{},t.rotation=typeof e=="number"?e:h.elementRotation(e)||parseFloat(e),t.overwrite=!0;let{onUpdate:s,onComplete:i}=t,a=t.onStart;if(m&&m.pause(),t.onStart=function(){c&&c(o,h),a&&a.call(this)},t.onComplete=function(){l&&l(o,h),i&&i.call(this),m&&m.restart(!0)},n){let e=gsap.getProperty(p);return t.onUpdate=function(){h.rotation(e("rotation")),s&&s.call(this)},t.rotation+="_"+n,gsap.fromTo(p,{rotation:g},t)}return gsap.to(h,t)},next(t,n){t={...t,duration:8};let s=e[f(e.indexOf(o)+1)];h.to(s,t,n||"ccw")},previous(t,n){t={...t,duration:8};let s=e[f(e.indexOf(o)-1)];h.to(s,t,n||"cw")},kill(){e.forEach(e=>{e.removeEventListener("click",w),e.removeEventListener(v[0],E),e.removeEventListener(v[2],_),e.removeEventListener(v[3],_)}),gsap.killTweensOf(h),p.parentNode&&p.parentNode.removeChild(p),m&&m.kill(),d&&d.kill()},autoAdvance:m},w=e=>{if(!y){m&&m.restart(!0),i&&i(e.currentTarget,h);let t=e.currentTarget.closest("a")||e.currentTarget.querySelector("a");t&&t.href&&(t.target==="_blank"?window.open(t.href,"_blank"):window.location.href=t.href)}},E=e=>{O=g,gsap.set(p,{rotation:g}),m&&m.pause(),gsap.killTweensOf(h),d.startDrag(e),y=!1},_=e=>{d.endDrag(e),g===O&&(m&&m.restart(!0),d.tween&&d.tween.kill(),w(e))},k=()=>{y||(c&&c(o,h),y=!0),h.rotation(d.rotation)};return e[0].parentNode.appendChild(p),gsap.set(p,{visibility:"hidden",position:"absolute",width:0,height:0,top:"50%",left:"50%",xPercent:-50,yPercent:-50}),e.forEach(e=>{d?(e.addEventListener(v[0],E),e.addEventListener(v[2],_),e.addEventListener(v[3],_)):e.addEventListener("click",w)}),h.snap=b,d&&(h.draggable=d=Draggable.create(p,{type:"rotation",snap:gsap.utils.snap(b),inertia:!0,onThrowComplete:()=>{m&&m.restart(!0),l&&l(o,h)},onThrowUpdate:k,onDrag:k})[0]),h.activeElement(gsap.utils.toArray(o)[0]||e[0]),h}let n=0,i=!0;function a(){if(!i)return;let e=window.scrollY;e>n&&t.next(),n=e}window.addEventListener("scroll",a)}function v(){const e=document.querySelectorAll(".animate-on-scroll");window.innerWidth>991&&e.length>0&&e.forEach(function(e){gsap.fromTo(e,{transform:"translateY(200px)",opacity:0},{transform:"translateY(0)",opacity:1,duration:1.15,ease:"power2.out",scrollTrigger:{trigger:e,start:"top bottom",toggleActions:"play none none none"}})})}function b(){const e=document.querySelectorAll(".pxl---text-scroll");e.length>0&&e.forEach(function(e){const t=new SplitText(e,{type:"words,chars"}),n=t.chars;gsap.fromTo(n,{filter:"blur(10px) brightness(30%)",willChange:"filter"},{filter:"blur(0px) brightness(100%)",ease:"none",stagger:.05,scrollTrigger:{trigger:e,start:"top bottom-=15%",end:"bottom center+=15%",scrub:.2}})})}function d(t){const n=t.find(".pxl-image-box2.pxl-image-box-animation .pxl-box-inner .img-counter");let s=0;function o(e){return gsap.to(e,{rotation:360,duration:6,ease:"linear"})}function i(){const i=n[s];s=(s+1)%n.length;const t=n[s];n.each(function(){e(this).css("zIndex",0)}),e(t).css("zIndex",1),gsap.set(t,{rotation:0,opacity:0}),gsap.to(t,{opacity:1,duration:1}),o(t),gsap.to(i,{opacity:0,duration:1})}gsap.set(n[0],{opacity:1}),o(n[0]),setInterval(i,6e3)}e(window).on("elementor/frontend/init",function(){m(),i(),u(),s(),r(),c(),o(),t(),n(),f(),p(),v(),b(),elementorFrontend.hooks.addAction("frontend/element_ready/pxl_image_carousel.default",function(e){g(e)}),elementorFrontend.hooks.addAction("frontend/element_ready/pxl_contact_form.default",h),elementorFrontend.hooks.addAction("frontend/element_ready/pxl_heading.default",function(e){a(e)}),elementorFrontend.hooks.addAction("frontend/element_ready/pxl_text_marquee.default",function(e){l(e)}),elementorFrontend.hooks.addAction("frontend/element_ready/pxl_image_box.default",function(e){d(e)})})})(jQuery)
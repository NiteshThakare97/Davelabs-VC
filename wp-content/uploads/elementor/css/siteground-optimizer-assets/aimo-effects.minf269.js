(function(e){function t(){let t=e(".ripple");if(!t.length)return;const n=t=>{const m=e(t).outerWidth(),j=e(t).outerHeight(),b=[m,j],x=`
                attribute vec2 uv;
                attribute vec2 position;
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 0, 1);
                }
            `,_=`
                precision highp float;
                precision highp int;
                uniform sampler2D tWater;
                uniform sampler2D tFlow;
                uniform float uTime;
                varying vec2 vUv;
                uniform vec4 res;
    
                void main() {
                    vec3 flow = texture2D(tFlow, vUv).rgb;
                    vec2 uv = .5 * gl_FragCoord.xy / res.xy;
                    vec2 myUV = (uv - vec2(0.5)) * res.zw + vec2(0.5);
                    myUV -= flow.xy * (0.10 * 0.7);
                    vec2 myUV2 = (uv - vec2(0.5)) * res.zw + vec2(0.5);
                    myUV2 -= flow.xy * (0.075 * 0.7);
                    vec2 myUV3 = (uv - vec2(0.5)) * res.zw + vec2(0.5);
                    myUV3 -= flow.xy * (0.05 * 0.7);
                    vec3 tex = texture2D(tWater, myUV).rgb;
                    vec3 tex2 = texture2D(tWater, myUV2).rgb;
                    vec3 tex3 = texture2D(tWater, myUV3).rgb;
                    gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
                }
            `,d=new ogl.Renderer({dpr:2}),n=d.gl;e(t).append(n.canvas);let u=e(t).css("background-image");u=u.replace(/^url\(["']?/,"").replace(/["']?\)$/,"");const r=new Image,f=new ogl.Texture(n,{minFilter:n.LINEAR,magFilter:n.LINEAR});r.onload=()=>f.image=r,r.crossOrigin="Anonymous",r.src=u;let h=1;const c=new ogl.Vec2(-1),s=new ogl.Vec2;function p(){const r=e(t).get(0).getBoundingClientRect(),n=r.width,s=r.height;let o,i;const a=b[1]/b[0];s/n<a?(o=1,i=s/n/a):(o=n/s*a,i=1),v.program.uniforms.res.value=new ogl.Vec4(n,s,o,i),d.setSize(n,s),h=n/s}const o=new ogl.Flowmap(n),w=new ogl.Geometry(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),g=new ogl.Program(n,{vertex:x,fragment:_,uniforms:{uTime:{value:0},tWater:{value:f},res:{value:new ogl.Vec4(m,j,1,1)},tFlow:o.uniform}}),v=new ogl.Mesh(n,{geometry:w,program:g});window.addEventListener("resize",p,!1),p();const O="ontouchstart"in window;O?(e(t).on("touchstart",l),e(t).on("touchmove",l)):e(t).on("mousemove",l);let a;const i=new ogl.Vec2;function l(n){n.preventDefault();let r,l;n.changedTouches&&n.changedTouches.length&&(n.x=n.changedTouches[0].pageX,n.y=n.changedTouches[0].pageY),n.x===void 0&&(n.x=n.pageX,n.y=n.pageY);const o=e(t).get(0).getBoundingClientRect();r=n.pageX-(o.left+window.scrollX),l=n.pageY-(o.top+window.scrollY),c.set(r/o.width,1-l/o.height),a||(a=performance.now(),i.set(n.x,n.y));const h=n.x-i.x,m=n.y-i.y;i.set(n.x,n.y);let d=performance.now(),u=Math.max(10.4,d-a);a=d,s.x=h/u,s.y=m/u,s.needsUpdate=!0}requestAnimationFrame(y);function y(e){requestAnimationFrame(y),s.needsUpdate||(c.set(-1),s.set(0)),s.needsUpdate=!1,o.aspect=h,o.mouse.copy(c),o.velocity.lerp(s,s.len?.15:.1),o.update(),g.uniforms.uTime.value=e*.01,d.render({scene:v})}};t.each(function(e,t){n(t)})}e(window).on("elementor/frontend/init",function(){t()})})(jQuery)
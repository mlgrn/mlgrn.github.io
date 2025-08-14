import{b as g,t as w,f as C,s as H}from"../chunks/disclose-version.Dty1L5rJ.js";import{i as N}from"../chunks/legacy.CwX4QJdB.js";import{p as D,k as z,l as O,m as L,t as S,C as R,r as x,q as m,u,v as Y,o as P}from"../chunks/utils.BqBMS4s4.js";import{a as $,i as M}from"../chunks/index-client.Dfm-WWw2.js";import{b as I}from"../chunks/base.SHlxVKT1.js";import{T as U}from"../chunks/titled-page.Cqmzy9BL.js";import{F as q}from"../chunks/footer.oA6a2pCh.js";import{p as J,i as W,a as B}from"../chunks/entry.XFDW-gL9.js";function G(r){const n=JSON.parse(r);return n.data&&(n.data=J(n.data)),n}function T(r){return HTMLElement.prototype.cloneNode.call(r)}function K(r,n=()=>{}){const b=async({action:t,result:s,reset:l=!0,invalidateAll:c=!0})=>{s.type==="success"&&(l&&HTMLFormElement.prototype.reset.call(r),c&&await W()),(location.origin+location.pathname===t.origin+t.pathname||s.type==="redirect"||s.type==="error")&&B(s)};async function d(t){var E,e,o,k,h;if(((E=t.submitter)!=null&&E.hasAttribute("formmethod")?t.submitter.formMethod:T(r).method)!=="post")return;t.preventDefault();const l=new URL((e=t.submitter)!=null&&e.hasAttribute("formaction")?t.submitter.formAction:T(r).action),c=(o=t.submitter)!=null&&o.hasAttribute("formenctype")?t.submitter.formEnctype:T(r).enctype,p=new FormData(r),f=(k=t.submitter)==null?void 0:k.getAttribute("name");f&&p.append(f,((h=t.submitter)==null?void 0:h.getAttribute("value"))??"");const v=new AbortController;let y=!1;const A=await n({action:l,cancel:()=>y=!0,controller:v,formData:p,formElement:r,submitter:t.submitter})??b;if(y)return;let i;try{const a=new Headers({accept:"application/json","x-sveltekit-action":"true"});c!=="multipart/form-data"&&a.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(c)?c:"application/x-www-form-urlencoded");const F=c==="multipart/form-data"?p:new URLSearchParams(p),j=await fetch(l,{method:"POST",headers:a,cache:"no-store",body:F,signal:v.signal});i=G(await j.text()),i.type==="error"&&(i.status=j.status)}catch(a){if((a==null?void 0:a.name)==="AbortError")return;i={type:"error",error:a}}A({action:l,formData:p,formElement:r,update:a=>b({action:l,result:i,reset:a==null?void 0:a.reset,invalidateAll:a==null?void 0:a.invalidateAll}),result:i})}return HTMLFormElement.prototype.addEventListener.call(r,"submit",d),{destroy(){HTMLFormElement.prototype.removeEventListener.call(r,"submit",d)}}}var Q=w(`<div class="mb-4 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200"><div class="flex items-center"><i class="i-carbon-checkmark-filled text-xl mr-2"></i> <span>Message sent successfully! I'll get back to you soon.</span></div></div>`),V=w('<div class="mb-4 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200"><div class="flex items-center"><i class="i-carbon-warning-filled text-xl mr-2"></i> <span> </span></div></div>'),X=w('<i class="i-carbon-loading animate-spin mr-2"></i> Sending...',1),Z=w(`<div class="mx-auto w-full max-w-lg px-4 sm:px-6"><h4 class="text-xl md:text-3xl font-semibold text-center ">Email me using the form below</h4> <br> <div class="flex justify-center items-center space-x-4"><i class="i-carbon-email text-3xl animate-pulse gradient-icon"></i> <p class="text-sm">I am available for freelance, contract, or full time opportunities.</p></div> <br> <div class="flex justify-center items-center space-x-4"><i class="i-carbon-location-current text-3xl animate-pulse gradient-icon"></i> <p class="text-sm">Remote or NYC area</p></div> <br> <!> <!> <form method="POST" action="?/create" class="rounded-lg border bg-white shadow-sm dark:bg-neutral-900"><div class="space-y-4 p-4 sm:p-6"><div><label for="name" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label> <input type="text" id="name" name="name" placeholder="Your Name" autocomplete="name" class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"></div> <div><label for="email" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label> <input type="email" id="email" name="email" placeholder="Your Email" autocomplete="email" class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"></div> <div><label for="subject" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label> <input type="text" id="subject" name="subject" placeholder="Email Subject" class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"></div> <div><label for="message" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label> <textarea id="message" name="message" placeholder="Write your message..." rows="5" class="w-full resize-vertical rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"></textarea></div> <style>@keyframes gradientAnimation {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }

                    @keyframes clickAnimation {
                        0% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(0.95);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                    .gradient-icon {
                        background: linear-gradient(90deg, #8a2be2, #9400d3); /* More Purple */


                    }
                    .gradient-button {
                        background: linear-gradient(90deg, #8a2be2, #9400d3); /* More Purple */
                        background-size: 200% 200%;
                        color: white;
                        border-radius: 0.5rem;
                        padding: 0.5rem 1rem;
                        border: 2px solid #8a2be2; /* Purple */
                        transition: background 0.3s ease, transform 0.3s ease;
                        display: block;
                        margin: 0 auto;
                        animation: gradientAnimation 3s linear infinite;
                        font-weight: bold; /* Make font bold */
                    }

                    .gradient-button:hover {
                        transform: scale(1.05);
                    }

                    .gradient-button:active {
                        animation: clickAnimation 0.2s ease; 
                    }</style> <button type="submit" class="gradient-button"><!></button></div></form></div>`),ee=w("<!> <!>",1);function ce(r,n){D(n,!1);let b=$(n,"form",8),d=R(!1);N();var t=ee(),s=z(t);U(s,{title:"Contact",children:(c,p)=>{var f=Z(),v=x(m(f),12);M(v,()=>{var e;return(e=b())==null?void 0:e.success},e=>{var o=Q();g(e,o)});var y=x(v,2);M(y,()=>{var e;return(e=b())==null?void 0:e.error},e=>{var o=V(),k=m(o),h=x(m(k),2),a=m(h,!0);u(h),u(k),u(o),S(()=>H(a,b().error)),g(e,o)});var _=x(y,2),A=m(_),i=x(m(A),10),E=m(i);M(E,()=>L(d),e=>{var o=X();Y(),g(e,o)},e=>{var o=C("Submit");g(e,o)}),u(i),u(A),u(_),I(_,(e,o)=>K(e,o),()=>()=>(P(d,!0),async({update:e})=>{P(d,!1),await e()})),u(f),S(()=>i.disabled=L(d)),g(c,f)},$$slots:{default:!0}});var l=x(s,2);q(l,{}),g(r,t),O()}export{ce as component};

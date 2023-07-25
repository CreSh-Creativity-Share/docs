"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="How to setup Cognito - Amplify",l={unversionedId:"Frontend/CognitoSetup",id:"Frontend/CognitoSetup",title:"How to setup Cognito - Amplify",description:"AWS official link",source:"@site/docs/Frontend/CognitoSetup.md",sourceDirName:"Frontend",slug:"/Frontend/CognitoSetup",permalink:"/docs/docs/Frontend/CognitoSetup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frontend",permalink:"/docs/docs/Frontend/"},next:{title:"Main page",permalink:"/docs/docs/intro"}},p={},c=[{value:"Getting Started",id:"getting-started",level:2}],s={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-setup-cognito---amplify"},"How to setup Cognito - Amplify"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli"},"AWS official link")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"You have to already have user on our AWS console. For more information click ",(0,o.kt)("a",{parentName:"p",href:"https://cresh-creativity-share.github.io/docs/docs/AWS/"},"here")),(0,o.kt)("p",null,"Next initialize amplify."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"amplify init\n")),(0,o.kt)("p",null,"This will help you get all the necessary environment variables.\nChose previous seted AWS profile."),(0,o.kt)("p",null,"After all this steps you have all necessary data related to your profile in aws-exports.js file"),(0,o.kt)("p",null,"Next, run the development server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," with your browser to see the result."))}f.isMDXComponent=!0}}]);
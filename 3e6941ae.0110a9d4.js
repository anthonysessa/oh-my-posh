(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(91)),i={id:"battery",title:"Battery",sidebar_label:"Battery"},c={unversionedId:"battery",id:"battery",isDocsHomePage:!1,title:"Battery",description:"What",source:"@site/docs/segment-battery.md",slug:"/battery",permalink:"/docs/battery",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/segment-battery.md",version:"current",sidebar_label:"Battery",sidebar:"docs",previous:{title:"Azure Subscription",permalink:"/docs/az"},next:{title:"Command",permalink:"/docs/command"}},l=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what"},"What"),Object(a.b)("p",null,"Battery displays the remaining power percentage for your battery."),Object(a.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "battery",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#193549",\n  "background": "#ffeb3b",\n  "properties": {\n    "battery_icon": "",\n    "discharging_icon": "\\uE231 ",\n    "charging_icon": "\\uE234 ",\n    "charged_icon": "\\uE22F ",\n    "color_background": true,\n    "charged_color": "#4caf50",\n    "charging_color": "#40c4ff",\n    "discharging_color": "#ff5722",\n    "postfix": "\\uF295 "\n  }\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"battery_icon: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - the icon to use as a prefix for the battery percentage - defaults to empty"),Object(a.b)("li",{parentName:"ul"},"display_error: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - show the error context when failing to retrieve the battery information - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"true")),Object(a.b)("li",{parentName:"ul"},"charging_icon: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - icon to display on the left when charging - defaults to empty"),Object(a.b)("li",{parentName:"ul"},"discharging_icon: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - icon to display on the left when discharging - defaults to empty"),Object(a.b)("li",{parentName:"ul"},"charged_icon: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - icon to display on the left when fully charged - defaults to empty"),Object(a.b)("li",{parentName:"ul"},"color_background: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - color the background or foreground for properties below - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"false")),Object(a.b)("li",{parentName:"ul"},"charged_color: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - color to use when fully charged - defaults to segment color"),Object(a.b)("li",{parentName:"ul"},"charging_color: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - color to use when charging - defaults to segment color"),Object(a.b)("li",{parentName:"ul"},"discharging_color: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex color code")," - color to use when discharging - defaults to segment color")))}p.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||a;return r?o.a.createElement(m,c(c({ref:t},b),{},{components:r})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<a;b++)i[b]=r[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
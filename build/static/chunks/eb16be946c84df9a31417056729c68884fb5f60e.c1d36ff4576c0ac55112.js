(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{At9n:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e("nKUr"),i=e("9Koi");e("26TT");function s(n){var t=Object(i.a)().t;return Object(r.jsx)("div",{class:"flex flex-row items-center justify-center",children:Object(r.jsx)("div",{class:"rounded-3xl border-black grid lg:grid-rows-4 lg:grid-flow-col gap-3 bg-black flex-grow",style:{borderWidth:12},children:n.round.answers.map((function(n,e){return Object(r.jsx)("div",{class:" uppercase items-center text-center rounded border-2 font-extrabold",children:n.trig?Object(r.jsx)("div",{class:"h-full bg-gradient-to-t from-blue-800 via-blue-600 to-blue-800",children:Object(r.jsxs)("div",{class:"flex h-full items-center justify-center",children:[Object(r.jsx)("p",{class:"text-2xl text-white px-5 flex-grow",style:{textShadow:"1px 2px 4px black"},children:n.ans}),Object(r.jsx)("div",{class:"bg-gradient-to-t from-blue-700 to-blue-400 border-l-2 h-full text-center items-center justify-center p-5 flex",children:Object(r.jsx)("p",{class:"text-4xl text-white",style:{textShadow:"1px 2px 4px black"},children:t("number",{count:n.pnt})})})]})}):Object(r.jsx)("div",{class:"h-full bg-gradient-to-t py-3 flex justify-center items-center from-blue-700 to-blue-400 ",children:Object(r.jsx)("div",{class:"rounded-full justify-center items-center inline-block px-5 border-2 py-2 bg-gradient-to-tr from-blue-900 to-blue-700",style:{boxShadow:"3px 3px 2px black"},children:Object(r.jsx)("p",{class:"self-center text-4xl text-white font-black",style:{textShadow:"1px 2px 4px black"},children:t("number",{count:e+1})})})})})}))})})}},LDWk:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("nKUr");function i(n){return Object(r.jsxs)("div",{class:"text-3xl flex flex-col text-center space-y-2",style:{minWidth:0},children:[Object(r.jsx)("div",{class:"bg-gradient-to-tr from-blue-900 to-blue-500",children:Object(r.jsx)("p",{class:"p-5 uppercase text-white",style:{fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1,textShadow:"1px 2px 4px black"},children:n.game.teams[n.team].name})}),Object(r.jsx)("div",{class:"flex justify-center flex-row text-center space-x-2",children:Array(n.game.teams[n.team].mistakes).fill(Object(r.jsx)("div",{class:"flex-shrink",children:Object(r.jsx)("img",{src:"x.png"})}))})]})}},ODXe:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,i=!1,s=void 0;try{for(var l,o=n[Symbol.iterator]();!(r=(l=o.next()).done)&&(e.push(l.value),!t||e.length!==t);r=!0);}catch(c){i=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}return e}}(n,t)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,"a",(function(){return i}))},PeLG:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e("nKUr"),i=(e("uXJ4"),e("9Koi"));e("26TT");function s(n){var t=Object(i.a)().t;return n.round.map((function(e){return Object(r.jsxs)("div",{class:"flex flex-row space-x-2",style:{minWidth:0},children:[Object(r.jsx)("div",{class:"bg-black font-extrabold uppercase items-center text-center p-5 rounded  flex-grow flex-shrink",style:{minHeight:70,minWidth:0},children:e.revealed?Object(r.jsx)("p",{class:"text-2xl ".concat(n.hide?"invisible":""),style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",flex:1},children:e.input}):null}),Object(r.jsx)("div",{class:"bg-black w-16 font-extrabold uppercase flex justify-center items-center rounded",children:e.revealed?Object(r.jsx)("p",{class:"text-2xl ".concat(n.hide?"invisible":""),children:t("number",{count:e.points})}):null})]})}))}function l(n){var t=Object(i.a)().t,e=0;return n.game.final_round.forEach((function(n){console.debug("round one total: "),e+=parseInt(n.points)})),n.game.final_round_2.forEach((function(n){console.debug("round two total",e),e+=parseInt(n.points)})),Object(r.jsxs)("div",{class:"",children:[Object(r.jsx)("div",{class:"text-center my-10",children:Object(r.jsx)("p",{class:"text-3xl",children:t("Fast Money")})}),Object(r.jsxs)("div",{class:"border-8 bg-blue-800 p-5 border-black rounded-3xl grid lg:grid-rows-4 lg:grid-flow-col gap-3 text-white ",style:{},children:[Object(r.jsx)(s,{round:n.game.final_round,hide:n.game.hide_first_round}),Object(r.jsx)("div",{class:"border-yellow-600 border-4 rounded-3xl bg-yellow-600 lg:hidden"}),Object(r.jsx)(s,{round:n.game.final_round_2,hide:!n.game.is_final_second})]}),Object(r.jsxs)("div",{class:"my-3 flex flex-row justify-evenly items-center align-middle",children:[Object(r.jsx)("div",{class:"bg-black inline-block p-2 rounded",children:Object(r.jsxs)("p",{class:"font-bold uppercase text-3xl text-white",children:[t("timer")," \xa0\xa0",t("number",{count:n.timer})]})}),Object(r.jsx)("div",{class:"bg-black inline-block p-2 rounded",children:Object(r.jsxs)("p",{class:"font-bold uppercase text-3xl text-white",children:[t("total")," \xa0\xa0",t("number",{count:e})]})})]}),Object(r.jsx)("div",{class:"text-center",children:e>=200?Object(r.jsx)("p",{class:"text-5xl text-green-800",children:t("win")}):null})]})}},b7xY:function(n,t){t=n.exports=function(n){n||(n={}),"string"===typeof n&&(n={cookie:n}),void 0===n.cookie&&(n.cookie="");var t={get:function(t){for(var e=n.cookie.split(/;\s*/),r=0;r<e.length;r++){var i=e[r].split("=");if(unescape(i[0])===t)return unescape(i[1])}},set:function(t,e,r){r||(r={});var i=escape(t)+"="+escape(e);return r.expires&&(i+="; expires="+r.expires),r.path&&(i+="; path="+escape(r.path)),r.domain&&(i+="; domain="+escape(r.domain)),r.secure&&(i+="; secure"),n.cookie=i,i}};return t};if("undefined"!==typeof document){var e=t(document);t.get=e.get,t.set=e.set}},omVU:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e("nKUr"),i=e("9Koi");e("26TT");function s(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:80;if(n.length>t){return e-(n.length-t>=25?2.2*(n.length-t):n.length-t>=20?2.7*(n.length-t):n.length-t>=15?3.2*(n.length-t):n.length-t>=10?3.7*(n.length-t):n.length-t>=5?5.5*(n.length-t):9*(n.length-t))}return e}function l(n){var t=n.insert.length>0,e=Object(i.a)().t,l='\n<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n  xmlns:dc="http://purl.org/dc/elements/1.1/"\n  xmlns:cc="http://creativecommons.org/ns#"\n  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n  xmlns:svg="http://www.w3.org/2000/svg"\n  xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink"\n  viewBox="0 0 507.285 250.08613"\n  version="1.1"\n  id="svg72"\n>\n  <metadata id="metadata76">\n    <rdf:RDF>\n      <cc:Work rdf:about="">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs id="defs22">\n    <linearGradient id="c">\n      <stop offset="0" stop-color="#ff6603" id="stop2" />\n      <stop offset="1" stop-color="#ffd0b2" id="stop4" />\n    </linearGradient>\n    <linearGradient id="a">\n      <stop offset="0" stop-color="#039" id="stop7" />\n      <stop offset="1" stop-color="#3669ff" id="stop9" />\n    </linearGradient>\n    <linearGradient id="b">\n      <stop offset="0" stop-color="#f60" id="stop12" />\n      <stop offset="1" stop-color="#ffeb00" id="stop14" />\n    </linearGradient>\n    <linearGradient\n      xlink:href="#a"\n      id="d"\n      x1="119.818"\n      y1="182.24699"\n      x2="96.176003"\n      y2="80.245003"\n      gradientUnits="userSpaceOnUse"\n    />\n    <linearGradient\n      xlink:href="#c"\n      id="e"\n      x1="161.01601"\n      y1="131.42599"\n      x2="248.19501"\n      y2="82.411003"\n      gradientUnits="userSpaceOnUse"\n    />\n    <linearGradient\n      id="f"\n      xlink:href="#b"\n      x1="15.48"\n      x2="14.362"\n      y1="'.concat(10,'"\n      y2="').concat(60,'"\n      gradientUnits="userSpaceOnUse"\n    />\n    <linearGradient\n      id="g"\n      xlink:href="#b"\n      gradientUnits="userSpaceOnUse"\n      x1="15.48"\n      x2="14.362"\n      y1="').concat(t?100:50,'"\n      y2="').concat(t?140:120,'"\n    />\n    <linearGradient\n      id="h"\n      xlink:href="#b"\n      x1="21.422001"\n      x2="19.037001"\n      y1="').concat(t?150:120,'"\n      y2="').concat(t?180:150,'"\n      gradientUnits="userSpaceOnUse"\n    />\n  </defs>\n  <g id="g120" transform="translate(100,30.0287)">\n    <g\n      transform="translate(63.490999,-44.629822)"\n      stroke-linejoin="round"\n      stroke-dashoffset="1.457"\n      paint-order="stroke fill markers"\n      id="g30"\n    >\n      <ellipse\n        cx="105.604"\n        cy="151.672"\n        rx="168.745"\n        ry="95.946999"\n        fill="url(#d)"\n        stroke="#000000"\n        stroke-width="0.7"\n        id="ellipse24"\n        style="fill: url(#d)"\n      />\n      <ellipse\n        cx="104.889"\n        cy="151.70599"\n        rx="150.55701"\n        ry="85.606003"\n        fill="none"\n        stroke="url(#e)"\n        stroke-width="8.307"\n        id="ellipse26"\n        style="stroke: url(#e)"\n      />\n      <ellipse\n        cx="102.357"\n        cy="151.52499"\n        rx="135.53101"\n        ry="77.061996"\n        fill="none"\n        stroke="#ffffff"\n        stroke-width="3.656"\n        id="ellipse28"\n      />\n    </g>\n    <g fill="#404040" id="g52" transform="translate(-2.3250272e-6,-2.2138205)">\n      <text\n        transform="rotate(-4.3169998)"\n        id="text36"\n      >\n        <tspan x="162" y="84" id="tspan34">\n          <tspan\n            style="\n              -inkscape-font-specification: \'C059 Bold\';\n              text-align: center;\n            "\n            font-weight="700"\n            font-size="').concat(s(n.insert),'"\n            font-family="C059"\n            text-anchor="middle"\n            id="tspan32"\n          >\n            ').concat(n.insert,'\n          </tspan>\n        </tspan>\n      </text>\n    <text\n      transform="rotate(-4.3169998)"\n      id="text58"\n    >\n      <tspan\n        style="fill:url(#f);"\n        y="80.058754"\n        x="160.03912"\n        font-weight="700"\n        font-family="C059"\n        id="tspan56"\n      >\n        <tspan\n          style="fill: url(#f);"\n          font-size="').concat(s(n.insert),'"\n          text-anchor="middle"\n          stroke="#000000"\n          stroke-width="1.13319"\n          id="tspan54"\n        >\n          ').concat(n.insert,'\n        </tspan>\n      </tspan>\n    </text>\n      <text\n        id="text50"\n         transform="rotate(-4.3169998)"\n      >\n        <tspan\n          y="').concat(t?218:190,'"\n          font-weight="700"\n          x="159"\n          font-family="C059"\n          id="tspan48"\n        >\n          <tspan\n            text-anchor="middle"\n            stroke-width="0.7"\n            font-size="').concat(s(e("feud")),'"\n            stroke-linejoin="round"\n            id="tspan46"\n          >\n            <tspan\n              id="tspan44"\n            >\n              ').concat(e("feud"),'\n            </tspan>\n          </tspan>\n        </tspan>\n      </text>\n    <text\n      stroke="#000000"\n      transform="rotate(-4.3169998)"\n      id="text70"\n    >\n      <tspan\n        y="').concat(t?218:187,'"\n        x="156"\n        font-weight="700"\n        font-family="C059"\n        id="tspan68"\n      >\n        <tspan\n          style="\n            -inkscape-font-specification: \'C059 Bold\';\n            text-align: center;\n            fill: url(#h);\n          "\n         font-size="').concat(s(e("feud")),'"\n          text-anchor="middle"\n          stroke-width="1.13319"\n          id="tspan66"\n        >\n          ').concat(e("feud"),'\n        </tspan>\n      </tspan>\n    </text>\n\n      <text\n        x="89.712997"\n        transform="rotate(-4.3169998)"\n        id="text42"\n      >\n        <tspan\n          style="-inkscape-font-specification: \'C059 Bold\'"\n          y="').concat(t?148:124,'"\n          x="158"\n          font-weight="700"\n          font-family="C059"\n          id="tspan40"\n        >\n          <tspan\n            style="\n              -inkscape-font-specification: \'C059 Bold\';\n              text-align: center;\n            "\n            font-size="').concat(s(e("family")),'"\n            text-anchor="middle"\n            stroke-width="0.7"\n            stroke-linejoin="round"\n            id="tspan38"\n          >\n            ').concat(e("family"),'\n          </tspan>\n        </tspan>\n      </text>\n\n    <text\n      transform="rotate(-4.3169998)"\n      id="text64"\n    >\n      <tspan\n        y="').concat(t?148:120,'"\n        x="155.30832"\n        font-weight="700"\n        font-family="C059"\n        id="tspan62"\n      >\n        <tspan\n          style="fill: url(#g);"\n          font-size="').concat(s(e("family")),'"\n          text-anchor="middle"\n          stroke="#000000"\n          stroke-width="1.13319"\n          stroke-linejoin="round"\n          id="tspan60"\n        >\n          ').concat(e("family"),"\n        </tspan>\n      </tspan>\n    </text>\n    </g>\n  </g>\n</svg>\n  ");return Object(r.jsx)("div",{children:Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:l}})})}},po1S:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e("nKUr"),i=(e("uXJ4"),e("9Koi"));e("26TT");function s(n){var t=Object(i.a)().t,e=72-8*"".concat(n.points).length;return Object(r.jsx)("div",{style:{borderWidth:12},class:"border-black bg-gradient-to-tr from-blue-900 to-blue-500 p-1",children:Object(r.jsx)("svg",{viewBox:"-50 -50 100 100",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",children:Object(r.jsx)("text",{fontWeight:n.fontWeight,fontSize:e,pointerEvents:"auto",fill:"white",textAnchor:"middle",dominantBaseline:"middle",children:t("number",{count:n.points})})})})}function l(n){var t=Object(i.a)().t,e=n.game.round,l=n.game.rounds[e];return Object(r.jsxs)("div",{class:"w-auto flex flex-col space-y-1 items-center",children:[Object(r.jsxs)("div",{class:"flex flex-row justify-around space-x-2 h-28",children:[Object(r.jsx)(s,{points:n.game.teams[0].points}),Object(r.jsx)(s,{points:n.game.point_tracker[n.game.round],fontWeight:"bold"}),Object(r.jsx)(s,{points:n.game.teams[1].points})]}),Object(r.jsx)("div",{class:"flex flex-row justify-center",children:l.multiply>1?Object(r.jsx)("div",{children:Object(r.jsxs)("p",{class:"text-2xl text-start",children:["x",t("number",{count:l.multiply})]})}):null}),Object(r.jsx)("div",{class:"flex flex-row justify-center",children:Object(r.jsx)("p",{class:"text-end sm:text-1xl text-2xl ",children:l.question})})]})}}}]);
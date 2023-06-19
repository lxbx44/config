var stats=(()=>{var e,l=Object.create,r=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptor,O=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,R=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,n=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t=t||{})o.call(t,a)&&n(e,a,t[a]);if(c)for(var a of c(t))m.call(t,a)&&n(e,a,t[a]);return e},u=(e,t)=>a(e,O(t)),t=(e,t)=>function(){return t||(0,e[i(e)[0]])((t={exports:{}}).exports,t),t.exports},f=(t,a,l,n)=>{if(a&&"object"==typeof a||"function"==typeof a)for(let e of i(a))o.call(t,e)||e===l||r(t,e,{get:()=>a[e],enumerable:!(n=s(a,e))||n.enumerable});return t},p=(e,t,a)=>(a=null!=e?l(R(e)):{},f(!t&&e&&e.__esModule?a:r(a,"default",{value:e,enumerable:!0}),e)),g=t({"external-global-plugin:react"(e,t){t.exports=Spicetify.React}}),t=t({"external-global-plugin:react-dom"(e,t){t.exports=Spicetify.ReactDOM}}),E={},F=E,y={default:()=>function(){return oe.default.createElement(ce,null)}};for(e in y)r(F,e,{get:y[e],enumerable:!0});var h=p(g()),v=p(g()),b=p(g()),W=p(t()),k=p(g()),z=k.default.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"currentColor"},k.default.createElement("path",{d:"M13.985 2.383L5.127 12.754 1.388 8.375l-.658.77 4.397 5.149 9.618-11.262z"})),H=k.default.memo(e=>k.default.createElement(Spicetify.ReactComponent.MenuItem,{onClick:e.onSelect,icon:e.isSelected?z:null},e.value)),D=k.default.memo(t=>{const a=k.default.useRef(null);var e=k.default.createElement(Spicetify.ReactComponent.Menu,null,t.options.map(e=>k.default.createElement(H,{value:e.link,isSelected:e.isActive,onSelect:()=>{t.onSelect(e.link),a.current?.click()}})));return k.default.createElement(Spicetify.ReactComponent.ContextMenu,{menu:e,trigger:"click",action:"toggle",renderInLine:!0},k.default.createElement("button",{className:w.optionsMenuDropBox,ref:a},k.default.createElement("span",{className:t.bold?"main-type-mestoBold":"main-type-mesto"},t.options.find(e=>e.isActive)?.link||t.defaultValue),k.default.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"currentColor"},k.default.createElement("path",{d:"M3 6l5 5.794L13 6z"}))))}),w={topBarHeaderItem:"navBar-module__topBarHeaderItem___v29bR_stats",topBarHeaderItemLink:"navBar-module__topBarHeaderItemLink___VeyBY_stats",topBarActive:"navBar-module__topBarActive___-qYPu_stats",topBarNav:"navBar-module__topBarNav___1OtdR_stats",optionsMenuDropBox:"navBar-module__optionsMenuDropBox___tD9mA_stats"},V=class{constructor(e,t){this.link=e,this.isActive=t}},q=t=>b.default.createElement("li",{className:w.topBarHeaderItem,onClick:e=>{e.preventDefault(),t.switchTo(t.item.link)}},b.default.createElement("a",{className:w.topBarHeaderItemLink+" queue-tabBar-headerItemLink "+(t.item.isActive?w.topBarActive+" queue-tabBar-active":""),"aria-current":"page",draggable:!1,href:""},b.default.createElement("span",{className:"main-type-mestoBold"},t.item.link))),G=b.default.memo(({items:e,switchTo:t})=>b.default.createElement("li",{className:w.topBarHeaderItem+" "+(e.find(e=>e.isActive)?w.topBarActive:"")},b.default.createElement(D,{options:e,onSelect:t,defaultValue:"More",bold:!0}))),$=e=>W.default.createPortal(b.default.createElement("div",{className:"main-topbar-topbarContent"},e.children),document.querySelector(".main-topBar-topbarContentWrapper")),U=t=>{const a=b.default.useRef(null),[n,l]=(0,b.useState)([]),[r,e]=(0,b.useState)(0),[s,i]=(0,b.useState)([]);let c=t.links.map(e=>new V(e,e===t.activeLink));return(0,b.useEffect)(()=>{var e;a.current&&(e=Array.from(a.current.children).map(e=>e.clientWidth),l(e))},[]),(0,b.useEffect)(()=>{a.current&&e(a.current.clientWidth)},[t.windowSize]),(0,b.useEffect)(()=>{if(a.current)if(n.reduce((e,t)=>e+t,0)<=r)i([]);else{var e=Math.max(...n);const l=[];let a=e;n.forEach((e,t)=>{r>=a+e?a+=e:t!==c.length&&l.push(t)}),i(l)}},[r,n]),b.default.createElement("nav",{className:w.topBarNav},b.default.createElement("ul",{className:w.topBarHeader+" queue-tabBar-header",ref:a},c.filter((e,t)=>!s.includes(t)).map(e=>b.default.createElement(q,{item:e,switchTo:t.switchCallback})),s.length?b.default.createElement(G,{items:s.map(e=>c[e]),switchTo:t.switchCallback}):null))},Y=e=>{const t=document.querySelector(".Root__main-view .os-resize-observer-host"),[a,l]=(0,b.useState)(t.clientWidth),n=()=>l(t.clientWidth);return(0,b.useEffect)(()=>{const e=new ResizeObserver(n);return e.observe(t),()=>{e.disconnect()}},[n]),b.default.createElement($,null,b.default.createElement(U,{...e,windowSize:a}))},K=e=>{const[t,a]=(0,v.useState)(e[0]);return[v.default.createElement(Y,{links:e,activeLink:t,switchCallback:e=>a(e)}),t,a]},N=p(g()),S=p(g()),J={backgroundColor:"rgba(var(--spice-rgb-selected-row),.1)"},Q=e=>S.default.createElement(Spicetify.ReactComponent.IconComponent,u(d({},e),{className:"Svg-sc-ytk21e-0 Svg-img-16-icon","data-encore-id":"icon",viewBox:"0 0 16 16",height:"16",width:"16"}),S.default.createElement("path",{d:"M15.53 2.47a.75.75 0 0 1 0 1.06L4.907 14.153.47 9.716a.75.75 0 0 1 1.06-1.06l3.377 3.376L14.47 2.47a.75.75 0 0 1 1.06 0z"})),x=S.default.memo(({links:e,switchCallback:t})=>{console.log("DropdownMenu render");const[l,a]=S.default.useState(e[0]),n=S.default.useCallback(e=>()=>{t(e),a(e)},[]),r=e=>{var t=e["label"],e=((e,t)=>{var a={};for(l in e)o.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&c)for(var l of c(e))t.indexOf(l)<0&&m.call(e,l)&&(a[l]=e[l]);return a})(e,["label"]),a=t===l;return S.default.createElement(Spicetify.ReactComponent.MenuItem,u(d({},e),{trigger:"click",onClick:n(t),"data-checked":a,trailingIcon:a&&S.default.createElement(Q,null),style:a?J:void 0}),t)},s=e.map((e,t)=>S.default.createElement(r,{label:e,key:t}));return S.default.createElement(S.default.Fragment,null,S.default.createElement(Spicetify.ReactComponent.ContextMenu,{menu:S.default.createElement(e=>S.default.createElement(S.default.Fragment,null,S.default.createElement(Spicetify.ReactComponent.Menu,d({},e),s)),null),trigger:"click"},S.default.createElement("button",{className:"x-sortBox-sortDropdown",type:"button",role:"combobox","aria-controls":"sortboxlist-29ad4489-2ff4-4a03-8c0c-ffc6f90c2fed","aria-expanded":"false"},S.default.createElement("span",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-mesto-type cvTLPmjt6T7M85EKcB8w","data-encore-id":"type"},l),S.default.createElement("svg",{role:"img",height:"16",width:"16","aria-hidden":"true",className:"Svg-sc-ytk21e-0 Svg-img-16-icon SbDHY3fVADNJ4l9qOLQ2",viewBox:"0 0 16 16","data-encore-id":"icon"},S.default.createElement("path",{d:"m14 6-6 6-6-6h12z"})))))}),T=p(g()),X=T.default.memo(e=>T.default.createElement(Spicetify.ReactComponent.ArtistMenu,d({},e))),_=T.default.memo(({name:e,image:t,uri:a,subtext:l})=>{return T.default.createElement(T.default.Fragment,null,T.default.createElement(Spicetify.ReactComponent.ContextMenu,{menu:T.default.createElement(X,{uri:a}),trigger:"right-click"},T.default.createElement("div",{className:"main-card-card",onClick:()=>{var e=a;e=Spicetify.URI.fromString(e).toURLPath(!0),Spicetify.Platform.History.push(e),Spicetify.Platform.History.goForward()}},T.default.createElement("div",{draggable:"true",className:"main-card-draggable"},T.default.createElement("div",{className:"main-card-imageContainer"},T.default.createElement("div",{className:"main-cardImage-imageWrapper main-cardImage-circular"},T.default.createElement("div",{className:""},T.default.createElement("img",{"aria-hidden":"false",draggable:"false",loading:"lazy",src:t,className:"main-image-image main-cardImage-image main-cardImage-circular main-image-loaded"}))),T.default.createElement("div",{className:"main-card-PlayButtonContainer"},T.default.createElement("div",{className:"main-playButton-PlayButton"},T.default.createElement("button",{"data-encore-id":"buttonPrimary",className:"Button-sc-qlcn5g-0 Button-md-buttonPrimary-useBrowserDefaultFocusStyle"},T.default.createElement("span",{className:"ButtonInner-sc-14ud5tc-0 ButtonInner-md-iconOnly encore-bright-accent-set"},T.default.createElement("span",{"aria-hidden":"true",className:"IconWrapper__Wrapper-sc-1hf1hjl-0 Wrapper-md-24-only"},T.default.createElement("svg",{role:"img",height:"24",width:"24","aria-hidden":"true",viewBox:"0 0 24 24","data-encore-id":"icon",className:"Svg-sc-ytk21e-0 Svg-img-24-icon"},T.default.createElement("path",{d:"m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"})))))))),T.default.createElement("div",{className:"main-card-cardMetadata"},T.default.createElement("a",{draggable:"false",className:"main-cardHeader-link",dir:"auto"},T.default.createElement("div",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-balladBold-textBase-4px-type main-cardHeader-text","data-encore-id":"type"},e)),T.default.createElement("div",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-mesto-textSubdued-type main-cardSubHeader-root","data-encore-id":"type"},T.default.createElement("span",null,l))),T.default.createElement("div",{className:"main-card-cardLink"})))))}),t=N.default.memo(()=>{const[e,a]=N.default.useState([]),t=(console.log(" artists page render"),console.log(e),async e=>{var t=window.performance.now(),e=(Spicetify.CosmosAsync.get("https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range="+e).then(e=>a(e.items)),window.performance.now());console.log(e-t)});N.default.useEffect(()=>{t("short_term")},[]);var l=N.default.useCallback(e=>{t({"Past 4 Weeks":"short_term","Past 6 Months":"medium_term","All Time":"long_term"}[e])},[]),n=N.default.useMemo(()=>e.map((e,t)=>N.default.createElement(_,{key:e.id,name:e.name,image:e.images[2].url,uri:e.uri,subtext:"Artist"})),[e]);return N.default.createElement(N.default.Fragment,null,N.default.createElement("section",{className:"contentSpacing"},N.default.createElement("div",{className:"collection-collection-header stats-header"},N.default.createElement("h1",{"data-encore-id":"type",className:"Type__TypeElement-sc-goli3j-0 TypeElement-canon-type"},"Top Artists"),N.default.createElement("div",{className:"collection-searchBar-searchBar"},N.default.createElement(x,{links:["Past 4 Weeks","Past 6 Months","All Time"],switchCallback:l}))),N.default.createElement("div",null,N.default.createElement("div",{className:"main-gridContainer-gridContainer stats-grid"},n))))}),B=p(g()),C=p(g());var Z=e=>C.default.createElement(C.default.Fragment,null,C.default.createElement("a",{draggable:"true",dir:"auto",href:e.uri,tabIndex:-1},e.name),e.index===e.length?null:", "),ee=C.default.memo(()=>C.default.createElement(C.default.Fragment,null,C.default.createElement("span",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-ballad-textSubdued-type main-trackList-rowBadges","data-encore-id":"type"},C.default.createElement("span",{"aria-label":"Explicit",className:"main-tag-container",title:"Explicit"},"E")))),te=({active:e,id:t})=>{const[a,l]=C.default.useState(e);return C.default.useEffect(()=>{l(e)},[e]),C.default.createElement("button",{type:"button",role:"switch","aria-checked":a,"aria-label":"Remove from Your Library",onClick:()=>{a?(Spicetify.CosmosAsync.del("https://api.spotify.com/v1/me/tracks?ids="+t),Spicetify.showNotification("Removed from your Liked Songs")):(Spicetify.CosmosAsync.put("https://api.spotify.com/v1/me/tracks?ids="+t),Spicetify.showNotification("Added to your Liked Songs")),l(!a)},className:a?"main-addButton-button main-trackList-rowHeartButton main-addButton-active":"main-addButton-button main-trackList-rowHeartButton",tabIndex:-1},C.default.createElement("svg",{role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16","data-encore-id":"icon",className:"Svg-sc-ytk21e-0 Svg-img-16-icon"},C.default.createElement("path",{d:a?"M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z":"M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"})))},ae=C.default.memo(a=>{var e,t=a.artists.map((e,t)=>C.default.createElement(Z,d({index:t,length:a.artists.length-1},e)));return C.default.createElement(C.default.Fragment,null,C.default.createElement("div",{role:"row","aria-rowindex":2,"aria-selected":"false"},C.default.createElement("div",{className:"main-trackList-trackListRow main-trackList-trackListRowGrid",draggable:"true",role:"presentation"},C.default.createElement("div",{className:"main-trackList-rowSectionIndex",role:"gridcell","aria-colindex":1,tabIndex:-1},C.default.createElement("div",{className:"main-trackList-rowMarker"},C.default.createElement("span",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-ballad-type main-trackList-number","data-encore-id":"type"},a.index+1),C.default.createElement("button",{className:"main-trackList-rowImagePlayButton","aria-label":"Play Odd Ways by MIKE, Wiki, The Alchemist",tabIndex:-1,onClick:()=>Spicetify.Player.playUri(a.uri)},C.default.createElement("svg",{role:"img",height:"24",width:"24","aria-hidden":"true",className:"Svg-sc-ytk21e-0 Svg-img-24-icon main-trackList-rowPlayPauseIcon",viewBox:"0 0 24 24","data-encore-id":"icon"},C.default.createElement("path",{d:"m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"}))))),C.default.createElement("div",{className:"main-trackList-rowSectionStart",role:"gridcell","aria-colindex":2,tabIndex:-1},C.default.createElement("img",{"aria-hidden":"false",draggable:"false",loading:"eager",src:a.album.images[2].url,alt:"",className:"main-image-image main-trackList-rowImage main-image-loaded",width:"40",height:"40"}),C.default.createElement("div",{className:"main-trackList-rowMainContent"},C.default.createElement("div",{dir:"auto",className:"Type__TypeElement-sc-goli3j-0 TypeElement-ballad-textBase-type main-trackList-rowTitle standalone-ellipsis-one-line","data-encore-id":"type"},a.name),a.explicit&&C.default.createElement(ee,null),C.default.createElement("span",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-mesto-textSubdued-type main-trackList-rowSubTitle standalone-ellipsis-one-line","data-encore-id":"type"},t))),C.default.createElement("div",{className:"main-trackList-rowSectionVariable",role:"gridcell","aria-colindex":3,tabIndex:-1},C.default.createElement("span",{"data-encore-id":"type",className:"Type__TypeElement-sc-goli3j-0 TypeElement-mesto-type"},C.default.createElement("a",{draggable:"true",className:"standalone-ellipsis-one-line",dir:"auto",href:a.album.uri,tabIndex:-1},a.album.name))),C.default.createElement("div",{className:"main-trackList-rowSectionEnd",role:"gridcell","aria-colindex":5,tabIndex:-1},a.liked?C.default.createElement(te,{active:a.liked,id:a.id}):"",C.default.createElement("div",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-mesto-textSubdued-type main-trackList-rowDuration","data-encore-id":"type"},(t=a.duration_ms,e=(t=Math.floor(t/1e3))%60,Math.floor(t/60).toString().padStart(1,"0")+":"+e.toString().padStart(2,"0"))),C.default.createElement("button",{type:"button","aria-haspopup":"menu","aria-label":"More options for Odd Ways by MIKE, Wiki, The Alchemist",className:"main-moreButton-button main-trackList-rowMoreButton",tabIndex:-1},C.default.createElement("svg",{role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16","data-encore-id":"icon",className:"Svg-sc-ytk21e-0 Svg-img-16-icon"},C.default.createElement("path",{d:"M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"})))))))}),le=B.default.memo(()=>{const[a,l]=B.default.useState({tracks:[],liked:[]}),t=(console.log(" tracks page render"),console.log(a),async e=>{var t,a=window.performance.now();e&&(e=(await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0&time_range="+e))["items"],t=e.map(e=>e.id),t=await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/me/tracks/contains?ids="+t.join(",")),l({tracks:e,liked:t}),e=window.performance.now(),console.log(e-a))});var e;return B.default.useEffect(()=>{t("short_term")},[]),a.tracks.length?(e=a.tracks.map((e,t)=>B.default.createElement(ae,d({index:t,liked:a.liked[t]},e))),B.default.createElement(B.default.Fragment,null,B.default.createElement("section",{className:"contentSpacing"},B.default.createElement("div",{className:"collection-collection-header stats-header"},B.default.createElement("div",{className:"stats-trackPageTitle"},B.default.createElement("h1",{"data-encore-id":"type",className:"Type__TypeElement-sc-goli3j-0 TypeElement-canon-type"},"Top Tracks"),B.default.createElement("button",{className:"stats-createPlaylistButton","data-encore-id":"buttonSecondary","aria-expanded":"false",onClick:async()=>{var e;await Spicetify.CosmosAsync.post("sp://core-playlist/v1/rootlist",{operation:"create",name:"Top Songs - "+(null==(e=document.querySelector(".x-sortBox-sortDropdown > span"))?void 0:e.innerHTML),playlist:!0,public:!1,uris:a.tracks.map(e=>e.uri)})}},"Turn Into Playlist")),B.default.createElement("div",{className:"collection-searchBar-searchBar"},B.default.createElement(x,{links:["Past 4 Weeks","Past 6 Months","All Time"],switchCallback:e=>{t({"Past 4 Weeks":"short_term","Past 6 Months":"medium_term","All Time":"long_term"}[e])}}))),B.default.createElement("div",null,B.default.createElement("div",{role:"grid","aria-rowcount":50,"aria-colcount":4,className:"main-trackList-trackList main-trackList-indexable",tabIndex:0},B.default.createElement("div",{className:"main-trackList-trackListHeader",role:"presentation"},B.default.createElement("div",{className:"main-trackList-trackListHeaderRow main-trackList-trackListRowGrid",role:"row","aria-rowindex":1},B.default.createElement("div",{className:"main-trackList-rowSectionIndex",role:"columnheader","aria-colindex":1,"aria-sort":"none",tabIndex:-1},"#"),B.default.createElement("div",{className:"main-trackList-rowSectionStart",role:"columnheader","aria-colindex":2,"aria-sort":"none",tabIndex:-1},B.default.createElement("button",{className:"main-trackList-column main-trackList-sortable",tabIndex:-1},B.default.createElement("span",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-mesto-type standalone-ellipsis-one-line","data-encore-id":"type"},"Title"))),B.default.createElement("div",{className:"main-trackList-rowSectionVariable",role:"columnheader","aria-colindex":3,"aria-sort":"none",tabIndex:-1},B.default.createElement("button",{className:"main-trackList-column main-trackList-sortable",tabIndex:-1},B.default.createElement("span",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-mesto-type standalone-ellipsis-one-line","data-encore-id":"type"},"Album"))),B.default.createElement("div",{className:"main-trackList-rowSectionEnd",role:"columnheader","aria-colindex":5,"aria-sort":"none",tabIndex:-1},B.default.createElement("button",{"aria-label":"Duration",className:"main-trackList-column main-trackList-durationHeader main-trackList-sortable",tabIndex:-1},B.default.createElement("svg",{role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16","data-encore-id":"icon",className:"Svg-sc-ytk21e-0 Svg-img-16-icon"},B.default.createElement("path",{d:"M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"}),B.default.createElement("path",{d:"M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"})))))),B.default.createElement("div",{className:"main-rootlist-wrapper",role:"presentation",style:{height:2800}},B.default.createElement("div",{role:"presentation"},e))))))):B.default.createElement(B.default.Fragment,null)}),L=p(g()),M=p(g()),A=M.default.memo(e=>M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"main-card-card"},M.default.createElement("div",{draggable:"true",className:"main-card-draggable"},M.default.createElement("div",{className:"stats-cardValue"},e.value),M.default.createElement("div",null,M.default.createElement("div",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-balladBold-textBase-4px-type main-cardHeader-text stats-cardText","data-encore-id":"type"},e.stat)))))),I=p(g()),ne=(e,t,a,l)=>I.default.createElement("div",{className:"stats-genreRow"},I.default.createElement("div",{className:"stats-genreRowFill",style:{width:`calc(${t/a*100}% + ${(a-t)/(a-1)*100}px)`}},I.default.createElement("span",{className:"stats-genreText"},e)),I.default.createElement("span",{className:"stats-genreValue"},Math.round(t/l*100)+"%")),P=I.default.memo(({genres:e,total:t})=>{var a,l,e=e.sort(([,e],[,t])=>t-e).slice(0,10);return I.default.createElement("div",{className:"main-card-card stats-genreCard"},(l=t,(a=e).map(([e,t])=>ne(e,t,a[0][1],l))))}),re=L.default.memo(()=>{const[t,o]=L.default.useState({genres:[],features:{}}),a=async e=>{var t=window.performance.now();const[n,a]=await Promise.all([Spicetify.CosmosAsync.get("https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range="+e).then(e=>e.items),Spicetify.CosmosAsync.get("https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0&time_range="+e).then(e=>e.items)]);console.log(n);e=n.reduce((a,l)=>(l.genres.forEach(t=>{var e=a.findIndex(([e])=>e===t);-1!==e?a[e][1]+=+Math.abs(n.indexOf(l)-50):a.push([t,+Math.abs(n.indexOf(l)-50)])}),a),[]);let l=0,r=0;var s,i=(await(async e=>{const t=Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/audio-features?ids=${e.join(",")}`);return t})(a.map(e=>(l+=e.popularity,e.explicit&&r++,e.id)))).audio_features.reduce((e,t)=>(e.danceability+=t.danceability,e.energy+=t.energy,e.valence+=t.valence,e.speechiness+=t.speechiness,e.acousticness+=t.acousticness,e.instrumentalness+=t.instrumentalness,e.liveness+=t.liveness,e.tempo+=t.tempo,e.loudness+=t.loudness,e),{popularity:l,explicitness:r,danceability:0,energy:0,valence:0,speechiness:0,acousticness:0,instrumentalness:0,liveness:0,tempo:0,loudness:0});for(s in i)i[s]=i[s]/50;var c=window.performance.now();console.log(c-t),o({genres:e,features:i})};if(L.default.useEffect(()=>{a("short_term")},[]),!t.genres.length)return L.default.createElement(L.default.Fragment,null);const l={"Past 4 Weeks":"short_term","Past 6 Months":"medium_term","All Time":"long_term"};var e,n=[];for(e in t.features)n.push(L.default.createElement(A,{stat:e[0].toUpperCase()+e.slice(1),value:(e=>{switch(e){case"tempo":return Math.round(t.features[e])+"bpm";case"loudness":return Math.round(t.features[e])+"dB";case"popularity":return Math.round(t.features[e])+"%";default:return Math.round(100*t.features[e])+"%"}})(e)}));return L.default.createElement(L.default.Fragment,null,L.default.createElement("section",{className:"contentSpacing"},L.default.createElement("div",{className:"collection-collection-header stats-header"},L.default.createElement("h1",{"data-encore-id":"type",className:"Type__TypeElement-sc-goli3j-0 TypeElement-canon-type"},"Top Genres"),L.default.createElement("div",{className:"collection-searchBar-searchBar"},L.default.createElement(x,{links:["Past 4 Weeks","Past 6 Months","All Time"],switchCallback:e=>{a(l[e])}}))),L.default.createElement("div",{className:"stats-page"},L.default.createElement("section",null,L.default.createElement(P,{genres:t.genres,total:1275})),L.default.createElement("section",null,L.default.createElement("div",{className:"main-gridContainer-gridContainer stats-grid"},n)))))}),j=p(g()),se=j.default.memo(()=>{const[e,b]=j.default.useState(null),t=async e=>{var t=window.performance.now(),a=window.performance.now(),l=await Spicetify.CosmosAsync.get("sp://core-playlist/v1/rootlist");console.log("rootlist fetch time: "+(window.performance.now()-a)+"ms");const n=e=>{const t=[];return e.forEach(e=>{"playlist"===e.type?t.push(e):"folder"===e.type&&e.rows&&(e=n(e.rows),t.push(...e))}),t};let r=n(l.rows),s=("owned"===e&&(r=r.filter(e=>e.ownedBySelf)),[]),i=0;r.forEach(e=>{0!==e.totalLength&&(s.push(e.link),i+=e.totalLength)},0);a=window.performance.now(),l=await Promise.all(s.map(e=>Spicetify.CosmosAsync.get(`sp://core-playlist/v1/playlist/${e}?responseFormat=protobufJson`)));console.log("playlist fetch time: "+(window.performance.now()-a)+"ms");let c=0,o=[],m={},d=[],u=0,f=[],p=0;l.forEach(e=>{c+=Number(e.duration),e.item.forEach(t=>{var e;t.trackMetadata&&(o.push(t.trackMetadata.link.split(":")[2]),d.push(t),t.trackMetadata.isExplicit&&p++,u+=t.trackMetadata.popularity,-1!==(e=f.findIndex(([e])=>e.link===t.trackMetadata.album.link))?f[e][1]+=1:f.push([t.trackMetadata.album,1]),t.trackMetadata.artist.forEach(e=>{m[e.link.split(":")[2]]?m[e.link.split(":")[2]]+=1:m[e.link.split(":")[2]]=1}))})});var g,E,e=f.sort((e,t)=>t[1]-e[1]).slice(0,10),l=Object.keys(m).sort((e,t)=>m[t]-m[e]).slice(0,50),l=(a=window.performance.now(),await Spicetify.CosmosAsync.get("https://api.spotify.com/v1/artists?ids="+l.join(","))),y=(console.log("artists fetch time: "+(window.performance.now()-a)+"ms"),l.artists.reduce((a,l)=>(l.numTracks=m[l.id],l.genres.forEach(t=>{var e=a.findIndex(([e])=>e===t);-1!==e?a[e][1]+=l.numTracks:a.push([t,l.numTracks])}),a),[])),h=(a=window.performance.now(),await(async t=>{const a=100,l=[];for(let e=0;e<t.length;e+=a){const s=t.slice(e,e+a);l.push(s)}const e=l.map(e=>{const t=`https://api.spotify.com/v1/audio-features?ids=${e.join(",")}`;return Spicetify.CosmosAsync.get(t)}),n=await Promise.all(e),r=n.reduce((e,t)=>{return e.concat(t.audio_features)},[]);return r})(o)),v=(console.log("audio features fetch time: "+(window.performance.now()-a)+"ms"),{popularity:u,explicitness:p,danceability:0,energy:0,valence:0,speechiness:0,acousticness:0,instrumentalness:0,liveness:0,tempo:0,loudness:0});for(let e=0;e<h.length;e++)h[e]&&(g=h[e],v.danceability+=g.danceability,v.energy+=g.energy,v.valence+=g.valence,v.speechiness+=g.speechiness,v.acousticness+=g.acousticness,v.instrumentalness+=g.instrumentalness,v.liveness+=g.liveness,v.tempo+=g.tempo,v.loudness+=g.loudness);for(E in v)v[E]/=h.length;b({audioFeatures:v,trackCount:i,totalDuration:c,artists:l.artists,artistCount:Object.keys(m).length,genres:y,playlistCount:r.length,albums:e}),console.log("total fetch time: "+(window.performance.now()-t)+"ms")};if(j.default.useEffect(()=>{t("all")},[]),!e)return j.default.createElement(j.default.Fragment,null,j.default.createElement("div",{className:"stats-loadingWrapper"},j.default.createElement("svg",{role:"img",height:"46",width:"46","aria-hidden":"true",viewBox:"0 0 24 24","data-encore-id":"icon",className:"Svg-sc-ytk21e-0 Svg-img-24-icon"},j.default.createElement("path",{d:"M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"})),j.default.createElement("h1",null,"Analysing Your Library")));const a=[];Object.entries(e.audioFeatures).forEach(e=>{a.push(j.default.createElement(A,{stat:e[0][0].toUpperCase()+e[0].slice(1),value:(e=>{switch(e[0]){case"tempo":return Math.round(e[1])+"bpm";case"loudness":return Math.round(e[1])+"dB";case"popularity":return Math.round(e[1])+"%";default:return Math.round(100*e[1])+"%"}})(e)}))});var l=e.artists.slice(0,10).map(e=>j.default.createElement(_,{name:e.name,image:e.images[2].url,uri:e.uri,subtext:`Appears in ${e.numTracks} tracks`})),n=e.albums.map(([e,t])=>j.default.createElement(_,{name:e.name,image:e.covers.standardLink,uri:e.link,subtext:`Appears in ${t} tracks`})),r=e=>{e=e.target.parentNode.querySelector("div");e.scrollLeft+=e.clientWidth},s=e=>{e=e.target.parentNode.querySelector("div");e.scrollLeft-=e.clientWidth};return j.default.createElement(j.default.Fragment,null,j.default.createElement("section",{className:"contentSpacing"},j.default.createElement("div",{className:"collection-collection-header stats-header"},j.default.createElement("h1",{"data-encore-id":"type",className:"Type__TypeElement-sc-goli3j-0 TypeElement-canon-type"},"Library Analysis"),j.default.createElement("div",{className:"collection-searchBar-searchBar"},j.default.createElement(x,{links:["Whole Library","My Playlists"],switchCallback:e=>{t("My Playlists"===e?"owned":"all")}}))),j.default.createElement("div",{className:"stats-page"},j.default.createElement("section",{className:"stats-libraryOverview"},j.default.createElement(A,{stat:"Total Playlists",value:e.playlistCount}),j.default.createElement(A,{stat:"Total Tracks",value:e.trackCount}),j.default.createElement(A,{stat:"Total Artists",value:e.artistCount}),j.default.createElement(A,{stat:"Total Minutes",value:Math.floor(e.totalDuration/60)}),j.default.createElement(A,{stat:"Total Hours",value:(e.totalDuration/3600).toFixed(1)})),j.default.createElement("section",null,j.default.createElement("div",{className:"main-shelf-header"},j.default.createElement("div",{className:"main-shelf-topRow"},j.default.createElement("div",{className:"main-shelf-titleWrapper"},j.default.createElement("h2",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-canon-textBase-type main-shelf-title"},"Most Frequent Genres")))),j.default.createElement(P,{genres:e.genres,total:e.trackCount}),j.default.createElement("section",{className:"stats-gridInlineSection"},j.default.createElement("button",{className:"stats-scrollButton",onClick:s},"<"),j.default.createElement("button",{className:"stats-scrollButton",onClick:r},">"),j.default.createElement("div",{className:"main-gridContainer-gridContainer stats-gridInline stats-specialGrid"},a))),j.default.createElement("section",{className:"main-shelf-shelf Shelf"},j.default.createElement("div",{className:"main-shelf-header"},j.default.createElement("div",{className:"main-shelf-topRow"},j.default.createElement("div",{className:"main-shelf-titleWrapper"},j.default.createElement("h2",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-canon-textBase-type main-shelf-title"},"Most Frequent Artists")))),j.default.createElement("section",{className:"stats-gridInlineSection"},j.default.createElement("button",{className:"stats-scrollButton",onClick:s},"<"),j.default.createElement("button",{className:"stats-scrollButton",onClick:r},">"),j.default.createElement("div",{className:"main-gridContainer-gridContainer stats-gridInline"},l))),j.default.createElement("section",{className:"main-shelf-shelf Shelf"},j.default.createElement("div",{className:"main-shelf-header"},j.default.createElement("div",{className:"main-shelf-topRow"},j.default.createElement("div",{className:"main-shelf-titleWrapper"},j.default.createElement("h2",{className:"Type__TypeElement-sc-goli3j-0 TypeElement-canon-textBase-type main-shelf-title"},"Most Frequent Albums")))),j.default.createElement("section",{className:"stats-gridInlineSection"},j.default.createElement("button",{className:"stats-scrollButton",onClick:s},"<"),j.default.createElement("button",{className:"stats-scrollButton",onClick:r},">"),j.default.createElement("div",{className:"main-gridContainer-gridContainer stats-gridInline"},n))))))}),ie={Artists:h.default.createElement(t,null),Tracks:h.default.createElement(le,null),Genres:h.default.createElement(re,null),Library:h.default.createElement(se,null)},ce=()=>{const[e,t,a]=K(["Artists","Tracks","Genres","Library"]);return console.log("app render"),h.default.useEffect(()=>{a("Artists")},[]),t?h.default.createElement(h.default.Fragment,null,e,ie[t]):h.default.createElement(h.default.Fragment,null)},oe=p(g());return t=E,f(r({},"__esModule",{value:!0}),t)})();const render=()=>stats.default();
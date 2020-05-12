(this.webpackJsonphacker=this.webpackJsonphacker||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),s=(a(15),a(7)),i=a(1),o=a(2),m=a(6),u=a(4),h=a(3),p=(a(5),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{id:"main-header"},r.a.createElement("div",{className:"main-header-container"},r.a.createElement("a",{className:"header-logo-container",href:"#"},r.a.createElement("img",{src:"https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"}),r.a.createElement("div",{className:"search-header-label"},"Search",r.a.createElement("br",null),"Hacker News")),r.a.createElement("div",{className:"header-search-container"},r.a.createElement("span",{className:"searchIcon"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}),r.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),r.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))),r.a.createElement("input",{type:"search",name:"userInput",value:this.props.input,placeholder:"Search stories by title, url or author",className:"searchInput",onChange:this.props.func}),r.a.createElement("div",{className:"poweredBy"},r.a.createElement("span",null,"Search by"),r.a.createElement("img",{src:"https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-algolia-blue-35c461b6.svg"}))),r.a.createElement("div",{className:"header-settings"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("circle",{cx:"12",cy:"12",r:"3"}),r.a.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})),r.a.createElement("span",null,"Settings"))))}}]),a}(n.Component)),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"searchFilter"},r.a.createElement("div",{className:"left"},r.a.createElement("span",null,"Search",r.a.createElement("select",{name:"",value:""},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:""},"Stories"),r.a.createElement("option",{value:""},"Comments"))),r.a.createElement("span",null,"by",r.a.createElement("select",{name:"",value:""},r.a.createElement("option",{value:""},"Popularity"),r.a.createElement("option",{value:""},"Date"))),r.a.createElement("span",null,"for",r.a.createElement("select",{name:"",value:""},r.a.createElement("option",{value:""},"All time"),r.a.createElement("option",{value:""},"Last 24h"),r.a.createElement("option",{value:""},"Past Week"),r.a.createElement("option",{value:""},"Past Month"),r.a.createElement("option",{value:""},"Past Year"),r.a.createElement("option",{value:""},"Custom Range")))),r.a.createElement("div",{className:"right"},r.a.createElement("p",null,this.props.results," results (in ",this.props.time," milliseconds)"),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("circle",{cx:"18",cy:"5",r:"3"}),r.a.createElement("circle",{cx:"6",cy:"12",r:"3"}),r.a.createElement("circle",{cx:"18",cy:"19",r:"3"}),r.a.createElement("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),r.a.createElement("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}))))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainComponent"},r.a.createElement("div",{className:"top"},this.props.title,r.a.createElement("a",{href:this.props.url}," (",this.props.url,") ")),r.a.createElement("div",{className:"bottom"},r.a.createElement("span",null,this.props.points," points | ",this.props.author," | ",this.props.comments," comments")))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.hits.map((function(e){return r.a.createElement(d,{author:e.author,title:e.title,url:e.url,comments:e.num_comments,points:e.points})}));return r.a.createElement("main",{id:"main-section"},e)}}]),a}(n.Component);var g=function(){return r.a.createElement("div",{className:"pre-results"},r.a.createElement("h1",null,"What's on your mind?"))};var b=function(){return r.a.createElement("div",{className:"loading-container"},r.a.createElement("img",{id:"loading",src:"http://www.vitorazevedo.net/external_files/loading_small.png"}))},f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={hits:[],time:"",results:"",userInput:"",empty:!0},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t,a=this;fetch("http://hn.algolia.com/api/v1/search?query=".concat(this.state.userInput)).then((function(e){return e.json()})).then((function(e){a.setState({hits:e.hits,time:e.processingTimeMS,results:e.nbHits,loading:!1})}));var n=e.target,r=n.name,l=n.value;this.setState((t={},Object(s.a)(t,r,l),Object(s.a)(t,"loading",!0),Object(s.a)(t,"empty",!1),t))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{func:this.handleChange}),r.a.createElement(E,{time:this.state.time,results:this.state.results}),this.state.empty?r.a.createElement(g,null):this.state.loading?r.a.createElement(b,null):r.a.createElement(v,{hits:this.state.hits}))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},5:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.92edc011.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,n){e.exports=n(365)},220:function(e,t,n){},365:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(16),c=n.n(r),o=n(20),l=n(21),s=n(23),u=n(22),m=n(24),d=n(34),p=n(5),h=(n(220),n(25)),f=n(54),y=n.n(f),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState({address:e,abilityToAdd:!1})},n.handleSelect=function(e){n.setState({address:e}),Object(f.geocodeByAddress)(e).then(function(e){return n.cityObj.name=e[0].address_components[0].long_name,e}).then(function(e){return n.cityObj.coordinates.lat=e[0].geometry.location.lat(),n.cityObj.coordinates.lng=e[0].geometry.location.lng(),n.setState({abilityToAdd:!0}),e}).catch(function(e){return console.error("Error",e)})},n.handleButton=function(){n.cityObj.uniqueId=(new Date).valueOf(),n.props.addCityAction(Object(h.a)({},n.cityObj)),n.setState({address:"",abilityToAdd:!1})},n.state={address:"",abilityToAdd:!1},n.cityObj={coordinates:{}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(p.k,{elevation:1,style:{padding:"15px",marginBottom:"16px"}},i.a.createElement(p.r,{variant:"h6",component:"h6",align:"center",style:{lineHeight:"normal",fontSize:"1.15rem",marginBottom:"16px"}},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u0443\u0436\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0434 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a"),i.a.createElement(y.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect,searchOptions:{types:["(cities)"]}},function(e){var t=e.getInputProps,n=e.suggestions,a=e.getSuggestionItemProps,r=e.loading;return i.a.createElement("div",{style:{position:"relative",marginBottom:"16px"}},i.a.createElement(p.p,Object.assign({variant:"outlined",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",className:"cities-adder-field"},t())),i.a.createElement(p.g,{className:"autocomplete-dropdown-container"},r&&i.a.createElement(p.h,{style:{backgroundColor:"#ffffff"}},i.a.createElement(p.j,null,"\u041f\u043e\u0438\u0441\u043a...")),n.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",n=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return i.a.createElement(p.h,a(e,{className:t,style:n}),i.a.createElement(p.j,null,e.description))})))}),i.a.createElement(p.b,{variant:"contained",align:"center",onClick:this.handleButton,disabled:!this.state.abilityToAdd,color:"primary",style:{width:"100%"}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),t}(a.Component),g=n(138),b=n.n(g),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.city,t=this.props.removeCityAction,n=this.props.selected;return i.a.createElement(p.h,{button:!0,selected:n,onClick:this.itemClickHeandler.bind(this)},i.a.createElement(p.j,{primary:e.name,secondary:"weather"in e?Math.floor(+e.weather.main.temp)+"\u2103":null}),i.a.createElement(p.i,null,i.a.createElement(p.e,{"aria-label":"Delete",onClick:t},i.a.createElement(b.a,null))))}},{key:"componentDidMount",value:function(){this.props.getWeatherNowAction(this.props.city)}},{key:"itemClickHeandler",value:function(){var e=this.props,t=e.city;(0,e.setDetailCityAction)(t.uniqueId)}}]),t}(a.PureComponent),O=n(139),j=n.n(O),w="6df1ef1d951078e6cf82a1e62947f6f0",C="ADD_CITY",A="REMOVE_CITY",S="GET_WEATHER_REQUEST",I="GET_WEATHER_SUCCESS",D="SET_DETAIL_CITY",T="GET_FORECAST_REQUEST",k="GET_FORECAST_SUCCESS";var N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.citiesList,t=this.props,n=t.removeCityAction,a=t.getWeatherNowAction,r=t.setDetailCityAction,c=this.props.activeUniqueId,o=i.a.createElement(p.h,null,i.a.createElement(p.r,{gcomponent:"p",style:{padding:"15px"}},"\u0421\u043f\u0438\u0441\u043e\u043a \u0433\u043e\u0440\u043e\u0434\u043e\u0432 \u043f\u0443\u0441\u0442"),i.a.createElement(j.a,null));return i.a.createElement(p.k,null,i.a.createElement(p.g,{component:"nav"},e.length?null:o,e.map(function(e,t){return i.a.createElement(v,{key:t,city:e,index:t,selected:e.uniqueId===c,getWeatherNowAction:a,setDetailCityAction:r,removeCityAction:n.bind(null,t)})})))}}]),t}(a.PureComponent),q=Object(d.b)(function(e){return{activeUniqueId:e.cities.activeUniqueId,citiesList:e.cities.citiesList}},function(e){return{removeCityAction:function(t){return e({type:A,payload:t})},getWeatherNowAction:function(t){return e(function(e){return function(t){t({type:S});var n=e.coordinates,a=n.lat,i=n.lng;fetch("https://api.openweathermap.org/data/2.5/weather?\n\t\t\tlat=".concat(a,"\n\t\t\t&lon=").concat(i,"\n\t\t\t&units=metric\n\t\t\t&lang=ru\n\t\t\t&appid=").concat(w)).then(function(e){return e.json()}).then(function(n){t({type:I,payload:n,uniqueId:e.uniqueId})}).catch(console.log)}}(t))},setDetailCityAction:function(t){return e(function(e){return{type:D,payload:e}}(t))}}})(N),x=n(140),F=n.n(x),L=function(e){var t=e.forecast;return i.a.createElement("div",{className:"forecast"},Object.keys(t).map(function(e,n){var a=t[e],r=new Date(Number(a[0].dt+"000"));return i.a.createElement("div",{key:n,className:"content-last"},i.a.createElement("h6",{style:{textTransform:"capitalize"}},r.toLocaleString("ru-ru",{weekday:"long"})),i.a.createElement("div",{style:{textTransform:"capitalize"},className:"data"},r.getDate()," ",r.toLocaleString("ru-ru",{month:"short"})),i.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(a[5].weather[0].icon,".png"),alt:" "}),i.a.createElement("div",{style:{textTransform:"capitalize"},className:"data"},a[5].weather[0].description),i.a.createElement("p",null,Math.floor(a[5].main.temp)+"\u2103"))}))},_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.weather,n=e.cityDetail,a=(new Date).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"});return i.a.createElement("div",{className:"content-top"},i.a.createElement("div",{className:"top"},i.a.createElement("div",{className:"content-left"},i.a.createElement("h6",null,a),i.a.createElement("h2",null,Math.floor(t.main.temp),"\xb0C")),i.a.createElement("div",{className:"content-right"},i.a.createElement("h5",{style:{textTransform:"capitalize"}},t.weather[0].description),i.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(t.weather[0].icon,".png"),alt:" "})),i.a.createElement("div",{className:"content-table"},i.a.createElement(p.l,{style:{background:"#FFFFFF",fontSize:"13px"}},i.a.createElement(p.m,null,i.a.createElement(p.o,null,i.a.createElement(p.n,null,"\u0410\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),i.a.createElement(p.n,null,i.a.createElement("b",null,t.main.pressure,"  \u0433\u041f\u0430"))),i.a.createElement(p.o,null,i.a.createElement(p.n,null,"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"),i.a.createElement(p.n,null,i.a.createElement("b",null,t.main.humidity,"  %"))),i.a.createElement(p.o,null,i.a.createElement(p.n,null,"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430"),i.a.createElement(p.n,null,i.a.createElement("b",null,t.wind.speed,"  \u043c/\u0441"))),i.a.createElement(p.o,null,i.a.createElement(p.n,null,"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0435\u0442\u0440\u0430"),i.a.createElement(p.n,null,i.a.createElement(F.a,{style:{transform:"rotate(".concat(t.wind.deg,"deg)"),color:"#DD4F43"}}))))))),i.a.createElement("div",{className:"forecast-wrap"},i.a.createElement("h6",{className:"forecast-header"},"\u041f\u0440\u043e\u0433\u043d\u043e\u0437:"),"forecast"in n?i.a.createElement(L,{forecast:n.forecast}):i.a.createElement(p.f,null)))}},{key:"componentDidMount",value:function(){(0,this.props.getForecastAction)(this.props.cityDetail)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.getForecastAction,n=this.props.cityDetail;setTimeout(function(){JSON.stringify(n)!==JSON.stringify(e.cityDetail)&&t(e.cityDetail)},1e3)}}]),t}(a.PureComponent),U=function(e){var t=e.cityDetail,n=e.getForecastAction,a=i.a.createElement(p.r,{variant:"h6",component:"h5"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0443\u0436\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0434 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430");return i.a.createElement(p.k,{elevation:1,style:{padding:"24px"}},t&&"weather"in t?i.a.createElement(_,{cityDetail:t,getForecastAction:n,weather:t.weather}):a)},B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){console.log("-TEST-");var e=this.props,t=e.addCityAction,n=e.getForecastAction,a=this.props.activeUniqueId,r=this.props.cities.find(function(e){return e.uniqueId===a});return i.a.createElement(p.c,null,i.a.createElement(p.a,{position:"static",color:"primary",style:{marginBottom:"40px"}},i.a.createElement(p.q,null,i.a.createElement(p.r,{variant:"h6",color:"inherit"},"\u041f\u043e\u0433\u043e\u0434\u0430 \u0432 \u043c\u0438\u0440\u0435"))),i.a.createElement(p.d,{className:"container",container:!0,spacing:16},i.a.createElement(p.d,{item:!0,xs:3},i.a.createElement(E,{addCityAction:t}),i.a.createElement(q,null)),i.a.createElement(p.d,{item:!0,xs:9},i.a.createElement(U,{cityDetail:r,getForecastAction:n}))))}}]),t}(a.Component),R=Object(d.b)(function(e){return{cities:e.cities.citiesList,activeUniqueId:e.cities.activeUniqueId}},function(e){return{addCityAction:function(t){return e(function(e){return{type:C,payload:e}}(t))},getForecastAction:function(t){return e(function(e){return function(t){t({type:T});var n=e.coordinates,a=n.lat,i=n.lng;fetch("https://api.openweathermap.org/data/2.5/forecast?\n\t\t\tlat=".concat(a,"\n\t\t\t&lon=").concat(i,"\n\t\t\t&units=metric\n\t\t\t&lang=ru\n\t\t\t&appid=").concat(w)).then(function(e){return e.json()}).then(function(n){var a={},i=(new Date).getDay();n.list.forEach(function(e,t){var n=new Date(Number(e.dt+"000")).getDay();n!==i&&(Array.isArray(a[n])?a[n].push(e):(a[n]=[],a[n].push(e)))}),t({type:k,payload:a,uniqueId:e.uniqueId})}).catch(console.log)}}(t))}}})(B),W=n(27),z=n(86),J={citiesList:[{name:"\u041a\u0438\u0435\u0432",coordinates:{lat:50.4501,lng:30.523400000000038},uniqueId:(new Date).valueOf()}],activeUniqueId:null};var M=Object(W.c)({cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,n=Object(z.a)(e.citiesList);switch(t.type){case C:return Object(h.a)({},e,{citiesList:[].concat(Object(z.a)(e.citiesList),[t.payload])});case A:return n.splice(t.payload,1),Object(h.a)({},e,{citiesList:n,cityDetail:{}});case I:return n.some(function(e,a){return e.uniqueId===t.uniqueId&&(n.splice(a,1,Object(h.a)({},e,{weather:t.payload})),!0)}),Object(h.a)({},e,{citiesList:n});case D:return Object(h.a)({},e,{activeUniqueId:t.payload});case k:return n.some(function(e,a){return e.uniqueId===t.uniqueId&&(n.splice(a,1,Object(h.a)({},e,{forecast:t.payload})),!0)}),Object(h.a)({},e,{citiesList:n});default:return e}}}),P=n(141),H=[M,Object(W.a)(P.a,function(e){return function(t){return function(n){return n.type!==C&&n.type!==A||setTimeout(function(){localStorage.setItem("savedStore",JSON.stringify(e.getState()))},0),t(n)}}})];null!==localStorage.getItem("savedStore")&&H.splice(1,0,JSON.parse(localStorage.getItem("savedStore")));var G=W.d.apply(null,H);c.a.render(i.a.createElement(d.a,{store:G},i.a.createElement(R,null)),document.getElementById("root"))}},[[211,2,1]]]);
//# sourceMappingURL=main.6ee6879d.chunk.js.map
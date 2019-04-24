(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(53)},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),s=a(8),i=a(9),o=a(16),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEATHER_DATA":return t.weatherData;default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEEKLY_FORECAST_DATA":return t.weeklyForecastData;default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CITY":return e.push(t.city),e;case"DELETE_CITY":return e.shift(),e;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{cityWeatherData:u(e.cityWeatherData,t),weeklyForecastData:m(e.weeklyForecastData,t),cities:p(e.cities,t)}},E=a(10),d=a(7),f=a.n(d),y=a(11),w=a(17),v=a(18),D=a(20),g=a(19),b=a(21),N=(a(41),Object(i.b)(function(e){return{weatherData:e.cityWeatherData}})(function(e){var t=e.weatherData;return"city not found"===t.message?r.a.createElement("p",null,"City \u200b\u200bname is invalid. Please, try again."):r.a.createElement("div",{className:"detail-forecast"},r.a.createElement("p",{className:"city"},t.name,", ",t.sys.country),r.a.createElement("p",{className:"weather-description"},t.weather[0].description),r.a.createElement("p",{className:"temperature"},Math.round(t.main.temp-273.15),"\xb0"),r.a.createElement("div",{className:"flex-container"},r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Pressure:"),r.a.createElement("br",null),r.a.createElement("span",{className:"glyph pressure"},"N"),r.a.createElement("br",null),t.main.pressure," mb"),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Humidity:"),r.a.createElement("br",null),r.a.createElement("span",{className:"glyph humidity"},"C"),r.a.createElement("br",null),t.main.humidity," %"),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Lowest temp.:"),r.a.createElement("br",null),r.a.createElement("span",{className:"glyph low-temp"},"L"),r.a.createElement("br",null),Math.round(t.main.temp_min-273.15)," \xb0C"),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Highest temp.:"),r.a.createElement("br",null),r.a.createElement("span",{className:"glyph high-temp"},"L"),r.a.createElement("br",null),Math.round(t.main.temp_max-273.15)," \xb0C"),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Visibility:"),r.a.createElement("br",null),r.a.createElement("span",{className:"glyph"},"B"),r.a.createElement("br",null),Math.round(t.visibility/1e3)," km"),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Wind:"),r.a.createElement("br",null),r.a.createElement("span",{className:"glyph wind"},"I"),r.a.createElement("br",null),t.wind.speed," km/h"),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"Cloudiness:"),r.a.createElement("br",null),r.a.createElement("span",{className:"glyph cloudiness"},"A"),r.a.createElement("br",null),t.clouds.all," %")),r.a.createElement(s.b,{to:"/weekly-forecast",className:"show-weekly-forecast"},"Show weekly forecast"))})),k=(a(47),function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(D.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.getLastCities=function(){a.props.weatherData.name&&-1!==a.props.weatherData.name.toLowerCase().indexOf(a.state.value.toLowerCase())&&-1===a.props.cities.indexOf(a.state.value)&&a.props.addCity(a.state.value)},a.valueChangeHandler=function(e){a.setState({value:e.target.value})},a.handlerKeyPress=function(){var e=Object(y.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key||!a.state.value){e.next=6;break}return e.next=3,a.fetchWeatherData(a.state.value);case 3:return e.next=5,a.getLastCities();case 5:a.setState({value:""});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.showCityForecast=function(){var e=Object(y.a)(f.a.mark(function e(t,n){var r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.filter(function(e,t){return t===n}),e.next=3,a.fetchWeatherData(r);case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"fetchWeatherData",value:function(){var e=Object(y.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("3202afc9748ff0709631c6435eeefc3a")).then(function(e){return e.json()}).catch(function(e){return console.log(e.message)});case 2:a=e.sent,this.props.getWeatherData(a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.weatherData,n=t.cities,l=t.deleteCity;return n.length>5&&l(),r.a.createElement("div",null,r.a.createElement("div",{className:"input-group mt-3 mb-3"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"City name",value:this.state.value,onChange:this.valueChangeHandler,onKeyPress:this.handlerKeyPress})),r.a.createElement("ul",{className:"city-list"},n.map(function(t,a){return r.a.createElement("li",{key:t,onClick:function(){return e.showCityForecast(n,a)}},t.toLowerCase())})),a&&"Nothing to geocode"!==a.message?r.a.createElement(N,null):null)}}]),t}(n.Component)),O=Object(i.b)(function(e){return{weatherData:e.cityWeatherData,cities:e.cities}},function(e){return{getWeatherData:function(t){return e({type:"GET_WEATHER_DATA",weatherData:t})},addCity:function(t){return e({type:"ADD_CITY",city:t})},deleteCity:function(){return e({type:"DELETE_CITY"})}}})(k),C=(a(48),function(){return r.a.createElement("div",{className:"loader-wrap"},r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),_=(a(49),function(e){var t=e.weatherData,a=e.getDayOfWeek,n=e.getDate,l=e.getPrecipitationData;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Day"),r.a.createElement("th",{scope:"col"},"Temperature",r.a.createElement("span",{className:"table-glyph"},"L")),r.a.createElement("th",{scope:"col"},"Pressure",r.a.createElement("span",{className:"table-glyph pressure"},"N")),r.a.createElement("th",{scope:"col"},"Humidity",r.a.createElement("span",{className:"table-glyph humidity"},"C")),r.a.createElement("th",{scope:"col"},"Wind",r.a.createElement("span",{className:"table-glyph wind"},"I")),r.a.createElement("th",{scope:"col"},"Precipitation",r.a.createElement("span",{className:"glyph3"},"A")),r.a.createElement("th",{scope:"col"},"Cloudiness",r.a.createElement("span",{className:"table-glyph cloudiness"},"A")))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:t,className:"tab-row"},r.a.createElement("th",null,a(t),r.a.createElement("small",null,n(t)),r.a.createElement("br",null),r.a.createElement("small",null,e.weather[0].description)),r.a.createElement("td",null,Math.round(e.main.temp-273.15),"\xb0"),r.a.createElement("td",null,Math.round(e.main.pressure)," mb"),r.a.createElement("td",null,e.main.humidity," %"),r.a.createElement("td",null,e.wind.speed," km/h"),r.a.createElement("td",null,l(e)," cm"),r.a.createElement("td",null,e.clouds.all," %"))})))}),W=(a(50),function(e){function t(){var e,a;Object(w.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(D.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).getWeekdayData=function(e){var t=new Date;return t.setDate(t.getDate()+e+1),new Date(t)},a.getDayOfWeek=function(e){return a.getWeekdayData(e).toLocaleString("en-US",{weekday:"long"})},a.getDate=function(e){return a.getWeekdayData(e).toLocaleString("en-US",{month:"short",day:"numeric"}).toUpperCase()},a.getPrecipitationData=function(e){return e.snow&&e.snow["3h"]?Math.round(10*e.snow["3h"]):e.snow&&"3h"in e.snow?void 0:0},a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=null!==this.props.weatherData?this.props.weatherData.id:"000000",e.next=3,fetch("https://api.openweathermap.org/data/2.5/forecast?id=".concat(t,"&appid=").concat("3202afc9748ff0709631c6435eeefc3a")).then(function(e){return e.json()}).catch(function(e){return console.log(e.name)});case 3:a=e.sent,this.props.getWeeklyForecastData(a);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.weeklyForecastData,a=e.weatherData;if(null===a)return r.a.createElement(s.b,{to:"/",className:"back"},r.a.createElement("span",{className:"glyph2"},"D"));if(!("city"in t))return r.a.createElement(C,null);var n=t.list.filter(function(e,t){return 0===t||6===t||13===t||19===t||26===t||33===t||39===t});return r.a.createElement("div",{className:"weekly-forecast"},r.a.createElement(s.b,{to:"/"},r.a.createElement("span",{className:"glyph2"},"D "),r.a.createElement("span",{className:"back-label"},"Back to daily forecast")),r.a.createElement("p",null,a.name,", ",a.sys.country),r.a.createElement(_,{weatherData:n,getDayOfWeek:this.getDayOfWeek,getDate:this.getDate,getPrecipitationData:this.getPrecipitationData}))}}]),t}(n.Component)),T=Object(i.b)(function(e){return{weeklyForecastData:e.weeklyForecastData,weatherData:e.cityWeatherData}},function(e){return{getWeeklyForecastData:function(t){return e({type:"GET_WEEKLY_FORECAST_DATA",weeklyForecastData:t})}}})(Object(E.d)(W)),j=(a(51),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{path:"/",exact:!0,component:O}),r.a.createElement(E.a,{path:"/weekly-forecast",component:T}))}),A=(a(52),Object(o.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(i.a,{store:A},r.a.createElement(s.a,null,r.a.createElement(j,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d2337824.chunk.js.map
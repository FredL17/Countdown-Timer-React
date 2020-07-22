(this["webpackJsonpcountdown-timer"]=this["webpackJsonpcountdown-timer"]||[]).push([[0],[,,function(e,t,n){e.exports={button:"Button_button__2lgkF",btnDefault:"Button_btnDefault__1Pv-G",btnActive:"Button_btnActive__2kxFc",btnReset:"Button_btnReset__3DLUQ",btnStop:"Button_btnStop__10UhJ",btnSpeed:"Button_btnSpeed__PHi1Y"}},function(e,t,n){e.exports={timer:"Timer_timer__dt39z",warn:"Timer_warn__23pJc",blink:"Timer_blink__lzWXr"}},function(e,t,n){e.exports={message:"Message_message__Junzx"}},function(e,t,n){e.exports={"input-form":"Form_input-form__2elkI",error:"Form_error__1n3Zp"}},,,,,function(e,t,n){e.exports={container:"CountdownTimer_container__1gKsl"}},,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),i=n.n(s),c=(n(18),n(1)),u=n(8),o=n(9),l=n(12),m=n(11),d=n(2),p=n.n(d);var v=function(e){var t=[];switch(t.push(p.a.button),e.btnType){case"speed":e.active?t.push(p.a.btnActive):t.push(p.a.btnSpeed);break;case"stop":t.push(p.a.btnStop);break;default:t.push(p.a.btnDefault)}return r.a.createElement("button",{className:t.join(" "),onClick:e.click},e.children)};var b=function(e){return r.a.createElement("div",null,r.a.createElement(v,{click:function(){return e.setSpeed(1)},btnType:"speed",active:1===e.speed},"1X"),r.a.createElement(v,{click:function(){return e.setSpeed(1.5)},btnType:"speed",active:1.5===e.speed},"1.5X"),r.a.createElement(v,{click:function(){return e.setSpeed(2)},btnType:"speed",active:2===e.speed},"2X"))},h=n(4),f=n.n(h);var _=function(e){var t=null,n=60*e.minutes+e.seconds;return e.ticking&&n<e.totalTime/2&&n>0?t=r.a.createElement("p",{className:f.a.message},"More than halfway there!"):e.ticking&&0===n&&(t=r.a.createElement("p",{className:f.a.message},"Time's up!")),t},S=n(3),g=n.n(S);var k=function(e){var t=60*e.minutes+e.seconds,n=null;e.timerId&&e.ticking&&(n=r.a.createElement(v,{click:e.stop,btnType:"stop"},"Stop")),e.timerId&&!e.ticking&&(n=r.a.createElement(v,{click:e.resume,btnType:"resume"},"Resume"));var a=[];return a.push(g.a.timer),t<=20&&t>0&&a.push(g.a.warn),t<10&&t>0&&a.push(g.a.blink),r.a.createElement("div",null,r.a.createElement(_,{minutes:e.minutes,seconds:e.seconds,ticking:e.ticking,totalTime:e.totalTime}),r.a.createElement("p",{className:a.join(" ")},e.minutes<10?"0":null,e.minutes,":",e.seconds<10?"0":null,e.seconds),n,r.a.createElement(b,{setSpeed:e.setSpeed,speed:e.speed}))},I=n(5),T=n.n(I);var j=function(e){var t=null;return e.error&&(t=r.a.createElement("p",{className:T.a.error},"Input is invalid.")),r.a.createElement("form",{onSubmit:e.timerId?e.reset:e.start,className:T.a.inputForm},t,r.a.createElement("label",null,"Countdown: "),r.a.createElement("input",{type:"text",placeholder:"# of minutes (1-99)",value:e.inputMinutes,onChange:e.inputChangeHandler,disabled:e.timerId}),r.a.createElement("input",{type:"submit",value:e.timerId?"Reset":"Start",disabled:!e.touched||e.error}))},E=n(10),O=n.n(E),M=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).startTimer=function(e){e.preventDefault(),a.state.touched&&!a.state.error&&(clearInterval(a.state.timerId),a.setState(Object(c.a)(Object(c.a)({},a.state),{},{totalTime:60*a.state.inputMinutes,currentMinutes:a.state.inputMinutes,currentSeconds:0}),(function(){var e=setInterval((function(){var e=60*a.state.currentMinutes+a.state.currentSeconds;if(0===e)clearInterval(a.state.timerId);else{e-=1;var t=Math.floor(e/60),n=e%60;a.setState(Object(c.a)(Object(c.a)({},a.state),{},{currentMinutes:t,currentSeconds:n}))}}),1e3/a.state.speedLevel);a.setState(Object(c.a)(Object(c.a)({},a.state),{},{timerId:e,ticking:!0,inputMinutes:""}))})))},a.resetTimer=function(e){e.preventDefault(),clearInterval(a.state.timerId),a.setState({inputMinutes:"",totalTime:0,currentMinutes:0,currentSeconds:0,speedLevel:1,timerId:null,ticking:!1,error:!1,touched:!1})},a.stopTimer=function(){clearInterval(a.state.timerId),a.setState(Object(c.a)(Object(c.a)({},a.state),{},{ticking:!1}))},a.resumeTimer=function(){var e=setInterval((function(){var e=60*a.state.currentMinutes+a.state.currentSeconds;if(0===e)clearInterval(a.state.timerId);else{e-=1;var t=Math.floor(e/60),n=e%60;a.setState(Object(c.a)(Object(c.a)({},a.state),{},{currentMinutes:t,currentSeconds:n}))}}),1e3/a.state.speedLevel);a.setState(Object(c.a)(Object(c.a)({},a.state),{},{timerId:e,ticking:!0}))},a.setSpeedLevel=function(e){a.state.timerId&&a.state.ticking?(clearInterval(a.state.timerId),a.setState(Object(c.a)(Object(c.a)({},a.state),{},{speedLevel:e}),a.resumeTimer)):a.setState(Object(c.a)(Object(c.a)({},a.state),{},{speedLevel:e}))},a.inputChangeHandler=function(e){var t=parseInt(e.target.value,10);!Number.isInteger(t)||t<1||t>99?a.setState(Object(c.a)(Object(c.a)({},a.state),{},{error:!0,touched:!0,inputMinutes:e.target.value})):a.setState(Object(c.a)(Object(c.a)({},a.state),{},{error:!1,touched:!0,inputMinutes:t}))},a.state={inputMinutes:"",totalTime:0,currentMinutes:0,currentSeconds:0,speedLevel:1,timerId:null,ticking:!1,error:!1,touched:!1},a}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:O.a.container},r.a.createElement(j,{inputChangeHandler:this.inputChangeHandler,ticking:this.state.ticking,reset:this.resetTimer,start:this.startTimer,error:this.state.error,touched:this.state.touched,inputMinutes:this.state.inputMinutes,timerId:this.state.timerId}),r.a.createElement(k,{totalTime:this.state.totalTime,timerId:this.state.timerId,minutes:this.state.currentMinutes,seconds:this.state.currentSeconds,ticking:this.state.ticking,setSpeed:this.setSpeedLevel,stop:this.stopTimer,resume:this.resumeTimer,speed:this.state.speedLevel}))}}]),n}(a.Component);n(19);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.38bb4c53.chunk.js.map
(this.webpackJsonpprojectreact=this.webpackJsonpprojectreact||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(12),i=a.n(s),l=a(16),c=a(13),r=a(2),d=a(17),m=a(15),u=(a(23),a(14)),p=a.n(u),b=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).updateCode=function(){p.a.get("https://tohacks2020-276104.uc.r.appspot.com/update").then((function(e){var t=e.data;console.log(t),console.log(typeof t),t.list=t.sendlist,t.latestInfo!=o.state.latestInfo&&(o.setState({colorFont:{backgroundColor:"#e43f5a",color:"#fff"}}),setTimeout((function(){o.setState({colorFont:{color:"#e43f5a",backgroundColor:"#fff"}})}),750)),console.log(typeof t),o.setState(Object(l.a)({},t))})),setTimeout(o.updateCode,5e3)},o.state={countdown:7,population:70,colorFont:{color:"#e43f5a",backgroundColor:"#fff"},latestInfo:"John just entered the store",list:[{name:"Farhan",time:"5:00 PM"},{name:"Niranjan",time:"6:00 PM"},{name:"Shoeb",time:"7:00 PM"},{name:"Uzair",time:"8:00 PM"}]},o}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.updateCode()}}]),Object(r.a)(a,[{key:"render",value:function(){var e="https://www.youtube.com/watch?v=b-ipYCOdfeE&feature=youtu.be";return n.a.createElement("div",{className:"body"},n.a.createElement("div",{style:{position:"fixed",top:"15vh",left:"10vw",padding:"10px",border:"1px solid black"}},"DEMO:",n.a.createElement("a",{href:e},e)),n.a.createElement("div",{className:"body-header"},"Your local supermarket"),n.a.createElement("div",{className:"body-dashboard"},n.a.createElement("div",{className:"body-dashboard_list list"},this.state.list.map((function(e,t){return n.a.createElement("div",{className:"list-item"},n.a.createElement("div",{className:"list-item_number"},t+1),n.a.createElement("div",{className:"list-item_info"},n.a.createElement("div",{className:"list-item_name"},e.name),n.a.createElement("div",{className:"list-item_time"},"Booked at ",e.time)))}))),n.a.createElement("div",{className:"body-dashboard_waittime"},n.a.createElement("div",{className:"body-dashboard_waittime-text"},"Approximately ",n.a.createElement("br",null),n.a.createElement("span",{style:{fontSize:"60px"}},this.state.countdown," minutes"),n.a.createElement("br",null)," until the next person can enter"),n.a.createElement("div",null,"People in store: ",n.a.createElement("span",{style:{fontWeight:500}},this.state.population))),n.a.createElement("div",{className:"body-dashboard_QR"},n.a.createElement("img",{className:"body-dashboard_QR-image",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"}),n.a.createElement("div",{className:"body-dashboard_QR-text"},"Scan the QR code to queue in line"),n.a.createElement("div",{className:"body-dashboard_QR-update",style:this.state.colorFont},this.state.latestInfo))))}}]),a}(o.Component);i.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c7ad9b4e.chunk.js.map
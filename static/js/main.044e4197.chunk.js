(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(1),s=a(2),i=a(3),u=a(4),c=a(0),l=a.n(c),o=a(6),m=a.n(o);a(14);function h(e){return l.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"Squarender",value:function(e){var t=this;return l.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"board"},this.Squarender(0),this.Squarender(1),this.Squarender(2)),l.a.createElement("div",{className:"board"},this.Squarender(3),this.Squarender(4),this.Squarender(5)),l.a.createElement("div",{className:"board"},this.Squarender(6),this.Squarender(7),this.Squarender(8)))}}]),a}(l.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={xIsNext:!0,stepNumber:0,history:[{squares:Array(9).fill(null)}]},r}return Object(s.a)(a,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();p(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat({squares:a}),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,a=this.state.history,r=a[this.state.stepNumber],n=p(r.squares),s=a.map((function(e,a){var r=a?"Go to #"+a:"Start the Game";return l.a.createElement("li",{key:a},l.a.createElement("button",{onClick:function(){t.jumpTo(a)}},r))}));return e=n?"Winner is "+n:"Next Player is "+(this.state.xIsNext?"X":"O"),l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"board"},l.a.createElement(d,{onClick:function(e){return t.handleClick(e)},squares:r.squares})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null,e),l.a.createElement("div",null,s)))}}]),a}(l.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],i=n[1],u=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[u])return e[s]}return null}m.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.044e4197.chunk.js.map
(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{66:function(t,e,n){"use strict";n.r(e);var a=n(32),r=n(33),c=n(36),i=n(35),u=n(0),s=n(8),o=n(34),h=n.n(o),l=n(1),b=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={query:"",movies:[]},t.inputChange=function(e){var n=e.currentTarget.value;t.setState({query:n})},t.handlerSubmit=function(e){e.preventDefault(),h.a.get("https://api.themoviedb.org/3/search/movie?api_key=cbf7b4582ce31cf384dd80d27cc60e4c&language=en-US&query=".concat(t.state.query,"&page=1&include_adult=true")).then((function(e){var n=e.data;return t.setState({movies:n.results})}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.movies,a=e.query;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:this.handlerSubmit,children:[Object(l.jsx)("input",{type:"text",onChange:this.inputChange,value:a}),Object(l.jsx)("button",{type:"submit",children:"search"})]}),n&&Object(l.jsx)("ul",{children:n.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{to:"".concat(t.props.match.url,"/").concat(e.id),children:e.original_title})})}))})]})}}]),n}(u.Component);e.default=b}}]);
//# sourceMappingURL=movies-page.d39c6622.chunk.js.map
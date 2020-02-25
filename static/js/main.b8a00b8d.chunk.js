(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(8),n=a.n(l),s=(a(16),a(10)),o=a(2),d=a(3),m=a(5),c=a(4),u=a(6),v=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:l},"IMDB"))))});v.defaultProps={description:""};var g=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(v,Object.assign({key:e.imdbId},e))})))};g.defaultProps={movies:[]};var h=a(1),b=(a(20),new RegExp("^((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[-;:&=+$,\\w]+@)?[A-Za-z0-9.-]+|(?:www\\.|[-;:&=+$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[+~%/.\\w-_]*)?\\??(?:[-+=&;%@.\\w_]*)#?(?:[.!/\\\\\\w]*))?)$","gim")),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={validation:{isTitleValid:!1,isImgUrlValid:!1,isImdbUrlValid:!1,isImdbIdValid:!1},title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},a.onSubmit=function(e){e.preventDefault();var t=a.state,i=t.title,r=t.description,l=t.imgUrl,n=t.imdbUrl,s=t.imdbId;a.props.onAdd({title:i.trim(),description:r.trim(),imgUrl:l,imdbUrl:n,imdbId:s.trim()}),a.setState({validation:{isTitleValid:!1,isImgUrlValid:!1,isImdbUrlValid:!1,isImdbIdValid:!1},title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},a.titleChange=function(e){var t=e.target.value;a.setState((function(e){return{title:t,validation:Object(h.a)({},e.validation,{isTitleValid:t.trim()})}}))},a.descriptionChange=function(e){a.setState({description:e.target.value})},a.imgUrlChange=function(e){var t=e.target.value;a.setState((function(e){return{imgUrl:t,validation:Object(h.a)({},e.validation,{isImgUrlValid:t.trim().match(b)})}}))},a.imdbUrlChange=function(e){var t=e.target.value;a.setState((function(e){return{imdbUrl:t,validation:Object(h.a)({},e.validation,{isImdbUrlValid:t.trim().match(b)})}}))},a.imdbIdChange=function(e){var t=e.target.value;a.setState((function(e){return{imdbId:t,validation:Object(h.a)({},e.validation,{isImdbIdValid:t.trim()})}}))},a.onBlurHandlerTitle=function(e){var t=e.target,i=e.currentTarget;a.state.validation.isTitleValid?(t.classList.remove("error-border"),i.classList.remove("error")):(t.classList.add("error-border"),i.classList.add("error"))},a.onBlurHandlerImgUrl=function(e){var t=e.target,i=e.currentTarget;a.state.validation.isImgUrlValid?(t.classList.remove("error-border"),i.classList.remove("error")):(t.classList.add("error-border"),i.classList.add("error"))},a.onBlurHandlerImdbUrl=function(e){var t=e.target,i=e.currentTarget;a.state.validation.isImdbUrlValid?(t.classList.remove("error-border"),i.classList.remove("error")):(t.classList.add("error-border"),i.classList.add("error"))},a.onBlurHandlerImdbId=function(e){var t=e.target,i=e.currentTarget;a.state.validation.isImdbIdValid?(t.classList.remove("error-border"),i.classList.remove("error")):(t.classList.add("error-border"),i.classList.add("error"))},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl,n=e.imdbId;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"fieldWraper"},r.a.createElement("label",{onBlur:this.onBlurHandlerTitle},"Movie title:",r.a.createElement("input",{type:"text",placeholder:"title",value:t,size:"40",onChange:this.titleChange}))),r.a.createElement("div",{className:"fieldWraper"},r.a.createElement("label",null,"Description movie:",r.a.createElement("textarea",{placeholder:"Description movie",rows:"10",cols:"40",onChange:this.descriptionChange,value:a}))),r.a.createElement("div",{className:"fieldWraper"},r.a.createElement("label",{onBlur:this.onBlurHandlerImgUrl},"ImgUrl:",r.a.createElement("textarea",{placeholder:"ImgUrl movie",rows:"4",cols:"40",onChange:this.imgUrlChange,value:i}))),r.a.createElement("div",{className:"fieldWraper"},r.a.createElement("label",{onBlur:this.onBlurHandlerImdbUrl},"ImdbUrl:",r.a.createElement("textarea",{placeholder:"ImdbUrl movie",rows:"2",cols:"40",onChange:this.imdbUrlChange,value:l}))),r.a.createElement("div",{className:"fieldWraper"},r.a.createElement("label",{onBlur:this.onBlurHandlerImdbId},"ImdbId:",r.a.createElement("input",{type:"text",placeholder:"ImdbId movie",value:n,size:"40",onChange:this.imdbIdChange}))),r.a.createElement("button",{type:"submit",disabled:!(this.state.validation.isTitleValid&&this.state.validation.isImgUrlValid&&this.state.validation.isImdbUrlValid&&this.state.validation.isImdbIdValid)},"Add new movie"))}}]),t}(i.Component),f=a(9),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={movies:f},a.addMovie=function(e){a.setState((function(t){return{movies:[].concat(Object(s.a)(t.movies),[e])}}))},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(g,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(p,{onAdd:this.addMovie})))}}]),t}(i.Component);n.a.render(r.a.createElement(I,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.b8a00b8d.chunk.js.map
import{B as v,C as M,D as T,E as L,F as j,G as F,H as D,I as B,J as N,K as G,a as _,b as u,c as y,d as P,e as s,f as c,g as p,h as f,i as h,j as g,k as r,l,m as d,n as k,o as a,p as C,q as x,r as O,t as S,x as I,z as E}from"./chunk-RHRLK6JP.js";var R=(()=>{let e=class e{constructor(o){this.router=o}seeDetails(o){this.router.navigate([`/${this.pokemon.id}`])}};e.\u0275fac=function(i){return new(i||e)(c(E))},e.\u0275cmp=u({type:e,selectors:[["poke-pokemon-card"]],hostBindings:function(i,t){i&1&&k("click",function(){return t.seeDetails()})},inputs:{pokemon:"pokemon"},decls:3,vars:2,consts:[["alt","Pokemon Image","width","200px","height","200px",3,"src"],[1,"poke-font"]],template:function(i,t){i&1&&(d(0,"img",0),r(1,"p",1),a(2),l()),i&2&&(p("src",(t.pokemon.sprites.other==null||t.pokemon.sprites.other.dream_world==null?null:t.pokemon.sprites.other.dream_world.front_default)||"../../../../assets/images/bg.png",P),s(2),C(t.pokemon.name))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:200px;justify-content:center;gap:20px;align-items:center}[_nghost-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{background-color:transparent}"]});let n=e;return n})();function Z(n,e){if(n&1&&d(0,"poke-pokemon-card",4),n&2){let m=e.$implicit;p("pokemon",m.pokemon)}}var H=(()=>{let e=class e{constructor(o,i){this.context=o,this.formBuilder=i,this.page=-1,this.searchGroup=this.formBuilder.group({search:[""]})}ngOnInit(){this.nextPage()}nextPage(){this.context.fetchAll(++this.page).subscribe({next:o=>this.pokeList=o,error:o=>console.log(o),complete:()=>console.log("complete")}),window.focus(),window.scrollTo(0,800)}prevPage(){this.context.fetchAll(--this.page).subscribe({next:o=>this.pokeList=o,error:o=>console.log(o),complete:()=>console.log("complete")}),window.focus(),window.scrollTo(0,800)}search(){this.context.fetchSearch(this.searchGroup.controls.search.value).subscribe({next:o=>this.pokeList=o,error:o=>console.log(o),complete:()=>console.log("complete")}),window.window.scrollTo(0,0)}};e.\u0275fac=function(i){return new(i||e)(c(M),c(N))},e.\u0275cmp=u({type:e,selectors:[["poke-pokemon-list"]],decls:10,vars:3,consts:[[3,"disabled","click"],[3,"formGroup"],["type","text","placeholder","Search...","formControlName","search"],[3,"click"],[3,"pokemon"]],template:function(i,t){i&1&&(h(0,Z,1,1,"poke-pokemon-card",4,f),r(2,"nav")(3,"button",0),k("click",function(){return t.prevPage()}),a(4,"<"),l(),r(5,"form",1),d(6,"input",2),r(7,"button",3),k("click",function(){return t.search()}),l()(),r(8,"button",0),k("click",function(){return t.nextPage()}),a(9,">"),l()()),i&2&&(g(t.pokeList==null?null:t.pokeList.results),s(3),p("disabled",!(t.pokeList!=null&&t.pokeList.previous)),s(2),p("formGroup",t.searchGroup),s(3),p("disabled",!(t.pokeList!=null&&t.pokeList.next)))},dependencies:[F,T,L,j,D,B,R],styles:['[_nghost-%COMP%]{display:flex;width:100%;height:fit-content;flex-wrap:wrap;justify-content:center;align-items:center;gap:10vw;padding:100px 0}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:1.2rem;color:#000}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;position:fixed;top:90%;font-size:1.2rem;opacity:.5}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   nav[_ngcontent-%COMP%]:focus-within{opacity:1}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:100px;border:none;outline:none}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:50%;height:50px;padding:0 20px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{border-radius:50px;width:80%;border:none;outline:none;padding:0 20px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-image:url("./media/lupa-S6EZZ7PR.png");background-size:50%;background-repeat:no-repeat;background-position:center}']});let n=e;return n})();function W(n,e){if(n&1&&(r(0,"li"),a(1),l()),n&2){let m=e.$implicit;s(),C(m.type.name)}}function q(n,e){if(n&1&&(r(0,"li"),a(1),l()),n&2){let m=e.$implicit;s(),C(m.ability.name)}}function J(n,e){if(n&1&&(r(0,"li"),a(1),l()),n&2){let m=e.$implicit;s(),O("",m.stat.name,": ",m.base_stat,"")}}var z=(()=>{let e=class e{constructor(o,i){this.context=o,this.activeRoute=i}ngOnInit(){this.context.fetchID(this.activeRoute.snapshot.params.id).subscribe({next:o=>this.pokemon=o,error:o=>console.log(o),complete:()=>console.log("Complete")})}};e.\u0275fac=function(i){return new(i||e)(c(M),c(I))},e.\u0275cmp=u({type:e,selectors:[["poke-pokemon-content"]],decls:26,vars:5,consts:[[1,"pokemon"],[1,"poke-font"],["width","300px","height","300px",3,"src","alt"],[1,"types-list"],[1,"information"],[1,"habilities"],[1,"abilities-list"],[1,"status"],[1,"status-list"]],template:function(i,t){i&1&&(r(0,"div",0)(1,"h3",1),a(2),l(),d(3,"img",2),r(4,"ol",3),h(5,W,2,1,"li",null,f),l()(),r(7,"div",4)(8,"h5",1),a(9,"Information"),l(),r(10,"p"),a(11),l(),r(12,"p"),a(13),l()(),r(14,"div",5)(15,"h5",1),a(16,"Habilities"),l(),r(17,"ol",6),h(18,q,2,1,"li",null,f),l()(),r(20,"div",7)(21,"h5",1),a(22,"Status"),l(),r(23,"ol",8),h(24,J,2,2,"li",null,f),l()()),i&2&&(s(2),C(t.pokemon==null?null:t.pokemon.name),s(),p("src",(t.pokemon==null||t.pokemon.sprites==null||t.pokemon.sprites.other==null||t.pokemon.sprites.other.dream_world==null?null:t.pokemon.sprites.other.dream_world.front_default)||"../../../../assets/images/bg.png",P)("alt",t.pokemon==null?null:t.pokemon.name),s(2),g(t.pokemon==null?null:t.pokemon.types),s(6),x("Height: ",t.pokemon==null?null:t.pokemon.height,""),s(2),x("Weight: ",t.pokemon==null?null:t.pokemon.weight,""),s(5),g(t.pokemon==null?null:t.pokemon.abilities),s(6),g(t.pokemon==null?null:t.pokemon.stats))}});let n=e;return n})();var K=[{path:"",component:H},{path:":id",component:z}],$=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=_({imports:[v.forChild(K),v]});let n=e;return n})();var fe=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=_({imports:[$,S,v,G]});let n=e;return n})();export{fe as PokemonsModule};
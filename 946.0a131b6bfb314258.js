"use strict";(self.webpackChunkportfolioV3=self.webpackChunkportfolioV3||[]).push([[946],{646:(C,c,r)=>{r.r(c),r.d(c,{ProjectsModule:()=>T});var a=r(814),s=r(670),e=r(946);let d=(()=>{class t{constructor(){this.projectList=[{name:"Impactville",imgName:"impactville",link:"https://www.impactville.org",tags:["Angular","Front-end","Tailwind","Ionic"],desc:"A crowd funding app that I helped in development in the given dates. Mainly worked on the front end of the mobile app and its website counterpart",start:new Date("2023-02"),end:new Date("2023-06-30")},{name:"Sharespace",imgName:"sharespace",link:"https://github.com/JustroX/ipfs-client/releases",tags:["Angular","Front-end","NgZorro"],desc:"Thesis project in college, designed a large portion of the front end utilizing ng zorro components",start:new Date("2022-01"),end:new Date("2022-05")},{name:"Holoworlds",imgName:"holoworlds",link:"https://github.com/inazumaron/holo_world",tags:["GDScript","GameDev","PixelArt"],desc:"Self project, creating a top down shooter with different characters and utilizing a randomly generated map and levels",start:new Date("2022-06"),end:new Date("2022-09")},{name:"Hexgame",imgName:"hexgame",link:"https://github.com/inazumaron/HexGame",tags:["GDScript","GameDev","PixelArt"],desc:"Self project, creating a turn based strategy game utilizing a hex grid and simple controls",start:new Date("2022-11"),end:new Date("2023-04")},{name:"Shinigami",imgName:"shinigami",link:"https://github.com/inazumaron/MP2_Shinigami",tags:["Python","GameDev"],desc:"A group project from school, programmed most of the code and handled their interactions and such. Also designed the UI and provided art for the game",start:new Date("2018-12-5"),end:new Date("2018-11-18")},{name:"Secret Society HoloX",imgName:"holox",link:"https://www.pixiv.net/en/artworks/97782754",tags:["DigitalArt"],desc:"Digital art depicting multiple characters, using a 3d background to be able to draw and portray detailed columns and proper depth.",start:new Date("2022-03-25"),end:new Date("2018-04-21")},{name:"Ina x Millie",imgName:"inaxmillie",link:"https://www.pixiv.net/en/artworks/101878536",tags:["DigitalArt"],desc:"Digital art depicting a single character, drawn as part of a inktober event, thus only lasting at most 1 day to create",start:new Date("2022-10-12"),end:new Date("2022-10-12")},{name:"Reed the flame shadow",imgName:"reed",link:"https://www.pixiv.net/en/artworks/109832441",tags:["DigitalArt"],desc:"Digital art depicting a single character, drawn and aided with ai art to improve overall shading and gradients",start:new Date("2023-07-07"),end:new Date("2023-07-11")}]}getProjectList(n){return this.projectList}getProject(n){for(const i of this.projectList)if(n==i.imgName)return i}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,o){if(1&t&&(e.TgZ(0,"div",9),e._UZ(1,"img",10),e._uU(2),e.qZA()),2&t){const n=o.$implicit;e.Q6J("routerLink","../../"+n)("replaceUrl",!0),e.xp6(1),e.Q6J("src","/assets/"+n+".png",e.LSH),e.xp6(1),e.hij(" ",n," ")}}function g(t,o){if(1&t&&(e.TgZ(0,"div",19),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n," ")}}function m(t,o){if(1&t&&(e.TgZ(0,"div",14),e._UZ(1,"img",15),e.TgZ(2,"div",16),e._uU(3),e.qZA(),e.TgZ(4,"div",17),e.YNc(5,g,2,1,"div",18),e.qZA()()),2&t){const n=o.$implicit;e.Q6J("routerLink","../"+n.imgName),e.xp6(1),e.Q6J("src","/assets/"+n.imgName+".png",e.LSH),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Q6J("ngForOf",n.tags)}}function u(t,o){if(1&t&&(e.TgZ(0,"div",11,12),e.YNc(2,m,6,4,"div",13),e.qZA()),2&t){const n=o.ngIf;e.xp6(2),e.Q6J("ngForOf",n)}}let f=(()=>{class t{constructor(n){this.projService=n,this.tabs=["home","about","projects","contacts"],this.filters=[],this.projList=n.getProjectList(this.filters)}addFilter(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-list"]],decls:10,vars:2,consts:[[1,"fixed","z-10","flex","justify-between","w-full","h-10","py-5"],["navBar",""],[1,"ml-8","text-xl","font-semibold","text-white"],["label",""],[1,"flex","gap-2","mr-4","text-white"],["buttons",""],["class","border-2 border-solid border-gray-400 rounded-full h-10 p-2 bg-neutral-200 bg-opacity-60 cursor-pointer hover:bg-opacity-80",3,"routerLink","replaceUrl",4,"ngFor","ngForOf"],[1,"fixed","w-full","h-full","bg-blue-950","pt-16","px-8"],["class","flex flex-wrap grid-cols-4",4,"ngIf"],[1,"border-2","border-solid","border-gray-400","rounded-full","h-10","p-2","bg-neutral-200","bg-opacity-60","cursor-pointer","hover:bg-opacity-80",3,"routerLink","replaceUrl"],[1,"h-4","inline","mx-1","invert",3,"src"],[1,"flex","flex-wrap","grid-cols-4"],["projList",""],["class","p-4 h-[300px] bg-gray-200 rounded-lg mx-2 my-4 w-[320px] cursor-pointer",3,"routerLink",4,"ngFor","ngForOf"],[1,"p-4","h-[300px]","bg-gray-200","rounded-lg","mx-2","my-4","w-[320px]","cursor-pointer",3,"routerLink"],[1,"w-full","h-[200px]","object-cover","rounded-lg",3,"src"],[1,"block","my-3","text-lg"],[1,"block"],["class","p-1 border border-solid border-neutral-400 bg-slate-400 bg-opacity-50 inline mr-2 rounded-full my-2",4,"ngFor","ngForOf"],[1,"p-1","border","border-solid","border-neutral-400","bg-slate-400","bg-opacity-50","inline","mr-2","rounded-full","my-2"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0,1)(2,"div",2,3),e._uU(4," Projects "),e.qZA(),e.TgZ(5,"div",4,5),e.YNc(7,p,3,4,"div",6),e.qZA()(),e.TgZ(8,"div",7),e.YNc(9,u,3,1,"div",8),e.qZA()),2&n&&(e.xp6(7),e.Q6J("ngForOf",i.tabs),e.xp6(2),e.Q6J("ngIf",i.projList))},dependencies:[a.sg,a.O5,s.rH]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-create"]],decls:2,vars:0,template:function(n,i){1&n&&(e.TgZ(0,"p"),e._uU(1,"create works!"),e.qZA())}}),t})(),v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit"]],decls:2,vars:0,template:function(n,i){1&n&&(e.TgZ(0,"p"),e._uU(1,"edit works!"),e.qZA())}}),t})();var w=r(535),x=r(96);function b(t,o){if(1&t&&(e.TgZ(0,"div",13),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n," ")}}function y(t,o){if(1&t&&(e.TgZ(0,"a",14),e._uU(1),e.qZA()),2&t){const n=e.oxw().ngIf;e.Q6J("href",n.link,e.LSH),e.xp6(1),e.hij(" ",n.link," ")}}function j(t,o){if(1&t&&(e.TgZ(0,"div",4)(1,"div",5,6),e._UZ(3,"img",7),e.TgZ(4,"div",8),e._uU(5),e.qZA(),e.TgZ(6,"div",9),e.YNc(7,b,2,1,"div",10),e.qZA(),e.YNc(8,y,2,2,"a",11),e.qZA(),e.TgZ(9,"div",5,12)(11,"div"),e._uU(12),e.qZA(),e.TgZ(13,"div"),e._uU(14),e.ALo(15,"date"),e.qZA(),e.TgZ(16,"div"),e._uU(17),e.ALo(18,"date"),e.qZA()()()),2&t){const n=o.ngIf;e.xp6(3),e.Q6J("src","/assets/"+n.imgName+".png",e.LSH),e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Q6J("ngForOf",n.tags),e.xp6(1),e.Q6J("ngIf",n.link),e.xp6(4),e.hij(" ",n.desc," "),e.xp6(2),e.hij(" Start date: ",e.xi3(15,7,n.start,"yyyy-MM-dd")," "),e.xp6(3),e.hij(" End date: ",e.xi3(18,10,n.end,"yyyy-MM-dd")," ")}}function Z(t,o){1&t&&(e.TgZ(0,"div",15),e._uU(1," Project not found "),e.qZA())}const _=[{path:"list",component:f},{path:"create",component:h},{path:"edit/:ID",component:v},{path:":ID",component:(()=>{class t{constructor(n,i){this.router=n,this.service=i,this.project=n.params.pipe((0,w.w)(l=>(console.log("id ",this.service.getProject(l.ID)),(0,x.of)(this.service.getProject(l.ID)))))}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.gz),e.Y36(d))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-view"]],decls:7,vars:4,consts:[[1,"absolute","z-10","mt-4","ml-10","py-1","px-2","bg-gray-200","rounded-full","font-bold"],["routerLink","../list",1,"cursor-pointer"],["class","fixed flex w-full h-full bg-blue-950 text-white",4,"ngIf","ngIfElse"],["unknownProject",""],[1,"fixed","flex","w-full","h-full","bg-blue-950","text-white"],[1,"mt-20","mx-10"],["leftCol",""],[1,"w-full","h-[400px]","object-cover","rounded-lg",3,"src"],[1,"text-2xl","my-2","font-semibold"],[1,"flex","justify-start","ml-2","text-base","flex-wrap"],["class","mx-2 p-1 rounded-lg border-solid border my-1 bg-black bg-opacity-20",4,"ngFor","ngForOf"],["class","mt-2",3,"href",4,"ngIf"],["rightCol",""],[1,"mx-2","p-1","rounded-lg","border-solid","border","my-1","bg-black","bg-opacity-20"],[1,"mt-2",3,"href"],[1,"text-2xl","w-full","mt-32","flex","justify-center","items-center","text-neutral-700","overflow-hidden"]],template:function(n,i){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"<"),e.qZA()(),e.YNc(3,j,19,13,"div",2),e.ALo(4,"async"),e.YNc(5,Z,2,0,"ng-template",null,3,e.W1O)),2&n){const l=e.MAs(6);e.xp6(3),e.Q6J("ngIf",e.lcZ(4,2,i.project))("ngIfElse",l)}},dependencies:[a.sg,a.O5,s.rH,a.Ov,a.uU]}),t})()},{path:"",pathMatch:"full",redirectTo:"list"}];let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(_),s.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,A]}),t})()}}]);
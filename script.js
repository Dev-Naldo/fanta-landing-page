gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main, .two",
    start: "0% 90%",
   end: "32% 30%",
    scrub: true, //acompanha o movimento do scroll do mouse
    markers: true,
  }
});

tl.to("#fanta", {
  top: '130%', //move o elemento para 130% do topo 
  left: '3%', //move o elemento para 3% da esquerda
  
}, "orange") //sicroizando com animaçao nomeada "orange"

.to("#laranja-cortada", {
 top: '160%',
 left: '25%',
 rotate: '1030deg'
}, "orange")

.to("#laranja", {
  top:'170%',
  width: '15%',
  right: '10%', //move o elemento para 10% da direita
}, "orange");
tl.to("#folha", {
 top: '110%',
 left: '70%',
 rotate: '500deg'
}, "orange")
tl.to("#folha2", {
 top: '110%',
 left: '0%',
 rotate: '500deg'
}, "orange")
//CRIANDO A SEGUNDA TIMELINE
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
   end: "50% 70%",
    scrub: true, //acompanha o movimento do scroll do mouse
    markers: true,
      }
});
tl2.from(
    '.lemon',
    {
        rotate: '-90deg',//inicia o movimento rotacionando
        left: '-100%', //inicia o elemento fora da tela
        top: '160%', //inicia o elemento ligeiramente embaixo da tela
    }, 'ca' // sicronização
);
tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',//inicia o movimento rotacionando
        left: '-100%', //inicia o elemento fora da tela
        top: '160%', //inicia o elemento ligeiramente embaixo da tela
    }, 'ca' // sicronização
);
tl2.from(
    '#pepsi',
    {
        rotate: '-90deg',//inicia o movimento rotacionando
        left: '-100%', //inicia o elemento fora da tela
        top: '160%', //inicia o elemento ligeiramente embaixo da tela
    }, 'ca' // sicronização
);
tl2.to(
    '#laranja-cortada',
    {
        width: '18%',//inicia o movimento rotacionando
        left: '42%', //inicia o elemento fora da tela
        top: '204%', //inicia o elemento ligeiramente embaixo da tela
    }, 'ca' // sicronização
);
tl2.to(
    '#fanta',
    {
        
        left: '32%', //inicia o elemento fora da tela
        top: '218%', //inicia o elemento ligeiramente embaixo da tela
    }, 'ca' // sicronização
);
tl2.to(
    '#laranja',
    {
        
        left: '53%', //inicia o elemento fora da tela
        top: '248%', //inicia o elemento ligeiramente embaixo da tela
    }, 'ca' // sicronização
);
tl2.to(
    '#folha',
    {
       rotate: '340deg',
        left: '50%', //inicia o elemento fora da tela
        top: '200%', //inicia o elemento ligeiramente embaixo da tela
    }, 'ca' // sicronização
);
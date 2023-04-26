import Szereplo from "./Szereplo.js";

$(function () {
  /**példányosítjuk a Szereplő */
  const szuloElem=$(".tarolo")
  const szereplo1 = new Szereplo("János", 1977,szuloElem);
 /*  console.log(szereplo1); */

/*   const sz = { nev: "Jenő", szul: 1283, kor:function(){

  } }; */
  /**Ezt ne! */
  szereplo1.jegy=12
 // console.log(szereplo1);
  szereplo1.nev="Béla"
  //console.log(szereplo1);
 /*  szereplo1.#szuletesiNev="Béla" */
  //console.log(szereplo1.#szuletesiNev);
 // console.log(szereplo1.getSzuletesNev())
 // console.log(szereplo1.kor())
  const szereplo2=new Szereplo("Jenő", 1985,szuloElem);
});

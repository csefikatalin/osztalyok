class Szereplo {
  #szuletesiNev; //privát adattag
  constructor(nev, szul_ev, szuloElem) {
    //this - mindig az aktuális objektum példányra mutat.
    this.nev = nev; //publikus
    this.#szuletesiNev = nev;
    this.szul_ev = szul_ev;
    this.hanyEves = this.kor();

    /**Adatok megjelenítése a HTML oldalon */
    szuloElem.append(`<div class='szereplo'>
                        <h3>${this.nev}</h3>
                        <p>${this.hanyEves}</p>
                     </div>`);
    /**Minden olyan html elemhez kell egy adattagot rendelni,
     * amivel később foglalkozni akarunk
     */
    this.szereploElem = $(".szereplo:last-child");
    /*  console.log(this.szereploElem)
    console.log(this) */
    //rákattintok az aktuális div-re
    this.szereploElem.on("click", function () {
      /**function esetén a this - az eseményt kiváltó elemre mutat */
      console.log(this);
    });
    this.szereploElem.on("click", () => {
      /**function esetén a this - az eseményt kiváltó elemre mutat */
      console.log(this.nev);
    });
  }
  getSzuletesNev() {
    return this.#szuletesiNev;
  }
  setSzuletesinev(ujnev) {
    //ujnev csak nagybetűvel kezdődhet,. vagy nem tartalmazhat számokat
    //ellenprzés beépítésekor
    this.#szuletesiNev = ujnev;
  }
  kor() {
    const d = new Date();
    let year = d.getFullYear();
    let evekSzama = year - this.szul_ev;
    return evekSzama;
  }
}

export default Szereplo;

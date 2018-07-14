function Premiu(nume,an) {
    this.nume=nume;
    this.an=an;
}

function Actor(nume,varsta,premii) {
    this.nume=nume;
    this.varsta=varsta;
    this.premii=premii;
}

function Film(an_aparitie,nume,actori) {
    this.an_aparitie=an_aparitie;
    this.nume=nume;
    this.actori=actori;
}

function Studio(nume,filme) {
    this.nume=nume;
    this.filme=filme;
}

var oscar1990 = new Premiu("oscar", 1990);
var oscar2000 = new Premiu("oscar", 2000);
var oscar2010 = new Premiu("oscar", 2010);
var oscar2018 = new Premiu("oscar", 2018);

var actorOscar1990 = new Actor("actor cu 2 oscaruri", 35, [oscar1990, oscar2000]);
var actorOscar2010 = new Actor("actor cu oscar din 2000", 55, [oscar2010]);
var actorOscar2018 = new Actor("actor cu oscar din 2018", 23, [oscar2018]);
var actorFaraPremii01 = new Actor("actor fara oscar 01", 33, []);
var actorFaraPremii02 = new Actor("actor fara oscar 02", 60, []);
var actorFaraPremii03 = new Actor("actor fara oscar 02", 20, []);

var film1 = new Film(1990, "film cu actori de oscar", [actorOscar1990, actorFaraPremii01]);
var film2 = new Film(2010, "film cu actori fara premii2", [actorFaraPremii01, actorFaraPremii02, actorFaraPremii03]);
var film3 = new Film(2010, "film cu actori fara premii3", [actorFaraPremii01, actorFaraPremii02, actorFaraPremii03]);
var film4 = new Film(2018, "film cu actori de oscar", [actorOscar2010, actorOscar2018, actorFaraPremii02]);
var film5 = new Film(2018, "film cu actori fara premii5", [actorFaraPremii02, actorFaraPremii03]);

var studio1 = new Studio("MGM", [film1, film2]);
var studio2 = new Studio("Disney", [film3, film4, film5 ]);

var studioDatabase = [studio1, studio2];

function problema1(studios) {
    for(let i=0; i<studios.length; ++i) {
        if(studios[i].filme.length>2) console.log(studios[i].nume);
    }
}

function problema2(studioDatabase) {
    for(let i=0; i<studioDatabase.length; ++i) {
        var isPlaying=false;
        for (let j=0; j<studioDatabase[i].filme.length; ++j) {
            for(let k=0; k<studioDatabase[i].filme[j].actori.length; ++k) {
                if(studioDatabase[i].filme[j].actori[k].nume=="actor cu 2 oscaruri") isPlaying=true;
            }
        }
        if(isPlaying==true) console.log(studioDatabase[i].nume);
    }
}

function problema3(studioDatabase) {
    for(let i=0; i<studioDatabase.length; ++i) {
        for(let j=0; j<studioDatabase[i].filme.length; ++j) {
            var is50=false;
            for(let k=0; k<studioDatabase[i].filme[j].actori.length; ++k) {
                if(studioDatabase[i].filme[j].actori[k].varsta>50) is50=true;
            }
            if(is50) return studioDatabase[i].filme[j].nume;
        }
    }
}
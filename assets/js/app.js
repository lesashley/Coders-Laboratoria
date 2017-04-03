function Pictures() {
  this.Chile4 = [];
  this.addChile4 = function (archivo,nombre) {
    this.Chile4.push({
      promocion : "4-chile",
      file : archivo,
      name : nombre
    });
  }
  this.Lima5 = [];
  this.addLima5 = function (archivo,nombre) {
    this.Lima5.push({
      promocion : "5-lima",
      name : nombre,
      file : archivo
    });
  }
  this.Lima6 = [];
  this.addLima6 = function (archivo,nombre) {
    this.Lima6.push({
      promocion : "6-lima",
      name : nombre,
      file : archivo
    });
  }
}

var picture = new Pictures();

picture.addChile4("anais-araya .jpg","anais-araya");
picture.addChile4("andrea-miranda.jpg","andrea-miranda");
picture.addChile4("berenisse-ríos.jpg","berenisse-ríos");
picture.addChile4("caterina-da-silva.jpg","caterina-da-silva");
picture.addChile4("daniela-sanchez.jpg","daniela-sanchez");
picture.addChile4("francisca-ojeda.jpg","francisca-ojeda");
picture.addChile4("katerine-sandoval.jpg","katerine-sandoval");

picture.addLima5("andrea-cabrera.jpg","andrea-cabrera");
picture.addLima5("ariadna-izaguirre.jpg","ariadna-izaguirre");
picture.addLima5("carito-juarez.jpg","carito-juarez");
picture.addLima5("cristy-castro.jpg","cristy-castro");
picture.addLima5("karol-orrillo.jpg","karol-orrillo");
picture.addLima5("paola-ortiz.jpg","paola-ortiz");
picture.addLima5("teresa-lara.jpg","teresa-lara");

picture.addLima6("arantza-burga.jpg","arantza-burga");
picture.addLima6("daguiana-revoredo.jpg","daguiana-revoredo");
picture.addLima6("elizabeth-condori.jpg","elizabeth-condori");
picture.addLima6("grecia-rayme.jpg","grecia-rayme");
picture.addLima6("janine-vega.jpg","janine-vega");
picture.addLima6("michelle-more.jpg","michelle-more");
picture.addLima6("mishel-velasquez.jpg","mishel-velasquez");
picture.addLima6("rosario-felix.jpg","rosario-felix");


var chile4 = document.getElementById("chile4");
var lima5 = document.getElementById("lima5");
var lima6 = document.getElementById("lima6");

function crearImagen(prom,src,alt,parent) {
  var imagen = document.createElement("img");
  imagen.classList.add(prom);
  imagen.classList.add("estilo");
  imagen.src="assets/images/"+prom+"/"+src;
  imagen.alt=alt;
  parent.appendChild(imagen);
}

picture.Chile4.forEach(function (e) {
  crearImagen(e.promocion,e.file,e.name,chile4);
});
picture.Lima5.forEach(function (e) {
  crearImagen(e.promocion,e.file,e.name,lima5);
});
picture.Lima6.forEach(function (e) {
  crearImagen(e.promocion,e.file,e.name,lima6);
});

var select = document.getElementById("select");
select.onchange = function () {
  if (select.value == "1") {
    chile4.style.display = "block";
    lima5.style.display = "none";
    lima6.style.display = "none";
  }
  if (select.value == "2") {
    lima5.style.display = "block";
    chile4.style.display = "none";
    lima6.style.display = "none";
  }
  if (select.value == "3") {
    lima6.style.display = "block";
    chile4.style.display = "none";
    lima5.style.display = "none";
  }
}

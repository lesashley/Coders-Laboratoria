function Pictures() {
  this.Chile4 = [];
  this.addChile4 = function (archivo,nombre) {
    this.Chile4.push({
      promocion : "chile-4",
      file : archivo,
      name : nombre });
  }
  this.Lima5 = [];
  this.addLima5 = function (archivo,nombre) {
    this.Lima5.push({
      promocion : "lima-5",
      name : nombre,
      file : archivo });
  }
  this.Lima6 = [];
  this.addLima6 = function (archivo,nombre) {
    this.Lima6.push({
      promocion : "lima-6",
      name : nombre,
      file : archivo });
  }
}

var picture = new Pictures();

picture.addChile4("anais-araya .jpg","Anais Araya");
picture.addChile4("andrea-miranda.jpg","Andrea Miranda");
picture.addChile4("berenisse-ríos.jpg","Berenisse Ríos");
picture.addChile4("caterina-da-silva.jpg","Caterina Da Silva");
picture.addChile4("daniela-sanchez.jpg","Daniela Sanchez");
picture.addChile4("francisca-ojeda.jpg","Francisca Ojeda");
picture.addChile4("katerine-sandoval.jpg","Katerine Sandoval");

picture.addLima5("andrea-cabrera.jpg","Andrea Cabrera");
picture.addLima5("ariadna-izaguirre.jpg","Ariadna Izaguirre");
picture.addLima5("carito-juarez.jpg","Carito Juarez");
picture.addLima5("cristy-castro.jpg","Cristy Castro");
picture.addLima5("karol-orrillo.jpg","Karol Orrillo");
picture.addLima5("paola-ortiz.jpg","Paola Ortiz");
picture.addLima5("teresa-lara.jpg","Teresa Lara");

picture.addLima6("arantza-burga.jpg","Arantza Burga");
picture.addLima6("daguiana-revoredo.jpg","Daguiana Revoredo");
picture.addLima6("elizabeth-condori.jpg","Elizabeth Condori");
picture.addLima6("grecia-rayme.jpg","Grecia Rayme");
picture.addLima6("janine-vega.jpg","Janine Vega");
picture.addLima6("michelle-more.jpg","Michelle More");
picture.addLima6("mishel-velasquez.jpg","Mishel Velasquez");
picture.addLima6("rosario-felix.jpg","Rosario Felix");


var chile4 = document.getElementById("chile4");
var lima5 = document.getElementById("lima5");
var lima6 = document.getElementById("lima6");

function crearImagen(prom,src,alt,parent) {
  var imagen = document.createElement("img");
  imagen.classList.add("estilo");
  imagen.src="assets/images/"+prom+"/"+src;
  imagen.alt=alt;
  imagen.title = alt;
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

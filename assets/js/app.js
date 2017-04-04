function Pictures(){
  this.coders = [];
  this.addCoders = function (prom,archivo,nombre){
    this.coders.push({
      promocion : prom,
      file : archivo,
      name : nombre
    });
  }
}

var picture = new Pictures();

picture.addCoders("chile-4","anais-araya .jpg","Anais Araya");
picture.addCoders("chile-4","andrea-miranda.jpg","Andrea Miranda");
picture.addCoders("chile-4","berenisse-ríos.jpg","Berenisse Ríos");
picture.addCoders("chile-4","caterina-da-silva.jpg","Caterina Da Silva");
picture.addCoders("chile-4","daniela-sanchez.jpg","Daniela Sanchez");
picture.addCoders("chile-4","francisca-ojeda.jpg","Francisca Ojeda");
picture.addCoders("chile-4","katerine-sandoval.jpg","Katerine Sandoval");

picture.addCoders("lima-5","andrea-cabrera.jpg","Andrea Cabrera");
picture.addCoders("lima-5","ariadna-izaguirre.jpg","Ariadna Izaguirre");
picture.addCoders("lima-5","carito-juarez.jpg","Carito Juarez");
picture.addCoders("lima-5","cristy-castro.jpg","Cristy Castro");
picture.addCoders("lima-5","karol-orrillo.jpg","Karol Orrillo");
picture.addCoders("lima-5","paola-ortiz.jpg","Paola Ortiz");
picture.addCoders("lima-5","teresa-lara.jpg","Teresa Lara");

picture.addCoders("lima-6","arantza-burga.jpg","Arantza Burga");
picture.addCoders("lima-6","daguiana-revoredo.jpg","Daguiana Revoredo");
picture.addCoders("lima-6","elizabeth-condori.jpg","Elizabeth Condori");
picture.addCoders("lima-6","grecia-rayme.jpg","Grecia Rayme");
picture.addCoders("lima-6","janine-vega.jpg","Janine Vega");
picture.addCoders("lima-6","michelle-more.jpg","Michelle More");
picture.addCoders("lima-6","mishel-velasquez.jpg","Mishel Velasquez");
picture.addCoders("lima-6","rosario-felix.jpg","Rosario Felix");


var chile4 = document.getElementById("chile-4");
var lima5 = document.getElementById("lima-5");
var lima6 = document.getElementById("lima-6");

function crearImagen(prom,src,alt) {
  var imagen = document.createElement("img");
  imagen.classList.add("estilo");
  imagen.src="assets/images/"+prom+"/"+src;
  imagen.alt=alt;
  imagen.title = alt;
  document.getElementById(prom).appendChild(imagen);
}

picture.coders.forEach(function (e) {
  crearImagen(e.promocion,e.file,e.name)
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

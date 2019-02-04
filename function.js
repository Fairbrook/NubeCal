
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

function error(cadena){
	var elem = document.getElementById('modal1');
	var instance = M.Modal.getInstance(elem);
	instance.open();
}

function check(campo){
	var patt = new RegExp("[^0-9.]")
	if(patt.test(campo.value)){
		error();
		return false;
	}
	return true;
}

function inicial(campoInit) {
	var campoFin = document.getElementById('preciop')
	var incr = document.getElementById('porcentaje');
	var campoDes = document.getElementById('descuento');

	if(!check(campoInit))return;

	var precioFin = ((incr.value/100)+1)*campoInit.value;
	campoFin.value = precioFin;
	aumento(campoInit,campoFin);
	descuento(campoDes);
}

function final(campoFin) {
	var campoInit = document.getElementById('preciod');
	var incr = document.getElementById('porcentaje');
	var campoDes = document.getElementById('descuento');
	var campoFinDes = document.getElementById('preciopd');

	if(!check(campoFin))return;

	precio = (1-(campoDes.value/100))*campoFin.value;
	campoFinDes.value = precio;

	var precioInit = precio/((incr.value/100)+1);
	campoInit.value = precioInit;
	aumento(campoInit,campoFinDes);
}

function aumento(campoInit,campoFin){
	var campoRise = document.getElementById('aumento');
	campoRise.value = (campoFin.value - campoInit.value);
}

function descuento(campoDes){
	var campoFin = document.getElementById('preciop');
	var campoFinDes = document.getElementById('preciopd');

	if(!check(campoDes))return;
	final(campoFin);
}

function finalDescuento(campoFinDes){
	var campoDes = document.getElementById('descuento');
	var campoFin = document.getElementById('preciop');

	if(!check(campoFinDes))return;

	var precio = (campoFinDes.value*100)/(100-campoDes.value);
	campoFin.value = precio;
	final(campoFinDes);
}

function porcentaje(){
	var campoFin = document.getElementById('preciop');
	var campoInit = document.getElementById('preciod');
	if(campoFin.value.length>0)final(campoFin);
	if(campoInit.value.length>0)inicial(campoInit);
}
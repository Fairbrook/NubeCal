function inicial() {
	var campoInit = document.getElementById('preciod');
	var campoFin = document.getElementById('preciop')
	var incr = document.getElementById('porcentaje');
	var precioFin = ((incr.value/100)+1)*campoInit.value;
	campoFin.value = precioFin;
}
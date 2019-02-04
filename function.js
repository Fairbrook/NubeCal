function inicial() {
	var campoInit = document.getElementById('preciod');
	var campoFin = document.getElementById('preciop')
	var incr = document.getElementById('porcentaje');
	var precioFin = ((incr.value/100)+1)*precioInit.value;
	campoFin.value = precioFin;
}
/*
* Crea un area ficticia con la cual poder colisionar
*/
function createArea(x, y, width, height) {
	var area = Object();
	area.X = x;
	area.Y = y;
	area.Width = width;
	area.Height = height;
}

/*
* Crea un círculo ficticio con el cual poder colisionar
*/
function createCircle(x, y, radius) {
	var circle = Object();
	circle.X = x;
	circle.Y = y;
	circle.Width = radius * 2;
	circle.Height = radius * 2;
}

/*
 * Función que calcula la intersección entre un punto y
 * una caja 2D.
*/
function collidePointBox(area1, area2) {
	// variables del primer objeto
	var X1 = area1.X;
	var Y1 = area1.Y;
	// variables del segundo objeto
	var X2 = area2.X;
	var Y2 = area2.Y;
	// ancho y alto del segundo objeto
	var X2Max = X2 + area2.Width;
	var Y2Max = Y2 + area2.Height;
 	// comparación horizontal
	var condX = (X1 >= X2) &&  (X1 <= X2Max);
 	// comparación vertical
	var condY = (Y1 >= Y2) &&  (Y1 <= Y2Max);
	
	// si se cumplen ambas condiciones, está dentro
	if (condX && condY)
		return true;
	return false;
}

/*
 * Función que calcula la intersección entre dos cajas 2D.
*/
function collideBoxes(area1, area2) {
	// variables del primer objeto
	var X1 = area1.X;
	var Y1 = area1.Y;
	// variables del segundo objeto
	var X2 = area2.X;
	var Y2 = area2.Y;
	// ancho y alto del primer objeto
	var X1Max = X1+ area1.Width;
	var Y1Max = Y1 + area1.Height;
	// ancho y alto del segundo objeto
	var X2Max = X2 + area2.Width;
	var Y2Max = Y2 + area2.Height;
 	// comparación horizontal de las dos esquinas
	var condX = (X1 >= X2) &&  (X1 <= X2Max);
	condX = condX || ((X1Max >= X2) &&  (X1Max <= X2Max));
 	// comparación vertical de las dos esquinas
	var condY = (Y1 >= Y2) &&  (Y1 <= Y2Max);
	condY = condY || ((Y1Max >= Y2) &&  (Y1Max <= Y2Max));
	
	// si se cumplen ambas condiciones, está dentro
	if (condX && condY)
		return true;
	return false;
}

/*
 * Función que calcula la intersección entre dos círculos.
*/
function collideCircle(circle1, circle2) {
	// calculamos los radios de los dos objetos
	var Radius1 = Math.max(circle1.Width, circle1.Height) * 0.5;
	var Radius2 = Math.max(circle2.Width, circle2.Height) * 0.5;
	// calculamos la distancia mínima de colisión
	var min_dst = Radius1 + Radius2;
	// variables del primer objeto
	var X1 = circle1.X;
	var Y1 = circle1.Y;
	// variables del segundo objeto
	var X2 = circle2.X;
	var Y2 = circle2.Y;
	// calculamos la distancia
	var XX = (X1-X2)*(X1-X2);
	var YY = (Y1-Y2)*(Y1-Y2);

	var dst = Math.sqrt(XX + YY) - min_dst;
	// si se cumplen ambas condiciones colisionan
	if (dst > 0)
		return false;
	return true;
}

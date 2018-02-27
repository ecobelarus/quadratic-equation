module.exports = function solveEquation(equation) {

	//преобразуем строку с уравнением в массив

    var equationArray = equation.split(' ');

    //ax2 + bx + c = 0

    var a = (equationArray[0]);
    var b = (equationArray[3] + equationArray[4]);
    var c = (equationArray[7] + equationArray[8]);

    //d = b2 - 4ac

    var d = Math.pow(b, 2) - 4 * a * c;

    //вычисляем корни, округляем их и передаём в массив
    
    var rootsArray = [];

    rootsArray[0] = Math.round(-b - Math.sqrt(d)) / (2 * a);
    rootsArray[1] = Math.round(-b + Math.sqrt(d)) / (2 * a);

    //сортируем функцией

    rootsArray.sort(compareNumbers);

    return rootsArray;
}

function compareNumbers(a, b) {
    return a - b;
}
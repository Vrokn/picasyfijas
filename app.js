var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.slice(0, 4).join('');
}
var random = shuffleArray(numbers);
console.log(random);

$(document).on('keyup', function (e) {
    var mensaje1 = ('<p>El número no puede tener dígitos repetidos</p>');
    var mensaje2 = ('<p>El número no puede tener más de 4 dígitos</p>');
    var mensaje3 = ('<p>Use solo números</p>');
    var mensaje4 = ('<p>Por favor ingrese un número de 4 dígitos</p>');
    var number = $('#input').val();
    var pica = 0;
    var fija = 0;
    var tr = ('<tr>' +
        '<td class="text-center">' + number + '</td>' +
        '<td class="text-center">' + pica + '</td>' +
        '<td class="text-center">' + fija + '</td>' +
        '</tr>'
    );
    console.log(number.length);

    if (number === '') {
        $('#input').addClass("has-error");
        ($('#input').parent()).addClass("has-error");
        $('#input').append(mensaje4);
    } else {
        $('#input').removeClass("has-error");
        ($('#input').parent()).removeClass("has-error");
    }
    if (number === NaN) {
        $('#input').addClass("has-error");
        ($('#input').parent()).addClass("has-error");
        $('#input').append(mensaje3);
    } else {
        $('#input').removeClass("has-error");
        ($('#input').parent()).removeClass("has-error");
    }
    if (number.length > 4) {
        $('#input').addClass("has-error");
        ($().parent()).addClass("has-error");
        $('#input').append(mensaje2);
    } else {
        $('#input').removeClass("has-error");
        ($('#input').parent()).removeClass("has-error");
    }
    for (i = 0; i < number.length; i++) {
        if (number[i] === number[i + 1]) {
            $('#input').append(mensaje1);
            $('#input').addClass("has-error");
            ($('#input').parent()).addClass("has-error");
        } else {
            $('#input').removeClass("has-error");
            ($('#input').parent()).removeClass("has-error");
        }
        if (random.includes(number[i])) {
            pica++;
        }
        if (number[i] === random[i]) {
            fija++;
        }
    }
    if (e.which === 13) {
        e.preventDefault();   // Don't submit the form
        $('table').append(tr);        // append this.value
        $('#input').val('');  // reset the value field
    }
});
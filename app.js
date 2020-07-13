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
$("button").click(function () {
    location.reload(true);
});
$(document).on('keyup', function (e) {
    var regEx = /^[0-9]*$/g;
    var number = $('#input').val();
    var pica = 0;
    var fija = 0;
    if (number === '') {
        $("#mensaje4").show();
    } else if (!regEx.test(number)) {
        $("#mensaje3").show();
    } else if (number.length > 4) {
        $("#mensaje2").show();
    } else {
        $(".error").hide();
    }
    for (i = 0; i < number.length; i++) {
        for (j = i + 1; j < number.length; j++) {
            if (number[i] === number[j]) {
                $("#mensaje1").show();
            }
        }
    }
    if (e.which === 13) {
        e.preventDefault();   // Don't submit the form
        if (random === number) {
            $(".modal").show();
        }
        for (i = 0; i < number.length; i++) {
            if (random.includes(number[i])) {
                pica++;
            }
            if (number[i] === random[i]) {
                fija++;
                pica--;
            }
        }
        var tr = ('<tr>' +
            '<td class="text-center">' + number + '</td>' +
            '<td class="text-center">' + pica + '</td>' +
            '<td class="text-center">' + fija + '</td>' +
            '</tr>'
        );
        var err = false;
        for (i = 0; i < number.length; i++) {
            for (j = i + 1; j < number.length; j++) {
                if (number[i] === number[j]) {
                    err = true;
                }
            }
        }
        if (number.length !== 4 || isNaN(parseInt(number))) {
            $("#mensaje4").show();
        } else if (err) {
            $("#mensaje1").show();
        } else {
            $('table').prepend(tr);        // append this.value
            $('#input').val('');  // reset the value field
        }
    }
});
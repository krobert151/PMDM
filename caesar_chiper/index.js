$(document).ready(() => {
    var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var reverse = false;

    $('#encrypted').text('');

    function ci() {
        var letter = $('#descrypted').val().toUpperCase();
        var number = parseInt($('#number').val());

        function cifrar(letter, number) {
            var arr = letter.split('');
            var result = [];
            arr.forEach(a => {
                if (abc.indexOf(a) !== -1) {
                    var letterpos = abc.indexOf(a);
                    letterpos += number;
                    while (letterpos > abc.length) {
                        letterpos -= abc.length;
                    }
                    result.push(abc[letterpos]);
                } else {
                    result.push(a);
                }
            });
            return result.join('');
        }

        function descrifrar(letter, numer) {
            var arr = letter.split('');
            var result = [];
            arr.forEach(a => {
                if (abc.indexOf(a) !== -1) {
                    var letterpos = abc.indexOf(a);
                    letterpos -= number;
                    while (letterpos < 0) {
                        letterpos += abc.length;
                    }
                    result.push(abc[letterpos]);
                } else {
                    result.push(a);
                }
            });
            return result.join('');
        }

        if (reverse) {
            $('#encrypted').text(descrifrar(letter, number));

        } else {
            $('#encrypted').text(cifrar(letter, number));
        }

    }

    $(document).on('input', ci);

    $(document).on('textarea', ci);

    $(document).on('click', "#reverse", function () {

        reverse = !reverse;
        ci();
    });
});

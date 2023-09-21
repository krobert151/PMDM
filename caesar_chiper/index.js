$(document).ready(() => {
    var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    $('#encrypted').text('');


    $('#descrypted, #number').on('input', function () {

        var word = $('#descrypted').val().toUpperCase();

        var number = parseInt($('#number').val());

        function cifrar(word, number) {

            var arr = word.split('');

            var result = [];

            arr.forEach(a => {

                if (abc.indexOf(a) !== -1) {

                    var wordpos = abc.indexOf(a);

                    wordpos += number;

                    while (wordpos > abc.length) {

                        wordpos -= abc.length;

                    }

                    result.push(abc[wordpos]);
                } else {
                    result.push(a);
                }


            });

            return result.join('');

        }

        $('#encrypted').text(cifrar(word, number));

    });

});

function calculateScore() {
    var form = document.getElementById('quiz-form');
    if (form.checkValidity() === false) {
        form.reportValidity();
        return;
    }

    var score = 0;
    var questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11'];

    questions.forEach(function (question) {
        var radios = form.elements[question];
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                score += parseInt(radios[i].value);
            }
        }
    });

    // var resultText = 'Skor Anda: ' + score + '<br>Keterangan: ';
    var resultText = '';
    if (score >= 11 && score <= 19) {
        resultText += 'Tidak ada keluhan insomnia.';
    } else if (score >= 20 && score <= 27) {
        resultText += 'Insomnia ringan.';
    } else if (score >= 28 && score <= 36) {
        resultText += 'Insomnia berat.';
    } else if (score >= 37 && score <= 44) {
        resultText += 'Insomnia sangat berat.';
    }

    document.getElementById('result').innerHTML = resultText;
}
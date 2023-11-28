
 $(document).ready(function() {

    $("#status").css("visibility", "hidden");

    $("#speak").click(function(){
        var output = $('#output')[0];
        let recognize_speech = new webkitSpeechRecognition();
        recognize_speech.onstart = () => {
            $("#status").css("visibility", "visible");
        }
        recognize_speech.onresult = (e) => {
            var transcript = e.results[0][0].transcript;
            $('#output')[0].innerHTML = transcript;
            $("#status").css("visibility", "hidden");
        }
        recognize_speech.start();
    });
});
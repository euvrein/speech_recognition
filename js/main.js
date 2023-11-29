
 $(document).ready(function() {

    $("#status").css("visibility", "hidden");
    $("#status-wrong").hide();
    $("#status-right").hide();


    $("#speak").click(function(){

        let recognize_speech = new webkitSpeechRecognition();
        recognize_speech.onstart = () => {
            $("#status").css("visibility", "visible");
            $("#speak").addClass("disabled");
        }

        recognize_speech.onresult = (e) => {
            var transcript = e.results[0][0].transcript;
            $('#converted_text')[0].innerHTML = transcript;
            $("#status").css("visibility", "hidden");
            $("#speak").removeClass("disabled");
        }

        recognize_speech.start();
    });


//Pronounciation Page

    $("#pronounce").click(function(){
            

        let check_speech = new webkitSpeechRecognition();

        check_speech.onstart = () => {
            $("#status").css("visibility", "visible");
            $("#pronounce").addClass("disabled");
            $('#word-to-be-pronounced').prop('disabled', true);
        }

        check_speech.onresult = (e) => {
            var transcript = e.results[0][0].transcript;
            if (transcript.toLowerCase() == $("#word-to-be-pronounced").val().toLowerCase()){
                $("#status-right").show();
                setTimeout(function() {
                    $("#status-right").hide();
                }, 3000);
            } else {
                $("#status-wrong").show();
                setTimeout(function() {
                    $("#status-wrong span").text(transcript);
                    $("#status-wrong").hide();
                }, 5000);
            }
            $("#status").css("visibility", "hidden");
            $("#pronounce").removeClass("disabled");
            $('#word-to-be-pronounced').prop('disabled', false);
        }

        check_speech.start();

    });
});


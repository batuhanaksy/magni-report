$(document).ready(function(){
    $(".container").hide();
    $("#img1").hide();
    $("#img2").hide();
    window.addEventListener("message", function(event){
        var data = event.data
        result = data.result
        if (data.type == "open") {
            $(".container").fadeIn(500);
        }
    });

    window.addEventListener('message', (event) => {
        let data = event.data
        if(data.type == 'showScreenshot') {
            var img1 = ($('#img1').attr('src'))
            if(img1 == ""){
            $('#img1').attr('src',data.ss);
            $("#img1").fadeIn(0);
           }else{
            $('#img2').attr('src',data.ss);
            $("#img2").fadeIn(0);
           }
        }
    })


    $(document).on("click", "#screenshotlabel", function () { 
        $.post('https://magni-report/screenshot',function(){})
    })

    $(document).on("click", "#image1delete", function () { 
       $("#img1").hide();
       $('#img1').attr('src',"");
    })

    $(document).on("click", "#image2delete", function () { 
        $("#img2").hide();
        $('#img2').attr('src',"");
    })

    $(document).on("click", "#report-cancel", function () { 
        close()
    })

    $(document).on("click", "#report-submit", function () { 
        var select = $("select").val()
        var title = $("#report-name").val()
        var description = $("#report-data").val()
        var img1 = ($('#img1').attr('src'))
        var img2 = ($('#img2').attr('src'))
        if (title != "" && description != "") {
            document.getElementById("report-name").value = ""
            document.getElementById("report-data").value = ""
            $("#img1").hide();
            $('#img1').attr('src',"");
            $("#img2").hide();
            $('#img2').attr('src',"");
            $.post('https://magni-report/create', JSON.stringify({select: select,title: title, description: description, img1: img1, img2: img2}));
        } else {
        }
    })

    $(document).on("click", "#close", function () { 
       close()
    })

    document.onkeydown = function (data) {
        if (data.which == 27) { 
            close()
        } 
    };

    function close() { 
        $.post('https://magni-report/close', JSON.stringify({display: false}));
        $(".container").fadeOut(500);
    }


})
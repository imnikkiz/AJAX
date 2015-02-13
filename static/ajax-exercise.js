// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $("#fortune-text").load("/fortune");
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    $.get(url, function(result) {
        var forecast = result.forecast;
        $("#weather-info").html(forecast);
    });
}

$("#weather-form").on('submit', showWeather);






// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    $.post("/order-melons",
        $('#order-form').serialize(),
        function (result) {
            var msg = result.msg;
            var code = result.code;
            $("#order-status").html(code + "<br>" + msg);
            if (code == 'ERROR') {
                $("#order-status").addClass("order-error");
            }
        }
    );
}

$("#order-form").on('submit', orderMelons);



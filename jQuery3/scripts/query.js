$(document).ready(function() {
    $("#submit").click(function(event) {
        event.preventDefault();

        cont1 = $("#fname").val();
        cont2 = $("#lname").val();
        cont3 = $("#email").val();
        cont4 = $("#phone").val();
        $("#list").append(`
            <div class="contacts">
                <p><strong>Name:</strong> ${cont1} ${cont2}</p>
                <p><strong>Email:</strong> ${cont3}</p>
                <p><strong>Phone:</strong> ${cont4}</p>
                <br>
            </div>
        `);
        $("#fname").val("");
        $("#lname").val("");
        $("#email").val("");
        $("#phone").val("");
    });

    $("#dark").click(function() {
        $("h2").removeClass("lt-heading");
        $("h2").addClass("dk-heading");
        $("#main").addClass("dk-form");
        $("#main").removeClass("lt-form");
    })

    $("#light").click(function() {
        $("h2").addClass("lt-heading");
        $("h2").removeClass("dk-heading");
        $("#main").addClass("lt-form");
        $("#main").removeClass("dk-form");
    })

    $("#big").click(function() {
        fontSize = parseInt($("#main").css("font-size"));
        fontSize += 5;
        newFont = fontSize + "px";
        $("#main").css("font-size", newFont);
    })

    $("#small").click(function() {
        fontSize = parseInt($("#main").css("font-size"));
        fontSize -= 5;
        newFont = fontSize + "px";
        $("#main").css("font-size", newFont);
    })
  });
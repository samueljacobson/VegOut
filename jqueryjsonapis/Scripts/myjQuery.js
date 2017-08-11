$(document).ready(function () {
    $(".recipeInput").hide();
    $("#findButton").click(function () {
        var searchTerm = $("#veggieInput").val();
        var listItems = $("li");

        listItems.each(function () {
            if (!$(this).text().toLowerCase().includes(searchTerm.toLowerCase())) {     //hide if NOT a match to search terms, specify looking at text of li element
                $(this).hide("slow");
            }
        });
        if (!$("li").text().toLowerCase().includes(searchTerm.toLowerCase())) {
            alert("Recipe not found")
            $(".recipeInput").show();
        };

    });


    //User should be able to click the View All button and all recipes are shown
    $("#viewAllButton").click(function () {
        $("li").show("slow");
    });

    $("#recipeButton").click(function () {
        var listItems = $("li");
        var counter = 0;
        listItems.each(function () {
            if ($(this).text().toLowerCase() == ($("#newRecipeInput").val().toLowerCase())) {

                $(this).show().attr("class", "bg-danger");
                counter += 1;
                alert("Recipe already exists")
            }
        });
        if (counter == 0) {
            $("ul").append('<li>' + $("#newRecipeInput").val() + '</li>');
        }
    });
    //var recipeNew = $("#newRecipeInput").val();
    //$("ul").append($('<li>', {
    //    text: $('#newRecipeInput').val()
    //}));
    //    $("ul").append(recipeNew);
    //}
});

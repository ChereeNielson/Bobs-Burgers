// Make sure we wait to attach our handlers until the DOM is fully loaded //
$(function () {

    // Add a New Burger //
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // Send the POST Request //
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            // Reload the Page to Get the Updated Burger List //
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");
        let devouredState = {
            devoured: 1
        };

        // Send the PUT Request //
        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");

        // Send the DELETE Request //
        $.ajax({
            type: "DELETE",
            url: "/burgers/" + id
        }).then(location.reload());
    });

});
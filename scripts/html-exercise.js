const game = new Game({htmlTag: "html", headTagStart: "head", headTagEnd: "/head", h1TagStart: "h1", h1TagEnd: "/h1"});

document.getElementById("html-exercise-submit").addEventListener("click", function()
{
    // resets the game to clear any answers from the previous session
    game.reset();

    var htmlTag = document.getElementById("html-tag-html");
    var headTagStart = document.getElementById("html-tag-head-start");
    var headTagEnd = document.getElementById("html-tag-head-end");
    var h1TagStart = document.getElementById("html-tag-h1-start");
    var h1TagEnd = document.getElementById("html-tag-h1-end");

    // the answers the user provided
    var inputObject = {htmlTag: htmlTag.value, headTagStart: headTagStart.value, headTagEnd: headTagEnd.value, h1TagStart: h1TagStart.value, h1TagEnd: h1TagEnd.value};

    // checks to see if the answers is what is expected
    game.checkAnswers(inputObject);

    // show user's final score
    ShowEndMessage();
});

function ShowEndMessage()
{
    var endMessage = document.getElementById("game-end-message");

    if (game.incorrect.length == 0 && game.correct.length == 5)
    {
        endMessage.className = '';
        endMessage.innerHTML = '';

        endMessage.classList.add("alert");
        endMessage.classList.add("alert-success");

        endMessage.innerHTML = "You got all of the questions right, you're one the road to becoming a HTML whiz";
    }

    else if (game.incorrect.length > 0 && game.correct.length > 0)
    {
        endMessage.className = '';
        endMessage.innerHTML = '';

        endMessage.classList.add("alert");
        endMessage.classList.add("alert-warning");

        endMessage.innerHTML = "You got " + game.correct.length + " out of 5. Double check where you placed your answers!";     
    }

    else
    {
        endMessage.className = '';
        endMessage.innerHTML = '';

        endMessage.classList.add("alert");
        endMessage.classList.add("alert-danger");

        endMessage.innerHTML = "Looks like you need some more practice!";   
    }
}
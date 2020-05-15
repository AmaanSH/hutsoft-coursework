const game = new FizzBuzz(5);

document.getElementById("max-rounds").innerHTML = game.rounds;

document.getElementById("start").addEventListener("click", function(){
    InitGame();
});

window.onload = function()
{
    document.getElementById("fizz").addEventListener("click", function(){
        ButtonAction("fizz");
    });
    
    document.getElementById("fizzbuzz").addEventListener("click", function(){
        ButtonAction("fizzbuzz");
    });
    
    document.getElementById("buzz").addEventListener("click", function(){
        ButtonAction("buzz");
    });
    
    document.getElementById("number").addEventListener("click", function(){
        ButtonAction("number");
    });
}


// sets up the number array and event listeners for the buttons
function InitGame()
{
    for (var i = 0; i < 101; i++)
    {
        game.gameNumbers.push(i);
    }

    if (game.gameNumbers.length > 0)
    {
        console.log("adding event listeners");

        var buttons = document.getElementsByClassName("game-button");

        for (var i = 0; i < buttons.length; i++)
        {
            buttons[i].disabled = false;
        }
        document.getElementById("start").disabled = true;

        StartGame();
    }
}

function StartGame()
{
    SetupRound();
}

function SetupRound()
{
    if (game.currentRound <= game.rounds)
    {
        game.currentAction = "";
        game.currentNumber = "";
    
        var target = game.random;
        console.log(target);

        game.current = target;
        document.getElementById("number-display").innerHTML = target;
    
        SetAction(target);
    }
    else
    {
        window.alert("Rounds done! Your score: " + game.score);
        game.resetGame();       

        document.getElementById("start").innerHTML = "Try Again?";
        document.getElementById("start").disabled = false;
        document.getElementById("current-round").innerHTML = 1;

        var buttons = document.getElementsByClassName("game-button");

        for (var i = 0; i < buttons.length; i++)
        {
            buttons[i].disabled = true;
        }
    }
}

function ButtonAction(buttonId)
{
    if (buttonId === undefined)
    {
        console.log("no button id!");
        return;
    }
    
    if (game.currentAction !== null)
    {
        console.log(buttonId);

        if (buttonId == game.currentAction)
        { 
            game.score = game.score += 1;
            document.getElementById("current-score").innerHTML = game.score;

            game.round = game.currentRound + 1;
            document.getElementById("current-round").innerHTML = game.currentRound;
    
            console.log("CORRECT! current score: " + game.score);
    
            SetupRound();
        }
        else
        {
            // TODO: Add a visual message to say you were wrong?
    
            game.round = game.currentRound + 1;
            game.score = 0;
            document.getElementById("current-round").innerHTML = game.currentRound;

            console.log("NOPE! current score: " + game.score);
    
            SetupRound();        
        }
    }
}

// assign the action property to the game class to check if the player selects the right number
function SetAction(number)
{
    if (number % 3 == 0 && number % 5 == 0)
    {
        game.action = "fizzbuzz";
        return "fizzbuzz";
    }
    else if (number % 3 == 0)
    {
        game.action = "fizz";
        return "fizz";
    }
    else if (number % 5 == 0)
    {
        game.action = "buzz";
        return "buzz";
    }
    else
    {
        game.action = "number";
        return "number"; 
    }
}
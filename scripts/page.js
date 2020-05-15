document.getElementById("click-me").addEventListener("click", function(){
    document.getElementById("click-me").innerHTML = generateRandomMessage();
});


function generateRandomMessage()
{
    var messagePool = 
    [
        "You clicked me",
        "Ouch that hurt",
        "Stop clicking me its hurts",
        "OUCH! STOP IT NOW YOU POOPY BRAIN",
    ];

    var number = Math.floor(Math.random() * messagePool.length);
    return messagePool[number];
}
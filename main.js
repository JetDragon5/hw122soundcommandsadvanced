


x = 0;
y = Math.floor(Math.random());
drawApple = false;
drawOrange = false;
drawDog = false;
drawCat = false;

const statuss = document.getElementById("status");

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var contentLower = "";



function preload(){
    apple = loadImage("APPLE.png");
    orange = loadImage("ORANGE.png");
    dog = loadImage("dog.png");
    cat = loadImage("cat.png");

    apple.resize(50, 50);
    orange.resize(50, 50);
    dog.resize(50, 50);
    cat.resize(50, 50);
}

function setup(){
    canvas = createCanvas(900, 600);
}

function start(){
    statuss.innerHTML = "System is listening";
    recognition.start();
}

function clearboard(){
    statuss.innerHTML = "Clearing Board"
    console.log("CLEARING");
    let c = color(0, 255, 255);
    fill(c);
    rect(0, 0, 900, 600);
    c = color(255, 255, 255);
    fill(c);
    
}

recognition.onresult = function(event) {

    console.log(event);
    var content = event.results[0][0].transcript;

    statuss.innerHTML = "Speech recognized as ''" + content + "''"; 

    

    contentInt = parseInt(content);
    if(contentInt == NaN){
    if(contentLower.includes("one")){
        contentInt = 1;
    } 
    if(contentLower.includes("two")){
        contentInt = 2;
    }
    if(contentLower.includes("three")){
        contentInt = 3;
    }
    if(contentLower.includes("four")){
        contentInt = 4;
    }
    if(contentLower.includes("five")){
        contentInt = 5;
    }
    if(content.includes("six")){
        contentInt = 6;
    }
    if(contentLower.includes("seven")){
        contentInt = 7;
    }
    if(contentLower.includes("eight")){
        contentInt = 8;
    }
    if(contentLower.includes("nine")){
        contentInt = 9;
    }
    console.log(contentInt);


    }

    

    if(!contentInt){
        console.error("ERROR ERROR CONTENT INT IS NOTHING SWITCHING TO NONE");
        contentInt = 1;
        console.log(contentInt);
    }


    contentLower = content.toLowerCase();
    console.log(contentLower);

    statuss.innerHTML = "Speech parse int recognized as " + contentInt;

    position();



     if (contentLower.includes("apple")){
        console.log("apple");
        drawApple = true;
        } else {
        drawApple = false;
        }
    if (contentLower.includes("orange")){
        console.log("orange");
        drawOrange = true;
        } else {
        drawOrange = false;
        }
    if (contentLower.includes("dog")){
        console.log("dog");
        drawDog = true;
        } else {
        drawDog = false;
        }
    if (contentLower.includes("cat")){
        console.log("cat");
        drawCat = true;
        } else {
        drawCat = false;
        }

    
}

function position(){
    if (!(contentLower.includes("up") || contentLower.includes("right") || contentLower.includes("down") || contentLower.includes("left")) ){
            console.log("NO DIRECTION SPECIFIED, RANDOMIZING POSITION");
            x = Math.floor(Math.random() * 775);
            y = Math.floor(Math.random() * 425);
            console.log("x = " + x);
            console.log("y = " + y);
        }
    if (contentLower.includes("up")){
        console.log("up");
        y = y - (Math.floor(Math.random() * 175) + 75);
        console.log("y = " + y);
    }
    if (contentLower.includes("down")){
        console.log("down");
        y = y + (Math.floor(Math.random() * 175) + 75);
        console.log("y = " + y);
    }
    if (contentLower.includes("right")){
        console.log("right");
        x = x + (Math.floor(Math.random() * 175) + 75);
        console.log("x = " + x);
    }
    if (contentLower.includes("left")){
        console.log("left");
        x = x - (Math.floor(Math.random() * 175) + 75);
        console.log("x = " + x);
    }
    if(x < 1){
        x = 100;
    }
    if (x > 900){
        x = 800;
    }
    if (y < 1){
        y = 100;
    }
    if (y > 600){
        y = 500;
    }

    
    fill(20,255,255);
    circle(x,y,10);
    fill(255,255,255);

    console.log(x);
    console.log(y);
}

function draw(){
    if(drawApple){

        statuss.innerHTML = "Drawing Apple";
        drawApple = false;

        for(let i = contentInt; i > 0; i--){
            image(apple, x, y);
            console.log("doing apples uh uh uh uh")

            y = y +  (Math.floor(Math.random() * 101) - 50);
            console.log("y = " + y);

            x = x + (Math.floor(Math.random() * 101) + 50);
            console.log("x = " + x);
        }
        drawApple = false;
        
        
        
    }


    if(drawOrange){

       statuss.innerHTML = "Drawing Orange";
        drawOrange = false;

        for(let i = contentInt; i > 0; i--){
            image(orange, x, y);
            console.log("doing oranges uh uh uh uh" + i)

            y = y +  (Math.floor(Math.random() * 101) - 50);
            console.log("y = " + y);

            x = x + (Math.floor(Math.random() * 101) + 50);
            console.log("x = " + x);

        }
        drawOrange = false;
        
        
    }

    if(drawDog){
        statuss.innerHTML = "Drawing Dog";
        drawDog = false;

        for(let i = contentInt; i > 0; i--){
            image(dog, x, y);
            console.log("drawing some dogs and maybe  oranges i=" + i)

            y = y +  (Math.floor(Math.random() * 101) - 50);
            console.log("y = " + y);

            x = x + (Math.floor(Math.random() * 101) + 50);
            console.log("x = " + x);
         }
        drawDog = false;
    }

    if(drawCat){
        statuss.innerHTML = "Drawing Cat";
        drawCat = false;

        for(let i = contentInt; i > 0; i--){
            image(cat, x, y);
            console.log("drawing some cats and maybe  dogs i=" + i)

            y = y +  (Math.floor(Math.random() * 101) - 50);
            console.log("y = " + y);

            x = x + (Math.floor(Math.random() * 101) + 50);
            console.log("x = " + x);
         }

        drawCat = false;
    }


}

var myVar = setInterval(myTimer, 1000);
var limit = 60;
var temp = [];
var i;
var words = ["SCHOOL", "HOME", "PZEON", "CAT", "HARD", "EASY", "JAVASCRIPT", "PYTHON", "ANGULAR", "ACESOCLOUD", "SILICON"];
var tempWord = "";
var score = 0;
var count = 0 ;

function myTimer() {
    limit = limit - 1;
    count = count + 1;
    document.getElementById("timer").innerHTML = "Time : "+ limit + "  seconds..";
    if(limit == 0) {
        alert("game over ...\n your score is ..." + score);
        document.location.reload(true)
    }
    if(count == 5) {
        generate_random();
        count = 0;
    }
}
    
function generate_random () {
    var min=1; 
    var max=26;  
    var no = Math.floor( Math.random() * (max - min + 1) + min );
    for(i = 0; i < temp.length; i++) {
        if(temp[i] == no)
            break
    }
    if(i == temp.length) 
        temp.push(no);
    
    if(temp.length != 26)
        generate_random();
    else{
        reorder();
        temp = [];
    }
}
function reorder () {
    var c = 'A';
    for( i = 0; i < temp.length; i++) {
        document.getElementById(temp[i]).innerHTML = c ;
        document.getElementById(temp[i]).value = c;
        c = String.fromCharCode(c.charCodeAt(0) + 1);
    }
}

function storeWord(word) {
    tempWord = tempWord + word.value;
    document.getElementById("word").innerHTML = "WORD :::" + tempWord;
    generate_random();
}

function submit() {
    for( i = 0; i < words.length; i++) {
        if(tempWord.match(words[i])){
            var len = tempWord.length;
            score = score + len * 5;
            document.getElementById('w'+i).style.color= "yellow";
            break;
        }
    }
    if(i == words.length)
        score = score - 5;
    tempWord = '';
    document.getElementById("score").innerHTML = "score : "+ score;
    document.getElementById("word").innerHTML = "WORD :::" + tempWord;
}

function reset() {
    tempWord = "";
    document.getElementById("word").innerHTML = "WORD :::" + tempWord;
}
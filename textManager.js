var score = 0;
var part = 0;
var ans = 4;
var flip = false;
var messages = [
"The mermaids wanted to communicate with the dophins.",
"Who lived on the other side of the ocean.",
"With the dangerous sharks in-between!",
"The mermaids could not simply yell thier message, <br><br> The sharks would hear!",
"So, a brave mermaid was entrusted with delivering the message across the ocean.",
"But, once she arrived, she was faced with a wall and a guard.",
"The dolphin guard was suspicious.<br><br> Maybe this was a shark in disguise?",
"How do I know you are who you say you are!",
 "The Guard making this demand is an example of which access control principle?",
"This would stop most mermaids, but this mermaid was smart!<br><br> She brought the Princess!",
 "The mermaid bringing the princess is an example of which access control principle?",
"The dolphin guard recognized the princess,<br><br> Which convinced the guard of their identity.",
 "It would be difficult to find a princess look-alike, <br><br> or, fake that crown!",
"So they were granted an audience with the King Dolphin.",
 "Being granted an audience with the king is an axample of which access control principle?",
"The Dolphin King then dismissed the guard to hear the message.",
"However, The King was also suspicious!",
"How do I know this message is valid and authentic!",
"But, the princess was smart and nabbed a duck from the surface before she left.",
"Yes! Since the duck hasn't drowned and you would need opposable thumbs to bring the duck to me,...<br><br> I know this is recent and from the mermaids!"
];

var slides = [
  "<img src = 'pics/03_Mermaids.png' width = '80%' height='80%' onclick  = 'Story()'>",
  "<img src = 'pics/04_MerDolphin.png' width = '80%' height='80%' onclick  = 'Story()'>",
  "<img src = 'pics/05_MerDolphShark.png' width = '80%' height='80%' onclick  = 'Story()'>",
  "<img src = 'pics/05_Communication.png' width = '80%' height='80%' onclick  = 'Story()'>",
  "<img src = 'pics/06_MerVoyage.png' width = '80%' height='80%'onclick  = 'Story()'>",
  "<img src = 'pics/07_Arrival.png' width = '80%' height='80%'onclick  = 'Story()'>",
  "<img src = 'pics/07_Arrival.png' width = '80%' height='80%'onclick  = 'Story()'>",
  "<img src = 'pics/07_Guard.png' width = '80%' height='80%'onclick  = 'Story()'>",
   "<img src = 'pics/07_Guard.png' width = '80%' height='80%'onclick  = 'Story()'>",
  "<img src = 'pics/08_Auth.png' width = '80%' height='80%'onclick  = 'Story()'>",
  "<img src = 'pics/08_Auth.png' width = '80%' height='80%'onclick  = 'Story()'>",
 "<img src = 'pics/08_Auth.png' width = '80%' height='80%'onclick  = 'Story()'>",
  "<img src = 'pics/08_Auth.png' width = '80%' height='80%'onclick  = 'Story()'>",
  "<img src = 'pics/09_Entry.png' width = '80%' height='80%' onclick  = 'Story()'>",
   "<img src = 'pics/09_Entry.png' width = '80%' height='80%' onclick  = 'Story()'>",
  "<img src = 'pics/09_GuardGoes.png' width = '80%' height='80%'onclick  = 'Story()'>",
  "<img src = 'pics/09_GuardGoes.png' width = '80%' height='80%'onclick  = 'Story()'>",
   "<img src = 'pics/10_King.png' width = '80%' height='80%' onclick  = 'Story()'>",
  "<img src = 'pics/10_Integrity.png' width = '80%' height='80%' onclick  = 'Story()'>",
  "<img src = 'pics/10_Integrity.png' width = '80%' height='80%' onclick  = 'Story()'>",
];

function Story(){
  document.getElementById('story').innerHTML = messages[part];
  document.getElementById('pictures').innerHTML = slides[part];
  part = part + 1;
  if(part == 8)
  {
    LoadQuiz();
  }
  else if(part == 10)
  {
    LoadQuiz();
  }
  else if(part == 14)
  {
    LoadQuiz();
  }
 else if(part == slides.length)
 {
     End();
 }

 }
function End(){
  location.href = 'End.html';
}
function Report()
{
  document.getElementById('score').innerHTML = "You got: " + score + " questions correct!";
}

function Question(x)
{
  if(x == ans)
  {
    document.getElementById('story').innerHTML = "Yes! You are Correct!";
    score++;
    ans = ans -1;
    hide();
    document.getElementById('moveOn').innerHTML = "<input type = 'button' class= 'button' value = 'FORWARD' onclick = 'Story()'>";
  }
  else {
      document.getElementById('story').innerHTML = "No! ";
  }
}

function hide()
{
  document.getElementById("buttons").style.visibility = 'hidden';
}
function show()
{
  document.getElementById("buttons").style.visibility = 'visible';
}
function LoadQuiz()
{
 if(flip == false)
 {
  document.getElementById('buttons').innerHTML =
  "<center><input type = 'button' class= 'button' value = 'Abstraction' onclick = 'Question(1)'><br><input type = 'button' class= 'button' value = 'Authorization' onclick = 'Question(2)'><br><input type = 'button' class= 'button' value = 'Authentication' onclick = 'Question(3)'><br><input type = 'button' class= 'button' value = 'Identification' onclick = 'Question(4)'></center></div>";
   flip = true;
 }
 if(flip)
 {
  show();
 }
}

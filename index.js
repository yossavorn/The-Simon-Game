let flag = false;
let color = ["yellow", "green", "red", "blue"];
let blockAns = [];
let userAns = [];
let level = 0;

$(document).keydown(function () {
  if (!flag) {
    $("h1").html("The Simons Game Level " + level);
    flag = true;
    nextSequence();
  }
});

// $(".block").click(function() {

//     let userChosenColour = $(this).attr("id");

//     console.log(this)
// })

$(".block").click(function () {
  let userButton = $(this).attr("id");
  userAns = [...userAns, userButton];
  buttonAnimation(userButton);
  checkingAns(userAns.length - 1);
});

let rng = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomBox = () => {
  return color[rng(0, 3)];
};

const buttonAnimation = (currentColor) => {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};

let checkingAns = (currentClick) => {
  console.log(blockAns);
  console.log(userAns);
  if (blockAns[currentClick] === userAns[currentClick]) {
    if (blockAns.length === userAns.length) {
      $("h1").html("The Simons Game Level " + level);

      setTimeout(function () {
        nextSequence(), 500;
      });
    }
  } else {
    $("body").addClass("game-over");
    $("h1").html("Game Over!! Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 150);

    restart();
  }
};
let nextSequence = () => {
  userAns = [];
  let block = randomBox();
  blockAns = [...blockAns, block];
  $("#" + blockAns[level])
    .fadeIn(200)
    .fadeOut(200)
    .fadeIn(200);
  level++;
};

let restart = () => {
  level = 0;
  flag = false;
  blockAns = [];
};

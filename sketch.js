var correct;

var incorrect;

var targetIsLeft;

var hideText;

function drawArrow(cx, cy, left, r, g, b) {
  var angle;
  var len = 20;
  if (!left) {
    angle = 0;
  } else {
    angle = 180;
    cx = cx + len;
  }
  push();
  stroke(r, g, b);
  translate(cx, cy);
  rotate(radians(angle));
  line(0, 0, len, 0);
  line(len, 0, len - 8, -8);
  line(len, 0, len - 8, 8);
  pop();
}

function drawLine(cx, cy) {
  var len = 20;
  stroke(0, 0, 0);
  push();
  translate(cx, cy);
  line(0, 0, len, 0);
  pop();
}

function blueArrows() {
  var outer;
  var inner;
  if (random(1) > 0.5) {
    inner = true;
  } else {
    inner = false;
  }
  if (random(1) > 0.5) {
    outer = false;
  } else {
    outer = true;
  }
  drawArrow(200, 200, outer, 0, 0, 255);
  drawArrow(240, 200, outer, 0, 0, 255);
  drawArrow(280, 200, inner, 0, 0, 255);
  drawArrow(320, 200, outer, 0, 0, 255);
  drawArrow(360, 200, outer, 0, 0, 255);
  return inner;
}

function redArrows() {
  var outer;
  var inner;
  if (random(1) > 0.5) {
    inner = true;
  } else {
    inner = false;
  }
  if (random(1) > 0.5) {
    outer = false;
  } else {
    outer = true;
  }
  drawArrow(200, 200, outer, 255, 0, 0);
  drawArrow(240, 200, outer, 255, 0, 0);
  drawArrow(280, 200, inner, 255, 0, 0);
  drawArrow(320, 200, outer, 255, 0, 0);
  drawArrow(360, 200, outer, 255, 0, 0);
  return outer;
}

function blackArrows() {
  var inner;
  if (random(1) > 0.5) {
    inner = true;
  } else {
    inner = false;
  }
  drawLine(200, 200);
  drawLine(240, 200);
  drawArrow(280, 200, inner, 0, 0, 0);
  drawLine(320, 200);
  drawLine(360, 200);
  return inner;
}

function setup() {
  initializeFields();
  createCanvas(400, 300);
  background(100);
  targetIsLeft = blueArrows();
  fill(0, 255, 0);
  text(correct, 0, 20);
  fill(255, 0, 0);
  text(incorrect, 0, 40);
  if (!hideText) {
    fill(0, 0, 0);
    if (targetIsLeft) {
      text("left (press A to hide)", 0, 60);
    } else {
      text("right (press A to hide)", 0, 60);
    }
  }
}

function draw() {}

function keyReleased() {
  if (key == "a") hideText = !hideText;
  if (keyCode != 37 && keyCode != 39) return;
  var success;
  background(100);
  if (keyCode == 37) {
    if (targetIsLeft) {
      success = true;
    } else {
      success = false;
    }
  } else {
    if (!targetIsLeft) {
      success = true;
    } else {
      success = false;
    }
  }
  if (success) {
    correct += 1;
  } else {
    incorrect += 1;
  }
  fill(0, 255, 0);
  text(correct, 0, 20);
  fill(255, 0, 0);
  text(incorrect, 0, 40);
  if (random(1) < 0.2) {
    targetIsLeft = blackArrows();
  } else if (random(1) > 0.5) {
    targetIsLeft = blueArrows();
  } else {
    targetIsLeft = redArrows();
  }
  if (!hideText) {
    fill(0, 0, 0);
    if (targetIsLeft) {
      text("left (press A to hide)", 0, 60);
    } else {
      text("right (press A to hide)", 0, 60);
    }
  }
}

function initializeFields() {
  correct = 0;
  incorrect = 0;
  targetIsLeft = false;
  hideText = false;
}

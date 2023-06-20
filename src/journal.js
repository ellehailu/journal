export default function Journal(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Journal.prototype.checkType = function () {
  return "I can't answer that yet!";
};
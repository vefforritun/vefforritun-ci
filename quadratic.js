module.exports = function quadratic(a, b, c) {
  const d = Math.pow(b, 2) - 4*a*c;

  const x1 = (-b + Math.sqrt(d)) / 2;
  const x2 = (-b - Math.sqrt(d)) / 2*a;
}
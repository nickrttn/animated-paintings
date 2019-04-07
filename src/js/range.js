module.exports = function getPercentage(parts, curr = 0) {
  if (curr >= 100) return;
  if (curr === 0) console.log(curr);
  const part = 100 / parts;
  console.log(curr + part);
  getPercentage(parts, curr + part);
};

function add(numbers) {
  if (numbers === "") return 0;
  const numArray = numbers.split(/[\n,]/);  // Handle commas and newlines
  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };

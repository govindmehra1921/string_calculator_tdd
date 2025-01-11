function add(numbers) {
    if (numbers === "") return 0;
  
    let delimiter = /[\n,]/;
  
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      const delimiterPart = parts[0].substring(2);
  
      const delimiterMatches = delimiterPart.match(/\[(.*?)\]/g);
      if (delimiterMatches) {
        
        const delimiters = delimiterMatches.map(d => d.slice(1, -1)); 
        delimiter = new RegExp(delimiters.map(d => escapeRegExp(d)).join("|")); 
        delimiter = new RegExp(escapeRegExp(delimiterPart)); 
      }
  
      numbers = parts[1]; 
    }
  
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
    const negatives = numArray.filter(num => num < 0);
  
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
  
    return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + (num || 0), 0);
  }
  
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); 
  }
  
  module.exports = { add };
  

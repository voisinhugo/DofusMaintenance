const doesContainAllKeywords = (string, keywords) => {
  for (const keyword of keywords) { 
    if (!(string.includes(keyword))) {
      return false;
    }
  };
  return true;
};

exports.doesContainAllKeywords = doesContainAllKeywords;

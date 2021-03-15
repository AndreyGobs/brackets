module.exports = function check(str, bracketsConfig) {
  str.split('');
  let start = [];
  let end = [];
  let template = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
      for (let k = 0; k < 1; k++){
          start.push(bracketsConfig[i][k]);
          end.push(bracketsConfig[i][k+1]);
      }
  }

  for (let i = 0; i < str.length; i++) {
      startIndex = start.indexOf(str[i]);
      if (startIndex !== -1) {
          template.push(startIndex);
          continue;
      }

      endIndex = end.indexOf(str[i]);
      if (endIndex !== -1) {
          startIndex = template.pop();
          if (endIndex !== startIndex) {
              return false;
          }
      }
  }

  if (template.length !== 0) {
      return false;
  }

  return true;
}

function groupCheck(s) {
  if (s.length % 2 != 0) return false;
  let temp = [];
  for (let i = 0; i != s.length; ++i) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") temp.push(s.charCodeAt(i));
    else if (
      s.charCodeAt(i) - 2 == temp[temp.length - 1] ||
      s.charCodeAt(i) - 1 == temp[temp.length - 1]
    )
      temp.pop();
    else return false;
  }
  return true;
}
console.log(groupCheck("[{}()]"));

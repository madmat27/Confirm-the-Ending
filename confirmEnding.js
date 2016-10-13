function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str = str.substring(str.length - 1);
  //return str;
  if (str === target) {
    return true;
    }
    return false;
}

confirmEnding("Bastian", "n");
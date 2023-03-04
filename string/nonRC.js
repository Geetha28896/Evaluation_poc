var string = "geethaaag";
function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);

    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      console.log(c);
    }
  }
  
}
firstNonRepeatedCharacter(string);

//console.log("1 "+c)
    //console.log("2 "+string.indexOf(c))
    //console.log("3 "+string.indexOf(c, i + 1))


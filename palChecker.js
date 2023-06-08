function palindrome(sti) {
  console.log(sti);
  const b = sti.replace(/[^0-9a-z]/gi, "");
  const lower = b.toLowerCase();
  let a = lower.split("");
  // the copy cannot simply be reassigned. it needs to be copied using a method
  const rev = a.slice();
  console.log(a);
  let rev1 = rev.reverse();
  // get the total length of the words
  // const len = str.length;
  a = a.toString();
  rev1 = rev1.toString();
  console.log(a);
  console.log(rev1);
  if (rev1 === a) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

// palindrome("eye");
// palindrome("_eye");
// palindrome("race car");
// palindrome("not a palindrome");
// palindrome("five|_/|four");
palindrome("0_0 (: /- :) 0-0");

// if (["0", "0", "0", "0"] === ["0", "0", "0", "0"]) {
//   return console.log("true");
// } else {
//   return console.log("false");
// }

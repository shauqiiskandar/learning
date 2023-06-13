let count = 0;

function cc(card) {
  // Only change code below this line

  if ([2, 3, 4, 5, 6].includes(card)) {
    count += 1;
    console.log(count);
  } else if (card === 0) {
    count += 0;
  } else {
    switch (card) {
      case 10:
        count -= 1;
        break;
      case "J":
        count -= 1;
        break;
      case "Q":
        count -= 1;
        break;
      case "K":
        count -= 1;
        break;
      case "A":
        count -= 1;
        break;
      default:
        break;
    }
  }

  if (count > 0) {
    // return console.log(count + " Bet");
    return count + " Bet";
  } else {
    // return console.log(count + " Hold");
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

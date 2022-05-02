const cycle = (list) => {
  // check for empty list
  if (!list.head) return false;

  let slowPointer = list.head;
  let fastPointer = list.head;

  // basic condition for loop to exist
  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer == fastPointer) return true;
  }
  return false;
};

module.exports = cycle;

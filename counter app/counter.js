let count = 0; // count variable for storing the count
let counter = document.getElementById("counter"); // for accessing counter HTMl object
let saveEntries = document.getElementById("saveEntries"); // for accessing save HTML object
let saveEntriesReset = saveEntries.innerText; // assigning initial declaration of save object to a new variable

// increment function to increment the counter, if the some where the count < 0, then it assigns 0 and increments from 0
function increment() {
  count++;
  if (count < 0) {
    count = 0;
    counter.innerText = count;
  } else {
    counter.innerText = count;
  }
}

// decrement function to decrement the counter, if the decrement the count < 0, then it assigns displays invalid (maybe we can set the value as 0)
function decrement() {
  count--;
  if (count < 0) {
    console.log("Reset");
    counter.innerText = "invalid";
  } else {
    counter.innerText = count;
  }
}

// reset function is to reset the count back to zero.Also it deletes the entries and brings it back to initial state.
function reset() {
  count = 0;
  saveEntries.innerText = saveEntriesReset;
  counter.innerText = count;
}

// save function is to save the entries, where it is printed on screen, whenever save is pressed, the value gets append.
function save() {
  saveEntries.innerText += " " + count + ", ";
  console.log(count);
}

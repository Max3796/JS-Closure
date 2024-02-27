// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop
const NEG_INF = -1000000;
function createPop(array, item) {
  // Progression 2: add 3 variables: title, currIndex, check
  let title = document.createElement('h3');
  let currIndex = NEG_INF;
  let check = false;

  // Progression 3: create a function "searchForElement"
  function find(e, i) {
    e.forEach((currElement, index) => {
      if (currElement == i) {
        currIndex = index;
        check = true;
      }
    });
  }

  // Progression 4: In `createPop()`, return a function - which uses the updated values of `currIndex` and `check`
  // to return the desired output.
  return function () {
    find(array, item);
    let Index = currIndex;
    let pre = check;

    if (pre) {
      title.innerText = `The item is present and is at index ${Index}`;
      return `The item is present and is at index ${Index}`;
    } else {
      title.innerText = `The item is not present and is at index ${Index}`;
      return `The item is not present and is at index ${Index}`;
    }
  };
}

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;

const ans = createPop(arrayOfNumbers, itemToSearch);

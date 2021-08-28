const Div = document.querySelector(".div");
const IndividualBox = document.querySelectorAll(".pieces");
const Gameboard = ((selector, arraOfItems) => {
  // let arr = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];
  let check = false;
  let i =0
  //   let newArr = [...arraOfItems];
  const setCheck = () => {
    check = !check;
    return check;
  };
  const checkWinner = () => {
    const newArr = [...document.querySelectorAll(".pieces")]
    // console.log(newArr)
    const value = newArr.map((item) => {
      const tempVar = item.textContent;
      // console.log(tempVar);
      return tempVar;
    });

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // console.log(value.length)
 const checkVar = (()=>{  
    for (let i =0; i<lines.length;i++ ){
        console.log(i)
        if (value[a] &&( value[a] === value[b]) && (value[a] === value[c])){
         setTimeout(()=>{
           alert(`${value[a]} is the winner`)
           location.reload()
           
         }, 1000)
          return value[a];
        }
      }
      return null;
  })()
  };
  
  const renderContent = () => {
    arraOfItems.forEach((item) => {
      item.addEventListener(
        "click",
        (e) => {
          const final = setCheck();
          e.target.textContent = final ? "x" : "o";
          let winner = checkWinner();
          return {winner}
        },
        { once: true }
      );
    });
  };

 return {renderContent}
})(Div, IndividualBox);

window.onload = Gameboard.renderContent()

// let x = 3;
// let y = 4;
// let z = 100;

// for (let i = 1; i < z; i++)
// {
//     let output = (i % y == 0 && i % x == 0) ? "Bish-Bosh" 
//                              : (i % x == 0) ? "Bish" 
//                              : (i % y == 0) ? "Bosh" 
//                              : i;

//     console.log(output);
// }

// Connect to the ul list where everything will be displayed
const placement = document.querySelector("#output");
// Create the event listener for the button
const element = document.querySelector('#click-button');
element.addEventListener('click', () => {
    // Clear the list
    placement.innerHTML = '';
    const valueX = document.querySelector('#first-number').value
    const valueY = document.querySelector('#second-number').value
    const valueZ = document.querySelector('#third-number').value
    const list = [];

    // Check if the input is correct
    if (valueX <= 0 || valueY <= 0 || valueZ <= 0) {
        const li = document.createElement("li");
        li.innerText = "Error, all fields must have positive numbers.";
        placement.appendChild(li);
        return
    }

    // Check if bish or bosh and add to list
    for (let i = 1; i <= valueZ; i++)
    {
        (i % valueY == 0 && i % valueX == 0) ? list.push("Bish-Bosh") 
                         : (i % valueX == 0) ? list.push("Bish")
                         : (i % valueY == 0) ? list.push("Bosh")
                         : list.push(i);

    }

    // Display the list on the website
    list.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        placement.appendChild(li);
    });
});
const blockLogos = [
  "./Images/featuresLogo1.png",
  "./Images/featuresLogo2.png",
  "./Images/featuresLogo3.png",
];
const blockHeaders = [
  "Invoice Generating",
  "Real-time reports",
  "Time Tracking with Screenshots",
];
const blockText = [
  "Track billable time and instantly generate the amount to be paid in a form of invoice to send to your clients.",
  "Have a full understanding of where your team is heading by analyzing their performance in real-time reports.",
  "See how your employees are spending their working time with the help of 4 different screenshot modes.",
];
function createNewDiv() {
  for (let i = 0; i < 3; i++) {
    let parent = document.querySelector(".featuresBlocks");
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDivBlocks");
    let logo = document.createElement("img");
    logo.setAttribute("id", "blockLogo");
    let header = document.createElement("p");
    header.setAttribute('id', "blockHeader")
    let text = document.createElement("p");
    text.setAttribute('id', "blockText");
    logo.setAttribute("src", blockLogos[i]);
    header.textContent = blockHeaders[i];
    text.textContent = blockText[i];
    newDiv.appendChild(logo);
    newDiv.appendChild(header);
    newDiv.appendChild(text);
    parent.appendChild(newDiv)
  }
}
createNewDiv()

const columnElem1 = ["Time Tracking Software", "Integration", "Powerful Yet Simple", "Resources"];
const columnElem2 = ["Features", "Asana", "Monitor Employees", "Monitor Employees"];
const columnElem3 = ["Pricing", "Jira", "Boost Productivity", "Privacy Policy"];
const columnElem4 = ["Start free trial", "Bitbucket", "How to save time", "Terms of service"];
const columnElem5 = ["Time tracking with screenshots", "See all", "Download tracker", "Contact Us"];


function footerElements(){
    for(let i = 0; i < 4; i++){
    let parent = document.querySelector(".columns");
    let newDiv = document.createElement("div");
    newDiv.classList.add("footerBlocks");
    let firstElem = document.createElement("p");
    firstElem.style.fontWeight = "bold";
    firstElem.textContent = columnElem1[i];
    newDiv.appendChild(firstElem);
    let secondElem = document.createElement("p");
    secondElem.textContent = columnElem2[i];
    newDiv.appendChild(secondElem);
    let thirdElem = document.createElement("p");
    thirdElem.textContent = columnElem3[i];
    newDiv.appendChild(thirdElem);
    let forthElem = document.createElement("p");
    forthElem.textContent = columnElem4[i];
    newDiv.appendChild(forthElem);
    let fifthElem = document.createElement("p");
    fifthElem.textContent = columnElem5[i];
    newDiv.appendChild(fifthElem);
    parent.appendChild(newDiv);
    }
}
footerElements()

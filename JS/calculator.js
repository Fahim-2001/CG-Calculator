// Subject option adding Functionality
document.getElementById("add-sub-btn").addEventListener("click", function () {
  const subjectList = document.getElementById("subjects-list");
  const newDiv = document.createElement("div");
  newDiv.classList.add("row", "my-4");

  newDiv.innerHTML = `
            
            <div class="col">
              <p class="mt-2 mb-1">Enter Grade of the Course</p>
              <input type="text" name="" id="grade-field" placeholder="Enter Grade"/>
            </div>
            <div class="col">
              <p class="mt-2 mb-1">Enter Credits Of the Course</p>
              <input type="text" name="" id="credits-field" placeholder="Enter Credits"/>
            </div>
    `;
  subjectList.appendChild(newDiv);
});

//Element Vlaue extracting Function
function inputFieldValue(elementID) {
  const elementField = document.getElementById(elementID);
  const elementFieldString = elementField.value;
  const elementFieldValue = parseFloat(elementFieldString);

  return elementFieldValue;
}

document
  .getElementById("total-cgpa-btn")
  .addEventListener("click", function () {
    //Getting value of All Grades and Credits
    const inputGrade = document.querySelectorAll("#grade-field");
    const inputCredits = document.querySelectorAll("#credits-field");

    //Creating Array of Grades
    const gradeArray = [];
    for (const field of inputGrade) {
      const gradeValue = field.value;
      gradeArray.push(gradeValue);
    }
    // console.log(gradeArray);

    //Creating Array of credits
    const creditArray = [];
    for (const field of inputCredits) {
      const creditValue = field.value;
      creditArray.push(creditValue);
    }
    // console.log(creditArray);

    //Multiplying Grades and Credits
    const gradeXcredit = gradeArray.reduce(function (r, a, i) {
      return r + a * creditArray[i];
    }, 0);
    // console.log(gradeXcredit);

    //Converting creditArray Elements in Float
    const floatCreditArray = creditArray.map(function (x) {
      return parseFloat(x, 10);
    });
    // console.log(floatCreditArray);

    //Sum Of Credits
    const sumOfCredits = floatCreditArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    // console.log(sumOfCredits);

    // Calculation of CGPA
    const CGPA = gradeXcredit / sumOfCredits;

    //Validation of Numbers
    const cgElement = document.getElementById("total-cgpa");
    if (isNaN(CGPA)) {
      alert("Please enter each field");
    } else {
      cgElement.innerText = CGPA.toFixed(2);
    }

    //Appreciation Message
    const appreMsg = document.getElementById("appreciation-msg");
    if (CGPA >= 3.0) {
      appreMsg.innerText =
        "Damn Good, Champ! Just push a little bit and you can be the best";
    } else if (CGPA >= 2.5) {
      appreMsg.innerText =
        "You did good Champ! But your little try can take you to peak";
    } else if (CGPA >= 3.5) {
      appreMsg.innerText =
        "Amaging !! Keep your consistency. Best Of Luck, Champ!";
    } else if (CGPA >= 3.8) {
      appreMsg.innerText =
        "Congratulations Champ !!! You are the best , keep going. Your bright future is eagerly awaiting for you.";
    } else if (CGPA < 2.5) {
      appreMsg.innerText =
        "No worries!! Champions never give up. Try hard and harder , success will fly to you . Best Of Luck!";
    }
  });

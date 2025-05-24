const bmiForm = document.getElementById("bmiForm");
const resultDiv = document.getElementById("result");
const bmiValueSpan = document.getElementById("bmiValue");
const bmiCategorySpan = document.getElementById("bmiCategory");
const inputWeightSpan = document.getElementById("inputWeight");
const inputHeightCmSpan = document.getElementById("inputHeightCm");
const inputHeightMSpan = document.getElementById("inputHeightM");

bmiForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    alert("Please enter valid positive numbers for weight and height.");
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);

  bmiValueSpan.textContent = bmiRounded;

  // Determine category and color class
  let category = "";
  let colorClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    colorClass = "underweight";
  } else if (bmi < 24.9) {
    category = "Normal weight";
    colorClass = "normal";
  } else if (bmi < 29.9) {
    category = "Overweight";
    colorClass = "overweight";
  } else {
    category = "Obese";
    colorClass = "obese";
  }

  bmiCategorySpan.textContent = category;

  inputWeightSpan.textContent = weight;
  inputHeightCmSpan.textContent = heightCm;
  inputHeightMSpan.textContent = heightM.toFixed(2);

  resultDiv.className = "result " + colorClass;
  resultDiv.classList.remove("hidden");
});


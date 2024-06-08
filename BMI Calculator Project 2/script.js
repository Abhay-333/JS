const form = document.querySelector("form");

// const height = document.querySelector('#height')     // This both are not the correct approach
// const weight = document.querySelector('#weight')

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseFloat(document.querySelector("#height").value.trim());
  const weight = parseFloat(document.querySelector("#weight").value.trim());
  const result = document.querySelector("#results");
  const BMI = (weight / (height ** 2 / 10000)).toFixed(2);

  if (
    height === "" ||
    height < 0 ||
    isNaN(height) ||
    weight === "" ||
    weight < 0 ||
    isNaN(weight)
  ) {
    result.innerHTML = `Please Enter valid Data`;
  }else if (BMI < 18.6) {
    result.innerHTML = `<span>${BMI}</span>`;
    result.innerHTML = `Your BMI is ${BMI}, you are Under Weight. You need to Bulk`;
  } else if (BMI > 18.6 && BMI < 24.9) {
    result.innerHTML = `<span>${BMI}</span>`;
    result.innerHTML = `Congrats Your BMI is ${BMI}, You are Healthy. Keep it Up!!`;
  }
  else if(BMI > 24.9){
    result.innerHTML = `<span>${BMI}</span>`;
    result.innerHTML = `Your BMI is ${BMI}, You need a Healthy diaet. Contact us We provide free health counselling for your better Health`;
  } else if (BMI && BMI) {
    result.innerHTML = `<span>${BMI}</span>`;
  } 

  // console.log(BMI)
});

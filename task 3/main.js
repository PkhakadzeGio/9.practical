const averageButton = document.getElementById("btn");
const numbersInput = document.getElementById("input");
const result = document.getElementById("result");

averageButton.addEventListener("click", function() {
  const numbers = numbersInput.value.split(":");
  let sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    const number = parseFloat(numbers[i]);

    if (number > 0) {
      sum += number;
    }
  }

  const average = sum / numbers.length;
  result.textContent = "The average is: " + average
});


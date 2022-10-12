let char_data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "/", "*", "-", "+"];
function add_value(new_value) {
  if (document.getElementById("calculater").value == "syntax error") clear_calculator();
  console.log(new_value);
  document.getElementById("calculater").value += new_value;
}

function calculate_percent() {
    let input_data = document.getElementById("calculater").value;
  try {
    document.getElementById("calculater").value = eval((input_data + 0) / 100);
  } catch (e) {
    document.getElementById("calculater").value = "syntax error";
  }
}

function clear_calculator() {
    document.getElementById("calculater").value = "";
}

const not_work = () => alert("this button dosn't work");

function calculate() {
  let input_data = document.getElementById("calculater").value;
  try {
    document.getElementById("calculater").value = eval(input_data);
  } catch (e) {
    document.getElementById("calculater").value = "syntax error";
  }
}

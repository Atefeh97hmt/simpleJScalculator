let result = document.getElementById("result");

    function insert(num) {
      result.value += num;
    }
    
    function deleteChar() {
      result.value = result.value.slice(0, -1);
    }
    function clearScreen() {
        result.value = "";
      }
    function calculate() {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = "Error";
      }
    }
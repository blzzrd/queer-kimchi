document.getElementById("calculate").addEventListener("click", recipe);

function recipe() {
  cabbage = document.getElementById("cabbage").value;
  
  // TODO: assert int 
  cabbage = parseInt(cabbage);
  calculateBrine(cabbage);
}

function calculateBrine(cabbage) {
  salt_ratio = 1 / 37.5

  salt_g = to2(salt_ratio, cabbage);
  cabbage_g = cabbage

  salt_str = `${salt_g} <i>g</i> salt`
  cabbage_str = `${cabbage_g} <i>g</i> cabbage`

  document.getElementById("brinecontents")
      .innerHTML = listToText([salt_str, cabbage_str]);
}


function to2(ratio, cabbage) {
  return (Math.round(ratio * cabbage * 100) / 100).toFixed(2);
}

function listToText(list_of_strings) {
  return list_of_strings.join('<br>');
}

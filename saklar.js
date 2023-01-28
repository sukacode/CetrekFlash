function saklar(params) {
  console.log(params);

  let lampu1 = document.getElementById("lampu1");

  if (params == "on") {
    //nyala
    lampu1.src = "assets/images/on.gif";
  }
  if (params == "off") {
    //mati
    lampu1.src = "assets/images/off.gif";
  }

  return lampu1;
}

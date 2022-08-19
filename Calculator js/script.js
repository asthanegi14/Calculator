document.getElementById("inp").readOnly = true;

let inpScrn = document.getElementById("inp");

buttons = Array.from(document.querySelectorAll(".btns"));
let iniVal = "";

for(val of buttons) {
    val.addEventListener("click", (e)=>{
        ans = e.target.innerText;
        if(ans == "X"){
            ans = "*";
            iniVal += ans;
            inpScrn.value = iniVal;
        }
        else if(ans == "AC"){
            iniVal = "";
            inpScrn.value = iniVal;
        }
        else if(ans == "="){
            iniVal = eval(iniVal);
            inpScrn.value = iniVal;
        }
        else{
            iniVal += ans;
            inpScrn.value = iniVal;
        }
    });
}
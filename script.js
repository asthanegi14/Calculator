document.getElementById("inp").readOnly = true;

let inpScrn = document.getElementById("inp");
var stack = [];
buttons = document.querySelectorAll(".btns");

let iniVal = "";

for(val of buttons) {
    val.addEventListener("click", (e)=>{
        ans = e.target.innerText;
        if(ans == "x"){
            ans = "*";
            iniVal += ans;
            inpScrn.value = iniVal;
        }
        else if(ans=="÷"){
            ans="/";
            iniVal += ans;
            inpScrn.value = iniVal;
        }
        else if(ans == "clear"){
            iniVal = "";
            inpScrn.value = iniVal;
        }
        else if(ans=="del"){
            iniVal = inpScrn.value;
            inpScrn.value = iniVal.substr(0,iniVal.length-1);
        }
        else if(ans == "ENTER"){
            console.log(inpScrn.value);
            rt = "√";
            sec = inpScrn.value.substr(0,1);
            if(_.isEqual(rt,sec)){
                inpScrn.value = Math.sqrt(inpScrn.value.substr(1,iniVal.length));
            }
            else{
                try{
                    iniVal = eval(iniVal);
                    inpScrn.value = iniVal;
                }
                catch(e){
                    alert("Invalid Input");
                }
            }
            stack.push(iniVal);
        }
        else if(ans == "∓"){
            iniVal = inpScrn.value;
            min = "-";
            st = "(";
            ed = ")";
            inpScrn.value = st+min+iniVal+ed;
        }
        else if(ans=="ans"){
            inpScrn.value = stack.pop();
            stack.push(inpScrn.value);
        }
        else{
            iniVal += ans;
            inpScrn.value = iniVal;
        }
    });
}

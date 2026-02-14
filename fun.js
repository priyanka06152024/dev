
document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".btn");
    let currentvalue = "";
    let add = "";
    buttons.forEach(button => {
        const values = button.textContent;

        button.addEventListener("click", () => {

            if (values == "clr") {
                currentvalue = "";
                display.textContent = 0;
                return;
            }

            if (values=="DEL") {
                currentvalue = currentvalue.slice(0, -1);
                display.textContent = currentvalue || "0";
                return;
            }


           
            if (values==="=") {
                console.log(values);
                try {
                    console.log(eval(currentvalue).toString())
                    currentvalue = eval(currentvalue).toString();
                    display.textContent =currentvalue;
                }
                catch {
                    display.textContent = "error";
                    currentvalue = "";
                }
                return;
            }


            currentvalue += values;
            display.textContent = currentvalue;
        })
    })
})
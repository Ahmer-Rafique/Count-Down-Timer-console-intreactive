import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer"

const res= await inquirer.prompt({
    type:"number",
    name:"userInput",
    message:"please Enter the amount second",
    validate:(input)=>{
        if(isNaN(input)){
            return "please enter valid number"
        } else if (input > 100){
            return"must be second in 100"
        } else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val:number){
    const setTime = new Date().setSeconds(new Date().getSeconds() + val);
const intervalTime = new Date(setTime);
    setInterval(()=>{
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime)
        if(timeDiff<=0){
            console.log("Timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60)
        console.log(`${min.toString().padStart(2,"0")}: ${sec}`);
    },1000);
};
startTime(input);


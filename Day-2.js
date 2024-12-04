let myData
let unsafe=[]
async function getData() {
    try{
        let res= await fetch("https://adventofcode.com/2024/day/2/input")
        let data=await res.text()
        let myData=data.split('\n').filter(line => line.trim() !== '');
        console.log(safeReportsCount(myData))
        console.log(unsafeToSafe(unsafe))


    }catch(error){
        console.log("Error: When fetching Data\n",error)
    }
}
getData()
function isIncreasing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff <= 0 || diff > 3) {
            return false;  // Not strictly increasing or the difference is out of range
        }
    }
    return true;
}
function isDecreasing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff >= 0 || diff < -3) {
            return false;  // Not strictly decreasing or the difference is out of range
        }
    }
    return true;  // All elements are in strictly decreasing order
}


// Logic to distinguish between safe and unsafe safeReports
function safeReportsCount(reportList){
    //now we need to loop over all reports
    let safeCount=0

    for(let i=0;i<reportList.length ;i++){
        let numbersArr = reportList[i].split(' ').map(Number);
        //now we have numbers
        if(isIncreasing(numbersArr) || isDecreasing(numbersArr)){
            safeCount+=1
        }else{
            unsafe.push(numbersArr)
        }
    }

    return safeCount
}

function unsafeToSafe(arr){
    let unsafe_to_safe=0

    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr[i].length;j++){
            // using slice to create new array
            let newArr=arr[i].slice(0, j).concat(arr[i].slice(j + 1));

            if(isIncreasing(newArr) || isDecreasing(newArr)){
                unsafe_to_safe+=1;
                break;
            }
        }
    }
    return unsafe_to_safe
}


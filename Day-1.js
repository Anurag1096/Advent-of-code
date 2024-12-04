

//Day 1 problem

// Function to calculate the distance between the list pairs
function distancBet(list1,list2) {
    let leftList=list1.sort((a,b)=>a-b)
    let rightList=list2.sort((a,b)=>a-b)
    let sumList=[]
    let sum=0
    for(let i=0;i<leftList.length;i++){
        sumList.push(Math.abs(leftList[i] - rightList[i]))
    }
    for(let i=0;i<sumList.length;i++){
        sum += sumList[i]
    }

    return sum
}

//function to calculate similarity score
function similarityScore(list1,list2){
    let lis2obj={}
    // this will compute the frequency of ele in list2
    for (let val of list2){
        if(val in lis2obj){
            lis2obj[val]+=1
        }else{
            lis2obj[val]=1
        }
    }
    // now we calculate the score
    let sum =0
    for(let value of list1){
        //now check if the value in list 1 is present in list2obj
        if(value in lis2obj){
            sum += (lis2obj[value] * value)
        }else{
            sum+=0
        }
    }

    return sum

}




//The following code fetches the input data
let leftArr=[]
let rightArr=[]
const get=async ()=>{
    try{
        let res= await fetch("https://adventofcode.com/2024/day/1/input")
        let data= await res.text()
        //the problem lies in this

        let data2=data.split('\n')
        let newdata=data2.map((ele)=>{
            let splitd=ele.split(" ").filter((item)=> item !== "")
            return splitd
        })
        let flatArr=newdata.flat()
        // Loop through each line
        for (let i = 0; i < flatArr.length; i++) {

            // If index is odd, push to leftArr, else to rightArr
            if (i % 2 === 0) {
                leftArr.push(parseInt(flatArr[i]));
            } else {
                rightArr.push(parseInt(flatArr[i]));
            }
        }
        // console.log(distancBet(leftArr,rightArr))
        console.log(similarityScore(leftArr,rightArr))
    }catch(error){
        console.log(error)
    }

}
get()


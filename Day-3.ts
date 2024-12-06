

async function getData(){
    try{
    let response: Response=await fetch("https://adventofcode.com/2024/day/3/input")
       let data:string=await response.text()
       parseData(data)
    }catch(err){
        throw new Error("Failed to fetch data")
    }
}

getData()

function parseData(strToParse:string):void{
    let sum:number=0
    let match:RegExpExecArray;
    let regexPattern:RegExp=/mul\((\d+),(\d+)\)/g
    while((match= regexPattern.exec(strToParse)) !== null){
        let mul:number=parseInt(match[1]) * parseInt(match[2])
        sum=sum+ mul
        console.log(`Full match: ${match[0]} ` )
    }
    console.log(sum)

}
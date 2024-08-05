const arr = [
    {name: "aman",age:16, isEligible: false},
    {name: "ram",age:18, isEligible: false},
    {name: "mohan",age:19, isEligible: false},
    {name: "prem",age:17, isEligible: false},
    {name: "pankaj",age:20, isEligible: false}
]
function votingPerson(arr){
    arr.map((item)=>{
        if(item.age>=18){
            item.isEligible = true
        }
    })

    console.log(arr);
}

votingPerson(arr);
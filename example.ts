let grade:string

let grade2:number
let test_total:number

grade ='A'

grade2 = 85

test_total =95


let calcPercentage = (studentGrade, testTotal) => {
    let percentage = studentGrade/ testTotal

    return `Thisstudent got ${percentage} on the test`
}

console.log(calcPercentage(grade2, test_total))

export{}
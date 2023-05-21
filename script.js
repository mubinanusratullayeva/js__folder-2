//JS LESSON-6

let foo = [3.02, -3.65, 5, -9]

function bar(jow) {

    let arr = []

    for(let i = 0; i < jow.length; i++){
        if(jow[i] < 0){
           jow[i] = jow[i] * -1
        }

         arr.push(Math.round(jow[i]))
    }

    return arr;
}

console.log(bar(foo));
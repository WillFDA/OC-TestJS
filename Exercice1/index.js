//votre code ici

export default function pairNumbers(min, max) {
  let pairArray = []
  let minNumber = parseInt(min, 10)
  let maxNumber = parseInt(max, 10)
  for(let i = minNumber; i <= maxNumber; i++) {
    if(i % 2 === 0) {
      pairArray.push(i)
    }
  }
  return pairArray.toString()
}
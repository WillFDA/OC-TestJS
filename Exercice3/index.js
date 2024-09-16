// Créez votre fonction ici

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default function calculateAverage(arr) {
  if(!arr || arr.length < 1) {
    return "No numbers to calculate average"
  }
  const total = arr.reduce((acc, curr) => acc + curr, 0)
  return total / arr.length

}

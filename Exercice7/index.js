const decimalInput = document.getElementById('decimalInput');
const binaryResult = document.getElementById('binaryResult');

function convertToBinary() {
    // Vérifier si l'entrée contient uniquement des chiffres
    if (!/^\d+$/.test(decimalInput.value)) {
        binaryResult.textContent = '';
        return;
    }

    const decimalValue = parseInt(decimalInput.value, 10);
    
    // Vérifier si la valeur est un nombre entier positif
    if (!isNaN(decimalValue) && decimalValue >= 0) {
        binaryResult.textContent = decimalValue.toString(2);
    } else {
        binaryResult.textContent = '';
    }
}
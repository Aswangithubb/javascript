let carData = [];

function storeRecords(event) {
    event.preventDefault();
    const carBrand = document.getElementById('carBrand').value;
    const price = document.getElementById('price').value;
    const key = document.getElementById('key').value;

    const car = { carBrand, price, key };
    carData.push(car);

    // Clear the form fields
    document.getElementById('entryForm').reset();

    console.log(carData); // For debugging purposes
}

function retrieveItem() {
    // Implement logic to retrieve item based on key
    console.log("Retrieve item functionality not implemented yet.");
}

function deleteItem() {
    // Implement logic to delete item based on key
    console.log("Delete item functionality not implemented yet.");
}

function clearRecords() {
    carData = [];
    console.log("All records cleared.");
}

document.getElementById('entryForm').addEventListener('submit', storeRecords);
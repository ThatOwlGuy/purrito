const apiUrl = "http://localhost:3001/orders";

export async function PurchasePurritos(purritoOrder) {
    // Create id for order and save as cookie
    let response = await fetch(apiUrl);

}

export async function GetDeliveryEstimate(orderID) {

}
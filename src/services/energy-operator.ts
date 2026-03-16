export function setOrder(order: any) {
    // this logic set the expected order in the application to be retrieved by our market adapter
    setOrderAtEnergyOperator(order);
}

export function getOrderFromEnergyOperator() {
    const order = {
        action: ''
    }
    return 
}

function setOrderAtEnergyOperator(order: any) {
    console.log('Set order at energy operator: ', {order: JSON.stringify(order)});
} 
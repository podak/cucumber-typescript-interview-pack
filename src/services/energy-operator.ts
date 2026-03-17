import {EnergyOperatorOrder} from '../types'

export function setOrder(order: EnergyOperatorOrder) {
    // this logic set the expected order in the application to be retrieved by our market adapter
    setOrderAtEnergyOperator(order);
}

function setOrderAtEnergyOperator(order: EnergyOperatorOrder) {
    console.log('Set order at energy operator: ', {order: JSON.stringify(order)});
} 
export interface EnergyOperatorOrder {
    action: ActionType,
    start_time: string,
    end_time: string,
    power: number,
    site_name: string
}

export enum ActionType {
    CREATE = 'CREATE',
    EXTEND = 'EXTEND',
    TERMINATE = 'TERMINATE'
}

export interface DispatchEvent {
    start_time: string,
    end_time: string,
    site_id: string,
    terminated: boolean,
    power: number
}
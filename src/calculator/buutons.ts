export type ButtonType = {
    value: string
    color: 'gray' | 'lightgray' | 'orange'
    id: string
    type: 'operator' | 'digit' | 'dot' | 'clear' | '%' | '+/-' | 'equals' | 'mr' | 'mc' | 'm+' | 'm-'
}

export const buttons: ButtonType[] = [
    {value: 'AC', color: 'lightgray', id: '1', type: 'clear'},
    {value: '+/-', color: 'lightgray', id: '2', type: '+/-'},
    {value: '%', color: 'lightgray', id: '3', type: '%'},
    {value: '/', color: 'orange', id: '4', type: 'operator'},
    {value: 'mc', color: 'gray', id: '5', type: 'mc'},
    {value: 'mr', color: 'gray', id: '6', type: 'mr'},
    {value: 'm-', color: 'gray', id: '7', type: 'm-'},
    {value: 'm+', color: 'orange', id: '8', type: 'm+'},
    {value: '7', color: 'gray', id: '9', type: 'digit'},
    {value: '8', color: 'gray', id: '10', type: 'digit'},
    {value: '9', color: 'gray', id: '11', type: 'digit'},
    {value: '*', color: 'orange', id: '12', type: 'operator'},
    {value: '4', color: 'gray', id: '13', type: 'digit'},
    {value: '5', color: 'gray', id: '14', type: 'digit'},
    {value: '6', color: 'gray', id: '15', type: 'digit'},
    {value: '-', color: 'orange', id: '16', type: 'operator'},
    {value: '1', color: 'gray', id: '17', type: 'digit'},
    {value: '2', color: 'gray', id: '18', type: 'digit'},
    {value: '3', color: 'gray', id: '19', type: 'digit'},
    {value: '+', color: 'orange', id: '20', type: 'operator'},
    {value: '0', color: 'gray', id: '21', type: 'digit'},
    {value: ',', color: 'gray', id: '22', type: 'dot'},
    {value: '=', color: 'orange', id: '23', type: 'equals'}
]
export namespace IEvent {
    export interface root {
        timestamp: number,
        duration: number,
        zone: zone
    }

    export interface zone {
        left: number,
        top: number,
        width: number,
        height: number
    }
}
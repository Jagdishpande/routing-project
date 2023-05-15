

export interface Iproduct{
    pname: string;
    pid: number;
    pstatus: Tpstatus;
    canReturn:1|0
}

export type Tpstatus="In-Progress" | "Dispatched" |"Delivered"
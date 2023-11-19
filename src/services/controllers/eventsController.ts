import instanceAPI from "@/services/axios/instanceAPI";
import {IEvent} from "@/services/types/eventsTypes";
import {AxiosResponse} from "axios";

export namespace EventsController {
    export const getAll = async (): Promise<AxiosResponse<IEvent.root[]>> => {
        return await instanceAPI.get('v3/085041d6-c0a5-4d4c-8ba9-829a0212d75b')
    }
}
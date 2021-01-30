import { IPerson } from "../../Common/Models/Common.types";
import { IAppointmentDetails } from "../../Common/Models/Appointment.types";
import AmplitudeConstants from "../../Common/AmplitudeConstants";

/** Data we get from server on app start */
export default interface IConfigData {//testerror
    clientCorrelationId: string;
    environment: IAppointmentDetails;
    buildNumber: string;
    appName: AmplitudeConstants;
    tenantId: string;
    userId: string;
    symbol: string;
    ariaTableName: string;
    resourceUrl: string;
    antiForgeryToken: string;
    flightSettings: string[];
    isMobile: boolean;
    staticResourceUrl: string;
    cssUrls: string[];
    npsLocaleName: string;
    appTitle: IPerson;
}
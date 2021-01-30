export interface IAccount {
    displayName: string;
    primarySmtpAddress: string;
    aadObjectId?: string;
}

/**
 * Interface for fully hydrated person object. This is expected to have all fields with
 * definitive values - no undefined or null. And serves as source of truth for rendering
 * fields like 'isPinned' and 'isDirectReport'
 */
export interface IPerson extends IAccount {//testerror
    isPinned: boolean;
    isDirectReport: boolean;
    oneOnOneReminderFrequency: String;
}
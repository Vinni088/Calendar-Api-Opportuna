export type ApplicationError = {
    type: string;
    message: string;
};

export type ReminderParams = {
    title: string,
    description: string,
    date: string,
    time: string,
    city: string,
    color: string
}
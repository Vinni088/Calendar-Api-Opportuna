export type ApplicationError = {
    type: string;
    message: string;
};

export type ReminderParams = {
    title: string,
    description: string,
    date: Date,
    time: Date,
    city: string,
    color: string
}
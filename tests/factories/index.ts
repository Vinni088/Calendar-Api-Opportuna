import prisma from "../../src/database";
import * as protocol from "../../src/protocols/index.protocol"

async function clearDB() {
    await prisma.reminders.deleteMany()
};

async function createReminder(
    title: string,
    description: string,
    date: string,
    time: string,
    city: string,
    color: string
) {
    let reminder = await prisma.reminders.create({
        data: {
            title,
            description,
            date,
            time,
            city,
            color
        }
    })

    return reminder
};

async function deleteReminder(
    id: number
) {
    let reminder = await prisma.reminders.deleteMany({
        where: {
            id
        }
    })

    return reminder
};


async function readReminders() {
    let reminders = await prisma.reminders.findMany();

    return reminders
};

const factory = {
    clearDB,
    createReminder,
    deleteReminder,
    readReminders
}

export default factory
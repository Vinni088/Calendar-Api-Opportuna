export async function CheckNumber(id: any) {
    let numberId = Number(id);

    if (isNaN(numberId)) {
        throw ({ type: 'unprocessable_entity', message: 'O id enviado é não numérico' })
    } else if (numberId < 0) {
        throw ({ type: 'unprocessable_entity', message: 'O id enviado é negativo' })
    }

    return numberId
}

export async function CheckDateFormat(dateString: string) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(dateString)) {
        throw ({ type: 'unprocessable_entity', message: 'O dateString enviado não é válido' })
    }

    return dateString;
}
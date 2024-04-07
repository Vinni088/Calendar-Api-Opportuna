export async function CheckNumber(id: any) {
    let numberId = Number(id);

    if (isNaN(numberId)) {
        throw ({ type: 'unprocessable_entity', message: 'O id enviado é não numérico' })
    } else if( numberId < 0) {
        throw ({ type: 'unprocessable_entity', message: 'O id enviado é negativo' })
    }

    return numberId
}
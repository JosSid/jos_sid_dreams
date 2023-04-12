import client from "../../../api/client";

const messageURL = '/api/message'

export const createMessage = async (body) => {
    const message = await client.post(messageURL, body);

    return message;
};
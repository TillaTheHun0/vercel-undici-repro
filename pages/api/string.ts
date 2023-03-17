import type { NextApiRequest, NextApiResponse } from 'next';
import { fetch, Request } from 'undici'


export default async function (_req: NextApiRequest, res: NextApiResponse): Promise<void> {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(res.json)
        .catch((err) => {
            console.error(err);
            res.json(err);
        });
}

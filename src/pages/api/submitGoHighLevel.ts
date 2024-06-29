import { NextApiRequest, NextApiResponse } from 'next'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { payload, token } = req.body
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        };
        const response = await fetch(process.env.GO_HIGH_LEVEL_URL, options);
        if (!response.ok) {
            const errorText = await response.text();
            console.error('GoHighLevel API request failed:', errorText);
            return res.status(500).json({
                error: `${errorText}`,
            })
        }
        return res.status(200).json(await response.json());
    } catch (error: any) {
        return res.status(500).json({
            error: `${error.message}`,
        })
    }
}

export default handler

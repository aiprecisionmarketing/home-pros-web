
export default async (req, context) => {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    const apiKey = process.env.RETELL_API_KEY;
    const agentId = process.env.RETELL_AGENT_ID;

    if (!apiKey) {
        return new Response(JSON.stringify({ error: "Missing API Key" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }

    try {
        const response = await fetch('https://api.retellai.com/v2/create-web-call', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ agent_id: agentId }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Retell API error: ${response.status} ${errorBody}`);
        }

        const data = await response.json();
        return new Response(JSON.stringify({ accessToken: data.access_token }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};

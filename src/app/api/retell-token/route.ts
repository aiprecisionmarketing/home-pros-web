import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST() {
  const RETELL_API_KEY = process.env.RETELL_API_KEY;
  const RETELL_AGENT_ID = process.env.RETELL_AGENT_ID;

  console.log('🔑 API Route called - Generating access token');
  console.log('Environment check:', {
    hasApiKey: !!RETELL_API_KEY,
    hasAgentId: !!RETELL_AGENT_ID,
    agentId: RETELL_AGENT_ID?.substring(0, 10) + '...'
  });

  try {
    if (!RETELL_API_KEY || !RETELL_AGENT_ID) {
      console.error('❌ Missing environment variables');
      return NextResponse.json(
        { error: 'Missing Retell API configuration. Please check environment variables.' },
        {
          status: 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      );
    }

    console.log('📞 Calling Retell API to create web call...');

    // Create web call with Retell API
    const response = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: RETELL_AGENT_ID,
      }),
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: `HTTP ${response.status}: ${response.statusText}` };
      }
      console.error('❌ Retell API error:', errorData);
      return NextResponse.json(
        { error: errorData.message || `Retell API returned ${response.status}` },
        {
          status: response.status,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      );
    }

    const data = await response.json();
    console.log('✅ Access token generated successfully');

    return NextResponse.json(
      {
        accessToken: data.access_token,
        callId: data.call_id,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );
  } catch (error: any) {
    console.error('❌ Error creating Retell web call:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

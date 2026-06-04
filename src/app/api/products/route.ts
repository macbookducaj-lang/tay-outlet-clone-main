import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.KICKSDB_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Clé API manquante" }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.kicksdb.com/v1/products', {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la connexion" }, { status: 500 });
  }
}

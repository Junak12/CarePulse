"server client"
import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const serviceCollection = await dbConnect(collections.SERVICES);

    const result = await serviceCollection.insertMany(body);

    return NextResponse.json({
      success: true,
      insertedId: result.insertedIds,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}

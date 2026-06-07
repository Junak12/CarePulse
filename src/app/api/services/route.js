import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        {
          success: false,
          message: "Request body must be an array",
        },
        { status: 400 },
      );
    }

    const serviceCollection = await dbConnect(collections.SERVICES);

    const result = await serviceCollection.insertMany(body);

    return NextResponse.json({
      success: true,
      insertedCount: result.insertedCount,
      insertedIds: result.insertedIds,
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

export async function GET() {
  try {
    const serviceCollection = await dbConnect(collections.SERVICES);

    const services = await serviceCollection.find().toArray();

    return NextResponse.json({
      success: true,
      data: services,
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

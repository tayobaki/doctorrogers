import { BestSeller } from "@/app/constants/data";
import { NextResponse, NextRequest } from "next/server";


export const GET = async () => {
  try {
    return NextResponse.json({
        message: 'Products fetched successfully',
        success: true,
        BestSeller
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: "No product",
      },
      { status: 500 }
    );
  }
};


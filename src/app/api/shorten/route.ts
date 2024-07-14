import { UrlShortenerServices } from "@/services/UrlShortenerServices";
import { NextResponse } from "next/server";

export async function POST( req: Request)
{
    const {originalUrl} = await req.json();
    const shortnerService = new UrlShortenerServices();
    const shortUrl = await shortnerService.shortenUrl(originalUrl);
    return NextResponse.json({shortUrl},{status : 201});
}




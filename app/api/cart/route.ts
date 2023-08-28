import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid"
import { cookies } from "next/dist/client/components/headers";
import { and, eq } from "drizzle-orm";
import Result from "postcss/lib/result";



export const GET = async (request: NextRequest) => {
    const req = request.nextUrl
    const uid = req.searchParams.get("user_id") as string
    console.log(uid, "uid yahan")
    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid))
        // console.log(uid, "here is uid")
        //console.log(cookies().get("user_id")?.value, "cookies waali id")
        return NextResponse.json({ res })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ messege: "something went wrong" })
    }
}
export const POST = async (request: NextRequest) => {
    fetch(`http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`)
    const req = await request.json()
    const uid = uuid()
    const setCookies = cookies()
    const user_id = cookies().get("user_id")?.value
    if (!user_id) {
        setCookies.set("user_id", uid)

    }

    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: cookies().get("user_id")?.value as string
        }).returning();
        console.log(cookies().get("user_id")?.value as string)
        return NextResponse.json({ res })
    } catch (error) {
        console.log(error, "masla")
        return NextResponse.json({ messege: "something went wrong" })
    }
}
export const DELETE = async (request: NextRequest) => {
    const req = await request.json()
    try {
        const result = await db.delete(cartTable).where(
            eq(cartTable.id, 73),
        ).returning()
        return NextResponse.json({ messege: "Delete Request is working tho" })
    } catch (error) {
       console.log(error, "masla")
       return NextResponse.json({ messege: "something went wrong" })
    }
}

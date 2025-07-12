import {NextResponse} from "next/server";
import admin from "@/libs/admin";

export const GET = async () => {
  try {
    const snapShot = await admin
      .firestore()
      .collection("gallery")
      .get();

    const data = snapShot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    return NextResponse
      .json(data, { status: 200 })
  } catch (e) {
    return NextResponse
      .json(
        { error: "Internal server error" },
        { status: 500}
      )
  }
}
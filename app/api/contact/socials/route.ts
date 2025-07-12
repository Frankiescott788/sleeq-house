import {NextResponse} from "next/server";
import admin from "@/libs/admin";

export const GET = async () => {
  try {
    const docSnapshot = (await admin.firestore()
      .collection("settings")
      .doc("social")
      .get()).data()

    return NextResponse.json(
      docSnapshot,
      { status: 200 }
    )

  } catch (e) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
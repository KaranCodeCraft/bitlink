import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongo"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    if(await collection.findOne({shortUrl: shorturl})){
      const doc = await collection.findOne({shortUrl: shorturl})

      return redirect(doc.url)
    }else{
       return redirect("/")
    }
  }

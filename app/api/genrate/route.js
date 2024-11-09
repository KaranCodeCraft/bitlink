import clientPromise from "@/lib/mongo";

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();

    // Check if the required fields are provided
    if (!body.url || !body.shortUrl) {
      return new Response(JSON.stringify({ error: "Missing URL or short URL" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Connect to the database
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    if(await collection.findOne({shortUrl: body.shortUrl})){
      return new Response(JSON.stringify({message: "URL already exists"}),{
        status: 409,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Insert the URL data into the collection
    const result = await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    });

    // Return a success response
    return new Response(
      JSON.stringify({ message: "URL added successfully", data: result }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Handle any errors that occur during the request
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

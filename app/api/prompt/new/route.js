import { connectToDB } from "@utils/database";
import Prompt from "@modules/prompt";

export const POST = async(req, res) => {
    const { userID, prompt, tag} = await req.json();

    try {
        await connectToDB();

        const newPrompt =  new Prompt({
                creator: userID,
                prompt,
                tag
            })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch (error) {
        return new Response("Failed to create a new prompt", {status:500})
    }
}
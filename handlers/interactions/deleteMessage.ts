import { Message } from "discord.js";

async function deleteMessage(message: Message | null | undefined) {
  if (message === null || message === undefined) {
    return;
  }
  await message.delete().catch((error) => {
    if (error.code === 10008) {
      console.info("Message Already Deleted");
    } else if (error.code === 50027) {
      // This is a known error
      console.error("Failed to delete message 50027 error");
    } else {
      console.log("Unknown Error: ", error);
    }
  });
}

export default deleteMessage;

import { request } from "undici";
import { access, constants, readFile, writeFile } from "node:fs/promises";

const localDocumentationFileName = "local-documentation.html";

export async function getDocumentContent() {
  if (process.env.MODE === "LOCAL") {
    try {
      await access(localDocumentationFileName, constants.R_OK | constants.W_OK);
      return readFile(localDocumentationFileName, "utf-8");
    } catch (err) {
      const documentContent = await fetchDocumentation();
      await writeFile(localDocumentationFileName, documentContent);

      return documentContent;
    }
  }
  return await fetchDocumentation();
}

async function fetchDocumentation() {
  const API_DOCUMENTATION_URL =
    process.env.TELEGRAM_API_DOCUMENTATION_URL ||
    "https://core.telegram.org/bots/api";

  const { body } = await request(API_DOCUMENTATION_URL);

  return await body.text();
}

import { HTMLElement, parse } from "node-html-parser";
import { getDocumentContent } from "./helpers/getDocumentContent.js";

const document = parse(await getDocumentContent());

/**
 * Main document types and functions are divided into different groups:
 *
 * - Recent change
 * - Authorizing your bot
 * - Making requests
 * - Using a Local Bot API Server
 * - Getting updates
 * - Available types
 * - Available methods
 * - Updating messages
 * - Stickers
 * - Inline mode
 * - Payments
 * - Telegram Passport
 * - Games
 *
 * All they are using h3 tag so everything will be grouped around h3 tags
 */

const contentElement = document.getElementById("dev_page_content");
const mainHeaderTag = "H3";

const groups = {};
let currentGroup = "none";

for (const childNode of contentElement.childNodes) {
  if (childNode instanceof HTMLElement) {
    const tagName = childNode.tagName;

    if (tagName.toUpperCase() === mainHeaderTag) {
      console.log(childNode.innerText);
    }
  }
}

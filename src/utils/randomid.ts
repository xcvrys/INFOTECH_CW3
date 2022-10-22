// noinspection SpellCheckingInspection

const {customAlphabet} = require('nanoid/non-secure');

export default function generateRandomID(): string {
  let idGenerator = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);
  return idGenerator();
}

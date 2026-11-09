#!/usr/bin/env node
const fs = require("fs");
const os = require("os");
const path = require("path");

const args = process.argv.slice(2);
const flag = args.indexOf("--dir");

if (flag !== -1 && !args[flag + 1]) {
  console.error("Usage: npx unslopovich [--dir <skills folder>]");
  process.exit(1);
}

const base =
  flag !== -1
    ? path.resolve(args[flag + 1].replace(/^~(?=$|\/)/, os.homedir()))
    : path.join(os.homedir(), ".claude", "skills");
const dest = path.join(base, "unslopovich");

fs.mkdirSync(dest, { recursive: true });
fs.copyFileSync(path.join(__dirname, "..", "SKILL.md"), path.join(dest, "SKILL.md"));

console.log(`Dr. Unslopovich will see you now.\nInstalled to ${dest}\nNext, ask your agent: /unslopovich review my app`);

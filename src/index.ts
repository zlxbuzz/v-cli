#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .action((message: string) => {
    console.log(`Hello World ${message}`);
  })
  .argument("<string>", "console log");

program.parse(process.argv);

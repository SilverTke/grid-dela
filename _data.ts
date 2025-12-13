import { parse as parseCsv } from "@std/csv";

const bookString = await Deno.readTextFile("./libros_sample.csv");
const books = parseCsv(bookString, { skipFirstRow: true });

export { books };

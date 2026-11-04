import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const shooter = sqliteTable("shooter", {
    db_id: integer('id').primaryKey().notNull(),
    id: text("uuid").notNull().unique(),
    verein: text("verein"),
    vereinsort: text("vereinsort"),
    vereinsname: text("vereinsname"),
    kategorieg300: integer("kategorieg300"),
    kategoriep50: integer("kategoriep50"),
    kategoriep25: integer("kategoriep25"),
    lizenznummer: text("lizenznummer").unique(), // text to account for leading 0
    nachname: text("nachname"),
    vorname: text("vorname"),
    plz: integer("plz"),
    ort: text("ort"),
    geburtsdatum: integer("geburtsdatum"), // input is text, should be parsed to unix timestamp
    geschlecht: text("geschlecht"),
    lizenzg300: text("lizenzg300"),
    lizenzp50: text("lizenzp50"),
    lizenzp25: text("lizenzp25"),
    kurzname: text("kurzname")
});

export const club = sqliteTable("club", {
    db_id: integer('id').primaryKey().notNull(),
    id: text("uuid").notNull().unique(),
    verein: text("verein").unique(),
    kanton: integer("kanton"),
    landesteil: integer("landesteil"),
    bezirk: integer("bezirk"),
    vereinsort: text("vereinsort"),
    vereinsname: text("vereinsname"),
    sprache: text("sprache"),
    katgewehr300: integer("katgewehr300"),
    katpistole50: integer("katpistole50"),
    katpistole25: integer("katpistole25"),
    schiessplatznummer: text("schiessplatznummer")
})
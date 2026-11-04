CREATE TABLE `club` (
	`id` integer PRIMARY KEY,
	`uuid` text NOT NULL UNIQUE,
	`verein` text UNIQUE,
	`kanton` integer,
	`landesteil` integer,
	`bezirk` integer,
	`vereinsort` text,
	`vereinsname` text,
	`sprache` text,
	`katgewehr300` integer,
	`katpistole50` integer,
	`katpistole25` integer,
	`schiessplatznummer` text
);
--> statement-breakpoint
CREATE TABLE `shooter` (
	`id` integer PRIMARY KEY,
	`uuid` text NOT NULL UNIQUE,
	`verein` text,
	`vereinsort` text,
	`vereinsname` text,
	`kategorieg300` integer,
	`kategoriep50` integer,
	`kategoriep25` integer,
	`lizenznummer` text UNIQUE,
	`nachname` text,
	`vorname` text,
	`plz` integer,
	`ort` text,
	`geburtsdatum` integer,
	`geschlecht` text,
	`lizenzg300` text,
	`lizenzp50` text,
	`lizenzp25` text,
	`kurzname` text
);

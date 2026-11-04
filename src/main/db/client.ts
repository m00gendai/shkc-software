import Database from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { app } from 'electron'
import { join } from 'path'

export function initDb() {
  const file = join(app.getPath('userData'), 'tournament.db')
  const sqlite = new Database(file)
  sqlite.pragma('journal_mode = WAL')
  sqlite.pragma('foreign_keys = ON')

  const db = drizzle({ client: sqlite })
  console.log('DB at', file)
  return { db, sqlite }
}
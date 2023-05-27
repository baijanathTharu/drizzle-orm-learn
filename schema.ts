import {
  date,
  mysqlTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  createdAt: date("created_at", {
    mode: "date",
  }).default(new Date()),
  phone: varchar("phone", { length: 256 }),
});

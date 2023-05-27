-- Active: 1683891924265@@localhost@3307@drizzle_db

CREATE TABLE
    `users` (
        `id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
        `full_name` text,
        `phone` varchar(256)
    );
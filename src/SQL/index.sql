DROP TABLE IF EXISTS reminders;

CREATE TABLE IF NOT EXISTS reminders (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    title VARCHAR(30) NOT NULL,
    description TEXT,
    city VARCHAR(40),
    color VARCHAR(30)
);
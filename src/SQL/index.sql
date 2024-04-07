DROP TABLE IF EXISTS reminders;

CREATE TABLE IF NOT EXISTS reminders (
    id SERIAL PRIMARY KEY,
    date VARCHAR(10) NOT NULL,
    time VARCHAR(5) NOT NULL,
    title VARCHAR(30) NOT NULL,
    description VARCHAR(30),
    city VARCHAR(30),
    color VARCHAR(30)
);

INSERT INTO reminders (date, time, title, description, city, color)
VALUES 
    ('2024-04-04', '09:00', 'Exercício', 'Fazer exercícios físicos', 'São Paulo', 'blue'),
    ('2024-04-05', '15:30', 'Reunião', 'Reunião de equipe', 'Rio de Janeiro', 'green'),
    ('2024-04-06', '18:00', 'Compras', 'Comprar mantimentos', 'Belo Horizonte', 'orange'),
    ('2024-04-07', '10:00', 'Dentista', 'Consulta com o dentista', 'Porto Alegre', 'red'),
    ('2024-04-08', '14:00', 'Aniversário', 'Festa de aniversário', 'Curitiba', 'pink');

-- CreateTable
CREATE TABLE "reminders" (
    "id" SERIAL NOT NULL,
    "date" VARCHAR(10) NOT NULL,
    "time" VARCHAR(5) NOT NULL,
    "title" VARCHAR(30) NOT NULL,
    "description" VARCHAR(30),
    "city" VARCHAR(30),
    "color" VARCHAR(30),

    CONSTRAINT "reminders_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "public"."contacts_table" (
    "contact_id" serial,
    "contact_email" text NOT NULL,
    "contact_phone_number" varchar(15) NOT NULL,
    PRIMARY KEY ("contact_id")
);

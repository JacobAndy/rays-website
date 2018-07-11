CREATE TABLE "public"."receipts_table" (
    "receipt_id" serial,
    "product_id" int NOT NULL,
    "contact_id" int NOT NULL,
    "receipt_date" date NOT NULL,
    "has_shipped" boolean,
    "order_complete" boolean,
    PRIMARY KEY ("receipt_id"),
    FOREIGN KEY ("product_id") REFERENCES "public"."products_table"("product_id"),
    FOREIGN KEY ("contact_id") REFERENCES "public"."contacts_table"("contact_id")
);
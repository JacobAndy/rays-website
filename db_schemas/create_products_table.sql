CREATE TABLE "public"."products_table" (
    "product_id" serial,
    "product_name" varchar(100) NOT NULL,
    "product_price" money DEFAULT '0',
    "product_desciption" varchar(500) NOT NULL,
    PRIMARY KEY ("product_id"),
    UNIQUE ("product_name")
);
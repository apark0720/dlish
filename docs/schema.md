# Database Schema:

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null

## chefs
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
rating          | string    | not null

## recipes
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
title              | string    | not null
description        | text      | not null
url                | string    | not null
main_image_url     | string    | not null
price              | integer   | not null
lowest_price       | integer   | not null
lowest_price_threshold | integer   | not null
end_date           | integer   | not null
pickup_time        | string    | not null
location           | text      | not null
creator_id         | integer   | not null, foreign key (references users), indexed
chef_id            | integer   | not null, foreign key (references chefs), indexed
maximum_orders     | integer   | optional
category           | string    | optional

## orders
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id   | integer   | not null, foreign key (references recipe), indexed
customer_id | integer   | not null, foreign key (references users), indexed

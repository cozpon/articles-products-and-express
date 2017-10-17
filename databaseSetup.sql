DROP DATABASE IF EXISTS products_and_articles;
DROP USER IF EXISTS ricky;
CREATE USER ricky;
CREATE DATABASE products_and_articles WITH OWNER = ricky;

\c products_and_articles

SET ROLE 'ricky';

CREATE TABLE products
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  price MONEY NOT NULL,
  inventory INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);


CREATE TABLE articles
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  body VARCHAR(80) NOT NULL,
  author VARCHAR(180) NOT NULL,
  unique_url VARCHAR(500) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);


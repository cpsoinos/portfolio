CREATE TABLE IF NOT EXISTS users(
  user_id integer PRIMARY KEY,
  email_address text,
  created_at integer,
  deleted integer,
  settings text
);

INSERT INTO users(user_id, email_address)
  VALUES (1, 'coreypsoinos@gmail.com');

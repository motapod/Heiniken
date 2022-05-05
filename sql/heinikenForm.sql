
/* -------------------------------- Conexión entre usuario y resultado de las preguntas */
DROP SEQUENCE IF EXISTS "public"."user_id_seq";
CREATE SEQUENCE "public"."user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

DROP TABLE IF EXISTS "public"."user";
CREATE TABLE "public"."user" (
  "id" INT4 NOT NULL DEFAULT nextval('user_id_seq'::regclass),
  "mail" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "phone" VARCHAR(12) NULL
)
;

/* -------------------------------- Conexión entre usuario y resultado de las preguntas */
DROP SEQUENCE IF EXISTS "public"."question_id_seq";
CREATE SEQUENCE "public"."question_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

DROP TABLE IF EXISTS "public"."question";
CREATE TABLE "public"."question" (
  "id" INT4 NOT NULL DEFAULT nextval('question_id_seq'::regclass),
  "option_a" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "option_b" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "option_c" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "option_d" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "correct" INT2 NOT NUll
)
;



/* -------------------------------- Conexión entre usuario y resultado de las preguntas */
DROP SEQUENCE IF EXISTS "public"."answers_id_seq";
CREATE SEQUENCE "public"."answers_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

DROP TABLE IF EXISTS "public"."answers";
CREATE TABLE "public"."answers" (
  "id" INT4 NOT NULL DEFAULT nextval('answers_id_seq'::regclass),
  "id_player" INT4 NOT NULL,
  "id_question" INT4 NOT NULL,
  "marked" INT2 NOT NULL,
  "correct" BOOLEAN NOT null
)
;
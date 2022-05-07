
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
  "quest" varchar(255) COLLATE "pg_catalog"."default" NOT NULL, 
  "option_a" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "option_b" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "option_c" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "option_d" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "correct" INT2 NOT NUll
)
;

INSERT INTO "public"."question" VALUES (1, '¿Cuál de estos jugadores NO ha conquistado nunca la Champions League?', 'Thierry Henry', 'Paul Scholes','Gigi Buffon','Andriy Shevchenko',3);
INSERT INTO "public"."question" VALUES (2, '¿Cuál de estos entrenadores ha sido campeón desde el banquillo en tres ocasiones y con dos equipos diferentes?', 'Carlo Ancelotti', 'Pep Guardiola','Jurgen Klopp','Zinedine Zidane',1);
INSERT INTO "public"."question" VALUES (3, '¿Cuál de estos jugadores ha marcado más goles en la Champions League?', 'Didier Drogba', 'Alessandro del Piero','Filippo Inzaghi','Andriy Shevchenko',4);
INSERT INTO "public"."question" VALUES (4, '¿Qué jugador ha disputado más partidos en la historia de la Champions League?', 'Iker Casillas', 'Gigi Buffon',' Angel Di Maria','Cristiano Ronaldo',4);
INSERT INTO "public"."question" VALUES (5, 'Ya te imaginas que Messi es el máximo goleador del Barcelona en la UEFA Champions League, pero... ¿Quién es el segundo?', 'Luis Suárez', 'Samuel Eto´o´','Neymar','Rivaldo',1);
INSERT INTO "public"."question" VALUES (6, '¿Quién es el jugador más veterano en jugar y ganar la gran final de la UEFA Champions League?', 'Fernando Hierro con el Real Madrid', 'Paolo Maldini con el Milán','Pietro Vierchowod con la Juventus',' Alessandro Costacurta con el Milán',2);

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
--
-- PostgreSQL database dump
--

-- Dumped from database version 13.16 (Debian 13.16-1.pgdg120+1)
-- Dumped by pg_dump version 13.16 (Debian 13.16-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: horadoqa
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    telefone character varying(15) NOT NULL
);


ALTER TABLE public.usuarios OWNER TO horadoqa;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: horadoqa
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_seq OWNER TO horadoqa;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: horadoqa
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: horadoqa
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: horadoqa
--

COPY public.usuarios (id, name, email, telefone) FROM stdin;
78	Hora do QA	horadoqa@gmail.com	219876543210
79	Carlos Almeida	carlos.almeida@email.com	(11) 91234-0001
80	Fernanda Lima	fernanda.lima@email.com	(21) 91234-0002
81	Gustavo Martins	gustavo.martins@email.com	(31) 91234-0003
82	Juliana Ribeiro	juliana.ribeiro@email.com	(41) 91234-0004
83	Lucas Costa	lucas.costa@email.com	(51) 91234-0005
84	Mariana Souza	mariana.souza@email.com	(61) 91234-0006
85	Nicolas Oliveira	nicolas.oliveira@email.com	(71) 91234-0007
86	Patrícia Mendes	patricia.mendes@email.com	(81) 91234-0008
87	Renato Pires	renato.pires@email.com	(91) 91234-0009
88	Sofia Ferreira	sofia.ferreira@email.com	(11) 91234-0010
89	Tiago Ramos	tiago.ramos@email.com	(21) 91234-0011
90	Vanessa Silva	vanessa.silva@email.com	(31) 91234-0012
91	William Andrade	william.andrade@email.com	(41) 91234-0013
92	Yasmin Rocha	yasmin.rocha@email.com	(51) 91234-0014
93	Zé Carlos	ze.carlos@email.com	(61) 91234-0015
94	Aline Cardoso	aline.cardoso@email.com	(71) 91234-0016
95	Beto Lima	beto.lima@email.com	(81) 91234-0017
96	Cláudia Torres	claudia.torres@email.com	(91) 91234-0018
97	Eduardo Silva	eduardo.silva@email.com	(11) 91234-0019
98	Flávia Gomes	flavia.gomes@email.com	(21) 91234-0020
\.


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: horadoqa
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 98, true);


--
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: horadoqa
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: horadoqa
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


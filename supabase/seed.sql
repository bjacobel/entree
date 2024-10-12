--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 16.4

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

--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO auth.users VALUES ('00000000-0000-0000-0000-000000000000', '483e3c1a-cf5c-43af-8ae2-3918bfdd5cf9', 'authenticated', 'authenticated', 'kmfeatherston@gmail.com', '$2a$10$aMI92S8oSKgzsV4GeWg81uKutm.G.1zpaeaFVEkk2HZ9xuP7ROUES', '2024-08-19 00:45:44.4262+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-08-19 00:45:44.419944+00', '2024-08-19 00:45:44.426417+00', NULL, NULL, '', '', NULL, DEFAULT, '', 0, NULL, '', NULL, false, NULL, false);
INSERT INTO auth.users VALUES ('00000000-0000-0000-0000-000000000000', '88a9f37d-1ba9-4eab-99c2-37e4fb50b9fa', 'authenticated', 'authenticated', 'brian@bjacobel.com', '$2a$10$UQ/WKyTBpSFqKM6UpUDvAePkLAqUoRmSgGtqU.lg3lb/Ps/D2HSjy', '2024-08-19 00:46:03.827238+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-08-19 00:46:03.822639+00', '2024-08-19 00:46:03.827443+00', NULL, NULL, '', '', NULL, DEFAULT, '', 0, NULL, '', NULL, false, NULL, false);
INSERT INTO auth.users VALUES ('00000000-0000-0000-0000-000000000000', 'a21855cf-cd45-4431-8631-b5c9026e1fdb', 'authenticated', 'authenticated', 'bjacobel@gmail.com', '$2a$10$/74z99xrENurxLcrxOlAxeWrNnqUzbSBhgDgEL0QjoW.M/aTntxE6', '2024-08-18 19:19:01.702691+00', NULL, '', NULL, '', '2024-09-02 17:42:52.797933+00', '', '', NULL, '2024-09-29 17:35:19.976612+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-08-18 19:19:01.690457+00', '2024-09-30 16:23:47.160101+00', NULL, NULL, '', '', NULL, DEFAULT, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: recipe_box; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.recipe_box VALUES (1, '2024-08-18 19:17:44.745663+00');
INSERT INTO public.recipe_box VALUES (2, '2024-08-19 00:43:15.129146+00');


--
-- Data for Name: recipe; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.recipe VALUES (3, '2024-08-19 00:44:11.806158+00', NULL, NULL, NULL, 'Belongs to another box', '{}', '{}', NULL, 2);
INSERT INTO public.recipe VALUES (2, '2024-08-19 00:42:59.152892+00', NULL, NULL, 'a21855cf-cd45-4431-8631-b5c9026e1fdb', 'Another recipe', '{cook,eat}', '{salt,vinegar}', NULL, 1);
INSERT INTO public.recipe VALUES (1, '2024-08-18 19:22:32.139513+00', NULL, NULL, 'a21855cf-cd45-4431-8631-b5c9026e1fdb', 'Sample recipe', '{cook,eat}', '{"1 cup love","2 teaspoons hard work","3-4 tsp sugar"}', NULL, 1);


--
-- Data for Name: recipe_box_owner; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.recipe_box_owner VALUES (1, '2024-08-18 19:19:38.816902+00', 'a21855cf-cd45-4431-8631-b5c9026e1fdb', 1);
INSERT INTO public.recipe_box_owner VALUES (2, '2024-08-19 00:46:26.028762+00', '483e3c1a-cf5c-43af-8ae2-3918bfdd5cf9', 1);
INSERT INTO public.recipe_box_owner VALUES (3, '2024-08-19 00:46:37.816007+00', '88a9f37d-1ba9-4eab-99c2-37e4fb50b9fa', 2);


--
-- Name: RecipeBoxOwner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."RecipeBoxOwner_id_seq"', 3, true);


--
-- Name: RecipeBox_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."RecipeBox_id_seq"', 2, true);


--
-- Name: Recipe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Recipe_id_seq"', 3, true);


--
-- PostgreSQL database dump complete
--


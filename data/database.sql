--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Debian 15.1-1.pgdg110+1)

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
-- Name: rent_bike(); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.rent_bike() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    BEGIN
		UPDATE bike SET state = 1 WHERE id = NEW.bike_id;
		RETURN NULL;
	END;
$$;


ALTER FUNCTION public.rent_bike() OWNER TO root;

--
-- Name: unlet_bike(); Type: FUNCTION; Schema: public; Owner: root
--

CREATE FUNCTION public.unlet_bike() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    BEGIN
		UPDATE bike SET state = 0 WHERE id = NEW.bike_id;
		RETURN NULL;
	END;
$$;


ALTER FUNCTION public.unlet_bike() OWNER TO root;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _user; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public._user (
    id integer NOT NULL,
    profile_id integer,
    username character varying(15),
    password character varying(200)
);


ALTER TABLE public._user OWNER TO root;

--
-- Name: alerts; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.alerts (
    id integer NOT NULL,
    user_id integer,
    type integer,
    body character varying(150)
);


ALTER TABLE public.alerts OWNER TO root;

--
-- Name: bike; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.bike (
    id integer NOT NULL,
    state integer,
    slot_id integer
);


ALTER TABLE public.bike OWNER TO root;

--
-- Name: profile; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.profile (
    id integer NOT NULL,
    avatar character varying(500)
);


ALTER TABLE public.profile OWNER TO root;

--
-- Name: renting; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.renting (
    id integer NOT NULL,
    user_id integer,
    station_id integer,
    slot_id integer,
    bike_id integer,
    date date
);


ALTER TABLE public.renting OWNER TO root;

--
-- Name: slots; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.slots (
    id integer NOT NULL,
    station_id integer,
    bikes integer
);


ALTER TABLE public.slots OWNER TO root;

--
-- Name: station; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.station (
    id integer NOT NULL,
    name character varying(100),
    lat integer,
    long integer
);


ALTER TABLE public.station OWNER TO root;

--
-- Data for Name: _user; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public._user (id, profile_id, username, password) FROM stdin;
1	1	rferritorro	123456
2	2	sbiosca	gomarota
\.


--
-- Data for Name: alerts; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.alerts (id, user_id, type, body) FROM stdin;
\.


--
-- Data for Name: bike; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.bike (id, state, slot_id) FROM stdin;
2	0	1
3	0	1
4	0	1
5	0	1
6	0	1
7	0	1
8	0	1
9	0	1
10	0	1
11	0	1
12	0	1
13	0	1
14	0	1
15	0	1
16	0	1
17	0	1
18	0	1
19	0	1
20	0	1
1	1	1
\.


--
-- Data for Name: profile; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.profile (id, avatar) FROM stdin;
1	https://rfef.isquad.es/images/afiliacion/48608808X.JPG
2	https://rfef.isquad.es/images/afiliacion/48608659E.JPG
\.


--
-- Data for Name: renting; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.renting (id, user_id, station_id, slot_id, bike_id, date) FROM stdin;
1	1	1	1	1	2023-01-25
\.


--
-- Data for Name: slots; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.slots (id, station_id, bikes) FROM stdin;
1	1	20
\.


--
-- Data for Name: station; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.station (id, name, lat, long) FROM stdin;
1	ayuntamiento	2	2
\.


--
-- Name: _user _user_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public._user
    ADD CONSTRAINT _user_pkey PRIMARY KEY (id);


--
-- Name: alerts alerts_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.alerts
    ADD CONSTRAINT alerts_pkey PRIMARY KEY (id);


--
-- Name: bike bike_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.bike
    ADD CONSTRAINT bike_pkey PRIMARY KEY (id);


--
-- Name: profile profile_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_pkey PRIMARY KEY (id);


--
-- Name: renting renting_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT renting_pkey PRIMARY KEY (id);


--
-- Name: slots slots_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.slots
    ADD CONSTRAINT slots_pkey PRIMARY KEY (id);


--
-- Name: station station_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.station
    ADD CONSTRAINT station_pkey PRIMARY KEY (id);


--
-- Name: renting rent_bike; Type: TRIGGER; Schema: public; Owner: root
--

CREATE TRIGGER rent_bike AFTER INSERT ON public.renting FOR EACH ROW EXECUTE FUNCTION public.rent_bike();


--
-- Name: renting unlet_bike; Type: TRIGGER; Schema: public; Owner: root
--

CREATE TRIGGER unlet_bike AFTER DELETE ON public.renting FOR EACH ROW EXECUTE FUNCTION public.unlet_bike();


--
-- Name: renting related_bike_rent; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT related_bike_rent FOREIGN KEY (bike_id) REFERENCES public.bike(id) NOT VALID;


--
-- Name: bike related_slot_bike; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.bike
    ADD CONSTRAINT related_slot_bike FOREIGN KEY (slot_id) REFERENCES public.slots(id) NOT VALID;


--
-- Name: renting related_slot_rent; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT related_slot_rent FOREIGN KEY (slot_id) REFERENCES public.slots(id) NOT VALID;


--
-- Name: renting related_station_rent; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT related_station_rent FOREIGN KEY (station_id) REFERENCES public.station(id) NOT VALID;


--
-- Name: slots related_station_slot; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.slots
    ADD CONSTRAINT related_station_slot FOREIGN KEY (station_id) REFERENCES public.station(id) NOT VALID;


--
-- Name: alerts related_user_alert; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.alerts
    ADD CONSTRAINT related_user_alert FOREIGN KEY (user_id) REFERENCES public._user(id);


--
-- Name: _user related_user_profile; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public._user
    ADD CONSTRAINT related_user_profile FOREIGN KEY (profile_id) REFERENCES public.profile(id);


--
-- Name: renting related_user_rent; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.renting
    ADD CONSTRAINT related_user_rent FOREIGN KEY (user_id) REFERENCES public._user(id) NOT VALID;


--
-- PostgreSQL database dump complete
--


drop policy "Disable delete for all users" on "public"."recipe";

alter table "public"."recipe" add column "deleted" boolean not null default false;



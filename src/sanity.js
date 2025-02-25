import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "dwflz382",
  dataset: "production",
  apiVersion: "v1",
  useCdn: true,
});

export const getCases = async () => {
  const cases = await client.fetch(
    '*[_type == "cases"]{title, link, "image": image.asset->url}'
  );
  return cases;
};

export const getServices = async () => {
  const cases = await client.fetch(
    '*[_type == "services"]{title, "image": image.asset->url}'
  );
  return cases;
};

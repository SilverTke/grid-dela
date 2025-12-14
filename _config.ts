import lume from "lume/mod.ts";

const site = lume();

site.add("/assets");
site.ignore("README.md");

export default site;

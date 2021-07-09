export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60e829d7f6ac33ac6bdcb42a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-29ic5m8t",
                  apiId: "ddfdb044-a950-4d92-ae27-02d3ab378bac",
                },
                {
                  buildHookId: "60e829d7a275f5ba84fe0c5b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-cdc82uqg",
                  apiId: "06c9a26b-24a5-4141-a1b5-eeb58ea01711",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/andrerodpt/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-cdc82uqg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

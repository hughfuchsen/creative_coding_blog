/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Hugh F's Creative Coding Blog",
  description: "This is my new blog about creative coding :^)!!!!",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "images/bballtest2.gif",
  avatarClass: "rounded-full",
  author: "Hugh Fuchsen",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});

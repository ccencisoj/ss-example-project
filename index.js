const simpleGit = require("simple-git");
const git = simpleGit.default();

(async ()=> {
  await git.init();
  await git.add("*");
  await git.commit("v1");
  await git.remote("add origin https://github.com/ccencisoj/ss-example-project.git");
  await git.push("origin", "master");
})();
const simpleGit = require("simple-git");
const git = simpleGit.default();

(async ()=> {
  await git.init();
  await git.add("*");
  await git.commit("v1");
  await git.push("https://github.com/ccencisoj/ss-example-project.git", "master");
})();
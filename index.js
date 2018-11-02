const results = document.querySelector("#results")
let id

function getIssues() {
  const repo = 'ssong-eu/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/issues/${id}`, {
  }).then(res => res.json()).then(json => showResults(json));
}

function showIssues(json) {
  id = json.id;
}

// let body = new FormData();
// body.append("title", )
// body.append("body",)

function createIssue() {
  const repo = 'ssong-eu/javascript-fetch-lab'
  let body = {
    "title": document.querySelector("#title").value,
    "body": document.querySelector("#body").value
  }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
  method: "post",
  headers: {
    Authorization: `token 1e3fc891a6836ac27a195a152c6dbe1f8f5f89d5`
  },
  body: JSON.stringify(body)
}).then(res => res.json()).then(json => showIssues(json));
}

function showResults(json) {
  results.innerHTML = json.name;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
  method: "post",
  headers: {
    Authorization: `token 1e3fc891a6836ac27a195a152c6dbe1f8f5f89d5`
  }
}).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

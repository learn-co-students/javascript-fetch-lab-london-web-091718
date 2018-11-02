const forkRepoLink = document.querySelector('p + a');
const results = document.querySelector('#results');
const title = document.querySelector('#title');
const inputBody = document.querySelector('#body');
const issues = document.querySelector('#issues');


function getIssues(num) {
  const myRepoFork = 'deedeeh/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${myRepoFork}/issues/${num}`,{
  }).then(res => res.json());
}

function showIssues(json) {
  issues.innerHTML = getIssues(4);
}

function createIssue() {
  let body = {
    "title": title.value,
    "body": inputBody.value
  }

  const myRepoFork = 'deedeeh/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${myRepoFork}/issues`,{
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(body)
  }).then(res => console.log(res)).then(json => showIssues(json));
}

function showResults(json) {
  results.innerHTML = json.name;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

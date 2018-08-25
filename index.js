

function showRepos(){
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  // const repoLink = r.html_url + r.name;
  const reposList = `<ul> ${repos.map(r => "<li>"+ r.name+'   <a href='+'"'+r.html_url+'"'+'>Open Repo</a></li>').join('')}`;
  
   document.getElementById('repositories').innerHTML = reposList;
  
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepos);
  var username = document.getElementById("username").value;
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  console.log(username);
  req.send();
  
}


function getCommits(){}
function displayCommits(){}

let rootUrl = "https://api.github.com";

function getRepositories()
{
  let userName = document.getElementById("username").value
  let url = rootUrl + "/users/"+userName+"/repos";
  
  console.log(url);
  let requset = new XMLHttpRequest();
  console.log(url)
  requset.addEventListener("load", loadUserRepos);
  requset.open("GET", url);
   console.log("null");
  requset.send();
}

function loadUserRepos()
{
   console.log("null");
  let userRepos = JSON.parse(this.responseText);
  let reposUl = document.createElement("ul");
   console.log("null");
  for(let i=0;i<userRepos.length;i++)
  {
    let li = document.createElement(li);
    let a = document.createElement(a);
    a.setAttribute("data-repo",userRepos[i]["name"]);
    a.setAttribute("onClick","getCommits(this)");
    a.innerHTML = "GetCommits";
    li.innerHTML = userRepos[i]["name"];
    li.appendChild(a);
    reposUl.appendChild(li);
}
document.getElementById("repositories").innerHTML = reposUl;
}
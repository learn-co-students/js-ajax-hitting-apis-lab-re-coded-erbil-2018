document.getElementById('form').addEventListener('submit', getRepositories)
function getRepositories(e){
    e.preventDefault();
    console.log('Called')
	const name = document.getElementById("username").value
	const req = new XMLHttpRequest();
    req.addEventListener('load', displayRepositories);
    req.open('GET', 'http://api.github.com/users/'+ name + '/repos');
    req.send();
}

function displayRepositories(event, data){
    var repos = JSON.parse(this.responseText);
    let ul = "<ul>"
    for(let i=0;i<repos.length;i++){
       let r=repos[i];
       let name=r.name;
       let clone_url=r.clone_url;
       let html_url=r.html_url;
       // <li>Qaraqosh Css Project - <a>getCommita</a></li>
       let template = `<li><a href="${html_url}">${name}</a> - <a href="${clone_url}">Clone the Repo</a></li>`
       ul += template
    }
    ul += "</ul>"
    document.getElementById('repositories').innerHTML = ul
}

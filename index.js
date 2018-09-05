
function getRepositories(){
	const name = document.getElementById("username").value
	const req = new XMLHttpRequest();
    req.addEventListener('load', displayRepositories);
    req.open('GET', 'http://api.github.com/users/'+ name + '/repos');
    req.send();
}

function displayRepositories(event, data){
	var repos = JSON.parse(this.responseText);
	const repoList = `<ul>${repos.map(r => {
                    const repoName = r.name;
                    const url = r.url;
                    const list = '<li>'   + repoName
	                                + '-<a href = "'+ url+'" data-repo="'
	                                + r.name 
	                                +'"onclick="getCommits(this)">getCommits</a></li>';
                    console.log(list)
                    return list

    document.getElementById('repositories').innerHTML = repoList;
    })
}
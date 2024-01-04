require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const gitHubData={
  	
login	:"iamcody-git",
id :	119785334,
node_id	:"U_kgDOByPHdg",
avatar_url	:"https://avatars.githubusercontent.com/u/119785334?v=4",
gravatar_id	:"",
url	:"https://api.github.com/users/iamcody-git",
html_url	:"https://github.com/iamcody-git",
followers_url	:"https://api.github.com/users/iamcody-git/followers",
following_url	:"https://api.github.com/users/iamcody-git/following{/other_user}",
gists_url	:"https://api.github.com/users/iamcody-git/gists{/gist_id}",
starred_url	:"https://api.github.com/users/iamcody-git/starred{/owner}{/repo}",
subscriptions_url:	"https://api.github.com/users/iamcody-git/subscriptions",
organizations_url	:"https://api.github.com/users/iamcody-git/orgs",
repos_url:	"https://api.github.com/users/iamcody-git/repos",
events_url	:"https://api.github.com/users/iamcody-git/events{/privacy}",
received_events_url	:"https://api.github.com/users/iamcody-git/received_events",
type	:"User",
site_admin: "false",
name	:"PRASHANT ADHIKARI",
company	:null,
blog:	"https://iamcody-git.github.io/Portfolio/",
location	:"Nepal",
email:	null,
hireable:	null,
bio	:"Keen to learn once a year !! okay byee",
twitter_username:	"prashan43022547",
public_repos:	12,
public_gists	:0,
followers:	5,
following	:7,
created_at	:"2022-12-04T09:33:11Z",
updated_at	:"2023-12-29T11:31:54Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('codydotcom')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>learning backend</h1>')
})

app.get('/github',(req, res)=>{
  res.json(gitHubData)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

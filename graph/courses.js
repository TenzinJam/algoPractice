//Backtracking --> graph traversal

// As a reminder, backtracking is a general algorithm that is often applied to solve the constraint satisfaction problems, which incrementally builds candidates to the solutions, and abandons a candidate (i.e. backtracks) as soon as it determines that the candidate would not lead to a valid solution.

//Graph DFS
//Topographical Approach

function canFinish(numCourses, prerequisites) {
  const visited = {}
  const adj = {}

  for (let [u, v] of prerequisites) {
    (!adj.hasOwnProperty(u)) ? adj[u] = [v]: adj[u].push(v)
  }
  console.log(adj)
  dfs(prerequisites[0][0])
  function dfs(vertex){
    console.log(vertex)
    if(vertex===null) return true
    if(adj[vertex].forEach(node => visited.hasOwnProperty(node))) return false
    visited[vertex] = true
    console.log(visited)
    for(let node of adj[vertex]){
      if(!visited[node]) dfs(node)
    }
  }
  return true
}


console.log(canFinish(2, [[1,0], [0,1]]))

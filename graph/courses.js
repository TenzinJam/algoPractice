//Backtracking --> graph traversal

// As a reminder, backtracking is a general algorithm that is often applied to solve the constraint satisfaction problems, which incrementally builds candidates to the solutions, and abandons a candidate (i.e. backtracks) as soon as it determines that the candidate would not lead to a valid solution.

//Graph DFS
//Topographical Approach

function canFinish(numCourses, prerequisites){
  let adjacencyList = {}
  for(let prerequisite of prerequisites){
    if(!adjacencyList[prerequisite[0]]) adjacencyList[prerequisite[0]] = [prerequisite[1]]
    else adjacencyList[prerequisite[0]].push(prerequisite[1])
  }
  for(let course in adjacencyList){
    for(let neighbor in adjacencyList[course]){
      if(adjacency[adjacencyList[neighbor]])
    }
  }
}

canFinish(3, [[1,0], [2,5], [3,1], [1,4], [1,6], [2,3], [3,4], [3,0]])

// class Solution(object):
//     def canFinish(self, numCourses, prerequisites):
//         """
//         :type numCourses: int
//         :type prerequisites: List[List[int]]
//         :rtype: bool
//         """
//         from collections import defaultdict
//         courseDict = defaultdict(list)

//         for relation in prerequisites:
//             nextCourse, prevCourse = relation[0], relation[1]
//             courseDict[prevCourse].append(nextCourse)

//         path = [False] * numCourses
//         for currCourse in range(numCourses):
//             if self.isCyclic(currCourse, courseDict, path):
//                 return False
//         return True


//     def isCyclic(self, currCourse, courseDict, path):
//         """
//         backtracking method to check that no cycle would be formed starting from currCourse
//         """
//         if path[currCourse]:
//             # come across a previously visited node, i.e. detect the cycle
//             return True

//         # before backtracking, mark the node in the path
//         path[currCourse] = True

//         # backtracking
//         ret = False
//         for child in courseDict[currCourse]:
//             ret = self.isCyclic(child, courseDict, path)
//             if ret: break

//         # after backtracking, remove the node from the path
//         path[currCourse] = False
//         return ret

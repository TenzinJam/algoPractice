
// This solution works but sometimes depending on how a question's linkedlist is implemented you might have to make some changes.


function mergeLinkedLists(headOne, headTwo) {
  // Write your code here.
	let kept
  let reduced
  if(headOne.value <= headTwo.value) kept = headOne, reduced = headTwo
  else kept = headTwo, reduced = headOne
  let node1 = kept.next
  let last = kept
  let node2 = reduced

  while(node1 !== null && node2 !== null){
    if(node1.value <= node2.value) {
      last = node1
      node1 = node1.next
    }
    else {
         let nextNode2 = node2.next
         last.next = node2
         node2.next = node1
         last = node2
         node2 = nextNode2
    }
  }
  if(node1 === null){
    last.next = node2
  }
  return kept
}

console.log(mergeLinkedLists(linkedListOne.head, linkedListTwo.head))

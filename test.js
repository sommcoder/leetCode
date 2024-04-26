// used when we categorize, get and iterate over
const laundry = {
  shirts: [], // just hang up
  pants: [], //
  underwear: [], // just fold and store
  socks: [], // requires extra processing time to bundle
  shirts: [],
  shirts: [],
};

// create a graph for the travel time calculation

/*
 
Graph Vertices:
- Closet
- Drawer
- Bed

measure the distance between each node to get you the weight of each edge
 
*/

/*
 
What's the purpose?

- Try to determine the best approach / fastest to performing tasks in the physical world through the GUI of a 2D plane, shapes, nodes and the time taken to travel between nodes and time taken to perform "mutations" of nodes.


! It would be very difficult for most users to express their problem using the application. The would need to be a way to make the language more approachable and less computational..

Is there a way to abstract the difficult logic away? 

! Ultimately, this is a problem that isn't worth solving. Until robots can move within a physical space like humans can, physical labour can't be computed especially when the output of the computation isn't worth determining the input..

! Determining the input is too difficult for what the output would be.

? An exception might be if the application were to be niche to a specific industry, task or set of tasks...?

! Sometimes solutions can be anecdotal through experience and therefore aren't necessary to compute or perform a study. Especially if the "juice isn't worth the squeeze"... What can really be gained from the potential results?


! We can determine what to SORT based on what the node can ACCEPT and therefore not sort by properties that don't matter to the NODE.
! So Node Write = Object


! AI: 
- Until AI can effectively interpret, query, clarify, reason, convince and build trust with your average customer/client, programmer jobs are safe.
- AI will need to be 99.999999999% accurate before Enterprise businesses can implement AI in prod code without a human reviewer.


** would be best to create a matrix of piles of clothes, sorted and perhaps bundled/folded to be distributed to their storage nodes. A Matrix is better than a list of piles because a list at a certain point may requires us to move more and in the physcial world, the more feet movement, the less efficent, ideally everything one needs is on a single spatial plane within arms reach.



- OR perhaps create a form for a user to determine their best use case and compare them based on the time it would take
- determine the number of nodes:
        - the bed/couch is a "hub" which in CS is really a Graph
        - Each pile is a node/vertex and the edge is weighted based on te time it take you to travel between nodes. Most edges will be < 1 second unless you have a LOT of laundry to do.
- 



1) Dump & Sort by type whilst bundling for storage, then from each pile perform an iteration of travelling from bed to storage node.

2) 
 
*/

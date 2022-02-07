## Feedback on Exam

The exam was very interesting and it seemed easy at first but got alot of caveats and room for innovation.
The documentation was great providing a detailed problem description and requirements the screen capture was amazing.. saves ton of time and effort and to the point much.. !!

I don't see any room for improvement except for more time constraint but also the current one seems the most resonable.

## Self evaluation 

In brief I think I failed miserably on this test XD

I failed to comply with the time constrain provided in the begining of the problem description :D, probably a functional prototype without tests was ready by ~4 hours, but it took me 5+ working days to get the repo to the current state.

I was aware that I should not have spent that much time and just and talk about it here, but I really liked the challenge and obssessed with the coverage to get it to an acceptable % with basic documentation and most of the time was spent thinking and evaluating alternate solutions

I also failed to have a commit log history as I've attempted multiple bootstraps and designs

## Room for imrovement

This is a very basic prototype and there are lots of room for improvement please find a brief list below

- should have logged more commits...
- The size of stages should be validated more throughly
- A more presistant, db agnostic data layer to save items to arbitrary data store instead of the default localStorage
- A scaleable moveItem function implementation that handles the read/write of items data and their stage along with their position in the stage for display
- Pagination for list items to hold large number of items
- I don't like passing the moveItem function down the tree, can improve by using shared managed state like redux or smth..
- Thorough tests for useLocalStorage helper
- UI and logic to modify items/stages order and names
- Audit logs to see history of updates and see/restore deleted items








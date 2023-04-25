# etch-a-sketch
The Odin Project Foundation Course: Etch-a-Sketch Project

End goal: Build a browser version of something between a sketchpad and an Etch-A-Sketch.

What I have learned:
- Creating and manipulating html elements using DOM
- Using for loop and flex box to create grids
- Applying colour codes with math methods to create random colours
- Javascript events
- Using callback functions
- Types of mouse events
- count() method

***
Main problem I encountered/still yet to solve:
Counting number of times event occurred in specific element and resetting the count after changing paint mode

Details:
- On classic mode, target's count starts from 0 and target's opacity starts from 0.2 and multiply each time mouse hovers on target.
- That is done by using e.target.count += 1 under classic mode func
- It works well until user switches to other painting mode and switch back to classic mode.
- The target's opacity starts higher each time user makes the switch.
- Tried to debug by using console.log(e.target.count) and it seems like the count adds up on other mode as well

***
Update:
- Fixed counter problem by adding e.target.count -= 1 on other modes except classic. 
- Adding console.log(e.target.count) in each mode to investigate the problem.
- All previous modes' console count codes still being executed while in new mode.

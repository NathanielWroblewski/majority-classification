Majority Classification with Cellular Automata
===

![Screenshot](https://github.com/NathanielWroblewski/majority-classification/blob/master/screenshot.png)

Without random access memory or any central unit to perform counting, this cellular automaton must compute whether its initial configuration contains a majority of "on" or "off" states. If "on" states are the majority, the cellular automaton should signal this fact by turning all the cells "on." The majority classification task is sort of like having to predict which of two candidates will win an election in your city when all you can see are the political signs on your close neighbors' front lawns.

One reasonable first guess for a rule might be: "Each cell should update to the state that is currently a majority in its local neighborhood." However, this "local majority vote" cellular automaton doesn't work.

The strategy evolved here by genetic algorithm is quite clever. Whenever a black region on the left meets a white region on the right, there is always a vertical boundary between them. However, whenever a white region on the left meets a black region on the right, a checkerboard triangle forms, composed of alternative black and white cells. The sides of the growing checkerboard region travel at the same velocity. If one side collides with a vertical boundary before the other, that side had a shorter distance to travel. That is, that region is smaller than the region bordered by the other side. At the collision point, the side disappears, and the black region is allowed to grow. When the final point disappears, the entire lattice displays the correct final configuration.

Jim Crutchfield, who had earlier invented a technique for detecting "information processed structures" in dynamical systems, suggested that boundaries between simple regions are carriers of information and information is processed when these boundaries collide. Using space-time diagrams to trace the boundaries results in something akin to a trace of elementary particles in a bubble chamber.

Summarized from Complexity: A Guided Tour by Melanie Mitchell

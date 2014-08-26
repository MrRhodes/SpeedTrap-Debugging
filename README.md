SpeedTrap Debugging
===================

JS include for very basic speedtrap debugging of sorts...

Just create a bookmarklet with the following code, then click that on the page with speedtrap.:

    javascript:(function() { var f = document.createElement('script'); f.src = 'https://mrrhodes.github.io/SpeedTrap-Debugging/speedtrap-debugging.js?t='+Date.now(); document.body.appendChild(f); })();

It'll then start giving some basic console output in the JS console.

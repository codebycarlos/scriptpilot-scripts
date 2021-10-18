Description
--------------------------------------------------------------------------------------
Sample script. Given a name passed in as an input parameter, returns a guess of the person's age (set key to name, and value to actual name).

Logic Details
--------------------------------------------------------------------------------------
Uses the public API https://api.agify.io/?name= which returns a numerical value based on the name passed in.

Inputs 
Object properties accessed via events object passed in to handler/entrypoint function.
--------------------------------------------------------------------------------------
{name: <value>}

Testing 
Passing a TESTING environment or event variable set to true enables testing mode changes detailed here.
--------------------------------------------------------------------------------------
N/A

Considerations
Source code is bundled and optimised by Webpack. The command as ran from script's folder is shown below.
This can have implications for how code is interpreted in production (i.e. function names are shortened).
To upload, zip up the /dist folder contents; folder name is irrelevant.
--------------------------------------------------------------------------------------
npx webpack

Required Environment Variables
--------------------------------------------------------------------------------------
TESTING=
AGE_GUESSING_API_PROVIDER=
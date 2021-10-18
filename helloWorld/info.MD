Description
--------------------------------------------------------------------------------------
Sample script. Returns the message specified by the environment variable.

Logic Details
--------------------------------------------------------------------------------------
N/A

Inputs 
Object properties accessed via events object passed in to handler/entrypoint function.
--------------------------------------------------------------------------------------
N/A

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
MESSAGE_TEXT=
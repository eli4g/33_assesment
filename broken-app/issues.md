# Broken App Issues

- app.use(express.json()); was not set, so the JSON object could not be extrapolated from the request. I added it to the file.
- "err" was not defined in the "Catch clause" - so I added it there
- The map function was return a promise and not being resolved, so I reformatted it to a for-of loop, to push the awaited result into a new array.  This worked and allowed for the name and bio to be pulled out of the returned array.


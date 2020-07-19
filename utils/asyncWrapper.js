// all errors caught by async wrapper and sent to error handler
// no need for try catch
export const AsyncWrapper = func => (req, res, next) =>
  func(req, res)
      .catch(next); //passing the next middleware for express error handling

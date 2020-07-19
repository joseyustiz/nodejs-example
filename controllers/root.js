//contain the business logic for the API
const getRequestData = req => ({ //take the request and return an object with the following properties
  method: req.method,
  path: req.path,
  headers: req.headers,
  host: req.hostname,
  baseUrl: req.baseUrl,
  ip: req.ip,
  message: `Handling ${req.method} request`
}); //by using ({}) this means we return an object

const getRoot = async (req, res, next) => {//endpoint for get /
  res.json(getRequestData(req));
};

const postRoot = async (req, res, next) => {
  res.json(getRequestData(req));
};

const putRoot = async (req, res, next) => {
  res.json(getRequestData(req));
};

const deleteRoot = async (req, res, next) => {
  res.status(501).json(getRequestData(req));
};

export const rootControllers = { //object that expose the endpoints
  getRoot,
  postRoot,
  putRoot,
  deleteRoot
};

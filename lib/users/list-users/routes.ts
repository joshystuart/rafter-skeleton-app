import { METHODS } from "rafter";

export default () => [
  {
    endpoint: `/`,
    // TODO need to fix rafter to merge all route configs in a project
    // endpoint: `/v1/users`,
    controller: "listUsersController",
    action: "listUsers",
    method: METHODS.get,
  },
];

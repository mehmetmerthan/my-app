import { Auth } from "aws-amplify";

const GetUserId = async()=> {
  const currentUser = await Auth.currentAuthenticatedUser();
  const _userId = currentUser.attributes.sub;
  return _userId;
}
export { GetUserId };

import { auth } from "src/lib/auth";

export default auth((req) => {
  console.log(req);
});

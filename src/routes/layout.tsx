import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
// import { useAuthSession, useAuthSignin, useAuthSignout } from "./plugin@auth";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5
  });
};

export default component$(() => {
  return <h1>PRova</h1>
})
// export default component$(() => {
  // const session = useAuthSession();
  // const authSignin = useAuthSignin();
  // const authSignout = useAuthSignout();
  // const location = useLocation();
  // const user = session.value?.user;
  // return (
  //   <>
  //     <header>
  //       <div>
  //         {user ? (
  //           <div>
  //             <Form action={authSignout}>
  //               {user.image && (
  //                 <img src={user.image} width={30} height={30} />
  //               )}
  //               <span>
  //                 {user.name}({user.email})
  //               </span>
  //               <button>Sign Out</button>
  //             </Form>
  //           </div>
  //         ) : (
  //           <Form action={authSignin}>
  //             <input type="hidden" name="providerId" value="github" />
  //             <input
  //               type="hidden"
  //               name="options.callbackUrl"
  //               value={location.url.toString()}
  //             />
  //             <button>Sign In</button>
  //           </Form>
  //         )}
  //       </div>
  //     </header>
  //     <Slot />
  //   </>
  // );
// });

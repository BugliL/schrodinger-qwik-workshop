import { component$, useComputed$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { paths } from "@octokit/openapi-types";
import CSS from "./index.css?inline";


type OrgReposResponse =
  paths["/users/{username}/repos"]["get"]["responses"]["200"]["content"]["application/json"];

export const mockUseRepositories = () => {
  return {
    value: [
      { full_name: "Repository 1" },
      { full_name: "Repository 2" },
      { full_name: "Repository 3" }
    ]
  };
};
export const useRepositories = routeLoader$(async ({ params, env }) => {
  const response = await fetch(
    `https://api.github.com/users/${params.user}/repos`,
    {
      headers: {
        "User-Agent": "Qwik Workshop",
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: "Bearer " + env.get("PRIVATE_GITHUB_ACCESS_TOKEN")
      }
    }
  );
  return (await response.json()) as OrgReposResponse;
});



export default component$(() => {
  useStylesScoped$(CSS);
  const location = useLocation();
  const repos = useRepositories();
  const filter = useSignal('');
  // const computedRepos = useComputed$(() =>{
  //   repos.value.filter(
  //     (value) => value.full_name.includes('Flask') )
  // });

  return <div>
    <div>user:<code>{location.params.user}</code></div>
    <div>count: {repos.value.length}</div>
    <input type='text' bind:value={filter}/>
    <h2>Filtro : {filter.value}</h2>
    <ul class="card-list">
      {repos.value.map((repo) => (<li class="card-item" key={repo.id}>{repo.full_name}</li>))}
    </ul>
  </div>;
});

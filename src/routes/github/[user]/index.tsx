import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
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
  const repos = mockUseRepositories();
  const filter = useSignal('');

  return <div>
    <div>user:<code>{location.params.user}</code></div>
    <div>count: {repos.value.length}</div>
    <h2>Filtro : {filter.value}</h2>
    <ul class="card-list">
      {repos.value.map((repo) => (<li class="card-item" >{repo.full_name}</li>))}
    </ul>
  </div>;
});

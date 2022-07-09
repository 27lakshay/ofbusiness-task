export const fetchIssues = async () => {
  let response = await fetch("https://api.github.com/repos/facebook/react/issues");
  response = await response.json();
  return response;
};
export const getIssues = (value) => {
    let url = `https://api.github.com/repos/facebook/react/issues?page=${value}`;

    return fetch(url);
};

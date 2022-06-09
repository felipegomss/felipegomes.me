// 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

const headers = {
  Authorization: `bearer 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`,
};
const body = {
  query: `query {
            user(login: "felipegomss") {
                contributionsCollection {
                    contributionCalendar {
                      totalContributions
                    }
                  }
            }
          }`,
};
const response = await fetch("https://api.github.com/graphql", {
  method: "POST",
  body: JSON.stringify(body),
  headers: headers,
});

const data = await response.json();

import axios from "axios";
import { useEffect, useState } from "react";
import "./portifolio.scss";

function Portifolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "https://api.github.com/graphql",
        {
          query:
            '{\n  user(login: "felipegomss") {\n    pinnedItems(first: 6, types: REPOSITORY) {\n      nodes {\n        ... on Repository {\n          name\n          description\n          homepageUrl\n          url\n          languages {\n            ...LanguageConnectionFragment\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment LanguageConnectionFragment on LanguageConnection {\n  edges {\n    node {\n      id\n      name\n      color\n    }\n  }\n}\n',
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "bearer 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",
          },
        }
      );
      const result = response.data.data.user.pinnedItems.nodes;
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="portifolio" id="portifolio">
      <h1>Portifolio</h1>
      <div className="pin">
        <a
          href="https://github.com/felipegomss"
          rel="noreferrer"
          target="_blank"
        >
          <h2>GitHub</h2>
        </a>
        <div className="board">
          {data.length > 0 &&
            data.map((repo, index) => {
              return (
                <ul key={index}>
                  <a href={repo.url} target="_blank" rel="noreferrer">
                    <div className="card">
                      <h1>{repo.description}</h1>
                      <div className="lang">
                        {repo.languages.edges.map((lang, index) => {
                          return (
                            <h3 key={index}>
                              <div
                                style={{ backgroundColor: lang.node.color }}
                              ></div>
                              {(lang.node.name == "JavaScript" && (
                                <span>JS</span>
                              )) ||
                                (lang.node.name == "TypeScript" && (
                                  <span>TS</span>
                                )) || <span>{lang.node.name}</span>}
                            </h3>
                          );
                        })}
                      </div>
                    </div>
                  </a>
                  <div className="description">
                    <li>{repo.description}</li>
                    {(repo.homepageUrl === "" && (
                      <li>
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          className="just--repo"
                        >
                          [JustRepo]
                        </a>
                      </li>
                    )) || (
                      <li>
                        <a
                          href={repo.homepageUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          [HomePage]
                        </a>
                      </li>
                    )}
                  </div>
                </ul>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Portifolio;

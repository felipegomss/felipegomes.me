import axios from "axios";
import { useEffect, useState } from "react";
import "./portifolio.scss";

function Portifolio() {
  const [data, setData] = useState([]);
  const companies = [
    {
      name: "Parallel Consulting & Training",
      imageUrl: "http://parallel.com.br/img/logo.png",
      pageUrl: "http://parallel.com.br/#/",
    },
    {
      name: "GlupDesign",
      imageUrl:
        "http://glupdesign.com.br/img/Glup-Azul-Azul-Verde-Sem%20Fundo.png",
      pageUrl: "http://glupdesign.com.br/",
    },
    {
      name: "EISA - Ericsson Inovacao S.A",
      imageUrl:
        "data:image/png;base64,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",
      pageUrl: "https://www.linkedin.com/company/eisa-tecnologia/mycompany/",
    },
    {
      name: "Rita Crystal",
      imageUrl:
        "https://ritacrystal.com/wp-content/uploads/2021/12/Logotipo_Horizontal_Roxo@5x-175x67.png",
      pageUrl: "https://ritacrystal.com/",
    },
    {
      name: "Lunar Macrame",
      imageUrl:
        "https://lunarmacrame.com.br/wp-content/uploads/elementor/thumbs/LUNAR-MACRAME-_1_-1-72kkbqjqkyepzlbiczh3t6sn15q9g2hdxqird49evea.png",
      pageUrl: "https://lunarmacrame.com.br/",
    },
    {
      name: "CoffeeX",
      imageUrl:
        "https://i1.wp.com/coffeexbr.com.br/loja/wp-content/uploads/2021/03/coffeeX_logo_300px.png?fit=300%2C129&ssl=1",
      pageUrl: "https://coffeexbr.com.br/loja/",
    },
  ];

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
            Authorization: `bearer ${process.env.REACT_APP_GIT_API_TOKEN}`,
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
      <div className="companies--box">
        <h2>Some awsome companies I've collaborated</h2>
          <div className="companies--list">
            {companies.map((company, index) => {
              return (
                <a
                  href={company.pageUrl}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="company--link"
                >
                  <img src={company.imageUrl} alt={company.name} />
                </a>
              );
            })}
        </div>
      </div>
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
                    <p>
                      <li>{repo.description}</li>
                    </p>
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

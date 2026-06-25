import { useState, useEffect } from "preact/hooks";

const PRODUCTS_QUERY = `
  query {
    products(first: 20) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("shopify:admin/api/graphql.json", {
      method: "POST",
      body: JSON.stringify({ query: PRODUCTS_QUERY }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setProducts(data.products.edges.map(({ node }) => node));
        // setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        // setLoading(false);
      });
  }, []);

  // if (loading) return <s-spinner />;

  if (error) return <s-banner tone="critical">{error}</s-banner>;

  return (
    <s-page heading="Products">
      <s-unordered-list>
        {products.map(({ id, title }) => (
          <s-list-item key={id}>{title}</s-list-item>
        ))}
      </s-unordered-list>
    </s-page>
  );
}

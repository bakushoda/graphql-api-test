import './App.css';
import { useQuery, gql } from '@apollo/client';

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.test.map(
    ({ title, author }: { title: string; author: string }) => (
      <div key={title}>
        <p>
          {author} : {title}
        </p>
      </div>
    )
  );
}

function App() {
  return (
    <>
      <h2>GraphQL CLient</h2>
      <Books />
    </>
  );
}

export default App;

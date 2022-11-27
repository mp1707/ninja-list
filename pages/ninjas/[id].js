// next need paths at buildtime so that it can pre render html pages for every route
// all routes that rely on external data need to be declared at buildtime for next -> in this case
// the detail pages!

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return { params: { id: ninja.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

// die prop context wird automatisch geliefert! hier verbirgt sich die ID, die hinterm "/" in der URL steht
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;

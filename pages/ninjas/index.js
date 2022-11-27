import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

// next speciality to fetch data before the page gets rendered. if we do it in useEffect,
// the data gets fetched on the first mount -> too late to use Server-Side-Rendering properly
// this code doesnt run in the browser! ony on the server
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link
          key={ninja.id}
          className={styles.single}
          href={"ninjas/" + ninja.id}>
          <h3>{ninja.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;

import Layout from "../../../components/layout";
import clientPromise from "../../../lib/mongodb";
import Image from "next/image";

export default function Id({ accessorie }) {
  const accessorieInfo = [];
  let person = accessorie[0].types;

  for (let x in person) {
    accessorieInfo.push(person[x]);
  }

  return (
    <Layout
      pageName={accessorie[0].name}
      Description={accessorie[0].description}
    >
      <main className="container mx-auto p-5">
        <section className="flex gap-10 flex-col justify-center items-center p-5">
          <h1 className="text-3xl">{accessorie[0].name}</h1>
          <Image
            src={"/images/products/accessories/" + accessorie[0].image}
            alt={accessorie[0].name}
            width={200}
            height={200}
          />
        </section>

        <article className="flex gap-10 justify-center p-10">
          <table className="table-auto border-separate border-spacing-2 border border-black">
            <caption className="bg-black text-white p-5">
              {accessorie[0].name}
            </caption>
            <thead>
              <tr>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {accessorieInfo.map((p) => {
                return (
                  <tr key={p.name}>
                    <td>{p.name}</td>
                    <td>{"$" + p.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </main>
    </Layout>
  );
}




export async function getServerSideProps({params}) {
  // Fetch necessary data for the blog post using params.id
  const client = await clientPromise;
  const db = client.db('product');

  let data = await db.collection('accessorie').find({url: params.id}).toArray();
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      accessorie: data,
    },
  };
}

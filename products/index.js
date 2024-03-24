import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import clientPromise from "../../lib/mongodb";

export default function Products({ data }) {
  return (
    <Layout pageName="Products" Description="Products">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-4xl tracking-widest">Products </h1>
          <p className="text-md ">
            Select the product category you are interested in
          </p>

          <article className="grid gap-5 justify-center text-center p-10">
            {data.map((product) => (
              <figure key={product.index} className="border-4 border-black p-5">
                <Link href={"/products/" + product.url}>
                  <Image
                    src={"/images/products/" + product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                  />
                </Link>
                <figcaption>{product.name}</figcaption>
              </figure>
            ))}
          </article>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("product");
    console.log("Inside GetStaticProps" + db);

    const data = await db
      .collection("listproduct")
      .find({})
      .sort({ rank: 1 })
      .toArray();
    console.log("InsideGetStaticProps" + data);

    return {
      props: { data: JSON.parse(JSON.stringify(data)) },
    };
  } catch (e) {
    console.error(e);
  }
}

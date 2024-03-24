import Layout from "../../../components/layout";
import Link from "next/link";
import Image from "next/image";

export default function DYI() {
  return (
    <Layout pageName="DYI Page" Description="DYI Page">
      <main className="p-5 bg-white">
        <section className="flex flex-col justify-center items-center p-5 bg-white">
          <h1 className="text-3xl  mb-10">DYI </h1>

          <section className="flex flex-col justify-center items-center">
            <div>
              <Image
                src={"/images/products/dyi.jpeg"}
                alt="Macbook pic"
                width={200}
                height={200}
              />
            </div>

            <article className="text-center p-10">Coming Soon!</article>
          </section>

          {/* 
          <article className="grid gap-5 justify-center text-center p-10">
            <figure className="border-4 border-black p-5">
              <Link href="/products/repairparts">
                <Image
                  src="/images/products/repairparts.png"
                  alt="repairparts"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Repair Parts </figcaption>
            </figure>

            <figure className="border-4 border-black p-5">
              <Link href="/products/repairtools">
                <Image
                  src="/images/products/repairtools.png"
                  alt="Repair Tools"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Repair Tools</figcaption>
            </figure>

            <figure className="border-4 border-black p-5">
              <Link href="/products/repairkits">
                <Image
                  src="/images/products/repairkits.png"
                  alt="Repair Kits"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Repair Kits</figcaption>
            </figure>
            <figure className="border-4 border-black p-5">
              <Link href="/products/cleaningsupplies">
                <Image
                  src="/images/products/cleaningsupplies.png"
                  alt="Cleaning Supplies"
                  width={200}
                  height={200}
                />
              </Link>
              <figcaption>Cleaning Supplies</figcaption>
            </figure>
          </article>  */}
        </section>
      </main>
    </Layout>
  );
}

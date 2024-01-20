import Footer from "@/components/Footer";
import Link from "next/link";
import {BsArrowLeftCircleFill} from 'react-icons/bs'

export default function Article({ articleName }) {
  return (
    <>
      <Link href="/articles" className="absolute top-0 w-full py-10 px-32">
      <BsArrowLeftCircleFill className="cursor-pointer text-white text-3xl border-2 hover:border-black rounded-full active:invert transition-all duration-500" />
      </Link>
      <main className="w-full mb-96">
        <div className="flex items-center justify-around px-4 py-32 w-full">
          <div className="flex flex-col space-y-4">
            <h1 className="text-5xl text-white font-bold">{articleName}</h1>
            <h1 className="font-semibold text-xl text-white">By author name</h1>
          </div>
          <figure>
            <div className="bg-blue-500 w-80 h-80"></div>
          </figure>
        </div>

        <section className="p-10 w-full">
          <div className="bg-black/70 text-white w-full p-10 rounded-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              fugit vitae sapiente adipisci sit qui, illo fuga hic aliquam
              cumque enim et autem corporis voluptatem accusamus aliquid atque
              officiis voluptate repellat deleniti repudiandae laudantium neque
              ut! Amet, a facilis. Voluptate odit nihil ea unde quisquam? Fugiat
              molestias minus dolorem vitae ab enim voluptas quidem eum! Magnam
              quos sapiente veniam, voluptatum soluta harum a pariatur nobis,
              laboriosam reprehenderit eligendi quasi ad excepturi. Maxime
              ratione recusandae reprehenderit repudiandae libero laudantium
              officia asperiores similique deserunt unde laborum, itaque quo
              facere reiciendis numquam nam, voluptatem sequi architecto quas
              minus exercitationem tempore a perferendis vitae.
            </p>

            <div className="p-8 flex space-x-8 items-start">
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore aspernatur, fugiat accusantium ipsum maxime sequi
                  maiores beatae esse autem quisquam ea sunt magni animi!
                  Praesentium minus reiciendis mollitia sed quidem aperiam illum
                  provident corrupti quam obcaecati nisi consequuntur ullam,
                  cumque magni animi deleniti, libero dolores asperiores commodi
                  possimus et. Illo.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore aspernatur, fugiat accusantium ipsum maxime sequi
                  maiores beatae esse autem quisquam ea sunt magni animi!
                  Praesentium minus reiciendis mollitia sed quidem aperiam illum
                  provident corrupti quam obcaecati nisi consequuntur ullam,
                  cumque magni animi deleniti, libero dolores asperiores commodi
                  possimus et. Illo.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore aspernatur, fugiat accusantium ipsum maxime sequi
                  maiores beatae esse autem quisquam ea sunt magni animi!
                  Praesentium minus reiciendis mollitia sed quidem aperiam illum
                  provident corrupti quam obcaecati nisi consequuntur ullam,
                  cumque magni animi deleniti, libero dolores asperiores commodi
                  possimus et. Illo.
                </p>
              </div>
              <figure className="p-4">
                <div className="w-80 h-80 bg-blue-600"></div>
              </figure>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              atque perferendis minus officiis laudantium eius labore beatae
              explicabo quo cumque repellat inventore, suscipit facilis tenetur
              soluta. Adipisci autem iusto cupiditate officiis, doloribus quas
              non vitae sed repellat distinctio ratione ipsum sint voluptatibus
              quibusdam, nostrum repudiandae sequi explicabo cumque repellendus
              possimus consectetur nemo nam debitis? Doloribus officiis
              repellendus inventore cupiditate, totam voluptatum quos! Excepturi
              natus mollitia dolorem totam nulla nostrum rerum, culpa incidunt
              ab quidem autem velit, placeat assumenda aliquid cumque quod esse
              ad neque labore repellendus? Esse, possimus? Doloribus et
              voluptatum natus explicabo omnis corporis, quia aliquid magnam!
              Eaque minima repudiandae est explicabo commodi corrupti deleniti
              accusantium perspiciatis! Corrupti sequi inventore quaerat soluta,
              deserunt tempore similique, ea quo voluptates perferendis non
              libero et fugit ipsa, magnam hic impedit quis unde dignissimos
              doloremque aut! Quos nisi atque quia nulla odio quasi,
              perspiciatis asperiores necessitatibus nihil ratione sit quaerat
              recusandae non veritatis impedit, officiis explicabo sunt natus,
              sint culpa mollitia. <br /> <br />
              Minima eum autem nemo debitis repellat ut vel sit iste eaque ipsa
              reiciendis perspiciatis quasi minus commodi vitae, reprehenderit
              consectetur necessitatibus, cumque dicta corrupti impedit qui!
              Non, beatae porro? Dignissimos autem nobis, sequi aliquid rem
              laudantium tenetur aliquam amet odit dolore itaque, eius
              architecto? Libero cupiditate expedita similique reprehenderit,
              tempora quibusdam laudantium doloremque amet eligendi dicta
              necessitatibus modi sit vitae, natus tenetur, facere rem?
              Perspiciatis possimus reiciendis, tempore nihil asperiores officia
              facere in ad a, praesentium culpa corrupti quia mollitia
              necessitatibus officiis dicta odit animi harum! Quasi odio
              adipisci laboriosam itaque hic. <br />
              Sunt aliquid nesciunt sint suscipit! Quibusdam rerum nam
              recusandae ea praesentium pariatur tempore iure modi cumque
              necessitatibus optio harum, possimus temporibus similique
              asperiores, error sapiente aliquid laborum et voluptatum illo!
              Eius, iusto ipsum repudiandae odio assumenda, dolor voluptate
              eaque, incidunt perspiciatis fugit sunt cum minus nesciunt!
              Placeat non adipisci vitae?
            </p>
            <div className="p-8 flex flex-row-reverse space-x-8 items-start">
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore aspernatur, fugiat accusantium ipsum maxime sequi
                  maiores beatae esse autem quisquam ea sunt magni animi!
                  Praesentium minus reiciendis mollitia sed quidem aperiam illum
                  provident corrupti quam obcaecati nisi consequuntur ullam,
                  cumque magni animi deleniti, libero dolores asperiores commodi
                  possimus et. Illo.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore aspernatur, fugiat accusantium ipsum maxime sequi
                  maiores beatae esse autem quisquam ea sunt magni animi!
                  Praesentium minus reiciendis mollitia sed quidem aperiam illum
                  provident corrupti quam obcaecati nisi consequuntur ullam,
                  cumque magni animi deleniti, libero dolores asperiores commodi
                  possimus et. Illo.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore aspernatur, fugiat accusantium ipsum maxime sequi
                  maiores beatae esse autem quisquam ea sunt magni animi!
                  Praesentium minus reiciendis mollitia sed quidem aperiam illum
                  provident corrupti quam obcaecati nisi consequuntur ullam,
                  cumque magni animi deleniti, libero dolores asperiores commodi
                  possimus et. Illo.
                </p>
              </div>
              <figure className="p-4">
                <div className="w-80 h-80 bg-blue-600"></div>
              </figure>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  // Fetch the list of articles from your data source
  const articles = [
    "article1",
    "article2",
    "article3",
    "article4",
    "article5",
    "article6",
    "article7",
    "article8",
    "article9",
  ];

  // Generate paths for all articles
  const paths = articles.map((article) => ({
    params: { articleName: article },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { articleName } = params;

  // Fetch the article content based on the articleName
  // You can fetch data from an API or a database here

  return {
    props: {
      articleName,
      // Other article content as needed
    },
  };
}

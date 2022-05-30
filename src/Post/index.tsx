import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
}

const Post: React.FC<Props> = ({title, description, image}) => {
  return (
    <aside className="bg-slate-800 max-w-7xl mx-auto relative text-gray-300 lg:flex">
      <div className="p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
        <div className="max-w-xl mx-auto lg:ml-0">
          <p className="mt-2 text-2xl font-bold text-white mb-5 sm:text-3xl">{title}</p>
          <p className="text-left lg:mt-4">{description}</p>
          <div className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 mt-10">
            <Link href="/post">
              <a className="px-8 py-4 rounded-lg font-semibold bg-rose-400 shadow-lg shadow-rose-400/30">
                Seguir leyendo
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
        <img alt={title} className="absolute object-cover w-full h-full" src={image} />
      </div>
    </aside>
  );
};

export default Post;

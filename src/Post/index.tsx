import Link from "next/link"

interface Props {
  title: string;
  description: string;
  image: string;
}

const Post: React.FC<Props> = ({ title, description, image })=> {
  return(
    <aside className="max-w-7xl mx-auto relative overflow-hidden text-gray-300 lg:flex">
      <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
        <div className="max-w-xl mx-auto lg:ml-0">
          {/* <p className="text-sm font-medium">Lorem ipsum dolor sit amet.</p> */}
          <p className="mt-2 text-2xl font-bold text-white mb-5 sm:text-3xl">
            {title}
          </p>
          <p className="text-left text-ellipsis overflow-hidden h-24 lg:mt-4 lg:block">
            {description}
          </p>
          <Link href="/post">
            <a
              className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
              Seguir leyendo
            </a>
          </Link>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
    </aside>
  )
}
export default Post
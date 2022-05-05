import { createClient } from "@supabase/supabase-js";
import { GetStaticProps } from "next";

interface Props {
  post: IPost[];
}

interface IPost {
  id: number;
  title: string;
  description: string;
  image: string;
}
const Post: React.FC<Props> = ({ post })=> {
  const singlePost: IPost = post[0]
  return(
    <article className="relative overflow-hidden text-gray-300 bg-gray-900 flex flex-col min-h-screen">
      <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
        <img
          src={singlePost.image}
          alt={singlePost.title}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
        <div className="max-w-xl mx-auto lg:ml-0">
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl mb-10">
            {singlePost.title}
          </p>
          <p className="text-left lg:mt-4 lg:block">
            {singlePost.description}
          </p>
        </div>
      </div>
    </article>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  )

  const { data } = await supabaseAdmin
  .from("Post")
  .select("*")
  return {
    props: {
      post: data,
    },
  };
};
export default Post
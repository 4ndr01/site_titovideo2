import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className="relative z-10 py-36 md:py-40 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Découvrez nos derniers articles"
          paragraph="Nous vous offrons des conseils pour mieux soigner votre image."
          center
        />

        <div className="flex flex-wrap -m-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full md:w-1/2 lg:w-1/3 p-4 flex">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; // Assure-toi que c'est 'Blog' qui est exporté, pas 'SingleBlog'


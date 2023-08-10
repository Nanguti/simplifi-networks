import BlogPost from "@/components/BlogPost";
import axiosClient from "@/utils/axios";
import Link from "next/link";

const Blog = async () => {
    const file_url = process.env.STORAGE_URL;
    const res = await axiosClient.get(`/posts`);
    const posts = res.data.posts.data;
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Blog</h2>
                        <ul>
                            <li>
                                <Link href="index.html">Home</Link>
                            </li>
                            <li className="active">Blog</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="uren-blog_area grid-view_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row blog-item_wrap">
                                {posts.map((post) => (
                                    <div className="col-lg-4" key={post.id}>
                                        <BlogPost
                                            post={post}
                                            page="blog-page"
                                            file_url={file_url}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="uren-paginatoin-area">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <ul className="uren-pagination-box carlet-color">
                                                    <li className="active">
                                                        <a href="#">
                                                            1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            3
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            4
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            5
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="Next"
                                                            href="#"
                                                        >
                                                            Next
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;

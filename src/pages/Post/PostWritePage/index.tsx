// src/components/LoginPage.tsx
import PostWriteForm from "@/pages/Post/PostWritePage/PostWriteForm.tsx";
import ArrowLeftSolid from "@assets/arrowLeftSolid.svg";

const PostWritePage = () => {
  return (
    <div className="h-screen w-screen text-xl flex flex-col overflow-hidden">
      <div className="justify-center font-semibold items-center text-center flex shrink-0 w-full sticky top-0 h-20 z-20">
      <img src={ArrowLeftSolid} className="absolute left-0 p-5" />
        게시글 작성
      </div>
      <PostWriteForm />
    </div>
  );
};

export default PostWritePage;

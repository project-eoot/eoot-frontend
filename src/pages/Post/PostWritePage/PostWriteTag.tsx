import postImageDelete from "@assets/postImageDelete.svg";
import sample1 from "@assets/sample/samplePostImage1.png";

const onChange = (e) => {
  const img = e.target.files[0];
  const formData = new FormData();
  formData.append("file", img);
};

const PostWriteImage = () => {
  return (
    <div className="flex bg-white">
      <div className="relative ml-6 rounded-2xl border border-text-secondary overflow-hidden">
        <div className="absolute right-0">
          <img src={postImageDelete} />
        </div>
        <img src={sample1} />
      </div>
    </div>
  );
};
export default PostWriteImage;
/*
<div id="actionSheetBackdrop" className="fixed inset-0 bg-black bg-opacity-50"></div>

<div id="actionSheet" className="fixed inset-x-0 bottom-0 bg-white rounded-t-lg p-4 z-30">
  <button className="w-full text-left py-2 px-4 text-blue-600">Action 1</button>
  <button className="w-full text-left py-2 px-4 text-blue-600">Action 2</button>
  <button className="w-full text-left py-2 px-4 text-blue-600">Action 3</button>
  <button id="cancelButton" className="w-full text-left py-2 px-4 text-red-600 mt-2">Cancel</button>
</div>*/

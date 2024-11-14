import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PostWriteMap from "@/pages/Post/PostWritePage/PostWriteMap";
import galleryAdd from "@assets/galleryAdd.svg";
import mapAdd from "@assets/mapAdd.svg";
import postImageDelete from "@assets/postImageDelete.svg";

export default function PostWriteForm() {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      postImages: [] as File[],
    },
  });
  const showMap = useRef(false);
  const textAreaRef = useRef(null);
  const allPostImages = useRef<File[]>([]);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [postLocation, setPostLocation] = useState("");
  const onSubmit = (data: any) => {
    let result = { ...data, userId: "userId", postLocation: postLocation };
    console.log("제출할 결과예요", result);
  };

  const handleImageUpload = (event: { target: { files: any; }; }) => {
    const files = [...event.target.files];
    if (files.length > 0) {
      for (let file of files) {
        file.imageUrl = URL.createObjectURL(file);
      }
      allPostImages.current = [...allPostImages.current, ...files];
      setValue("postImages", allPostImages.current);
    }
  };

  const deletePostImage = (index: number) => {
    allPostImages.current.splice(index, 1);
    setValue("postImages", allPostImages.current);
  };

  const onClickImageInput = () => {
    imageInputRef.current?.click();
  };
  const handleLocation = (newValue) => {
    setPostLocation(newValue);
    console.log("상위 컴포넌트로 왔어요");
    console.log(newValue);
  };

  const editLocation = () => {
    console.log("editLocation");
    console.log("call choosePage");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full overflow-auto">
      <div className="flex flex-1">
        <div className="p-5 flex flex-col flex-1">
          <input
            className="text-xl font-semibold"
            type="text"
            placeholder="제목을 입력해주세요"
            {...control.register("postTitle", {
              required: false,
              maxLength: 80,
            })}
          />
          <Controller
            name="postContent"
            control={control}
            defaultValue=""
            rules={{ required: false, maxLength: 1000 }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <textarea
                className="py-4 active:outline-none focus:outline-none rounded resize-none text-base"
                placeholder="본문을 작성해주세요..."
                value={value}
                onChange={(e) => {
                  onChange(e); // react-hook-form에 값 업데이트
                  // 높이 자동 조정 로직
                  if (textAreaRef.current) {
                    textAreaRef.current.style.height = "auto";
                    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
                  }
                }}
                rows="2"
                ref={(el) => {
                  ref(el);
                  textAreaRef.current = el; // 로컬 ref에 저장
                }}
                style={{ minHeight: "4rem" }}
              />
            )}
          />
          <select {...control.register("postTag", { required: false })}>
            <option value="일상">일상</option>
          </select>

          <div className="flex bg-white w-full flex-wrap">
            {allPostImages.current.map((postImage, index) => (
              <div
                key={index}
                className="relative m-3 rounded-2xl border border-text-secondary overflow-hidden w-20 h-20">
                <div
                  className="absolute right-0"
                  onClick={() => deletePostImage(index)}>
                  <img src={postImageDelete} />
                </div>
                <img src={postImage.imageUrl} />
              </div>
            ))}
          </div>
          {showMap ? (
            <PostWriteMap
              postLocation={postLocation}
              editLocation={editLocation}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="sticky bottom-0 text-base items-center flex h-14 justify-between shrink-0 z-20 bg-white mb-10">
        <div className="mx-3 flex">
          <button
            type="button"
            className="upload-button flex mr-4 items-center  font-medium"
            onClick={onClickImageInput}>
            <img
              src={galleryAdd}
              className="p-1"
            />
            사진
          </button>
          <input
            type="file"
            {...control.register("postImages")}
            id="imageInput"
            className="hidden"
            multiple
            ref={(el) => {
              control.register("postImages").ref(el);
              imageInputRef.current = el;
            }}
            onChange={handleImageUpload}
            accept="image/*"
          />
          <button className="flex items-center font-medium">
            <img
              src={mapAdd}
              className="p-1"
            />
            지도
          </button>
        </div>
        <input
          className="border border-accent rounded font-semibold mr-4 px-3 text-center items-center justify-center h-10 text-text-primary"
          type="submit"
          value="게시"
        />
      </div>
    </form>
  );
}

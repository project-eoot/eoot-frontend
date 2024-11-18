import React from 'react';
import comment from '@assets/comment.svg';
import ThumbsUp from '@assets/thumbs.svg';
import { Link } from 'react-router-dom';
interface Tag {
  postId: number;
  tagContent: string;
}

interface Image {
  imageId: number;
  type?: string;
  originName: string;
  changeName: string;
  createdAt: string;
  seqNum: number;
}

interface Location {
  locationId: number;
  sigungu: string;
  dong: string;
  locationLat: number;
  locationLng: number;
}

interface Like {
  likeId: number;
  userId: string;
  postId: number;
}

interface Post {
  postId: number;
  title: string;
  content: string;
  tags: Tag[];
  postImages: Image[];
  postLocations: Location[];
  likes: Like[];
  hit: number;
  userId: string;
  nickname: string;
  userImage: string;
  createdAt: string;
  updatedAt: string;
}

interface PostBoxProps {
  post: Post;
}

const PostBox: React.FC<PostBoxProps> = ({ post }) => {

    const getDaysAgo = (createdDate: string) => {
        const created = new Date(createdDate);
        const now = new Date();
        const differenceInMs = now.getTime() - created.getTime();
        const daysAgo = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
        return daysAgo;
      };

  return (
    <div className="flex post-box p-4 border w-full">
      {/* User Information */}
      <div className="flex  mb-2 col-md-2 ">
        <img
          src={post.userImage || '/default-profile.png'}
          alt={post.nickname}
          className=" rounded-full mr-3"
          style={{ width: '45px', height: '45px' }}
        />
      </div>
      <div className="col-md-10 w-full">
      <div>
        <div className="flex">
          <div className="font-bold" style={{fontSize: '16px'}}>{post.nickname}</div>
            <div className="text-gray-500">@{post.userId}</div>
        </div>
      </div>

      

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map((tag) => (
            <span
              key={tag.postId}
              className=" bg-primary text-white rounded-md px-1 py-1"
              style={{fontSize: '10px'}}
            >
              {tag.tagContent}
            </span>
          ))}
        </div>
      )}

      {/* Post Content */}
      <Link to={`/post/${post.postId}`}>
        <h3 className=" font-bold mb-2" style={{fontSize: '18px'}}>{post.title}</h3>
        <p className="mb-2" style={{fontSize: '14px'}}>
        {post.content.length > 20 ? `${post.content.slice(0, 20)}...더보기` : post.content}
      </p>
      </Link>
      {/* Images */}
      {post.postImages && post.postImages.length > 0 && (
        <div className="grid grid-cols-3 gap-2 mb-2">
          {post.postImages.map((image) => (
            <img
              key={image.imageId}
              src={image.changeName}
              alt={image.originName}
              className="w-full h-auto rounded-md"
            />
          ))}
        </div>
      )}

      

      {/* Likes and Views */}
      
        <div className="flex justify-between">
            <div className="flex items-center justify-between text-gray-500 text-xs">
                {/* Location */}
            {post.postLocations && post.postLocations.length > 0 && (
                <div className="text-xs text-gray-600 ">
                {post.postLocations[0].dong} · 
                </div>
            )}
            <div className="text-xs text-gray-500">
                &nbsp;{getDaysAgo(post.createdAt)}일 전 · 
                </div>
                <div>&nbsp;조회 {post.hit}</div>
        </div>
        <div className="flex justify-between">
            <div className="text-primary"> 
                <div className="flex items-center">
                    <img src={ThumbsUp} alt="좋아요" className="w-4 h-4 mr-1" /> 
                    <div style={{fontSize: '12px'}}>{post.likes.length}</div>
                </div>
            </div>
            <div className="text-accent">
                <div className="flex items-center ml-2">
                    <img src={comment} alt="좋아요" className="w-4 h-4 mr-1" />  
                    <div style={{fontSize: '12px'}}>20</div>
                </div>
            </div>
        </div>
        </div>
        </div>
    
      
    </div>
  );
};

export default PostBox;

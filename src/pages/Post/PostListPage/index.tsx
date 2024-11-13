import React, { useEffect, useState } from 'react';
import PostBox from '../../../components/Post/PostBox';
import '@components/Post/ColorFill.css';
import '@components/Post/Post.css';
// 예시 데이터 생성
const examplePosts = [
  {
    postId: 1,
    title: "근처 필라테스 추천해주세요",
    content: "작심삼일 가보자고",
    tags: [{ postId: 1, tagContent: "일상" }],
    postImages: [
      {
        imageId: 101,
        type: "jpg",
        originName: "image1.jpg",
        changeName: "image1-optimized.jpg",
        createdAt: "2024-10-30T12:34:56Z",
        seqNum: 1,
      },
    ],
    postLocations: [
      {
        locationId: 1,
        sigungu: "서울",
        dong: "역삼동",
        locationLat: 37.517235,
        locationLng: 127.047325,
      },
    ],
    likes: [{ likeId: 1, userId: "user123", postId: 1 }],
    hit: 10,
    userId: "ssafy",
    nickname: "다이어트 마스터",
    userImage: "img",
    createdAt: "2024-10-30T12:34:56Z",
    updatedAt: "2024-10-30T12:34:56Z",
  },
  {
    postId: 2,
    title: "역삼 근처 라멘집 추천",
    content: "라멘 맛집 추천해주세요",
    tags: [{ postId: 2, tagContent: "일상" }],
    postImages: [],
    postLocations: 
      [
        {
          locationId: 1,
          sigungu: "서울",
          dong: "역삼동",
          locationLat: 37.517235,
          locationLng: 127.047325,
        },
      ],
    
    likes: [],
    hit: 5,
    userId: "fitfan",
    nickname: "운동광",
    userImage: "img2",
    createdAt: "2024-10-31T15:30:00Z",
    updatedAt: "2024-10-31T15:30:00Z",
  },
  {
    postId: 2,
    title: "역삼 근처 라멘집 추천",
    content: "라멘 맛집 추천해주세요",
    tags: [{ postId: 2, tagContent: "일상" }],
    postImages: [],
    postLocations: 
      [
        {
          locationId: 1,
          sigungu: "서울",
          dong: "역삼동",
          locationLat: 37.517235,
          locationLng: 127.047325,
        },
      ],
    
    likes: [],
    hit: 5,
    userId: "fitfan",
    nickname: "운동광",
    userImage: "img2",
    createdAt: "2024-10-31T15:30:00Z",
    updatedAt: "2024-10-31T15:30:00Z",
  },
  {
    postId: 2,
    title: "역삼 근처 라멘집 추천",
    content: "라멘 맛집 추천해주세요",
    tags: [{ postId: 2, tagContent: "일상" }],
    postImages: [],
    postLocations: 
      [
        {
          locationId: 1,
          sigungu: "서울",
          dong: "역삼동",
          locationLat: 37.517235,
          locationLng: 127.047325,
        },
      ],
    
    likes: [],
    hit: 5,
    userId: "fitfan",
    nickname: "운동광",
    userImage: "img2",
    createdAt: "2024-10-31T15:30:00Z",
    updatedAt: "2024-10-31T15:30:00Z",
  },
  {
    postId: 2,
    title: "역삼 근처 라멘집 추천",
    content: "라멘 맛집 추천해주세요",
    tags: [{ postId: 2, tagContent: "일상" }],
    postImages: [],
    postLocations: 
      [
        {
          locationId: 1,
          sigungu: "서울",
          dong: "역삼동",
          locationLat: 37.517235,
          locationLng: 127.047325,
        },
      ],
    
    likes: [],
    hit: 5,
    userId: "fitfan",
    nickname: "운동광",
    userImage: "img2",
    createdAt: "2024-10-31T15:30:00Z",
    updatedAt: "2024-10-31T15:30:00Z",
  },
  // 추가 게시물 데이터들
];

const PostListPage = () => {
  const [selectedTab, setSelectedTab] = useState(false);

  const handleTabClick = (tab: boolean) => {
    setSelectedTab(tab);
  };

  const filteredPosts = selectedTab === false ? examplePosts : examplePosts.sort((a, b) => b.hit - a.hit);

  const moveSelectedTab = (tab: boolean) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    moveSelectedTab(selectedTab);
  }, [selectedTab]);

  return (
    <div className="w-full h-full ">
      <div className="flex flex-col items-center justify-center mt-3 mb-3">
        <div className="w-full flex items-center justify-center">
          <div onClick={() => handleTabClick(false)} className="w-full text-center text-text-primary " style={{fontSize: '18px'}}>최신글</div>
          <div onClick={() => handleTabClick(true)} className="w-full text-center text-text-primary s" style={{fontSize: '18px'}}>인기글</div>
        </div>
      </div>
      <div className="container">
        <div className={`fill ${!selectedTab ? 'fill-left' : 'fill-right'}`} />
      </div>
      <div className="post-list flex flex-col items-center overflow-y-auto " style={{height: 'calc(100vh - 100px)'}}>
        {filteredPosts.map((post) => (
          <PostBox key={post.postId} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostListPage;

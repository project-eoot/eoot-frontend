import React, { useCallback, useEffect, useRef, useState } from 'react';
import PostBox from '../../../components/Post/PostBox';
import '@components/Post/ColorFill.css';
import '@components/Post/Post.css';

interface Post {
  postId: number;
  title: string;
  content: string;
  tags: { postId: number; tagContent: string }[];
  postImages: {
    imageId: number;
    type: string;
    originName: string;
    changeName: string;
    createdAt: string;
    seqNum: number;
  }[];
  postLocations: {
    locationId: number;
    sigungu: string;
    dong: string;
    locationLat: number;
    locationLng: number;
  }[];
  likes: { likeId: number; userId: string; postId: number }[];
  hit: number;
  userId: string;
  nickname: string;
  userImage: string;
  createdAt: string;
  updatedAt: string;
}
// 예시 데이터 생성
const examplePosts: Post[] = [
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

const PostListPage: React.FC = () => {
  const LOAD_COUNT = 4;
  const LOAD_TIMEOUT = 5000; // 5초 타임아웃
  const [selectedTab, setSelectedTab] = useState(false);
  const [posts, setPosts] = useState<Post[]>(examplePosts.slice(0, LOAD_COUNT));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // 게시물 더 있음 여부
  const [page, setPage] = useState(1);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadMorePosts = useCallback(async () => {
    if (!hasMore) return; // 더 이상 게시물이 없으면 실행하지 않음

    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setHasMore(false); // 타임아웃 시 게시물 없음 표시
    }, LOAD_TIMEOUT);

    //나중에 서버에서 데이터 받아오는 로직 추가
    setTimeout(() => {
      const nextPosts = examplePosts.slice(page * LOAD_COUNT, (page + 1) * LOAD_COUNT);
      if (nextPosts.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...nextPosts]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false); // 새로운 게시물이 없으면 무한 스크롤 종료
      }
      setLoading(false);
      clearTimeout(timeoutId); // 성공적으로 로드하면 타임아웃 해제
    }, 1000);
  }, [page, hasMore]);

  const lastPostRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMorePosts();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [loading, loadMorePosts]
  );

  const handleTabClick = (tab: boolean) => {
    setSelectedTab(tab);
    setPosts(examplePosts.slice(0, LOAD_COUNT));
    setPage(1);
    setHasMore(true);
  };

  const filteredPosts = selectedTab ? [...posts].sort((a, b) => b.hit - a.hit) : posts;

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center mb-3">
        <div className="w-full flex items-center justify-center">
          <div onClick={() => handleTabClick(false)} className="w-full text-center text-text-primary" style={{ fontSize: '18px' }}>최신글</div>
          <div onClick={() => handleTabClick(true)} className="w-full text-center text-text-primary" style={{ fontSize: '18px' }}>인기글</div>
        </div>
      </div>
      <div className="container">
        <div className={`fill ${!selectedTab ? 'fill-left' : 'fill-right'}`} />
      </div>
      <div className="post-list flex-grow flex-col items-center overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
        {filteredPosts.map((post, index) => (
          <div ref={index === filteredPosts.length - 1 ? lastPostRef : null} key={index}>
            <PostBox post={post} />
          </div>
        ))}
        {loading && <p>Loading...</p>}
        {!hasMore && <p>더 이상 게시물이 없습니다.</p>}
      </div>
    </div>
  );
};

export default PostListPage;
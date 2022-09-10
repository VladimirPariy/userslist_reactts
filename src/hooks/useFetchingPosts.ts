import {IPost} from "../types/IPost";import {useEffect, useState} from "react";import {useFetch} from "./useFetch";export const useFetchingPosts = () => {  const [posts, setPosts] = useState<IPost[]>([])  const [postsError, setPostsError] = useState(null)  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false)  const {value, error, isLoading, fetchingValue} = useFetch()  useEffect(() => {    setPosts(value)    setPostsError(error)    setIsPostsLoading(isLoading)  }, [value, error, isLoading])  return {posts, postsError, isPostsLoading, fetchingValue}}
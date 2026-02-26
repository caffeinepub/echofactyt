import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useGetTopPosts() {
  const { actor, isFetching } = useActor();

  return useQuery<Array<[string, string, bigint]>>({
    queryKey: ['topPosts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTopPosts();
    },
    enabled: !!actor && !isFetching,
    staleTime: 30_000,
  });
}

export function useViewPost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (title: string) => {
      if (!actor) throw new Error('Actor not available');
      return actor.viewPost(title);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['topPosts'] });
    },
  });
}

export function useGetRecentUpdates() {
  const { actor, isFetching } = useActor();

  return useQuery<Array<[string, bigint]>>({
    queryKey: ['recentUpdates'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getRecentUpdates();
    },
    enabled: !!actor && !isFetching,
    staleTime: 30_000,
  });
}

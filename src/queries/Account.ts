import { useQuery } from '@tanstack/react-query';
import AccountApi from '@/api/Account';

export const useAccountPersonalQuery = () =>
  useQuery({
    queryKey: ['accountPersonal'],
    queryFn: () => AccountApi.personal(),
  });

export const useAccountSocialQuery = () =>
  useQuery({
    queryKey: ['accountSocial'],
    queryFn: () => AccountApi.social(),
  });

export const useAccountBookmarkQuery = ({ limit, page }: API.PostListParams) =>
  useQuery({
    queryKey: ['accountBookmark', { limit, page }],
    queryFn: () => AccountApi.bookmark({ limit, page }),
    placeholderData: (previousData) => previousData,
  });

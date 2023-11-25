import Resource from './Resource';
import { LINKS } from '@/configs/constants';

const TagApi = {
  ...Resource<API.TagListResultItem, API.TagListResult>(LINKS.TAG),
};

export default TagApi;

import Resource from './Resource';
import { LINKS } from '@/configs/constants';

const TopicApi = {
  ...Resource<API.TopicListResultItem, API.TopicListResult>(LINKS.TOPIC),
};

export default TopicApi;

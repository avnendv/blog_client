import * as yup from 'yup';
import { POST_TYPE } from '@/configs/constants';

export const schema = yup
  .object()
  .shape({
    title: yup.string().required('Tiêu đề là bắt buộc'),
    slug: yup.string().required('Slug là bắt buộc'),
    thumbnail: yup.string().required('Thumbnail là bắt buộc'),
    topic: yup.string().required('Chủ đề là bắt buộc'),
    tag: yup.array().of(yup.string()).required('Tag là bắt buộc'),
    postType: yup.string().required('Loại bài viết là bắt buộc'),
    series: yup.string().when('postType', {
      is: POST_TYPE.POST_SERIES,
      then: (schema) => schema.required('Series là bắt buộc'),
    }),
    description: yup.string().required('Mô tả là bắt buộc'),
  })
  .required();

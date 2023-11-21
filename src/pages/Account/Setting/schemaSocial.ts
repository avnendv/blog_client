import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    url: yup.string(),
    googleUrl: yup.string(),
    facebookUrl: yup.string(),
    githubUrl: yup.string(),
    socialOther1: yup.string(),
    socialOther2: yup.string(),
    socialOther3: yup.string(),
  })
  .required();
